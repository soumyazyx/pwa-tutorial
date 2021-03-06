import hello.views
from django.urls import path
from django.contrib import admin
from django.views.generic import TemplateView

admin.autodiscover()

urlpatterns = [
    path("", hello.views.index, name="index"),
    path("pages/contact.html", hello.views.contactus, name="contactus"),
    path("pages/about.html", hello.views.about, name="about"),
    path("pages/fallback.html", hello.views.fallback, name="fallback"),
    path("admin/", admin.site.urls),
    path(
        'sw.js',
        TemplateView.as_view(template_name='sw.js', content_type='application/javascript'),
        name='sw.js',
    ),
]
