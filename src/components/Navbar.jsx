import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Apoiadores', href: '#apoiadores' },
  ];

  useEffect(() => {
    if (!isOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  return (
    <nav aria-label="Navegação principal" className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 h-16 md:h-20 flex justify-between items-center gap-3">
        <a href="#home" className="flex min-w-0 items-center gap-2 md:gap-3">
          <img src="/img/logo.png" alt="" className="w-10 h-10 md:w-12 md:h-12 shrink-0 object-contain" />
          <span className="text-base md:text-xl font-bold text-primary tracking-tight">Projeto Social Joluna</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="text-text-dark hover:text-primary font-medium transition-colors">
              {item.name}
            </a>
          ))}
          <a href="#contato" className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-md shadow-primary/20">
            Contato
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="md:hidden shrink-0 text-primary p-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            id="mobile-navigation"
            className="absolute top-16 md:top-20 left-0 w-full bg-white shadow-xl border-b border-slate-100 py-4 md:py-6 px-4 flex flex-col gap-3 md:hidden"
          >
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-text-dark hover:text-primary text-lg font-medium py-2 border-b border-slate-50">
                {item.name}
              </a>
            ))}
            <a href="#contato" onClick={() => setIsOpen(false)} className="bg-primary text-white text-center py-3 rounded-full font-medium mt-2">
              Contato
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}