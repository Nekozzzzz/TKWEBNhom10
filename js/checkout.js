document.addEventListener('DOMContentLoaded', () => {
    const productInfoDiv = document.getElementById('product-info');
    const checkoutForm = document.getElementById('checkout-form');
    const checkoutType = localStorage.getItem('checkoutType');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let products = [];
    if (!currentUser) {
        productInfoDiv.innerHTML = '<p>Vui lòng đăng nhập để thanh toán.</p>';
        checkoutForm.style.display = 'none';
        return;
    }
    if (checkoutType === 'single') {
        const product = JSON.parse(localStorage.getItem('checkoutProduct'));
        if (product) products = [product];
    } else if (checkoutType === 'all') {
        const cart = JSON.parse(localStorage.getItem('checkoutCart')) || [];
        if (cart.length > 0) products = cart;
    }
    if (products.length === 0) {
        productInfoDiv.innerHTML = '<p>Không có sản phẩm để thanh toán.</p>';
        return;
    }
    let totalPrice = 0;
    productInfoDiv.innerHTML = '';
    products.forEach(product => {
        productInfoDiv.innerHTML += `
            <div class="checkout-product">
                <p><strong>Sản phẩm:</strong> ${product.name}</p>
                <p><strong>Giá:</strong> ₫${product.price.toLocaleString()}</p>
                <p><strong>Size:</strong> ${product.size || 'Không chọn'}</p>
                <p><strong>Màu:</strong> ${product.color || 'Không chọn'}</p>
                <p><strong>Số lượng:</strong> ${product.quantity}</p>
                <p><strong>Tổng:</strong> ₫${(product.price * product.quantity).toLocaleString()}</p>
                <hr>
            </div>
        `;
        totalPrice += product.price * product.quantity;
    });
    productInfoDiv.innerHTML += `<p><strong>Tổng thanh toán:</strong> ₫${totalPrice.toLocaleString()}</p>`;
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullname = document.getElementById('fullname').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const payment = document.querySelector('input[name="payment"]:checked')?.value;
        const note = document.getElementById('note').value.trim();
        if (!fullname || !phone || !address || !payment) {
            alert('Vui lòng điền đầy đủ thông tin giao hàng.');
            return;
        }
        const orderHistoryKey = `orderHistory_${currentUser.username}`;
        const orderHistory = JSON.parse(localStorage.getItem(orderHistoryKey)) || [];
        const now = new Date().toLocaleString();
        products.forEach(product => {
            orderHistory.push({
                product: {
                    name: product.name,
                    price: product.price,
                    image: product.image || 'default.jpg'
                },
                quantity: product.quantity,
                size: product.size || '',
                color: product.color || '',
                fullname,
                phone,
                address,
                payment,
                note,
                time: now
            });
        });
        localStorage.setItem(orderHistoryKey, JSON.stringify(orderHistory));
        if (checkoutType === 'all') {
            localStorage.removeItem('cart');
        } else if (checkoutType === 'single') {
            const checkoutProduct = JSON.parse(localStorage.getItem('checkoutProduct'));
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const updatedCart = cart.filter(item =>
                !(item.name === checkoutProduct.name &&
                  item.size === checkoutProduct.size &&
                  item.color === checkoutProduct.color &&
                  item.quantity === checkoutProduct.quantity)
            );
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
        localStorage.removeItem('checkoutProduct');
        localStorage.removeItem('checkoutCart');
        localStorage.removeItem('checkoutType');

        alert('Thanh toán thành công!\n\n' +
              `Người nhận: ${fullname}\n` +
              `SĐT: ${phone}\n` +
              `Địa chỉ: ${address}\n` +
              `Phương thức: ${payment}\n` +
              (note ? `Lưu ý: ${note}` : ''));
        window.location.href = 'order-history.html';
    });
});
