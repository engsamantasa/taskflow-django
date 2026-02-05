from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from .forms import CadastroUsuarioForm


def home(request):
    if request.user.is_authenticated:
        return redirect('task_list')
    return render(request, 'registration/auth.html')


def register(request):
    if request.method == 'POST':
        # Preenche o formulário com os dados que vieram do HTML
        form = CadastroUsuarioForm(request.POST)
        
        if form.is_valid():
            user = form.save() # Salva no banco de dados
            login(request, user) # Faz o login automático após cadastrar
            return redirect('task_list') # Manda para o dashboard
    else:
        form = CadastroUsuarioForm()
    
    # Se der erro ou for a primeira visita, renderiza a página com o form (e erros se houver)
    return render(request, 'registration/auth.html', {'form': form})