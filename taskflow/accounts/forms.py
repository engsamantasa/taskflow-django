from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class CadastroUsuarioForm(UserCreationForm):
    email = forms.EmailField(
        required=True, 
        label="Email",
        widget=forms.EmailInput(attrs={'class': 'form-control bg-light'})
    )
    first_name = forms.CharField(
        required=True, 
        label="Nome Completo",
        widget=forms.TextInput(attrs={'class': 'form-control bg-light'})
    )

    class Meta:
        model = User
        fields = ['username', 'email', 'first_name']