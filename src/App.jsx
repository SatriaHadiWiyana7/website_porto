import { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Booking from './components/Booking';

// IMPORT LANG PROVIDER DI SINI
import { LangProvider } from './context/LangContext';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    // BUNGKUS SELURUH APLIKASI DENGAN LANGPROVIDER
    <LangProvider>
      
      {/* Preloader tetap menggunakan state loading lokal */}
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <div className="w-full min-h-screen font-sans text-slate-900 bg-white">
          <Navbar />
          <Hero />
          <Stats />
          <Services />
          <Projects />
          <Process />
          <Testimonial />
          <FAQ />
          <Booking/>
          <Footer />
        </div>
      )}
      
    </LangProvider>
  );
}

export default App;