# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-09-13 04:20
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('monitor', '0003_remove_energyreading_energy'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='energyreading',
            name='time_delta_ms',
        ),
        migrations.AddField(
            model_name='energyreading',
            name='timestamp',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='energyreading',
            name='power',
            field=models.FloatField(default=0),
        ),
    ]