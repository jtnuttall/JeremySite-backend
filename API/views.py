from django.shortcuts import render
from rest_framework import views
from rest_framework import mixins
from rest_framework import generics
from rest_framework.response import Response
from .models import *
from .serializers import *
import sys

class ExperienceList(mixins.ListModelMixin, generics.GenericAPIView):
	queryset = Experience.objects.all()
	serializer_class = ExperienceSerializer

	def get(self, request, *args, **kwargs):
		return self.list(request, *args, **kwargs)

class ExperienceDetails(mixins.RetrieveModelMixin, generics.GenericAPIView):
	queryset = Experience.objects.all()
	serializer_class = ExperienceSerializer

	def get(self, request, *args, **kwargs):
		return self.retrieve(request, *args, **kwargs)

class ProjectList(views.APIView):
	def get(self, request, *args, **kwargs):
		return self.post(request, *args, **kwargs)

	def post(self, request, *args, **kwargs):
		projects = Project.objects.order_by('priority')

		for project in projects:
			project.language = project.get_language_display()
			project.framework = project.get_framework_display()

		serializer = ProjectSerializer(projects, many=True)
		return Response(serializer.data)

class ProjectDetails(views.APIView):
	def get(self, request, *args, **kwargs):
		return self.post(request, *args, **kwargs)

	def post(self, request, *args, **kwargs):
		project = Project.objects.get(pk=kwargs['pk'])

		project.language = project.get_language_display()
		project.framework = project.get_framework_display()

		serializer = ProjectSerializer(project, many=False)
		return Response(serializer.data)