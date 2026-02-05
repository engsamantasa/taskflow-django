from django.db import models
from django.contrib.auth.models import User


class Task(models.Model):

    STATUS_PENDING = 'PENDENTE'
    STATUS_IN_PROGRESS = 'EM_ANDAMENTO'
    STATUS_COMPLETED = 'COMPLETOpython manage.py makemigrations'

    STATUS_CHOICES = [
        (STATUS_PENDING, 'Pendente'),
        (STATUS_IN_PROGRESS, 'Em Andamento'),
        (STATUS_COMPLETED, 'Completo'),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)

    status = models.CharField(
        max_length=50,
        choices=STATUS_CHOICES,
        default=STATUS_PENDING
    )

    due_date = models.DateField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='tasks'
    )

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title
