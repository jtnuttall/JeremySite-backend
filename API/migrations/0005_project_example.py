# Generated by Django 3.0.2 on 2020-02-12 12:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0004_auto_20200212_1146'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='example',
            field=models.CharField(default=None, max_length=400),
        ),
    ]
