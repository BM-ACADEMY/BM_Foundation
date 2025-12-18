from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.views.static import serve
from .views import home

urlpatterns = [
    path("", home, name="home"),
    path("admin-django/", admin.site.urls),
    path("api/accounts/", include("bm_foundation_backend.accounts.urls")),
    path("api/license/", include("bm_foundation_backend.license.urls")),
]

# 🔥 FORCE media serving (Windows-safe, Django-version-safe)
urlpatterns += [
    re_path(
        r"^media/(?P<path>.*)$",
        serve,
        {
            "document_root": settings.MEDIA_ROOT,
        },
    ),
]
