import { useState, useEffect } from 'react';
import { Languages, Sun, Moon, Menu, X } from 'lucide-react';
import { CalligraphyLogo } from './CalligraphyLogo';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  lang: 'ID' | 'EN';
  setLang: (lang: 'ID' | 'EN') => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  soundEnabled: boolean;
}

export default function Header({
  currentTab,
  setCurrentTab,
  lang,
  setLang,
  darkMode,
  setDarkMode,
  soundEnabled
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: lang === 'ID' ? 'Beranda' : 'Home' },
    { id: 'journey', label: lang === 'ID' ? 'Pengalaman' : 'Journey' },
    { id: 'skills', label: lang === 'ID' ? 'Keahlian' : 'Skills' },
    { id: 'projects', label: lang === 'ID' ? 'Proyek' : 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: lang === 'ID' ? 'Kontak' : 'Contact' }
  ];

  const playClickSound = () => {
    if (soundEnabled) {
      try {
        const context = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = context.createOscillator();
        const gainNode = context.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(440, context.currentTime); // A4 note
        oscillator.frequency.exponentialRampToValueAtTime(880, context.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.05, context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.1);
        
        oscillator.connect(gainNode);
        gainNode.connect(context.destination);
        
        oscillator.start();
        oscillator.stop(context.currentTime + 0.1);
      } catch (e) {
        console.warn('Audio context failed', e);
      }
    }
  };

  const handleTabClick = (tabId: string) => {
    playClickSound();
    setCurrentTab(tabId);
    
    // Scroll to top or specific section if desired, here we update state which updates view
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    playClickSound();
    setLang(lang === 'ID' ? 'EN' : 'ID');
  };

  const toggleDarkMode = () => {
    playClickSound();
    setDarkMode(!darkMode);
  };

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4 ${
        scrolled 
          ? darkMode 
            ? 'bg-[#08080c]/85 border-b border-white/5 backdrop-blur-md py-3' 
            : 'bg-white/85 border-b border-black/5 backdrop-blur-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div 
          id="brand-logo"
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => handleTabClick('home')}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/10 group-hover:scale-105 transition-transform">
            <CalligraphyLogo className="w-6 h-6 text-white" />
          </div>
          <span className={`font-display text-lg font-bold tracking-tight transition-colors ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            salman<span className="text-cyan-500">segf</span>
          </span>
        </div>

        {/* Central Pill Navigation */}
        <nav 
          id="main-nav-pill"
          className={`hidden lg:flex items-center p-1.5 rounded-full ${
            darkMode 
              ? 'bg-white/5 border border-white/5 shadow-inner' 
              : 'bg-black/5 border border-black/5'
          }`}
        >
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleTabClick(item.id)}
                className={`px-5 py-2 rounded-full font-sans text-sm font-medium transition-all duration-300 relative ${
                  isActive
                    ? darkMode
                      ? 'text-black bg-white shadow-md font-semibold'
                      : 'text-white bg-gray-900 shadow-md font-semibold'
                    : darkMode
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent to-transparent -z-10 animate-pulse" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Controls and Actions */}
        <div id="header-controls" className="hidden lg:flex items-center gap-2 lg:gap-3">
          
          {/* Lang Selector */}
          <button
            id="lang-toggle"
            onClick={toggleLanguage}
            title={lang === 'ID' ? 'Switch to English' : 'Ubah ke Bahasa Indonesia'}
            className={`p-2 rounded-lg border flex items-center gap-1.5 transition-all hover:scale-105 font-mono text-xs font-bold uppercase ${
              darkMode 
                ? 'border-white/10 hover:bg-white/5 text-gray-400 hover:text-white' 
                : 'border-black/10 hover:bg-black/5 text-gray-600 hover:text-black'
            }`}
          >
            <Languages className="w-3.5 h-3.5" />
            <span>{lang}</span>
          </button>

          {/* Theme Selector */}
          <button
            id="theme-toggle"
            onClick={toggleDarkMode}
            title={darkMode ? 'Light Theme' : 'Dark Theme'}
            className={`p-2 rounded-lg border transition-all hover:scale-105 ${
              darkMode 
                ? 'border-white/10 hover:bg-white/5 text-gray-400 hover:text-white' 
                : 'border-black/10 hover:bg-black/5 text-gray-600 hover:text-black'
            }`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Contact Button */}
          <button
            id="cta-contact-btn"
            onClick={() => handleTabClick('contact')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-700 text-white shadow-md shadow-cyan-500/10 transition-all hover:-translate-y-0.5"
          >
            {lang === 'ID' ? 'Hubungi Saya' : 'Contact Me'}
          </button>

        </div>

        {/* Hamburger Menu Toggle (Mobile Only) */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          title={menuOpen ? "Close Menu" : "Open Menu"}
          className={`lg:hidden p-2 rounded-lg border transition-all hover:scale-105 ${
            darkMode 
              ? 'border-white/10 hover:bg-white/5 text-gray-400 hover:text-white' 
              : 'border-black/10 hover:bg-black/5 text-gray-600 hover:text-black'
          }`}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Slide-down Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-slide-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className={`lg:hidden overflow-hidden mt-4 rounded-2xl border backdrop-blur-md shadow-xl ${
              darkMode ? 'border-white/5 bg-[#08080c]/95' : 'border-black/5 bg-white/95'
            }`}
          >
            <div className="p-5 flex flex-col gap-5">
              {/* Menu Links */}
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = currentTab === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`mobile-nav-link-${item.id}`}
                      onClick={() => {
                        handleTabClick(item.id);
                        setMenuOpen(false);
                      }}
                      className={`text-left py-2.5 px-4 rounded-xl font-sans text-sm font-semibold transition-all ${
                        isActive
                          ? darkMode
                            ? 'text-black bg-white shadow-sm'
                            : 'text-white bg-gray-900 shadow-sm'
                          : darkMode
                            ? 'text-gray-400 hover:text-white hover:bg-white/5'
                            : 'text-gray-600 hover:text-black hover:bg-black/5'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              <div className={`h-px w-full ${darkMode ? 'bg-white/10' : 'bg-black/10'}`} />

              {/* Settings and CTA Controls */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-2">
                  {/* Language Button */}
                  <button
                    id="mobile-lang-toggle"
                    onClick={toggleLanguage}
                    className={`p-2 rounded-lg border flex items-center gap-1.5 transition-all font-mono text-xs font-bold uppercase ${
                      darkMode 
                        ? 'border-white/10 bg-white/5 text-gray-300 hover:text-white' 
                        : 'border-black/10 bg-black/5 text-gray-700 hover:text-black'
                    }`}
                  >
                    <Languages className="w-3.5 h-3.5" />
                    <span>{lang}</span>
                  </button>

                  {/* Theme Button */}
                  <button
                    id="mobile-theme-toggle"
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-lg border transition-all ${
                      darkMode 
                        ? 'border-white/10 bg-white/5 text-gray-300 hover:text-white' 
                        : 'border-black/10 bg-black/5 text-gray-700 hover:text-black'
                    }`}
                  >
                    {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </button>
                </div>

                {/* Contact CTA */}
                <button
                  id="mobile-contact-cta"
                  onClick={() => {
                    handleTabClick('contact');
                    setMenuOpen(false);
                  }}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white shadow-md shadow-cyan-500/10"
                >
                  {lang === 'ID' ? 'Hubungi Saya' : 'Contact Me'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
