import hello.views
from django.urls import path
from django.contrib import admin

admin.autodiscover()

urlpatterns = [
    path("", hello.views.index, name="index"),
    path("admin/", admin.site.urls),
]
