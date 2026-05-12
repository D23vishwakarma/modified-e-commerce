/* ============================================================
   app.js  —  NovaCart shared script
   ============================================================ */

/* ─── Cart (localStorage) ─── */
function getCart() {
  return JSON.parse(localStorage.getItem('novacart')) || [];
}
function saveCart(cart) {
  localStorage.setItem('novacart', JSON.stringify(cart));
}
function updateCartBadge() {
  const count = getCart().reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('#cartCount, #cartCountMobile').forEach(el => {
    if (!el) return;
    el.textContent = count;
    el.classList.add('bump');
    setTimeout(() => el.classList.remove('bump'), 300);
  });
}

/* ─── Add to Cart ─── */
function addToCart(btn, name, price, img = '') {
  let cart = getCart();
  const idx = cart.findIndex(i => i.name === name);
  if (idx > -1) { cart[idx].qty++; }
  else { cart.push({ name, price, img, qty: 1 }); }
  saveCart(cart);
  updateCartBadge();
  showToast(`${name} added to cart!`);

  if (btn) {
    btn.classList.add('added');
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-check"></i>';
    setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('added'); }, 1200);
  }
}

/* ─── Toast ─── */
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  clearTimeout(t._tid);
  t._tid = setTimeout(() => t.classList.remove('show'), 2500);
}

/* ─── Sidebar ─── */
function openSidebar() {
  document.getElementById('sidebar')?.classList.add('open');
  document.getElementById('overlay')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeSidebar() {
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('overlay')?.classList.remove('active');
  document.body.style.overflow = '';
}

/* ─── Hero Slider ─── */
let heroIndex = 0;
let heroTimer;
const TOTAL_SLIDES = document.querySelectorAll('.hero-slide').length || 3;

function goToSlide(n) {
  heroIndex = ((n % TOTAL_SLIDES) + TOTAL_SLIDES) % TOTAL_SLIDES;
  const slides = document.getElementById('heroSlides');
  if (slides) slides.style.transform = `translateX(-${heroIndex * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === heroIndex));
  resetHeroTimer();
}
function slideHero(dir) { goToSlide(heroIndex + dir); }
function resetHeroTimer() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => goToSlide(heroIndex + 1), 5000);
}

/* ─── Product Category Filter ─── */
function filterProducts(cat) {
  document.querySelectorAll('.category-pill').forEach(p =>
    p.classList.toggle('active', p.textContent.toLowerCase().includes(cat) || cat === 'all')
  );
  document.querySelectorAll('.product-card').forEach((card, i) => {
    const match = cat === 'all' || card.dataset.category === cat;
    card.classList.toggle('hidden', !match);
    if (match) {
      card.style.animationDelay = `${i * 0.05}s`;
      card.style.animation = 'none';
      requestAnimationFrame(() => { card.style.animation = ''; });
    }
  });
}

/* ─── Shelf Scroll ─── */
function scrollShelf(id, dir) {
  const el = document.getElementById(id);
  if (el) el.scrollBy({ left: dir * 600, behavior: 'smooth' });
}

/* ─── Wishlist Toggle ─── */
document.addEventListener('click', e => {
  if (e.target.closest('.wishlist-btn')) {
    const btn = e.target.closest('.wishlist-btn');
    btn.classList.toggle('active');
    const icon = btn.querySelector('i');
    if (btn.classList.contains('active')) {
      icon.className = 'fa-solid fa-heart';
      icon.style.color = '#e84393';
      showToast('Added to wishlist!');
    } else {
      icon.className = 'fa-regular fa-heart';
      icon.style.color = '';
    }
  }
});

/* ─── Header scroll shadow ─── */
window.addEventListener('scroll', () => {
  document.getElementById('header')?.classList.toggle('scrolled', window.scrollY > 10);
});

/* ─── Scroll reveal ─── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.product-card, .shelf-section, .signin-banner').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

/* ─── Init ─── */
updateCartBadge();
resetHeroTimer();