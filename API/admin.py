from django.contrib import admin
from .models import *
from django_better_admin_arrayfield.admin.mixins import DynamicArrayMixin
from django import forms

class ExperienceAdmin(admin.ModelAdmin, DynamicArrayMixin):
	list_display = (
		'title',
		'organization',
		'created_at',
		'updated_at',
	)

admin.site.register(Experience, ExperienceAdmin)


class ProjectAdmin(admin.ModelAdmin):
	list_display = (
		'name',
		'synopsis',
		'created_at',
		'updated_at',
	)

admin.site.register(Project, ProjectAdmin)