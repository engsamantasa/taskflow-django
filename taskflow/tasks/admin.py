from django.contrib import admin
from .models import Task


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):

    list_display = (
        'title',
        'status',
        'due_date',
        'user',
        'created_at',
    )

    list_filter = (
        'status',
        'due_date',
        'created_at',
    )

    search_fields = (
        'title',
        'description',
        'user__username',
    )

    ordering = ('-created_at',)

    date_hierarchy = 'created_at'

    readonly_fields = (
        'created_at',
        'updated_at',
    )

    fieldsets = (
        ('Task Information', {
            'fields': (
                'title',
                'description',
                'status',
                'due_date',
            )
        }),
        ('User', {
            'fields': ('user',)
        }),
        ('Timestamps', {
            'fields': (
                'created_at',
                'updated_at',
            )
        }),
    )
