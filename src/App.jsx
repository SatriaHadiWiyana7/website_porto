import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LangProvider } from './context/LangContext';
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

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LangProvider>
      <div className="min-h-screen bg-white font-sans selection:bg-[#0ea5e9]/30 selection:text-[#0ea5e9] text-slate-900">
        
        <AnimatePresence mode="wait">
          {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>

        {!isLoading && (
          <>
            <Navbar />
            <main>
              <Hero />
              <Stats />
              <Services />
              <Projects />
              <Process />
              <Testimonial />
              <FAQ />
            </main>
            <Footer />
          </>
        )}
        
      </div>
    </LangProvider>
  );
}