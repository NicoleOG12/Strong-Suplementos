document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o comportamento padrão de enviar o formulário
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Aqui você pode adicionar a lógica para autenticação, por exemplo, verificar com um servidor.
        // Exemplo de mensagem de sucesso:
        alert('Login bem-sucedido!');
        window.location.href = 'index.html'; // Redireciona para a página inicial após o login
    });
});
