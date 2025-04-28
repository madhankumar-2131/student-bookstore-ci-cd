let cart = [];

// Function to add books to the cart
function addToCart(bookName, bookImage) {
    const book = {
        name: bookName,
        image: bookImage
    };
    cart.push(book);
    displayCart();
}

// Function to display books in the cart
function displayCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';  // Clear current cart display

    cart.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${book.image}" alt="${book.name}" style="width: 50px; height: 75px;">
            <span>${book.name}</span>
            <button onclick="removeFromCart(${index})">Delete</button>
        `;
        cartList.appendChild(li);
    });
}

// Function to remove books from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

// Function to simulate checkout and Google Pay
function proceedToCheckout() {
    alert("Proceeding to checkout... This would trigger Google Pay integration in a real scenario.");
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('order-popup');
    popup.style.display = 'none';
}
