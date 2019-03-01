from django.contrib import admin
from .models import BuildingAdmin
from .models import Tenant
from .models import MaintenanceStaff
from .models import WorkOrder

admin.site.register(BuildingAdmin),
admin.site.register(WorkOrder),
admin.site.register(Tenant),
admin.site.register(MaintenanceStaff)
