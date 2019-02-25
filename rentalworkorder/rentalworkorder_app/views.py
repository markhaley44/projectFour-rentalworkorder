from django.shortcuts import render
from rest_framework import viewsets
from .models import Tenant, BuildingAdmin, WorkOrder, MaintenanceStaff
from .serializers import TenantSerializer, BuildingAdminSerializer, WorkOrderSerializer, MaintenanceStaffSerializer


class BuildingAdminView(viewsets.ModelViewSet):
    serializer_class = BuildingAdminSerializer
    queryset = BuildingAdmin.objects.all()


class TenantView(viewsets.ModelViewSet):
    serializer_class = TenantSerializer
    queryset = Tenant.objects.all()


class WorkOrder(viewsets.ModelViewSet):
    serializer_class = WorkOrderSerializer
    queryset = WorkOrder.objects.all()


class MaintenanceStaff(viewsets.ModelViewSet):
    serializer_class = MaintenanceStaffSerializer
    queryset = MaintenanceStaff.objects.all()
