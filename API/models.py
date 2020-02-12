from django.db import models
from django.utils.translation import gettext_lazy as _
from django_better_admin_arrayfield.models.fields import ArrayField
from django.utils import timezone

class Experience(models.Model):
	title = models.CharField(max_length=100)
	organization = models.CharField(max_length=100)
	synopsis = models.CharField(max_length=250)
	descriptions = ArrayField(models.CharField(max_length=250, blank=False))
	priority = models.IntegerField(default=None, blank=True, null=True)
	date_started = models.DateTimeField(default=timezone.now)
	date_ended = models.dateTimeField(default=timezone.now, blank=True, null=True)

	created_at = models.DateTimeField(editable=False, default=timezone.now)
	updated_at = models.DateTimeField(default=timezone.now)

# Create your models here.
class Project(models.Model):
	name = models.CharField(max_length=50)
	synopsis = models.CharField(max_length=250)
	description = models.TextField(default=None, blank=True, null=True)
	example = models.CharField(max_length=400, default=None, blank=True, null=True)
	git = models.CharField(max_length=400)
	priority = models.IntegerField(default=None, blank=True, null=True)

	created_at = models.DateTimeField(editable=False, default=timezone.now)
	updated_at = models.DateTimeField(default=timezone.now)

	class ProgrammingLanguage(models.TextChoices):
		c = 'C', _('C')
		cpp = 'CPP', _('C++')
		haskell = 'HS', _('Haskell')
		perl = 'PL', _('Perl')
		elm = 'ELM', _('Elm')
		js = 'JS', _('JavaScript')
		ts = 'TS', _('TypeScript')
		java = 'JAV', _('Java')
		csharp = 'C#', _('C#')
		purescript = 'PUR', _('PureScript')
		clisp = 'CL', _('Common Lisp')
		scheme = 'SC', _('Scheme')
		python2 = 'PY2', _('Python 2')
		python3 = 'PY3', _('Python 3')

	language = models.CharField(
		max_length=3,
		choices=ProgrammingLanguage.choices,
		default=None
	)

	class Framework(models.TextChoices):
		none = 'NO', _('None')
		angular = 'NG', _('Angular')
		angularJS = 'NGJ', _('AngularJS')
		elm_arch = 'EA', _('Elm Architecture')
		phoenix = 'PH', _('Phoenix')
		django = 'DJ', _('Django')
		djangorestframework = 'DJR', _('Django Rest Framework')
		ember = 'EM', _('EmberJS')

	framework = models.CharField(
		max_length=3,
		choices=Framework.choices,
		default=None,
		blank=True,
		null=True,
	)


