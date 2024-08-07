window.onload = function() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsList = document.getElementById('cart-items');

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('cart-item');

        const itemImage = document.createElement('img');
        itemImage.src = `Barrinha.png`; 
        itemImage.alt = `Imagem de ${item}`;
        itemImage.classList.add('cart-item-image');

        const itemText = document.createElement('span');
        itemText.textContent = `Barrinha de sabor ${item}`;

        listItem.appendChild(itemImage);
        listItem.appendChild(itemText);
        cartItemsList.appendChild(listItem);
    });

    document.getElementById('cart-count').textContent = cartItems.length;
}
