import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/ui/navigation';
import { WhatsAppButton } from './components/ui/whatsapp-button';
import { Hero } from './components/sections/hero';
import { Intro } from './components/sections/intro';
import { Services } from './components/sections/services';
import { Testimonials } from './components/sections/testimonials';
import { CTA } from './components/sections/cta';
import { Footer } from './components/ui/footer';
import { Portfolio } from './pages/portfolio';
import { Process } from './pages/proceso';
import { Contact } from './pages/contacto';
import { useFacebookPixel } from './hooks/useFacebookPixel';

function AppContent() {
  useFacebookPixel();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Intro />
            <Services />
            <Testimonials />
            <CTA />
          </>
        } />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/proceso" element={<Process />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;