import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Mascot() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="bg-white border-2 border-primary text-text-dark p-4 rounded-2xl shadow-xl mb-3 relative min-w-[180px] text-center pointer-events-auto"
          >
            <button onClick={() => setShowBubble(false)} className="absolute top-2 right-2 text-slate-400 hover:text-text-dark">
              <X size={14} />
            </button>
            <p className="text-sm font-bold leading-tight pt-1">
              Olá! 👋 <br /> Visite nosso <br /> <span className="text-primary font-extrabold">Instagram</span>
            </p>
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r-2 border-b-2 border-primary rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://www.instagram.com/projetojoluna/"
        target="_blank"
        rel="noopener noreferrer"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-auto block cursor-pointer"
      >
        <img 
          src="public/img/mascote.png" 
          alt="Mascote Joluna" 
          className="w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-xl" 
        />
      </motion.a>
    </div>
  );
}