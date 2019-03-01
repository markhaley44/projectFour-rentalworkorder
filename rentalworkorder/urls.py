from django.contrib import admin
from django.urls import path, include
from . import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include("rentalworkorder_app.urls")),
    url(r'^$', views.FrontendAppView.as_view())

]
