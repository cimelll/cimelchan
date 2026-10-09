// Efek klik pada kartu link
document.querySelectorAll('.link-card').forEach(card => {
  card.addEventListener('mousedown', function() {
    this.style.transform = 'translateY(-3px) scale(0.97)';
  });
  card.addEventListener('mouseup', function() {
    this.style.transform = '';
  });
  card.addEventListener('mouseleave', function() {
    this.style.transform = '';
  });
});

// Animasi masuk halaman selesai
window.addEventListener('load', () => {
  document.querySelectorAll('.link-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'all 0.5s ease-out';
      card.style.opacity = '1';
      card.style.transform = '';
    }, 150 + index * 120);
  });
});
