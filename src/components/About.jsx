import { motion } from 'framer-motion';
import { Target, Users, Heart } from 'lucide-react';

export default function About() {
  const cards = [
    {
      title: 'Nossa Missão',
      text: 'Nosso foco principal é combater a evasão escolar e a vulnerabilidade social utilizando a disciplina, o respeito mútuo e a paixão pelo esporte como ferramentas de transformação.',
      icon: Target,
      color: 'bg-blue-50 text-primary',
      span: 'md:col-span-1'
    },
    {
      title: 'Atividades e Impacto',
      text: 'Atendemos gratuitamente dezenas de jovens de 4 a 16 anos com treinos regulares de Futsal e Badminton. Mais do que atletas, formamos cidadãos conscientes do seu papel na sociedade.',
      icon: Users,
      color: 'bg-amber-50 text-amber-600',
      span: 'md:col-span-2' 
    },
    {
      title: 'Inclusão Total',
      text: 'Acreditamos em um espaço democrático. Aqui, cada criança encontra acolhimento e suporte, sem qualquer distinção de raça, gênero, crença ou origem social.',
      icon: Heart,
      color: 'bg-rose-50 text-rose-600',
      span: 'md:col-span-3' 
    }
  ];

  return (
    <section id="sobre" className="scroll-mt-16 md:scroll-mt-20 py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Quem Somos</h2>
          <div className="w-12 h-1 bg-secondary mx-auto rounded mb-4" />
          <p className="text-text-light max-w-xl mx-auto">Uma iniciativa dedicada a transformar a realidade de jovens através do esporte e da cidadania.</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {cards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`bg-white p-6 md:p-8 rounded-2xl shadow-modern border border-slate-100 transition-all ${item.span}`}
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-text-light leading-relaxed">{item.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Destaque do Fundador */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 md:p-10 shadow-modern border-l-4 border-primary flex flex-col md:flex-row items-center gap-6 md:gap-8"
        >
          <img
            src="/img/JorgeL.jpeg"
            alt="Professor Jorge Luis do Nascimento, fundador do Projeto Social Joluna"
            loading="lazy"
            decoding="async"
            className="w-36 h-36 md:w-48 md:h-48 shrink-0 rounded-xl object-cover shadow-md border-4 border-slate-100"
          />
          <div className="text-center md:text-left">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider bg-secondary/10 px-3 py-1 rounded-md">Fundador e idealizador</span>
            <h3 className="text-xl md:text-2xl font-bold text-primary mt-3 mb-3">Prof. Jorge Luis do Nascimento (“Jorginho”)</h3>
            <p className="text-text-light leading-relaxed mb-4">
              Idealizador do projeto e apaixonado pelo potencial humano, o Professor Jorginho defende que, se os governantes compreendessem o real poder das práticas esportivas na formação cidadã, o investimento nelas seria prioridade absoluta.
            </p>
            <blockquote className="text-text-light italic leading-relaxed font-light">
              “Toda criança traz consigo a esperança de um dia ser um novo ídolo do esporte. Nós usamos essa esperança não apenas para revelar atletas, mas para mostrar que o esporte coletivo melhora a qualidade de vida...”
            </blockquote>
          </div>
        </motion.div>

      </div>
    </section>
  );
}