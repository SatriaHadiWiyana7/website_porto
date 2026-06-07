import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LangProvider } from './context/LangContext';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LangProvider>
      <div className="min-h-screen bg-white font-sans selection:bg-[#0ea5e9]/30 selection:text-[#0ea5e9] text-slate-900">
        
        {/* AnimatePresence mengurus efek transisi keluar untuk Preloader */}
        <AnimatePresence mode="wait">
          {isLoading && (
            <Preloader onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {/* Konten utama hanya akan bisa di-scroll / terlihat jelas setelah loading selesai */}
        {!isLoading && (
          <>
            <Navbar />
            <main>
              <Hero />
              <Projects />
            </main>
            <Footer />
          </>
        )}
        
      </div>
    </LangProvider>
  );
}