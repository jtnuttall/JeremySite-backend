"""JeremySite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from django.contrib import admin
from django.urls import path
from django.contrib.staticfiles.views import serve
from django.views.generic import RedirectView
from API import views

admin.autodiscover()

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/experiences/', views.ExperienceList.as_view()),
    path('api/experiences/<int:pk>/', views.ExperienceDetails.as_view()),

    path('api/projects/', views.ProjectList.as_view()),
    path('api/projects/<int:pk>/', views.ProjectDetails.as_view()),

    path('api/skills/', views.SkillList.as_view()),
    path('api/skills/<int:pk>/', views.SkillDetails.as_view()),

    path('api/publications/', views.PublicationList.as_view()),
    path('api/publications/<int:pk>/', views.PublicationDetails.as_view()),

    url(r'^$', serve, kwargs={'path': 'index.html'}),
    url(r'^(?!/?static/)(?!/?media/)(?P<path>.*\..*)$',
        RedirectView.as_view(url='/static/%(path)s', permanent=False)),
]
