import os

EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD')

print('EMAIL_HOST_USER:', EMAIL_HOST_USER)
print('EMAIL_HOST_PASSWORD:', EMAIL_HOST_PASSWORD)