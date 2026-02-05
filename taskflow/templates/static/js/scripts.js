
document.addEventListener("DOMContentLoaded", function() {
    
    
    
    
    // Sumir alertas do Django após 4 segundos
    const alerts = document.querySelectorAll('.alert');
    if (alerts) {
        setTimeout(() => {
            alerts.forEach(alert => {
                // Adiciona classe de fade out do Bootstrap
                alert.classList.remove('show');
                alert.classList.add('fade');
                // Remove do DOM após a animação
                setTimeout(() => alert.remove(), 500);
            });
        }, 4000); // 4 segundos
    }

    
    
    
    
    
    // 2. Confirmação antes de deletar 
    const deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const confirmacao = confirm("Tem certeza que deseja excluir esta tarefa? Esta ação não pode ser desfeita.");
            if (!confirmacao) {
                event.preventDefault(); // Cancela o clique se o usuário disser "Cancelar"
            }
        });
    });






    // 3. Inicializar Tooltips do Bootstrap (caso eu use)
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});



// --- Alternância Login/Cadastro ---
    const btnShowRegister = document.getElementById('show-register');
    const btnShowLogin = document.getElementById('show-login');
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');

    if (btnShowRegister && btnShowLogin) {
        
        // Clicou em "Crie agora"
        btnShowRegister.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o link de pular pro topo da página
            loginSection.classList.add('d-none');     // Esconde login
            registerSection.classList.remove('d-none'); // Mostra cadastro
        });

        // Clicou em "Faça Login"
        btnShowLogin.addEventListener('click', function(e) {
            e.preventDefault();
            registerSection.classList.add('d-none');  // Esconde cadastro
            loginSection.classList.remove('d-none');  // Mostra login
        });
    }