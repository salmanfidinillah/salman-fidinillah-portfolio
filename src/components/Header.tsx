import { useEffect, useRef, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { CalligraphyLogo } from './CalligraphyLogo';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  lang: 'ID' | 'EN';
  setLang: (lang: 'ID' | 'EN') => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  soundEnabled: boolean;
}
export default function Header({ currentTab, setCurrentTab, lang, setLang, darkMode, setDarkMode }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggle = useRef<HTMLButtonElement>(null);
  const navItems = [
    { id: 'home', label: lang === 'ID' ? 'Beranda' : 'Home' },
    { id: 'journey', label: lang === 'ID' ? 'Pengalaman' : 'Journey' },
    { id: 'skills', label: lang === 'ID' ? 'Keahlian' : 'Skills' },
    { id: 'projects', label: lang === 'ID' ? 'Proyek' : 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: lang === 'ID' ? 'Kontak' : 'Contact' },
  ];
  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) { setMenuOpen(false); menuToggle.current?.focus(); }
    };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [menuOpen]);
  useEffect(() => { setMenuOpen(false); }, [currentTab]);
  const navigate = (tab: string) => { setCurrentTab(tab); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const themeLabel = darkMode ? (lang === 'ID' ? 'Gunakan tema terang' : 'Use light theme') : (lang === 'ID' ? 'Gunakan tema gelap' : 'Use dark theme');
  return (
    <header id="header-nav" className="editorial-header">
      <div className="header-inner">
        <a id="brand-logo" href="/" className="brand" onClick={event => { if (!event.metaKey && !event.ctrlKey) { event.preventDefault(); navigate('home'); } }} aria-label="salmansegf — Beranda"><CalligraphyLogo className="brand-calligraphy" /><span>salmansegf</span></a>
        <nav id="main-nav-pill" className="desktop-navigation" aria-label={lang === 'ID' ? 'Navigasi utama' : 'Main navigation'}>{navItems.map(item => <a key={item.id} id={`nav-${item.id}`} href={item.id === 'home' ? '/' : `/${item.id}`} aria-current={currentTab === item.id ? 'page' : undefined} onClick={event => { if (!event.metaKey && !event.ctrlKey) { event.preventDefault(); navigate(item.id); } }}>{item.label}</a>)}</nav>
        <div id="header-controls" className="header-controls">
          <button id="lang-toggle" className="ui-button language-desktop" onClick={() => setLang(lang === 'ID' ? 'EN' : 'ID')} aria-label={lang === 'ID' ? 'Switch to English' : 'Ubah ke Bahasa Indonesia'}>{lang} / {lang === 'ID' ? 'EN' : 'ID'}</button>
          <button id="theme-toggle" className="icon-button" onClick={() => setDarkMode(!darkMode)} title={themeLabel} aria-label={themeLabel}>{darkMode ? <Sun size={21}/> : <Moon size={21}/>}</button>
          <button id="mobile-menu-toggle" ref={menuToggle} className="icon-button mobile-menu-toggle" aria-expanded={menuOpen} aria-controls="mobile-slide-menu" aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </div>
      <AnimatePresence>{menuOpen && <motion.div id="mobile-slide-menu" className="mobile-navigation" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}><nav aria-label={lang === 'ID' ? 'Navigasi mobile' : 'Mobile navigation'}>{navItems.map(item => <a key={item.id} href={item.id === 'home' ? '/' : `/${item.id}`} id={`mobile-nav-link-${item.id}`} aria-current={currentTab === item.id ? 'page' : undefined} onClick={event => { event.preventDefault(); navigate(item.id); }}>{item.label}<span aria-hidden="true">↗</span></a>)}</nav><div className="mobile-menu-actions"><button id="mobile-lang-toggle" className="ui-button" onClick={() => setLang(lang === 'ID' ? 'EN' : 'ID')}>{lang} / {lang === 'ID' ? 'EN' : 'ID'}</button><button id="mobile-contact-cta" className="ui-button ui-primary" onClick={() => navigate('contact')}>{lang === 'ID' ? 'Hubungi Saya' : 'Contact Me'}</button></div></motion.div>}</AnimatePresence>
    </header>
  );
}
