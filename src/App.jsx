import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Partners from './components/Partners';
import Footer from './components/Footer';
import Mascot from './components/Mascot';

export default function App() {
  return (
    <div className="min-h-screen bg-bgLight">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Partners />
      </main>
      <Footer />
      <Mascot />
    </div>
  );
}