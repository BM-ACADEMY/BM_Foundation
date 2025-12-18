from django.contrib import admin
from .models import License


@admin.register(License)
class LicenseAdmin(admin.ModelAdmin):
    list_display = (
        "full_name",
        "phone",
        "ward_number",
        "gender",
        "age",
        "is_approved",
        "created_at",
    )

    list_filter = (
        "is_approved",
        "gender",
        "ward_number",
    )

    search_fields = (
        "full_name",
        "phone",
        "email",
    )

    readonly_fields = ("created_at",)

    ordering = ("-created_at",)
