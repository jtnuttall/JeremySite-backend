from django.contrib import admin
from .models import *
from django_better_admin_arrayfield.admin.mixins import DynamicArrayMixin
from django import forms

class ExperienceAdmin(admin.ModelAdmin, DynamicArrayMixin):
	pass

admin.site.register(Experience, ExperienceAdmin)

admin.site.register(Project)