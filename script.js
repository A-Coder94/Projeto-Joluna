document.addEventListener('DOMContentLoaded', function () {

    // Seleção de todos os elementos necessários
    const mainHeader = document.getElementById('main-header');
    const brandLogo = document.querySelector('.brand-logo');
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Elementos do Overlay (Galeria)
    const overlay = document.getElementById('overlay');
    const fullImg = document.getElementById('full-img');
    const closeBtn = document.getElementById('close-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentImageIndex = 0;
    const galleryImages = Array.from(galleryItems).map(item => item.querySelector('img'));

    // --- ELEMENTOS DO NOVO POP-UP UNIFICADO ---
    const popupMascote = document.getElementById('popupMascote');
    const fecharPopupMascote = document.getElementById('fecharPopupMascote');


    // --- TROCAR DE SEÇÃO (ABAS) ---
    function switchTab(event) {
        event.preventDefault();
        const targetId = event.currentTarget.dataset.section;


        navLinks.forEach(link => link.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));


        event.currentTarget.classList.add('active');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    // --- LÓGICA DA GALERIA ---
    function openImage(index) {
        if (index < 0 || index >= galleryImages.length) return;

        currentImageIndex = index;
        const img = galleryImages[currentImageIndex];

        fullImg.src = img.src;
        fullImg.alt = img.alt;
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeOverlay() {
        overlay.style.display = 'none';
        fullImg.src = '';
        document.body.style.overflow = 'auto';
    }

    function showNextImage() {
        const nextIndex = (currentImageIndex + 1) % galleryImages.length;
        openImage(nextIndex);
    }

    function showPrevImage() {
        const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        openImage(prevIndex);
    }

    // --- LÓGICA DO MASCOTE ---
    if (fecharPopupMascote) {
        fecharPopupMascote.addEventListener('click', () => {
            popupMascote.style.display = 'none';
        });
    }

    // --- EVENT LISTENERS ---

    // Navegação
    navLinks.forEach(link => {
        link.addEventListener('click', switchTab);
    });

    // Galeria
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            openImage(index);
        });
    });

    // Controles do Overlay
    closeBtn.addEventListener('click', closeOverlay);
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeOverlay();
        }
    });

    // Navegação pela galeria com as setas do teclado
    document.addEventListener('keydown', (event) => {
        if (overlay.style.display === 'flex') {
            if (event.key === 'ArrowRight') {
                showNextImage();
            } else if (event.key === 'ArrowLeft') {
                showPrevImage();
            } else if (event.key === 'Escape') {
                closeOverlay();
            }
        }
    });



    document.querySelector('.nav-link[data-section="home-section"]').click();

});
