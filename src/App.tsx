import Masthead from './components/Masthead';
import Listing from './components/Listing';
import Facts from './components/Facts';
import Screenshots from './components/Screenshots';
import About from './components/About';
import Apps from './components/Apps';
import Research from './components/Research';
import History from './components/History';
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
        <Listing />
        <Facts />
        <Screenshots />
        <About />
        <Apps />
        <Research />
        <History />
      </main>
      <Footer />
    </>
  );
}
