import { MotionConfig } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEOHead from './components/SEO/SEOHead';
import StructuredData from './components/SEO/StructuredData';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import SectionDots from './components/SectionDots';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <SEOHead />
      <StructuredData />
      <ScrollProgress />
      <SmoothScroll>
        <div className="page-canvas min-h-screen text-ink overflow-x-hidden">
          <Navigation />
          <SectionDots />
          <main className="relative z-0">
            <Hero />
            <Projects />
            <About />
            <Journey />
            <Skills />
            <Publications />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </div>
      </SmoothScroll>
    </MotionConfig>
  );
}

export default App;
