import { createContext, useContext, useEffect, useState } from 'react';

const LangContext = createContext();
export function LangProvider({ children }) {
  const [lang, setLang] = useState('id');
  const [storageReady, setStorageReady] = useState(false);
  useEffect(() => {
    try { if (localStorage.getItem('shw-language') === 'en') setLang('en'); }
    catch { /* Storage is optional. */ }
    setStorageReady(true);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    if (storageReady) {
      try { localStorage.setItem('shw-language', lang); } catch { /* Storage is optional. */ }
    }
  }, [lang, storageReady]);
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}
export function useLang() { return useContext(LangContext); }
