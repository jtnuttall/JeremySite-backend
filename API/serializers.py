from rest_framework import serializers
from .models import *

class ExperienceSerializer(serializers.ModelSerializer):
	class Meta:
		model = Experience
		fields = [
			'id',
			'title',
			'organization',
			'synopsis',
			'descriptions',
			'priority',
			'date_started',
			'date_ended',
		]

class ProjectSerializer(serializers.ModelSerializer):
	class Meta:
		model = Project
		fields = [
			'id',
			'name',
			'synopsis',
			'description',
			'example',
			'git',
			'priority',
			'language',
			'framework',
		]