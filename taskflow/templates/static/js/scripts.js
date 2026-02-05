
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