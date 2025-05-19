document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const contactListContainer = document.getElementById('contact-list-container');
    const clearAllBtn = document.getElementById('clear-all-contacts-btn');
    const cartCount = document.getElementById('cart-count');
    const contactForm = document.getElementById('contact-form');
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCount) cartCount.textContent = totalCount;
    }
    function loadContacts() {
        if (!contactListContainer) return;
        const contactData = currentUser
            ? JSON.parse(localStorage.getItem(`contactData_${currentUser.username}`)) || []
            : [];
        contactListContainer.innerHTML = '';
        if (!currentUser) {
            contactListContainer.innerHTML = '<p>Vui lòng đăng nhập để xem liên hệ của bạn.</p>';
            if (clearAllBtn) clearAllBtn.style.display = 'none';
            if (contactForm) contactForm.style.display = 'none';
            return;
        }
        if (contactData.length === 0) {
            contactListContainer.innerHTML = '<p>Bạn chưa gửi liên hệ nào.</p>';
            return;
        }
        contactData.forEach((contact, index) => {
            const card = document.createElement('div');
            card.className = 'order-card';
            card.innerHTML = `
                <img src="${contact.product.image}" alt="${contact.product.name}" />
                <div>
                    <h4>${contact.product.name}</h4>
                    <p>₫${contact.product.price.toLocaleString()}</p>
                    <p><strong>Nội dung:</strong> ${contact.message}</p>
                    <p><small>Thời gian gửi: ${contact.time}</small></p>
                    <button class="btn-red delete-contact-btn" data-index="${index}">Xóa liên hệ</button>
                </div>
            `;
            contactListContainer.appendChild(card);
        });
        const deleteButtons = contactListContainer.querySelectorAll('.delete-contact-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', () => {
                const index = parseInt(button.getAttribute('data-index'));
                deleteContact(index);
            });
        });
    }
    function deleteContact(index) {
        if (!currentUser) {
            alert('Bạn cần đăng nhập để thực hiện thao tác này.');
            return;
        }
        let contactData = JSON.parse(localStorage.getItem(`contactData_${currentUser.username}`)) || [];
        contactData.splice(index, 1);
        localStorage.setItem(`contactData_${currentUser.username}`, JSON.stringify(contactData));
        loadContacts();
    }
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', () => {
            if (!currentUser) {
                alert('Bạn cần đăng nhập để thực hiện thao tác này.');
                return;
            }
            if (confirm('Bạn có chắc chắn muốn xóa toàn bộ liên hệ?')) {
                localStorage.removeItem(`contactData_${currentUser.username}`);
                loadContacts();
            }
        });
    }
    updateCartCount();
    loadContacts();
});
