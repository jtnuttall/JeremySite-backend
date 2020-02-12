from django.shortcuts import render
from rest_framework import mixins
from rest_framework import generics
from .models import *
from .serializers import *

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

class ProjectList(mixins.ListModelMixin, generics.GenericAPIView):
	queryset = Project.objects.all()
	serializer_class = ProjectSerializer

	def get(self, request, *args, **kwargs):
		return self.list(request, *args, **kwargs)

class ProjectDetails(mixins.RetrieveModelMixin, generics.GenericAPIView):
	queryset = Project.objects.all()
	serializer_class = ProjectSerializer

	def get(self, request, *args, **kwargs):
		return self.retrieve(request, *args, **kwargs)