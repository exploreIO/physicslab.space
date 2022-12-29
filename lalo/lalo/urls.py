from django.contrib import admin
from django.urls import path, include


# URLS

django_urls = [
    path('admin/', admin.site.urls),
]

lalo_urls = [
    #path('', include('core.urls')),
    #path('blog/', include('blog.urls')),
]



urlpatterns = django_urls + lalo_urls

