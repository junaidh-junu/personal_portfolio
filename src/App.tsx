import Masthead from './components/Masthead';
import Intro from './components/Intro';
import Work from './components/Work';
import Apps from './components/Apps';
import Research from './components/Research';
import Experience from './components/Experience';
import Education from './components/Education';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEOHead from './components/SEO/SEOHead';
import StructuredData from './components/SEO/StructuredData';

export default function App() {
  return (
    <>
      <SEOHead />
      <StructuredData />
      <Masthead />
      <main>
        <Intro />
        <div className="page">
          <Work />
          <Apps />
          <Research />
          <Experience />
          <Education />
          <Stack />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
