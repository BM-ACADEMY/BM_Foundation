from django.apps import AppConfig

class AccountsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = "bm_foundation_backend.accounts"
    label = 'accounts'   # this keeps app_label as 'accounts'
