# Generated by Django 3.0.2 on 2020-02-17 08:46

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0010_publication'),
    ]

    operations = [
        migrations.AddField(
            model_name='publication',
            name='publication_date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
