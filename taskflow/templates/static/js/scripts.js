document.addEventListener("DOMContentLoaded", function() {
    
    // ============================================================
    // ALERTAS (Auto-dismiss)
    // ============================================================


    const alerts = document.querySelectorAll('.alert');
    if (alerts) {
        setTimeout(() => {
            alerts.forEach(alert => {
                alert.classList.remove('show');
                alert.classList.add('fade');
                setTimeout(() => alert.remove(), 500);
            });
        }, 4000);
    }

    
    // ============================================================
    // TOOLTIPS DO BOOTSTRAP
    // ============================================================
    


    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    
    
    // ============================================================
    // CONFIRMAÇÃO DE EXCLUSÃO (O Código Novo)
    // ============================================================
    
    
    const deleteButtons = document.querySelectorAll('.btn-delete');
    
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', function(event) {
            // Pega a URL que guardamos no atributo data-url do HTML
            const urlParaDeletar = this.dataset.url;
            
            // Pergunta ao usuário
            const confirmacao = confirm('Deseja realmente excluir esta tarefa?');
            
            if(confirmacao) {
                // Se sim, redireciona o navegador para a URL de deletar
                window.location.href = urlParaDeletar;
            } else {
                // Se não, não faz nada (o botão não envia form nem nada)
                event.preventDefault();
            }
        });
    });

    // ============================================================
    // ALTERNÂNCIA LOGIN / CADASTRO
    // ============================================================

    const btnShowRegister = document.getElementById('show-register');
    const btnShowLogin = document.getElementById('show-login');
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');

    if (btnShowRegister && btnShowLogin) {
        
        btnShowRegister.addEventListener('click', function(e) {
            e.preventDefault(); 
            loginSection.classList.add('d-none'); 
            registerSection.classList.remove('d-none'); 
        });

        btnShowLogin.addEventListener('click', function(e) {
            e.preventDefault();
            registerSection.classList.add('d-none'); 
            loginSection.classList.remove('d-none'); 
        });
    }

});