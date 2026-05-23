import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Image as ImageIcon } from 'lucide-react';

const ALL_PHOTOS = [
  'public/img/dia (1).jpg', 'public/img/dia (2).jpg', 'public/img/dia (3).jpg', 'public/img/dia (4).jpg',
  'public/img/dia (5).jpg', 'public/img/dia (6).jpg', 'public/img/dia (7).jpg', 'public/img/dia (8).jpg',
  'public/img/dia (9).jpg', 'public/img/dia (10).jpg', 'public/img/dia (11).jpg', 'public/img/dia (12).jpg',
  'public/img/dia (13).jpg', 'public/img/dia (14).jpg', 'public/img/dia (15).jpg', 'public/img/dia (16).jpg',
  'public/img/dia (17).jpg', 'public/img/garotos.jpeg', 'public/img/garotoss.jpeg', 'public/img/garotos2.jpeg',
  'public/img/garotos1.jpeg', 'public/img/21.jpeg', 'public/img/22.jpg', 'public/img/23.jpeg', 'public/img/24.jpeg',
  'public/img/1.jpeg', 'public/img/2.jpeg', 'public/img/3.jpg', 'public/img/4.jpeg', 'public/img/5.jpeg',
  'public/img/6.jpg', 'public/img/7.jpeg', 'public/img/8.jpg', 'public/img/9.jpeg', 'public/img/10.jpeg',
  'public/img/11.jpeg', 'public/img/12.jpeg', 'public/img/13.jpg', 'public/img/14.jpeg', 'public/img/15.jpeg',
  'public/img/16.jpeg', 'public/img/17.jpeg', 'public/img/18.jpeg', 'public/img/19.jpeg', 'public/img/33.jpeg',
  'public/img/35.jpeg', 'public/img/31.jpeg', 'public/img/34.jpeg'
];

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(8);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const hasMore = visibleCount < ALL_PHOTOS.length;
  const currentPhotos = ALL_PHOTOS.slice(0, visibleCount);

  const handleLoadMore = () => {
    if (hasMore) {
      setVisibleCount(prev => Math.min(prev + 8, ALL_PHOTOS.length));
    } else {
      setVisibleCount(8);
      document.getElementById('galeria').scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-16">
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
                onClick={() => setLightboxIndex(index)}
                className="relative aspect-square rounded-xl overflow-hidden shadow-sm cursor-pointer bg-slate-100 group"
              >
                <img src={src} alt="Momento Joluna" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ImageIcon className="text-white" size={28} />
                </div>
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
          {lightboxIndex !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setLightboxIndex(null)}
            >
              <button onClick={() => setLightboxIndex(null)} className="absolute top-6 right-6 text-white hover:text-secondary p-2 z-50">
                <X size={32} />
              </button>

              <button 
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => (prev - 1 + ALL_PHOTOS.length) % ALL_PHOTOS.length) }}
                className="absolute left-4 text-white hover:text-secondary bg-white/10 p-3 rounded-full"
              >
                <ChevronLeft size={24} />
              </button>

              <motion.img 
                key={lightboxIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={ALL_PHOTOS[lightboxIndex]} 
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />

              <button 
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => (prev + 1) % ALL_PHOTOS.length) }}
                className="absolute right-4 text-white hover:text-secondary bg-white/10 p-3 rounded-full"
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