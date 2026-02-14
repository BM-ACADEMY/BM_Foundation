# serializers.py
from rest_framework import serializers
from django.conf import settings
from .models import License

class LicenseSerializer(serializers.ModelSerializer):
    photo = serializers.SerializerMethodField()

    class Meta:
        model = License
        fields = "__all__"

    def get_photo(self, obj):
        request = self.context.get('request')
        if obj.photo:
            return request.build_absolute_uri(obj.photo.url)
        return None
