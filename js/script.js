const navbar = document.getElementById('navbar');
const toggle = document.getElementById('toggle');
toggle.addEventListener('click', () => {
  const open = navbar.classList.toggle('show');
  toggle.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
});
