# Generated by Django 3.0.2 on 2020-02-12 17:50

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0007_auto_20200212_1256'),
    ]

    operations = [
        migrations.AddField(
            model_name='experience',
            name='date_ended',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True),
        ),
        migrations.AddField(
            model_name='experience',
            name='date_started',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
