# Generated by Django 2.1.5 on 2019-02-28 21:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rentalworkorder_app', '0004_auto_20190228_2147'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tenant',
            name='workOrder',
        ),
        migrations.AddField(
            model_name='workorder',
            name='tenant',
            field=models.ForeignKey(blank=True, default='', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='workOrder', to='rentalworkorder_app.Tenant'),
        ),
    ]
