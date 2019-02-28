from rest_framework import serializers
from .models import WorkOrder, Tenant, BuildingAdmin, MaintenanceStaff


class WorkOrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkOrder
        fields = "__all__"


class TenantSerializer(serializers.ModelSerializer):
    workOrder = WorkOrderSerializer(many=True, read_only=True)

    class Meta:
        model = Tenant
        fields = ('name', 'unit', 'workOrder')


class BuildingAdminSerializer(serializers.ModelSerializer):

    class Meta:
        model = BuildingAdmin
        fields = "__all__"


class MaintenanceStaffSerializer(serializers.ModelSerializer):

    class Meta:
        model = MaintenanceStaff
        fields = "__all__"
