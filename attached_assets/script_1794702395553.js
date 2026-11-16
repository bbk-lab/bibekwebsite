// Mobile menu
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
});

// Highlight the nav link for the section in view
const links = [...document.querySelectorAll('.nav a')];
const byId = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links.forEach((a) => a.classList.remove('active'));
      const link = byId.get(entry.target.id);
      if (link) link.classList.add('active');
    }
  });
}, { rootMargin: '-35% 0px -60% 0px' });
document.querySelectorAll('main section[id]').forEach((s) => observer.observe(s));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
