from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^.*$', views.FrontendAppView.as_view()),
    path('admin/', admin.site.urls),
    path('api/v1/', include("rentalworkorder_app.urls"))

]
