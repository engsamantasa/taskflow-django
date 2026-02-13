from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import CadastroUsuarioForm , UserUpdateForm
from django.contrib.auth.decorators import login_required
from django.contrib import messages


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




@login_required
def profile(request):
    if request.method == "POST":
        form = UserUpdateForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            messages.success(request, "Perfil atualizado com sucesso!")
            return redirect('profile')
    else:
        form = UserUpdateForm(instance=request.user)

    return render(request, 'tasks/profile.html', {'form': form})