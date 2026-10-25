# 🌟 Projeto Social Joluna – Site Oficial 🌟

🔗 **Acesse o site:** [https://www.projetosocialjoluna.com.br/](https://www.projetosocialjoluna.com.br/)

Este repositório documenta o desenvolvimento do site institucional do **Projeto Social Joluna**, uma iniciativa localizada em Diadema (SP) voltada à transformação de vidas por meio do esporte, educação e inclusão social de crianças e jovens.

---

## 📌 Sobre o Projeto

O Projeto Social Joluna atua diretamente na comunidade atendendo gratuitamente dezenas de jovens de 4 a 16 anos com treinos regulares de Futsal e Badminton. Sua missão principal é combater a evasão escolar e a vulnerabilidade social utilizando a disciplina, o respeito mútuo e a paixão pelo esporte como ferramentas de transformação e construção de cidadania.

O site foi completamente modernizado para atingir os seguintes objetivos:
- Apresentar a história, missão e o idealizador do projeto (Prof. Jorge Luis "Jorginho").
- Divulgar as atividades esportivas e o impacto social gerado.
- Exibir parceiros e instituições apoiadoras de forma dinâmica.
- Facilitar o engajamento de novos voluntários e doadores através de canais diretos.
- Fortalecer a presença digital e a credibilidade da instituição perante parceiros e patrocinadores.

---

## 🧩 Estrutura da Página (Componentes)

O site foi reestruturado seguindo a arquitetura moderna de componentes reutilizáveis e uma navegação fluida em página única (*Single Page Application*):

- **`Navbar`**: Barra de navegação flutuante com efeito *glassmorphism* (desfoque de vidro), links com rolagem suave e menu mobile responsivo animado.
- **`Hero`**: Primeira dobra de alto impacto visual, utilizando uma sobreposição de degradê inteligente para garantir contraste e legibilidade perfeita sobre a foto de cobertura.
- **`About`**: Apresentação institucional baseada no conceito moderno de **Bento Grid** assimétrico para destacar a Missão, Impacto e Inclusão, além de um card especial dedicado ao fundador, Professor Jorginho.
- **`Gallery`**: Grid responsivo com mais de 40 fotos do projeto, botão para expandir a galeria e visualizador em tela cheia com navegação por teclado.
- **`Partners`**: Carrossel contínuo de apoiadores, com rolagem manual em telas pequenas e respeito à preferência por movimento reduzido.
- **`Mascot`**: Um assistente virtual flutuante e animado que interage sutilmente com o usuário, convidando-o de maneira elástica (*bounce effect*) a visitar as redes sociais do projeto.
- **`Footer`**: Rodapé institucional contendo as informações oficiais de transparência (CNPJ), assinatura do desenvolvedor e cartões de chamada para ação rápidos conectados diretamente ao WhatsApp e Instagram oficiais.

---

## 🛠️ Tecnologias Utilizadas

A stack tecnológica foi totalmente reformulada para garantir o estado da arte do desenvolvimento web frontend:

- **React (v18)**: Biblioteca JavaScript líder de mercado para construção de interfaces baseadas em componentes e gerenciamento de estado eficiente.
- **Vite**: Ferramenta de build de última geração que substitui o antigo ecossistema do Webpack, oferecendo inicialização instantânea do servidor e compilações extremamente rápidas.
- **Tailwind CSS**: Framework CSS utilitário para estilização ágil, mantendo a fidelidade rigorosa ao padrão de cores original (Azul Imperial e Amarelo Secundário) sem poluir o projeto com arquivos CSS extensos.
- **Framer Motion**: Biblioteca potente de animações físicas para React, responsável por suavizar a abertura de modais, transições de imagens e entrada de elementos na tela.
- **Lucide React**: Pacote de ícones modernos, leves e minimalistas em formato SVG.
- **PostCSS / Autoprefixer**: Ferramentas de pós-processamento que garantem compatibilidade total dos estilos com qualquer navegador web de mercado.

---

## 🚀 Funcionalidades Modernas

- **Animações Adaptáveis**: Transições suaves que respeitam a configuração de movimento reduzido do dispositivo.
- **Carrossel de Apoiadores**: Animação contínua em telas maiores e rolagem por toque em telas pequenas, sem dependência de bibliotecas adicionais.
- **Lightbox Integrado**: Galeria expandida com navegação por botões ou setas do teclado, fechamento por Escape e foco acessível.
- **Código Modularizado**: Separação clara de responsabilidades por arquivos de componentes, facilitando atualizações futuras na galeria ou nos textos.
- **Responsividade Avançada**: Layout totalmente adaptado desde telas pequenas de smartphones até grandes monitores desktop.

---

## 🧠 Decisões Técnicas

- **Pasta Public para Mídias**: Organização de toda a estrutura de mais de 40 imagens dentro do diretório `/public/img/`, permitindo o mapeamento dinâmico através de strings de caminhos limpos e evitando centenas de linhas de imports estáticos no React.
- **Tailwind Config Customizado**: Centralização das variáveis de cores oficiais do Projeto Joluna dentro do arquivo `tailwind.config.js` (`primary`, `secondary`, `bgLight`), agilizando a consistência visual em todo o código.
- **Otimização de Renderização**: Uso de chaves lógicas de renderização (`AnimatePresence`) para garantir que elementos desmontados da árvore do React saiam da tela com uma animação suave de esmaecimento (*fade-out*).

---

## 👨‍💻 Desenvolvimento

Website reconstruído, otimizado e mantido com orgulho por:
- **Anderson de Souza** — *Estudante de Análise e Desenvolvimento de Sistemas & Desenvolvedor Full-Stack* 🚀

---

## 🙌 Agradecimentos

A todos os voluntários, parceiros, apoiadores e à comunidade de Diadema que somam forças diariamente para manter vivo o propósito do **Projeto Social Joluna**.

---

📌 *Desenvolvido com propósito, responsabilidade social e o poder da tecnologia moderna.*