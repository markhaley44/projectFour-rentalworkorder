from . import views
from rest_framework import routers
from django.urls import path, include

router = routers.DefaultRouter()
router.register('BuildingAdmin', views.BuildingAdminView, 'buildingAdmin')
router.register('Tenant', views.TenantView, 'tenant')
router.register('WorkOrder', views.WorkOrderView, 'workOrder')
router.register('MaintenanceStaff',
                views.MaintenanceStaffView, 'maintenanceStaff')

urlpatterns = [
    path('', include(router.urls))
]
