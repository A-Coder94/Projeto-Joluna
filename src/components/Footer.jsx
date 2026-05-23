import { MessageCircle, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#1a1a1a] text-slate-400 pt-20 pb-10 border-t-4 border-secondary mt-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl text-text-dark max-w-2xl mx-auto mb-16 -mt-32 relative z-30 border border-slate-100">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">Vamos Conversar?</h3>
          <p className="text-text-light mb-8">Estamos de portas abertas para voluntários, doações ou para você matricular seu filho.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511963073681" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#18ad4f] hover:bg-[#159644] text-white px-6 py-3.5 rounded-xl font-bold transition-all"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a 
              href="https://www.instagram.com/projetojoluna/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3.5 rounded-xl font-bold transition-all"
            >
              <Instagram size={20} />
              Instagram
            </a>
          </div>
        </div>

        <div className="space-y-3 text-sm md:text-base">
          <p className="font-semibold text-slate-300">PROJETO SOCIAL JOLUNA — CNPJ: 49.385.466/0001-41</p>
          <p className="text-slate-500 font-light">
            Feito com tecnologia e excelência, por <span className="text-white font-medium">Anderson de Souza</span> &copy; 2026
          </p>
        </div>

      </div>
    </footer>
  );
}