import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Partners from './components/Partners';
import Footer from './components/Footer';
import Mascot from './components/Mascot';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-bgLight">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-primary focus:shadow-lg"
        >
          Ir para o conteúdo
        </a>
        <Navbar />
        <main id="conteudo">
          <Hero />
          <About />
          <Gallery />
          <Partners />
        </main>
        <Footer />
        <Mascot />
      </div>
    </MotionConfig>
  );
}