// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Mencegah aksi default klik link
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth' // Menggulir halaman secara halus ke elemen yang dituju
      });
    });
  });
  
  // Sticky Navigation
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header'); // Mengambil elemen header
    // Menambahkan kelas 'sticky' jika posisi scroll lebih dari 0
    header.classList.toggle('sticky', window.scrollY > 0);
  });
  
  // Lightbox Gallery
  const galleryImages = document.querySelectorAll('.container_img img'); // Mengambil semua gambar di dalam galeri
  galleryImages.forEach(image => {
    image.addEventListener('click', () => {
      const lightbox = document.createElement('div'); // Membuat elemen div untuk lightbox
      lightbox.id = 'lightbox'; // Menetapkan id pada lightbox
      document.body.appendChild(lightbox); // Menambahkan lightbox ke dalam body
  
      const img = document.createElement('img'); // Membuat elemen gambar baru untuk ditampilkan
      img.src = image.src; // Mengatur sumber gambar agar sama dengan gambar yang diklik
      lightbox.appendChild(img); // Menambahkan gambar ke dalam lightbox
  
      // Menutup lightbox saat pengguna mengklik di luar gambar
      lightbox.addEventListener('click', () => {
        lightbox.remove(); // Menghapus elemen lightbox dari halaman
      });
    });
  });
  