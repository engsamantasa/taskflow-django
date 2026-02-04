from django.shortcuts import render
from django.contrib.auth.decorators import login_required

#@login_required
def task_list(request):
    return render(request, 'tasks/task_list.html')
