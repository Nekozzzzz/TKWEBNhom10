let currentProduct = null;
function loadProducts(list = products) {
    const container = document.getElementById('product-list-container');
    if (!container) return;
    container.innerHTML = '';
    list.forEach((product) => {
        const item = document.createElement('div');
        item.className = 'product-card';
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₫${product.price.toLocaleString()}</p>
        `;
        item.addEventListener('click', () => {
            localStorage.setItem('selectedProductDetail', JSON.stringify(product));
            window.location.href = 'product-detail.html';
        });
        container.appendChild(item);
    });
}
const searchInput = document.getElementById('search-input');
const suggestionsList = document.getElementById('search-suggestions');
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    if (query === '') {
        suggestionsList.style.display = 'none';
        return;
    }
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    if (filteredProducts.length > 0) {
        suggestionsList.innerHTML = filteredProducts.map(product => `
            <li class="suggestion-item" onclick="redirectToProductDetail('${product.name}')">
                <img src="${product.image}" alt="${product.name}" class="suggestion-image">
                <span class="suggestion-name">${product.name}</span>
            </li>
        `).join('');
        suggestionsList.style.display = 'block';
    } else {
        suggestionsList.innerHTML = `<li class="no-results">Không tìm thấy sản phẩm.</li>`;
        suggestionsList.style.display = 'block';
    }
});
function redirectToProductDetail(productName) {
    const product = products.find(p => p.name === productName);
    if (product) {
        localStorage.setItem('selectedProductDetail', JSON.stringify(product));
        window.location.href = 'product-detail.html';
    }
}
function getRandomProducts(products, num = 3) {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}
function displayRandomProducts(products) {
    const container = document.getElementById('random-products-container');
    if (!container) return;
    container.innerHTML = '';
    const randomProducts = getRandomProducts(products);
    randomProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'random-product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>₫${product.price.toLocaleString()}</p>
            <button onclick="window.location.href='product-detail.html'">Xem chi tiết</button>
        `;
        container.appendChild(productCard);
    });
}
function checkLoginStatus() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const welcomeUser = document.getElementById('welcome-user');
    if (currentUser) {
        if (loginBtn) loginBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'inline-block';
        if (welcomeUser) {
            welcomeUser.style.display = 'inline-block';
            welcomeUser.textContent = `Xin chào, ${currentUser.username}`;
        }
    } else {
        if (loginBtn) loginBtn.style.display = 'inline-block';
        if (logoutBtn) logoutBtn.style.display = 'none';
        if (welcomeUser) welcomeUser.style.display = 'none';
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
function setupSearchBox() {
    let suggestionBox = document.getElementById('search-suggestions');
    if (!suggestionBox) {
        suggestionBox = document.createElement('div');
        suggestionBox.id = 'search-suggestions';
        suggestionBox.className = 'suggestion-box';
        document.getElementById('search-input')?.parentNode?.appendChild(suggestionBox);
    }
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase().trim();

            if (query === '') {
                suggestionsList.style.display = 'none';
                return;
            }
            const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));

            if (filteredProducts.length > 0) {
                suggestionsList.innerHTML = filteredProducts.map(product => `
                    <li class="suggestion-item" onclick="redirectToProductDetail('${product.name}')">
                        <img src="${product.image}" alt="${product.name}" class="suggestion-image">
                        <span class="suggestion-name">${product.name}</span>
                    </li>
                `).join('');
                suggestionsList.style.display = 'block';
            } else {
                suggestionsList.innerHTML = `<li class="no-results">Không tìm thấy sản phẩm.</li>`;
                suggestionsList.style.display = 'block';
            }
        });
        searchInput.addEventListener('focus', () => {
            suggestionsList.style.display = 'block';
        });
        searchInput.addEventListener('blur', () => {
            setTimeout(() => suggestionsList.style.display = 'none', 150);
        });
    }
}
function setupAuthButtons() {
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            alert('Bạn đã đăng xuất.');
            checkLoginStatus();
            window.location.reload();
        });
    }
}
window.addEventListener('load', () => {
    loadProducts();
    updateCartCount();
    checkLoginStatus();
    setupSearchBox();
    displayRandomProducts(products);
    setupAuthButtons();
});
