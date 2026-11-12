import Masthead from './components/Masthead';
import Hello from './components/Hello';
import Numbers from './components/Numbers';
import Work from './components/Work';
import Apps from './components/Apps';
import About from './components/About';
import Research from './components/Research';
import Path from './components/Path';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Masthead />
      <main>
        <Hello />
        <Numbers />
        <Work />
        <Apps />
        <About />
        <Research />
        <Path />
      </main>
      <Footer />
    </>
  );
}
