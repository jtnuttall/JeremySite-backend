from django.contrib import admin
from .models import *
from django_better_admin_arrayfield.admin.mixins import DynamicArrayMixin
from django import forms

class ExperienceAdmin(admin.ModelAdmin, DynamicArrayMixin):
	list_display = (
		'title',
		'priority',
		'organization',
		'created_at',
		'updated_at',
	)

admin.site.register(Experience, ExperienceAdmin)


class ProjectAdmin(admin.ModelAdmin):
	list_display = (
		'name',
		'priority',
		'synopsis',
		'created_at',
		'updated_at',
	)

admin.site.register(Project, ProjectAdmin)

class SkillAdmin(admin.ModelAdmin):
	list_display = (
		'name',
		'description',
	)

admin.site.register(Skill, SkillAdmin)

class PublicationAdmin(admin.ModelAdmin, DynamicArrayMixin):
	list_display = (
		'title',
		'authors',
		'journal',
		'publisher',
		'link',
		'publication_date',
		'description',
	)

admin.site.register(Publication, PublicationAdmin)
