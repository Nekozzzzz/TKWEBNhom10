function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items-container');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    if (!cartContainer) return;
    cartContainer.innerHTML = '';
    let totalPrice = 0;
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Giỏ hàng của bạn đang trống.</p>';
        if (totalPriceElement) totalPriceElement.textContent = '₫0';
        return;
    }
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div class="cart-item-image-wrapper">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            </div>
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>Giá: ₫${item.price.toLocaleString()}</p>
                <p>Size: ${item.size || 'Không chọn'}</p>
                <p>Màu: ${item.color || 'Không chọn'}</p>
                <p>
                    Số lượng:
                    <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-index="${index}">
                    <button class="checkout-single-btn" data-index="${index}">Thanh toán</button>
                    <button class="remove-btn" data-index="${index}">Xóa</button>
                </p>
                <p>Tổng: ₫${(item.price * item.quantity).toLocaleString()}</p>
            </div>
        `;
        cartContainer.appendChild(itemDiv);
        totalPrice += item.price * item.quantity;
    });
    if (totalPriceElement) totalPriceElement.textContent = `₫${totalPrice.toLocaleString()}`;
    cartContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')) {
            const index = e.target.dataset.index;
            removeProduct(index);
        } else if (e.target.classList.contains('checkout-single-btn')) {
            const index = e.target.dataset.index;
            checkoutSingleProduct(index);
        }
    });
    cartContainer.addEventListener('change', (e) => {
        if (e.target.classList.contains('quantity-input')) {
            const index = e.target.dataset.index;
            const quantity = parseInt(e.target.value);
            if (quantity > 0) {
                updateQuantity(index, quantity);
            }
        }
    });
    if (checkoutBtn) {
        checkoutBtn.onclick = processCheckout;
    }
    if (clearCartBtn) {
        clearCartBtn.onclick = clearCart;
    }
}
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalCount;
    }
}
function updateQuantity(index, quantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index]) {
        cart[index].quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
        updateCartCount();
    }
}
function removeProduct(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index]) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
        updateCartCount();
    }
}
function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
    updateCartCount();
}
function processCheckout() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        alert('Vui lòng đăng nhập để thanh toán.');
        window.location.href = 'login.html';
        return;
    }
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Giỏ hàng của bạn đang trống.');
        return;
    }
    localStorage.removeItem('checkoutProduct');
    localStorage.setItem('checkoutCart', JSON.stringify(cart));
    localStorage.setItem('checkoutType', 'all');
    window.location.href = 'checkout.html';
}
function checkoutSingleProduct(index) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        alert('Vui lòng đăng nhập để thanh toán.');
        window.location.href = 'login.html';
        return;
    }
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index]) {
        const item = cart[index];
        localStorage.removeItem('checkoutCart');
        localStorage.setItem('checkoutProduct', JSON.stringify(item));
        localStorage.setItem('checkoutType', 'single');
        window.location.href = 'checkout.html';
    }
}
window.onload = () => {
    displayCart();
    updateCartCount();
};
