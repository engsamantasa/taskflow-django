from django.contrib import admin
from django.utils.html import format_html
from .models import Task


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):

    list_display = (
        'title',
        'colored_status',
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

    def colored_status(self, obj):
        if obj.status == Task.STATUS_PENDING:
            color = 'orange'
            label = 'Pendente'
        elif obj.status == Task.STATUS_IN_PROGRESS:
            color = 'blue'
            label = 'Em Andamento'
        else:
            color = 'green'
            label = 'Completado'

        return format_html(
            '<strong style="color: {};">{}</strong>',
            color,
            label
        )

    colored_status.short_description = 'Status'
