function displayOrderHistory() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const orderHistoryContainer = document.getElementById('order-history-container');
    const clearAllOrdersBtn = document.getElementById('clear-all-orders-btn');
    if (!currentUser) {
        orderHistoryContainer.innerHTML = '<p>Vui lòng đăng nhập để xem lịch sử đơn hàng.</p>';
        return;
    }
    const orderHistory = JSON.parse(localStorage.getItem(`orderHistory_${currentUser.username}`)) || [];
    orderHistoryContainer.innerHTML = '';
    if (orderHistory.length === 0) {
        orderHistoryContainer.innerHTML = '<p>Bạn chưa có đơn hàng nào.</p>';
    } else {
        orderHistory.forEach((order, index) => {
            const orderCard = document.createElement('div');
            orderCard.className = 'order-card';
            orderCard.innerHTML = `
                <img src="${order.product.image}" alt="${order.product.name}">
                <div>
                    <h4>${order.product.name}</h4>
                    <p>₫${order.product.price.toLocaleString()}</p>
                    <p>Số lượng: ${order.quantity}</p>
                    <p>Thời gian: ${order.time}</p>
                    <div class="order-actions">
                        <button class="btn-red" data-index="${index}">Xóa</button>
                        <button class="btn-blue" data-contact="${index}">Liên hệ</button>
                    </div>
                    <div class="contact-box" id="contact-box-${index}" style="display:none; margin-top:10px;">
                        <textarea id="contact-message-${index}" placeholder="Nhập nội dung liên hệ..." rows="3" style="width:100%;"></textarea>
                        <button class="btn-blue" data-send="${index}" style="margin-top:5px;">Gửi liên hệ</button>
                    </div>
                </div>
            `;
            const deleteBtn = orderCard.querySelector('.btn-red');
            deleteBtn.addEventListener('click', () => {
                removeOrder(currentUser.username, index);
            });
            const contactBtn = orderCard.querySelector('[data-contact]');
            contactBtn.addEventListener('click', () => {
                const box = document.getElementById(`contact-box-${index}`);
                box.style.display = box.style.display === 'none' ? 'block' : 'none';
            });
            const sendBtn = orderCard.querySelector('[data-send]');
            if (sendBtn) {
                sendBtn.addEventListener('click', () => {
                    sendContact(currentUser.username, index);
                });
            }
            orderHistoryContainer.appendChild(orderCard);
        });
    }
    if (clearAllOrdersBtn) {
        clearAllOrdersBtn.addEventListener('click', () => {
            clearAllOrders(currentUser.username);
        });
    }
}
function sendContact(username, orderIndex) {
    const orderHistory = JSON.parse(localStorage.getItem(`orderHistory_${username}`)) || [];
    const order = orderHistory[orderIndex];
    const message = document.getElementById(`contact-message-${orderIndex}`).value.trim();
    if (!message) {
        alert('Vui lòng nhập nội dung liên hệ.');
        return;
    }
    const contactData = JSON.parse(localStorage.getItem(`contactData_${username}`)) || [];
    contactData.push({
        product: order.product,
        message,
        time: new Date().toLocaleString()
    });
    localStorage.setItem(`contactData_${username}`, JSON.stringify(contactData));
    alert('Liên hệ của bạn đã được gửi!');
    document.getElementById(`contact-message-${orderIndex}`).value = '';
}
function removeOrder(username, index) {
    const orderHistory = JSON.parse(localStorage.getItem(`orderHistory_${username}`)) || [];
    orderHistory.splice(index, 1);
    localStorage.setItem(`orderHistory_${username}`, JSON.stringify(orderHistory));
    displayOrderHistory();
}
function clearAllOrders(username) {
    localStorage.removeItem(`orderHistory_${username}`);
    displayOrderHistory();
}
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalCount;
    }
}
window.addEventListener('DOMContentLoaded', () => {
    displayOrderHistory();
    updateCartCount();
});
