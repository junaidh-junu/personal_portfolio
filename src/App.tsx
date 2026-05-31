import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import SEOHead from './components/SEO/SEOHead';
import StructuredData from './components/SEO/StructuredData';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import SectionDots from './components/SectionDots';

function App() {
  return (
    <>
      <SEOHead />
      <StructuredData />
      <ScrollProgress />
      <SmoothScroll>
        <div className="ambient-page min-h-screen text-ivory overflow-x-hidden noise">
          <div className="pointer-events-none fixed inset-0 z-0 opacity-60">
            <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />
            <div className="absolute right-[-8rem] top-[42%] h-96 w-96 rounded-full bg-ivory/5 blur-[140px]" />
            <div className="absolute bottom-[-10rem] left-[24%] h-80 w-80 rounded-full bg-accent-dark/10 blur-[120px]" />
          </div>
          <Navigation />
          <SectionDots />
          <main className="relative z-0">
            <Hero />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Publications />
            <Contact />
          </main>
          <BackToTop />
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
