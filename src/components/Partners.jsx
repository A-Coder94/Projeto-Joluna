export default function Partners() {
  const LOGOS = [
    '/img/rotary.png', '/img/emporio.jpg', '/img/quintal7.jpg',
    '/img/moveis.png', '/img/farmacia.jpg', '/img/cruz.jpeg',
    '/img/wand.jpg', '/img/embalagens.jpg'
  ];

  return (
    <section id="apoiadores" aria-label="Parceiros e apoiadores" className="scroll-mt-16 md:scroll-mt-20 py-16 md:py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-8 md:mb-12 text-center">
        <h2 className="text-3xl font-bold text-primary mb-2">Quem Acredita no Nosso Sonho</h2>
        <div className="w-12 h-1 bg-secondary mx-auto rounded" />
      </div>

      <div className="partners-viewport">
        <div className="partners-track">
          {[false, true].map((isDuplicate) => (
            <div key={String(isDuplicate)} className="partners-group" aria-hidden={isDuplicate}>
              {LOGOS.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={isDuplicate ? '' : 'Parceiro do Projeto Social Joluna'}
                  loading="lazy"
                  decoding="async"
                  className="partner-logo h-16 md:h-20 w-28 md:w-32 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
