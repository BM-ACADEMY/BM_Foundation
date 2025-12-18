from pathlib import Path
from urllib.parse import quote_plus, urlparse, unquote

from bson import ObjectId
from django.conf import settings
from django.core.files.storage import default_storage
from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response

from bm_foundation_backend.mongo import db


# ----------------------------------------------------
# Mongo Collection
# ----------------------------------------------------
license_collection = db["licenses"] if db is not None else None


class LicenseViewSet(viewsets.ViewSet):
    http_method_names = ["get", "post", "delete"]

    # ----------------------------------------------------
    # LIST ALL VOLUNTEERS
    # ----------------------------------------------------
    def list(self, request):
        if license_collection is None:
            return Response({"error": "MongoDB not connected"}, status=503)

        data = list(license_collection.find())
        for item in data:
            item["_id"] = str(item["_id"])

        return Response(data)

    # ----------------------------------------------------
    # RETRIEVE SINGLE VOLUNTEER
    # ----------------------------------------------------
    def retrieve(self, request, pk=None):
        if license_collection is None:
            return Response({"error": "MongoDB not connected"}, status=503)

        try:
            volunteer = license_collection.find_one({"_id": ObjectId(pk)})
        except Exception:
            return Response({"error": "Invalid ID"}, status=400)

        if not volunteer:
            return Response({"error": "Record not found"}, status=404)

        volunteer["_id"] = str(volunteer["_id"])
        return Response(volunteer)

    # ----------------------------------------------------
    # CREATE VOLUNTEER
    # ----------------------------------------------------
    def create(self, request):
        if license_collection is None:
            return Response({"error": "MongoDB not connected"}, status=503)

        data = request.data
        required_fields = ["full_name", "gender", "ward_number", "phone"]

        for field in required_fields:
            if not data.get(field):
                return Response({"error": f"{field} is required"}, status=400)

        phone = data.get("phone")

        if license_collection.find_one({"phone": phone}):
            return Response(
                {"error": "This phone number is already registered"},
                status=400,
            )

        # Age validation
        age = None
        if data.get("age"):
            try:
                age = int(data.get("age"))
            except ValueError:
                return Response({"error": "Age must be a valid number"}, status=400)

        # Photo upload
        photo = request.FILES.get("photo")
        photo_path = None
        if photo:
            photo_path = default_storage.save(
                f"volunteers/photos/{photo.name}",
                photo,
            )

        volunteer_doc = {
            "full_name": data.get("full_name"),
            "age": age,
            "gender": data.get("gender"),
            "ward_number": data.get("ward_number"),
            "phone": phone,
            "email": data.get("email"),
            "address": data.get("address"),
            "photo": (request.build_absolute_uri(f"/media/{photo_path}") if photo_path else None),
            "is_approved": False,
            "license_pdf": None,
        }

        result = license_collection.insert_one(volunteer_doc)
        volunteer_doc["_id"] = str(result.inserted_id)

        return Response(volunteer_doc, status=201)

    # ----------------------------------------------------
    # DELETE VOLUNTEER
    # ----------------------------------------------------
    def destroy(self, request, pk=None):
        if license_collection is None:
            return Response({"error": "MongoDB not connected"}, status=503)

        license_collection.delete_one({"_id": ObjectId(pk)})
        return Response({"message": "Record deleted"}, status=204)

    # ----------------------------------------------------
    # APPROVE + UPLOAD PDF
    # ----------------------------------------------------
    @action(
        detail=True,
        methods=["post"],
        parser_classes=[MultiPartParser, FormParser],
    )
    def upload_pdf(self, request, pk=None):
        if license_collection is None:
            return Response({"error": "MongoDB not connected"}, status=503)

        try:
            volunteer = license_collection.find_one({"_id": ObjectId(pk)})
        except Exception:
            return Response({"error": "Invalid ID"}, status=400)

        if not volunteer:
            return Response({"error": "Record not found"}, status=404)

        pdf_file = request.FILES.get("pdf_file")
        if not pdf_file:
            return Response({"error": "pdf_file is required"}, status=400)

        if pdf_file.content_type != "application/pdf":
            return Response({"error": "Only PDF files allowed"}, status=400)

        raw_name = volunteer.get("full_name") or "volunteer"
        safe_name = "".join(c for c in raw_name if c.isalnum() or c in " _-").strip()

        unique_id = str(ObjectId())
        file_name = f"VOLUNTEER_{safe_name}_{unique_id}.pdf"
        file_path = f"volunteers/generated/{file_name}"

        saved_path = default_storage.save(file_path, pdf_file)
        pdf_url = request.build_absolute_uri(f"/media/{saved_path}")

        license_collection.update_one(
            {"_id": ObjectId(pk)},
            {
                "$set": {
                    "is_approved": True,
                    "license_pdf": pdf_url,
                }
            },
        )

        message = (
            f"🎉 Hello {raw_name}!\n\n"
            f"Your Volunteer Membership has been approved ✅\n\n"
            f"📄 Download your certificate:\n{pdf_url}\n\n"
            f"Thank you for joining the movement."
        )

        whatsapp_link = (
            "https://api.whatsapp.com/send"
            f"?phone=91{volunteer['phone']}"
            f"&text={quote_plus(message)}"
        )

        return Response(
            {
                "message": "PDF uploaded & approved successfully",
                "pdf_url": pdf_url,
                "whatsapp_link": whatsapp_link,
            }
        )

    # ----------------------------------------------------
    # CHECK PHONE NUMBER
    # ----------------------------------------------------
    @action(detail=False, methods=["get"])
    def check_phone(self, request):
        if license_collection is None:
            return Response({"error": "MongoDB not connected"}, status=503)

        phone = request.GET.get("phone")
        if not phone:
            return Response(
                {"available": False, "message": "Phone number required"},
                status=400,
            )

        exists = license_collection.find_one({"phone": phone})
        if exists:
            return Response({"available": False, "message": "Phone already registered"})

        return Response({"available": True, "message": "Phone available"})

    # ----------------------------------------------------
    # PUBLIC DOWNLOAD BY PHONE
    # ----------------------------------------------------
    @action(detail=False, methods=["get"])
    def download(self, request):
        if license_collection is None:
            return Response({"error": "MongoDB not connected"}, status=503)

        phone = request.GET.get("phone")
        if not phone:
            return Response({"error": "Phone number required"}, status=400)

        volunteer = license_collection.find_one({"phone": phone})
        if not volunteer:
            return Response({"error": "Membership not found"}, status=404)

        if not volunteer.get("is_approved"):
            return Response(
                {"error": "Membership not approved yet"},
                status=400,
            )

        pdf_url = volunteer.get("license_pdf")
        if not pdf_url:
            return Response(
                {"error": "Certificate not generated yet"},
                status=400,
            )

        try:
            parsed_url = urlparse(pdf_url)
            relative_path = unquote(parsed_url.path.replace("/media/", "", 1))

            file_path = Path(settings.MEDIA_ROOT) / relative_path
            if not file_path.exists():
                return Response(
                    {"error": "Certificate file missing on server"},
                    status=404,
                )

            with open(file_path, "rb") as f:
                response = HttpResponse(
                    f.read(),
                    content_type="application/pdf",
                )
                response["Content-Disposition"] = "attachment; filename=membership_certificate.pdf"
                return response

        except Exception as e:
            print("DOWNLOAD ERROR:", e)
            return Response(
                {"error": "Internal server error"},
                status=500,
            )
