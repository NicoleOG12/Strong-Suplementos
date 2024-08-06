function searchProducts() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const products = document.querySelectorAll('.barrinha');

    products.forEach(product => {
        const sabor = product.getAttribute('data-sabor').toLowerCase();
        if (sabor.includes(searchTerm)) {
            product.style.display = 'block'; // Exibe o produto
        } else {
            product.style.display = 'none'; // Oculta o produto
        }
    });
}
