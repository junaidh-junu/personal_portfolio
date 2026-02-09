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

function App() {
  return (
    <>
      <SEOHead />
      <StructuredData />
      <SmoothScroll>
        <div className="min-h-screen bg-dark-bg text-ivory overflow-x-hidden noise">
          <Navigation />
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
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
