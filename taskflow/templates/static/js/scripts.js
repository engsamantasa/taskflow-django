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
    // CONFIRMAÇÃO DE EXCLUSÃO
    // ============================================================
    
    
    const deleteButtons = document.querySelectorAll('.btn-delete');
    
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', function(event) {
            const urlParaDeletar = this.dataset.url;
            const confirmacao = confirm('Deseja realmente excluir esta tarefa?');
            if(confirmacao) {
                window.location.href = urlParaDeletar;
            } else {
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