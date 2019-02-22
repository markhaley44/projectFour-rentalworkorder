from rest_framework import serializers
from .models import WorkOrder, Tenant, BuildingAdmin, MaintenanceStaff


class WorkOrderSerializers(serializers.ModelSerializer):

    class Meta:
        model = WorkOrder
        fields = ('id', 'problemDescription')


class TenantSerializers(serializers.ModelSerializer):

    class Meta:
        model = Tenant
        fields = ('name', 'unit', 'workOrder')


class BuildingAdminSerializers(serializers.ModelSerializer):

    class Meta:
        model = BuildingAdmin
        fields = ('tenantsName')
