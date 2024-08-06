document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o comportamento padrão de enviar o formulário
        
        const username = document.getElementById('new-username').value;
        const password = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        // Aqui você pode adicionar a lógica para o cadastro, por exemplo, enviar os dados para um servidor.
        // Exemplo de mensagem de sucesso:
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'login.html'; // Redireciona para a página de login após o cadastro
    });
});
