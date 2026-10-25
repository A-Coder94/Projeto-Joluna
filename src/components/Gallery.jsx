import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Image as ImageIcon } from 'lucide-react';

const ALL_PHOTOS = [
  '/img/dia (1).jpg', '/img/dia (2).jpg', '/img/dia (3).jpg', '/img/dia (4).jpg',
  '/img/dia (5).jpg', '/img/dia (6).jpg', '/img/dia (7).jpg', '/img/dia (8).jpg',
  '/img/dia (9).jpg', '/img/dia (10).jpg', '/img/dia (11).jpg', '/img/dia (12).jpg',
  '/img/dia (13).jpg', '/img/dia (14).jpg', '/img/dia (15).jpg', '/img/dia (16).jpg',
  '/img/dia (17).jpg', '/img/garotos.jpeg', '/img/garotoss.jpeg', '/img/garotos2.jpeg',
  '/img/garotos1.jpeg', '/img/21.jpeg', '/img/22.jpg', '/img/23.jpeg', '/img/24.jpeg',
  '/img/1.jpeg', '/img/2.jpeg', '/img/3.jpg', '/img/4.jpeg', '/img/5.jpeg',
  '/img/6.jpg', '/img/7.jpeg', '/img/8.jpg', '/img/9.jpeg', '/img/10.jpeg',
  '/img/11.jpeg', '/img/12.jpeg', '/img/13.jpg', '/img/14.jpeg', '/img/15.jpeg',
  '/img/16.jpeg', '/img/17.jpeg', '/img/18.jpeg', '/img/19.jpeg', '/img/33.jpeg',
  '/img/35.jpeg', '/img/31.jpeg', '/img/34.jpeg'
];

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(8);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const lightboxRef = useRef(null);
  const isLightboxOpen = lightboxIndex !== null;

  const hasMore = visibleCount < ALL_PHOTOS.length;
  const currentPhotos = ALL_PHOTOS.slice(0, visibleCount);

  useEffect(() => {
    if (!isLightboxOpen) return undefined;

    const previouslyFocused = document.activeElement;
    lightboxRef.current?.querySelector('button')?.focus();
    return () => previouslyFocused?.focus();
  }, [isLightboxOpen]);

  const handleLoadMore = () => {
    if (hasMore) {
      setVisibleCount(prev => Math.min(prev + 8, ALL_PHOTOS.length));
    } else {
      setVisibleCount(8);
      document.getElementById('galeria').scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="galeria" className="scroll-mt-16 md:scroll-mt-20 py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Nossos Momentos</h2>
          <div className="w-12 h-1 bg-secondary mx-auto rounded mb-4" />
          <p className="text-text-light max-w-xl mx-auto">Um pouco do dia a dia e da alegria de nossas crianças.</p>
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <AnimatePresence mode="popLayout">
            {currentPhotos.map((src, index) => (
              <motion.div
                key={src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-sm bg-slate-100 group"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`Ampliar foto ${index + 1} da galeria`}
                  className="absolute inset-0 w-full h-full cursor-zoom-in focus-visible:outline focus-visible:outline-4 focus-visible:outline-secondary"
                >
                  <img
                    src={src}
                    alt={`Atividade do Projeto Social Joluna, foto ${index + 1}`}
                    loading={index < 8 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity flex items-center justify-center" aria-hidden="true">
                    <ImageIcon className="text-white" size={28} />
                  </span>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center">
          <button 
            onClick={handleLoadMore}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-bold tracking-wide transition-all uppercase text-xs"
          >
            {hasMore ? 'Ver Mais Fotos' : 'Ver Menos'}
          </button>
        </div>

        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              ref={lightboxRef}
              role="dialog"
              aria-modal="true"
              aria-label="Visualizador de fotos"
              tabIndex={-1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-14 sm:p-16"
              onClick={(event) => {
                if (event.target === event.currentTarget) setLightboxIndex(null);
              }}
              onKeyDown={(event) => {
                if (event.key === 'Escape') setLightboxIndex(null);
                if (event.key === 'ArrowLeft') {
                  setLightboxIndex((index) => (index - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length);
                }
                if (event.key === 'ArrowRight') {
                  setLightboxIndex((index) => (index + 1) % ALL_PHOTOS.length);
                }
                if (event.key === 'Tab') {
                  const controls = event.currentTarget.querySelectorAll('button');
                  const firstControl = controls[0];
                  const lastControl = controls[controls.length - 1];

                  if (event.shiftKey && document.activeElement === firstControl) {
                    event.preventDefault();
                    lastControl.focus();
                  } else if (!event.shiftKey && document.activeElement === lastControl) {
                    event.preventDefault();
                    firstControl.focus();
                  }
                }
              }}
            >
              <button type="button" onClick={() => setLightboxIndex(null)} aria-label="Fechar visualizador" className="absolute top-2 right-2 sm:top-6 sm:right-6 text-white hover:text-secondary p-3 z-50">
                <X size={32} />
              </button>

              <button
                type="button"
                onClick={() => setLightboxIndex((index) => (index - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length)}
                aria-label="Ver foto anterior"
                className="absolute left-1 sm:left-4 text-white hover:text-secondary bg-white/10 p-3 rounded-full"
              >
                <ChevronLeft size={24} />
              </button>

              <motion.img
                key={lightboxIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={ALL_PHOTOS[lightboxIndex]} 
                alt={`Atividade do Projeto Social Joluna, foto ${lightboxIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              <button
                type="button"
                onClick={() => setLightboxIndex((index) => (index + 1) % ALL_PHOTOS.length)}
                aria-label="Ver próxima foto"
                className="absolute right-1 sm:right-4 text-white hover:text-secondary bg-white/10 p-3 rounded-full"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}