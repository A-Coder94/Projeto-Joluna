export default function Partners() {
  const LOGOS = [
    'public/img/rotary.png', 'public/img/emporio.jpg', 'public/img/quintal7.jpg', 
    'public/img/moveis.png', 'public/img/farmacia.jpg', 'public/img/cruz.jpeg', 
    'public/img/wand.jpg', 'public/img/embalagens.jpg'
  ];

  const scrollingLogos = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section id="apoiadores" className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl font-bold text-primary mb-2">Quem Acredita no Nosso Sonho</h2>
        <div className="w-12 h-1 bg-secondary mx-auto rounded" />
      </div>

      <div className="relative flex w-full">
        {/* Troquei para partners-carousel no lugar do logos-container */}
        <div className="flex partners-carousel whitespace-nowrap min-w-full items-center justify-around">
          {scrollingLogos.map((src, idx) => (
            <img 
              key={idx} 
              src={src} 
              alt="Apoiador Real" 
              className="h-16 md:h-20 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 inline-block partner-logo" 
            />
          ))}
        </div>
      </div>

      {/* CSS para o carrossel */}
      <style>{`
        .partners-carousel {
          display: flex;
          overflow-x: auto;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          gap: 1rem;
          /* Você pode remover a animação automática, se preferir o scroll manual no mobile */
        }
        .partner-logo {
          flex: 0 0 auto;
          width: 120px;
          height: 60px;
        }

        /* Se quiser manter a animação automática também, mantenha a regra abaixo */
        @media (min-width: 768px) {
          .partners-carousel {
            animation: scroll 20s linear infinite;
            overflow-x: unset; /* remove scroll automático no desktop para manter animação */
          }
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
        }
      `}</style>
    </section>
  );
}
