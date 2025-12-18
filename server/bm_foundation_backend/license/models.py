from django.db import models


class License(models.Model):
    # ----------------------------
    # CHOICES
    # ----------------------------
    GENDER_CHOICES = (
        ("male", "Male"),
        ("female", "Female"),
        ("other", "Other"),
    )

    BLOOD_GROUP_CHOICES = (
        ("A+", "A+"),
        ("A-", "A-"),
        ("B+", "B+"),
        ("B-", "B-"),
        ("O+", "O+"),
        ("O-", "O-"),
        ("AB+", "AB+"),
        ("AB-", "AB-"),
    )

    ROLE_CHOICES = (
        ("field_volunteer", "Field Volunteer"),
        ("event_helper", "Event Helper"),
        ("office_support", "Office Support"),
        ("other", "Other"),
    )

    # ----------------------------
    # BASIC DETAILS (FRONT SIDE)
    # ----------------------------
    full_name = models.CharField(max_length=150)
    age = models.PositiveIntegerField(null=True, blank=True)
    gender = models.CharField(
        max_length=10,
        choices=GENDER_CHOICES,
        null=True,
        blank=True,
    )
    ward_number = models.CharField(max_length=20)
    phone = models.CharField(max_length=15, unique=True)
    email = models.EmailField(blank=True, null=True)
    address = models.TextField()

    photo = models.ImageField(
        upload_to="volunteers/photos/",
        blank=True,
        null=True,
    )

    role = models.CharField(
        max_length=30,
        choices=ROLE_CHOICES,
        blank=True,
        null=True,
    )

    valid_till = models.DateField(
        blank=True,
        null=True,
        help_text="Membership validity date",
    )

    # ----------------------------
    # BACK SIDE DETAILS
    # ----------------------------
    emergency_contact_name = models.CharField(
        max_length=150,
        blank=True,
        null=True,
    )
    emergency_contact_phone = models.CharField(
        max_length=15,
        blank=True,
        null=True,
    )

    blood_group = models.CharField(
        max_length=5,
        choices=BLOOD_GROUP_CHOICES,
        blank=True,
        null=True,
    )

    areas_of_interest = models.TextField(
        blank=True,
        null=True,
        help_text="Education, Health, Food Distribution, etc.",
    )

    availability = models.CharField(
        max_length=200,
        blank=True,
        null=True,
        help_text="Days / times available",
    )

    previous_experience = models.TextField(
        blank=True,
        null=True,
    )

    heard_from = models.CharField(
        max_length=150,
        blank=True,
        null=True,
        help_text="How did you hear about us",
    )

    signature = models.CharField(
        max_length=150,
        blank=True,
        null=True,
        help_text="Signed name or digital signature",
    )

    # ----------------------------
    # SYSTEM FIELDS
    # ----------------------------
    is_approved = models.BooleanField(default=False)
    license_pdf = models.URLField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    # ----------------------------
    # DISPLAY
    # ----------------------------
    def __str__(self):
        return self.full_name or self.phone
