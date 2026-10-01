"use strict";
const config = window.MARVIX_CONFIG || {};
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navegacion');
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
window.matchMedia('(min-width: 701px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();
const notice = document.querySelector('#notice');
notice.setAttribute('aria-labelledby', 'notice-title');
notice.setAttribute('aria-describedby', 'notice-text');
function showNotice(title, message) {
  document.querySelector('#notice-title').textContent = title;
  document.querySelector('#notice-text').textContent = message;
  notice.showModal();
}
document.querySelector('.dialog-close').addEventListener('click', () => notice.close());
document.querySelector('#notice-ok').addEventListener('click', () => notice.close());
notice.addEventListener('click', event => { if (event.target === notice) { const box = notice.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) notice.close(); } });
const whatsapp = String(config.whatsapp || '').replace(/\D/g, '');
const validWhatsapp = /^[1-9]\d{7,14}$/.test(whatsapp);
const whatsappLink = document.querySelector('[data-whatsapp]');
function updateWhatsapp(category) {
  if (!validWhatsapp) return;
  const message = (config.whatsappMessage || 'Hola, quisiera solicitar una cotización.') + (category ? ' Me interesa la categoría: ' + category + '.' : '');
  whatsappLink.href = 'https://wa.me/' + whatsapp + '?text=' + encodeURIComponent(message);
  whatsappLink.target = '_blank';
  whatsappLink.rel = 'noopener noreferrer';
}
updateWhatsapp();
if (validWhatsapp) document.querySelector('#contact-status').textContent = 'Conversemos sobre las necesidades de tu espacio.';
else whatsappLink.addEventListener('click', event => { event.preventDefault(); showNotice('WhatsApp próximamente', 'El canal de cotizaciones estará disponible cuando MARVIX URBAN incorpore su número de contacto.'); });
document.querySelectorAll('[data-category]').forEach(link => link.addEventListener('click', () => { updateWhatsapp(link.dataset.category); if(validWhatsapp) document.querySelector('#contact-status').textContent = 'Consulta sobre: ' + link.dataset.category + '.'; }));
function safeAsset(value) { return typeof value === 'string' && value.trim() && !/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(value) ? value : (typeof value === 'string' && /^https?:\/\//i.test(value) ? value : ''); }
const pdf = safeAsset(config.pdf);
document.querySelectorAll('[data-pdf]').forEach(link => {
  if (pdf) { link.href = pdf; link.target = '_blank'; link.rel = 'noopener noreferrer'; }
  else link.addEventListener('click', event => { event.preventDefault(); showNotice('Catálogo PDF próximamente', 'El catálogo descargable estará disponible cuando MARVIX URBAN incorpore el documento. Mientras tanto, explora las categorías de esta página.'); });
});
if (config.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email)) { const email = document.querySelector('[data-email]'); email.textContent = config.email; email.href = 'mailto:' + config.email; email.hidden = false; }
if (config.location) { const location = document.querySelector('[data-location]'); location.textContent = config.location; location.hidden = false; }
document.querySelectorAll('[data-image]').forEach(container => {
  const entry = (config.images || {})[container.dataset.image];
  const src = safeAsset(entry && entry.src);
  if (!src) return;
  const img = new Image(); img.alt = entry.alt || ''; img.decoding = 'async';
  if (container.dataset.image !== 'hero') img.loading = 'lazy';
  else img.fetchPriority = 'high';
  img.addEventListener('load', () => { container.classList.add('has-image'); container.removeAttribute('role'); container.removeAttribute('aria-label'); });
  img.addEventListener('error', () => { img.remove(); container.classList.remove('has-image'); });
  img.src = src; container.prepend(img);
});
