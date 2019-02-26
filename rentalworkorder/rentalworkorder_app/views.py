from django.shortcuts import render
from rest_framework import viewsets
from .models import Tenant, BuildingAdmin, WorkOrder, MaintenanceStaff
from .serializers import TenantSerializer, BuildingAdminSerializer, WorkOrderSerializer, MaintenanceStaffSerializer


class BuildingAdminView(viewsets.ModelViewSet):
    queryset = BuildingAdmin.objects.all()
    serializer_class = BuildingAdminSerializer


class TenantView(viewsets.ModelViewSet):
    queryset = Tenant.objects.all()
    serializer_class = TenantSerializer


class WorkOrderView(viewsets.ModelViewSet):
    queryset = WorkOrder.objects.all()
    serializer_class = WorkOrderSerializer


class MaintenanceStaffView(viewsets.ModelViewSet):
    queryset = MaintenanceStaff.objects.all()
    serializer_class = MaintenanceStaffSerializer
