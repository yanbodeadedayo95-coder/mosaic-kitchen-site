// Minimal client-side reservation handler (demo only)
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('reserve-form');
const msg = document.getElementById('reserve-msg');
form?.addEventListener('submit', e => {
  e.preventDefault();
  msg.textContent = 'Reservation request sent — we will contact you to confirm.';
  form.reset();
});
