from django.db import models


class WorkOrder(models.Model):
    date = models.DateTimeField()
    priority = models.BooleanField()
    problemDescription = models.TextField()
    permissionToEnter = models.BooleanField()

    def __str__(self):
        return self.problemDescription


class Tenant(models.Model):
    name = models.CharField(default="Name", max_length=100)
    unit = models.CharField(max_length=50)
    workOrder = models.ForeignKey(
        WorkOrder, on_delete=models.CASCADE, related_name='tenant')

    def __str__(self):
        return self.name


class BuildingAdmin(models.Model):
    propertyName = models.CharField(max_length=100)
    tenantsName = models.ForeignKey(
        Tenant, on_delete=models.CASCADE, related_name='BuildingAdmin')
    unitNumber = models.CharField(max_length=50)

    def __str__(self):
        return self.tenantsName


class MaintenanceStaff(models.Model):
    workOrder = models.ForeignKey(
        Tenant, on_delete=models.CASCADE, related_name='maintenanceStaff')
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.workOrder