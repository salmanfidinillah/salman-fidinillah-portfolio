import { Mail } from 'lucide-react';
import { TranslationDict } from '../translations';
import { CalligraphyLogo } from './CalligraphyLogo';
import { SOCIAL_LINKS } from '../data';
import { SocialLinks } from './SocialLinks';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  lang: 'ID' | 'EN';
  darkMode: boolean;
  t: TranslationDict;
  soundEnabled: boolean;
}

export default function Footer({
  setCurrentTab,
  lang,
  darkMode,
  t,
  soundEnabled
}: FooterProps) {
  const playClickSound = () => {
    if (soundEnabled) {
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        gain.gain.setValueAtTime(0.02, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } catch (e) {}
    }
  };

  const handleNavClick = (tabId: string) => {
    playClickSound();
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="portfolio-footer"
      className={`border-t py-8 md:py-16 ${
        darkMode
          ? 'bg-[var(--surface)] border-[var(--line)] text-[var(--muted)]'
          : 'bg-[var(--surface)] border-[var(--line)] text-[var(--muted)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8 md:space-y-12">

        {/* Top Info row */}
        <div className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 text-left">

          {/* Column 1: Brand details (Always visible) */}
          <div className="footer-brand-column lg:col-span-4 space-y-4">
            <div
              id="footer-brand"
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => handleNavClick('home')}
            >
              <div className="w-8 h-8 rounded-lg     flex items-center justify-center shadow-none">
                <CalligraphyLogo className="w-5 h-5 text-[var(--ink)]" />
              </div>
              <span className={`font-display text-base font-bold tracking-tight ${
                darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
              }`}>
                salman<span className="text-[var(--accent-ink)]">segf</span>
              </span>
            </div>

            <p className="footer-tagline text-xs md:text-sm leading-relaxed max-w-xs">
              {t.footerTagline}
            </p>

            <a className="footer-mobile-email" href="mailto:salmansegaf52@gmail.com">salmansegaf52@gmail.com <span aria-hidden="true">↗</span></a>
            {/* Social row */}
            <div className="footer-socials flex items-center gap-2 pt-2">
              <SocialLinks
                links={SOCIAL_LINKS}
                variant="footer"
                darkMode={darkMode}
                onItemClick={() => playClickSound()}
              />
            </div>
          </div>

          {/* Column 2: Navigate links (Desktop only) */}
          <div className="footer-secondary hidden md:block lg:col-span-2 space-y-4">
            <h4 className={`text-xs font-bold tracking-widest uppercase font-mono ${
              darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
            }`}>
              {t.footerNavigate}
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm font-medium">
              {[
                { id: 'home', label: lang === 'ID' ? 'Beranda' : 'Home' },
                { id: 'journey', label: lang === 'ID' ? 'Pengalaman' : 'Journey' },
                { id: 'skills', label: lang === 'ID' ? 'Keahlian' : 'Skills' },
                { id: 'projects', label: lang === 'ID' ? 'Proyek' : 'Projects' },
                { id: 'blog', label: 'Blog' },
                { id: 'contact', label: lang === 'ID' ? 'Kontak' : 'Contact' }
              ].map((nav) => (
                <li key={nav.id}>
                  <button
                    onClick={() => handleNavClick(nav.id)}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {nav.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact (Desktop only) */}
          <div className="footer-secondary hidden md:block lg:col-span-3 space-y-4">
            <h4 className={`text-xs font-bold tracking-widest uppercase font-mono ${
              darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
            }`}>
              {t.footerContact}
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm font-medium">
              <li>
                <a
                  href="mailto:salmansegaf52@gmail.com"
                  aria-label="Kirim email ke salmansegaf52@gmail.com"
                  className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  salmansegaf52@gmail.com
                </a>
              </li>
              <li>
                <span>Indonesia · Siap Kerja Remote</span>
              </li>
              <li>
                <span className="text-emerald-400 inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Respon Cepat
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Main stack summary (Desktop only) */}
          <div className="footer-secondary hidden md:block lg:col-span-3 space-y-4">
            <h4 className={`text-xs font-bold tracking-widest uppercase font-mono ${
              darkMode ? 'text-[var(--ink)]' : 'text-[var(--ink)]'
            }`}>
              {t.footerStack}
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm font-medium">
              <li>React · TypeScript</li>
              <li>Next.js · TanStack</li>
              <li>Node · Postgres</li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line row */}
        <div className={`pt-6 md:pt-8 border-t flex flex-wrap items-center justify-between gap-4 text-xs ${
          darkMode ? 'border-[var(--line)] text-[var(--muted)]' : 'border-[var(--line)] text-[var(--muted)]'
        }`}>
          <span className="footer-copyright-desktop">
            © 2026 salmansegf · Salman Fidinillah · {t.footerCopyright}
          </span>
          <span className="footer-copyright-mobile">© 2026 Salman Fidinillah</span>

        </div>

      </div>
    </footer>
  );
}
