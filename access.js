window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const validToken = 'Propaganda'; // Defina seu token secreto aqui

    if (token !== validToken) {
        alert('Acesso negado! Token inválido.');
        document.body.innerHTML = '<h1>Acesso Negado</h1><p>Você não tem permissão para acessar esta página.</p>';
    }
}

let cartCount = 0;
const cartItems = [];

const products = {
    'Chocolate': 'Barrinha.png' // Adicione aqui as imagens associadas aos sabores
    // 'OutroSabor': 'outro_sabor.png'
};

function comprar(sabor) {
    alert(`Você comprou uma barrinha de cereal sabor ${sabor}!`);
}

function adicionarAoCarrinho(sabor) {
    cartCount++;
    cartItems.push(sabor);
    document.getElementById('cart-count').textContent = cartCount;
    alert(`Você adicionou uma barrinha de cereal sabor ${sabor} ao carrinho!`);
}

function showCart() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.location.href = 'carrinho.html';
}
