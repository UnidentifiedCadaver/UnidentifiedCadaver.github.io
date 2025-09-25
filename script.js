// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Modal controls
const modal = document.getElementById('modal');
function openModal() {
	modal.setAttribute('aria-hidden', 'false');
	modal.setAttribute('aria-modal', 'true');
}
function closeModal() {
	modal.setAttribute('aria-hidden', 'true');
	modal.setAttribute('aria-modal', 'false');
}
document.addEventListener('click', (e) => {
	const target = e.target;
	if (target.matches('[data-close]')) {
		closeModal();
	}
	if (target.matches('.shop-grid .btn')) {
		const name = target.getAttribute('data-product') || 'Товар';
		alert(`${name} успешно добавлен в корзину иллюзий. Оплата не требуется: свобода уже рядом.`);
	}
});

// Button spotlight follow
document.addEventListener('pointermove', (e) => {
	for (const btn of document.querySelectorAll('.btn')) {
		const rect = btn.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width) * 100;
		const y = ((e.clientY - rect.top) / rect.height) * 100;
		btn.style.setProperty('--mx', x + '%');
		btn.style.setProperty('--my', y + '%');
	}
});

// Join form popup
const joinForm = document.getElementById('join-form');
joinForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const formData = new FormData(joinForm);
	const required = ['speed', 'excuse', 'barter'];
	for (const field of required) {
		if (!formData.get(field)) {
			alert('Пожалуйста, ответьте на все вопросы, чтобы обрести пустоту.');
			return;
		}
	}
	openModal();
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
	for (const entry of entries) {
		if (entry.isIntersecting) {
			entry.target.classList.add('is-visible');
			observer.unobserve(entry.target);
		}
	}
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

for (const el of document.querySelectorAll('.reveal, .reveal-stagger')) {
	observer.observe(el);
}


