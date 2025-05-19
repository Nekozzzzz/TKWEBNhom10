function loadProductDetail() {
    const product = JSON.parse(localStorage.getItem('selectedProductDetail'));
    if (!product) {
        alert("Không tìm thấy sản phẩm.");
        window.location.href = 'index.html';
        return;
    }
    const previewImages = product.previewImages || [];
    const defaultImage = previewImages.length > 0 ? previewImages[0] : product.image;
    document.getElementById('main-product-image').src = defaultImage;
    document.getElementById('main-product-image').alt = product.name;
    document.getElementById('product-detail-name').textContent = product.name;
    document.getElementById('product-detail-price').textContent = `₫${product.price.toLocaleString()}`;
    document.getElementById('product-detail-description').textContent = product.description || "Chưa có mô tả.";
    const colorContainer = document.getElementById('color-options');
    colorContainer.innerHTML = '';
    if (product.colors && product.colors.length > 0) {
        product.colors.forEach((color, index) => {
            const span = document.createElement('span');
            span.className = 'color-circle';
            span.style.backgroundColor = color;
            span.title = color;
            span.addEventListener('click', () => {
                document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('selected'));
                span.classList.add('selected');
                updateProductImage(product, color);
                updateSelectedColorLabel(color);
            });
            if (index === 0) {
                span.classList.add('selected');
                updateProductImage(product, color);
                updateSelectedColorLabel(color);
            }
            colorContainer.appendChild(span);
        });
    } else {
        const noColorMessage = document.createElement('p');
        noColorMessage.textContent = "Không có lựa chọn màu. Sản phẩm này có màu mặc định.";
        colorContainer.appendChild(noColorMessage);
    }
    const previewContainer = document.getElementById('color-preview-images');
    previewContainer.innerHTML = '';
    const mainPreviewImg = document.createElement('img');
    mainPreviewImg.src = previewImages.length > 0 ? previewImages[0] : product.image;
    mainPreviewImg.alt = 'Ảnh chính';
    mainPreviewImg.className = 'preview-img selected';
    mainPreviewImg.addEventListener('click', () => {
        document.getElementById('main-product-image').src = mainPreviewImg.src;
        document.querySelectorAll('.preview-img').forEach(p => p.classList.remove('selected'));
        mainPreviewImg.classList.add('selected');
        const selectedColor = product.colors && product.colors[0] ? product.colors[0] : null;
        document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('selected'));
        if (selectedColor) {
            const matched = [...document.querySelectorAll('.color-circle')].find(c => c.title === selectedColor);
            if (matched) matched.classList.add('selected');
            updateSelectedColorLabel(selectedColor);
        } else {
            updateSelectedColorLabel();
        }
    });
    previewContainer.appendChild(mainPreviewImg);
    previewImages.slice(1).forEach((imgUrl, index) => {
        const img = document.createElement('img');
        img.src = imgUrl;
        img.alt = 'Xem trước';
        img.className = 'preview-img';
        img.addEventListener('click', () => {
            document.getElementById('main-product-image').src = imgUrl;
            document.querySelectorAll('.preview-img').forEach(p => p.classList.remove('selected'));
            img.classList.add('selected');
            const colorIndex = index + 1;
            const selectedColor = product.colors && product.colors[colorIndex] ? product.colors[colorIndex] : null;
            document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('selected'));
            if (selectedColor) {
                const matched = [...document.querySelectorAll('.color-circle')].find(c => c.title === selectedColor);
                if (matched) matched.classList.add('selected');
                updateSelectedColorLabel(selectedColor);
            } else {
                updateSelectedColorLabel();
            }
        });
        previewContainer.appendChild(img);
    });
    document.getElementById('add-to-cart-btn').addEventListener('click', () => {
        const size = document.getElementById('size-options').value;
        const quantity = parseInt(document.getElementById('quantity').value);
        const selectedColor = document.querySelector('.color-circle.selected')?.title || 'Mặc định';

        const cartItem = {
            ...product,
            size,
            color: selectedColor,
            quantity
        };
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Đã thêm vào giỏ hàng!');
        updateCartCount();
    });
    displayRandomProducts(products);
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
function updateProductImage(product, selectedColor) {
    const colorIndex = product.colors.indexOf(selectedColor);
    if (colorIndex >= 0 && product.previewImages[colorIndex]) {
        const mainImg = document.getElementById('main-product-image');
        mainImg.src = product.previewImages[colorIndex];
        const previewImgs = document.querySelectorAll('.preview-img');
        previewImgs.forEach(p => p.classList.remove('selected'));
        const matchedPreviewIndex = product.previewImages.findIndex(img => img.includes(product.previewImages[colorIndex].split('/').pop()));
        if (matchedPreviewIndex !== -1 && previewImgs[matchedPreviewIndex]) {
            previewImgs[matchedPreviewIndex].classList.add('selected');
        }
    } else if (product.colors.includes(selectedColor)) {
        document.getElementById('main-product-image').src = product.image;
        document.querySelectorAll('.preview-img').forEach(p => p.classList.remove('selected'));
        const mainPreviewImg = document.querySelector('.preview-img');
        if (mainPreviewImg) mainPreviewImg.classList.add('selected');
    }
}
function getRandomProducts(products, num = 3) {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}
function displayRandomProducts(products) {
    const container = document.getElementById('random-products-container');
    if (!container || !products) return;

    container.innerHTML = '';
    const randoms = getRandomProducts(products);

    randoms.forEach(product => {
        const card = document.createElement('div');
        card.className = 'random-product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>₫${product.price.toLocaleString()}</p>
        `;
        card.addEventListener('click', () => {
            localStorage.setItem('selectedProductDetail', JSON.stringify(product));
            window.location.href = 'product-detail.html';
        });
        container.appendChild(card);
    });
}
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalCount;
    }
}
function updateSelectedColorLabel(color = null) {
    const label = document.getElementById('selected-color-label');
    const circle = document.getElementById('selected-color-circle');
    if (label && circle) {
        if (color) {
            label.textContent = color;
            circle.style.backgroundColor = color;
            label.style.display = 'inline';
            circle.style.display = 'inline-block';
        } else {
            label.textContent = '';
            circle.style.backgroundColor = 'transparent';
            label.style.display = 'none';
            circle.style.display = 'none';
        }
    }
}
window.onload = () => {
    loadProductDetail();
    updateCartCount();
};
