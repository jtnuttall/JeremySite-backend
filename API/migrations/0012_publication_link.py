# Generated by Django 3.0.2 on 2020-02-17 08:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0011_publication_publication_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='publication',
            name='link',
            field=models.CharField(max_length=500, null=True),
        ),
    ]
