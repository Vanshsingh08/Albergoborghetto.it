document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      alert("Grazie per la prenotazione! Riceverai una conferma via email.");
    });
  }

  const menuBtn = document.querySelector('.logo-mobile');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
  });
});document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.gallery img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  let currentIndex = 0;

  function showImage(index) {
    if (index >= 0 && index < galleryImages.length) {
      lightboxImg.src = galleryImages[index].src;
      currentIndex = index;
      lightbox.style.display = 'flex';
    }
  }

  galleryImages.forEach((img, i) => {
    img.addEventListener('click', () => {
      showImage(i);
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

  nextBtn.addEventListener('click', () => {
    showImage((currentIndex + 1) % galleryImages.length);
  });

  prevBtn.addEventListener('click', () => {
    showImage((currentIndex - 1 + galleryImages.length) % galleryImages.length);
  });

  // Aggiungi controllo tastiera (opzionale)
  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
      if (e.key === 'ArrowRight') nextBtn.click();
      if (e.key === 'ArrowLeft') prevBtn.click();
      if (e.key === 'Escape') closeBtn.click();
    }
  });
});
