from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import CadastroUsuarioForm


def home(request):
    if request.user.is_authenticated:
        return redirect('task_list')
    return render(request, 'registration/auth.html')


def register(request):
    if request.method == 'POST':
        form = CadastroUsuarioForm(request.POST)
        
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('task_list')
    else:
        form = CadastroUsuarioForm()
    return render(request, 'registration/auth.html', {'form': form})