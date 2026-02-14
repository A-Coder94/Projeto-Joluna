document.addEventListener('DOMContentLoaded', function () {

    // --- 1. MENU MOBILE ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('fa-times');
        hamburger.classList.toggle('fa-bars');
    });


    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // --- 2. ANIMAÇÃO ROLAR ---
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.fade-up');
    elementsToAnimate.forEach(el => observer.observe(el));

    // --- 3. GALERIA LIGHTBOX ---
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const overlay = document.getElementById('overlay');
    const fullImg = document.getElementById('full-img');
    const closeBtn = document.getElementById('close-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentIndex = 0;

    function openGallery(index) {
        currentIndex = index;
        fullImg.src = galleryItems[currentIndex].src;
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Trava o scroll 
    }

    function closeGallery() {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        fullImg.src = galleryItems[currentIndex].src;
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        fullImg.src = galleryItems[currentIndex].src;
    }
    //---- "Ver Mais Fotos" ----//
    const galleryGrid = document.getElementById('gallery-grid');
    const loadMoreBtn = document.getElementById('loadMore');

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function () {
            galleryGrid.classList.toggle('expanded');

            if (galleryGrid.classList.contains('expanded')) {
                loadMoreBtn.textContent = 'Ver Menos';
            } else {
                loadMoreBtn.textContent = 'Ver Mais Fotos';

                galleryGrid.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Eventos da Galeria
    galleryItems.forEach((img, index) => {
        img.parentElement.addEventListener('click', () => openGallery(index));
    });

    closeBtn.addEventListener('click', closeGallery);
    nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
    prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeGallery();
    });

    // Teclado na Galeria
    document.addEventListener('keydown', (e) => {
        if (overlay.style.display === 'flex') {
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') closeGallery();
        }
    });

    // --- 4. MASCOTE FLUTUANTE ---
    const popupMascote = document.getElementById('popupMascote');
    const fecharPopup = document.getElementById('fecharPopupMascote');
    const bubbleBox = document.querySelector('.bubble-box');

    if (fecharPopup) {
        fecharPopup.addEventListener('click', () => {
            bubbleBox.style.display = 'none';
        });
    }
});
