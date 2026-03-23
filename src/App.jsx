import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-cream-50 min-h-screen">
      <Navbar />
      <Hero />
      <Collections />
      <Services />
      <Testimonials />
      <About />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
