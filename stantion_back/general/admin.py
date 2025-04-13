from django.contrib import admin

from .models import Form

# Register your models here.
admin.site.register(Form)

from django.contrib import admin
from .models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ('title',)
