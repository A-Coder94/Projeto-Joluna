import { useState } from 'react';
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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 h-20 flex justify-between items-center">
        
        <a href="#home" className="flex items-center gap-3">
          <img src="/img/logo.png" alt="Joluna Logo" className="w-12 h-12 object-contain" />
          <span className="text-xl font-bold text-primary tracking-tight">Projeto Social Joluna</span>
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

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white shadow-xl border-b border-slate-100 py-6 px-4 flex flex-col gap-4 md:hidden"
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