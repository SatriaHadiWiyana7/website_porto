import { createContext, useContext, useState } from 'react';

// Membuat Context
const LangContext = createContext();

// Provider yang akan membungkus aplikasi
export function LangProvider({ children }) {
  // State bahasa default: 'id' (Indonesia)
  const [lang, setLang] = useState('id');

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

// Custom hook agar komponen mudah mengambil data bahasa
export function useLang() {
  return useContext(LangContext);
}