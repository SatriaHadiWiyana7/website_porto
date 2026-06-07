export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-slate-500 font-mono border-t border-slate-200 dark:border-slate-800">
      <p>Designed & Built smoothly with React & Framer Motion.</p>
      <p className="mt-2 text-xs">© {new Date().getFullYear()} Satria Hadi Wiyana.</p>
    </footer>
  );
}