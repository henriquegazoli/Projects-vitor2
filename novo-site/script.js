const products = [
  { id: 1, name: 'Notebook Pro', desc: 'Intel i7, 16GB RAM, SSD 512GB', price: 4999.90, icon: '💻' },
  { id: 2, name: 'Smartphone X', desc: 'Tela 6.5", 128GB, câmera tripla', price: 2499.00, icon: '📱' },
  { id: 3, name: 'Fone Bluetooth', desc: 'Cancelamento de ruído, 30h bateria', price: 599.90, icon: '🎧' },
  { id: 4, name: 'Smartwatch', desc: 'Monitor cardíaco, GPS, à prova d\'água', price: 899.00, icon: '⌚' },
  { id: 5, name: 'Tablet 10"', desc: 'Wi-Fi, 64GB, ideal para estudo', price: 1799.00, icon: '📲' },
  { id: 6, name: 'Câmera 4K', desc: 'Mirrorless, lente 18-55mm', price: 3299.00, icon: '📷' },
  { id: 7, name: 'Console Game', desc: 'Última geração, 1TB SSD', price: 4199.00, icon: '🎮' },
  { id: 8, name: 'Mouse Gamer', desc: 'RGB, 16000 DPI, 7 botões', price: 249.90, icon: '🖱️' },
];

const cart = [];

const productsEl = document.getElementById('products');
const cartItemsEl = document.getElementById('cartItems');
const cartCountEl = document.getElementById('cartCount');
const cartTotalEl = document.getElementById('cartTotal');
const cartSidebar = document.getElementById('cartSidebar');
const overlay = document.getElementById('overlay');

function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function renderProducts() {
  productsEl.innerHTML = products.map(p => `
    <div class="product-card">
      <div class="product-image">${p.icon}</div>
      <h3 class="product-name">${p.name}</h3>
      <p class="product-desc">${p.desc}</p>
      <p class="product-price">${formatPrice(p.price)}</p>
      <button class="add-btn" onclick="addToCart(${p.id})">Adicionar ao carrinho</button>
    </div>
  `).join('');
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCart();
  openCart();
}

function removeFromCart(id) {
  const idx = cart.findIndex(item => item.id === id);
  if (idx > -1) cart.splice(idx, 1);
  updateCart();
}

function updateCart() {
  cartCountEl.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartTotalEl.textContent = formatPrice(total);

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p style="text-align:center; color:#888;">Seu carrinho está vazio</p>';
    return;
  }

  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <h4>${item.icon} ${item.name}</h4>
        <p>${item.qty}x ${formatPrice(item.price)}</p>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${item.id})">Remover</button>
    </div>
  `).join('');
}

function openCart() {
  cartSidebar.classList.add('open');
  overlay.classList.add('active');
}

function closeCart() {
  cartSidebar.classList.remove('open');
  overlay.classList.remove('active');
}

document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('closeCart').addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);

document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Adicione produtos ao carrinho antes de finalizar.');
    return;
  }
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  alert(`Compra finalizada! Total: ${formatPrice(total)}\n\nObrigado pela preferência!`);
  cart.length = 0;
  updateCart();
  closeCart();
});

renderProducts();
updateCart();
