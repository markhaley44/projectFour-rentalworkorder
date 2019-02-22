from django.db import models


class BuildingAdmin(models.Model):
    propertyName = models.CharField(max_length=100)
    tenantsName = models.CharField(max_length=100)
    unitNumber = models.CharField(max_length=50)

    def __str__(self):
        return self.tenantsName


class Tenant(models.Model):
    name = models.CharField(default="Name", max_length=100)
    unit = models.CharField(max_length=50)
    workOrder = models.TextField(max_length=400)

    def __str__(self):
        return self.workOrder


class MaintenanceStaff(models.Model):
    workOrder = models.ForeignKey(
        Tenant, on_delete=models.CASCADE, related_name='maintenanceStaff')
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.workOrder
