import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center bg-[url('img/cabecalho.jpg')] bg-cover bg-center bg-no-repeat pt-20">
      {/* Overlay escura e moderna para dar contraste perfeito ao texto */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/90 via-primary/80 to-black/60 z-10" />

      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-secondary text-black font-bold uppercase tracking-wider text-xs px-4 py-1.5 rounded-full mb-6"
        >
          Transformando Vidas
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
        >
          Esporte, Educação e <br className="hidden md:inline" />Futuro para nossos Jovens
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light"
        >
          Oferecemos oportunidades reais através do esporte e da inclusão social, construindo cidadania e unindo a comunidade de Diadema.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#sobre" className="w-full sm:w-auto bg-secondary hover:bg-yellow-400 text-black px-8 py-3.5 rounded-full font-bold uppercase text-sm tracking-wider transition-all transform hover:-translate-y-1 shadow-lg shadow-secondary/10">
            Conheça o Projeto
          </a>
          <a href="#contato" className="w-full sm:w-auto border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-3.5 rounded-full font-bold uppercase text-sm tracking-wider transition-all transform hover:-translate-y-1">
            Como Ajudar
          </a>
        </motion.div>
      </div>
    </section>
  );
}