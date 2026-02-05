from django.urls import path
from django.contrib.auth import views as auth_views # Importamos as views prontas de auth
from . import views

urlpatterns = [
    # Rota Raiz (http://localhost:8000/)
    path('', views.home, name='home'),
    path('login/', auth_views.LoginView.as_view(template_name='registration/auth.html'), name='login'),
    
    # Logout (redireciona para a home após sair)
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    
    # Cadastro
    path('register/', views.register, name='register'),
]