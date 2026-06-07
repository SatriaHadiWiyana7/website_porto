import { createContext, useState, useContext } from 'react';

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState('id'); // Default Indonesia

  const toggleLang = () => setLang(prev => prev === 'id' ? 'en' : 'id');

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);