// Fungsi saat tombol diklik
function bukaHalaman(nama) {
  // Efek klik
  event.target.closest('.menu-btn').style.transform = 'scale(0.95)';
  setTimeout(() => {
    event.target.closest('.menu-btn').style.transform = '';
  }, 150);

  // Tampilkan pesan
  let pesan = '';
  switch(nama) {
    case 'deploy':
      pesan = '🚀 Buka Cimel Deploy untuk upload websitemu!';
      break;
    case 'tools':
      pesan = '🛠️ Alat bantu: QR Generator, Font Generator, dan lainnya siap digunakan!';
      break;
    case 'tentang':
      pesan = '💙 Cplay — Dibuat dengan semangat, untuk memudahkanmu membuat web.';
      break;
    case 'kredit':
      pesan = '✨ By Cimel — Terima kasih sudah menggunakan Cplay!';
      break;
  }

  tampilPesan(pesan);
}

// Tampilkan pesan sementara
function tampilPesan(teks) {
  const info = document.querySelector('.teks-animasi');
  const asli = info.textContent;
  info.textContent = teks;
  info.style.animation = 'none';
  info.style.opacity = '1';
  
  setTimeout(() => {
    info.textContent = asli;
  }, 3500);
}

// Selamat datang saat halaman dimuat
window.addEventListener('load', () => {
  console.log('%c☁️ Cplay siap digunakan!','color:#1976d2; font-weight:bold; font-size:16px;');
});
