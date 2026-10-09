import Masthead from './components/Masthead';
import Hero from './components/Hero';
import Work from './components/Work';
import Apps from './components/Apps';
import About from './components/About';
import Experience from './components/Experience';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEOHead from './components/SEO/SEOHead';
import StructuredData from './components/SEO/StructuredData';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();
  return (
    <>
      <SEOHead />
      <StructuredData />
      <Masthead />
      <main>
        <Hero />
        <Work />
        <Apps />
        <About />
        <Experience />
        <Research />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
