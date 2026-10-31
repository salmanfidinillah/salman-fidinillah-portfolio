import type { CSSProperties } from 'react';
import { motion } from 'motion/react';
import { TranslationDict } from '../translations';
import { SOCIAL_LINKS } from '../data';
import { SocialIcon } from './SocialLinks';

interface HeroProps {
  lang: 'ID' | 'EN';
  darkMode: boolean;
  t: TranslationDict;
  soundEnabled: boolean;
  setCurrentTab: (tab: string) => void;
}

export default function Hero({ lang, t, soundEnabled, setCurrentTab }: HeroProps) {
  const playSound = (freq = 600, duration = 0.08, type: OscillatorType = 'sine') => {
    if (soundEnabled) {
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration);
      } catch (e) {}
    }
  };

  const handleDownloadCV = () => {
    playSound(400, 0.1);
    const downloadLink = document.createElement('a');
    downloadLink.href = '/cv/Salman-Fidinillah-CV.pdf';
    downloadLink.download = 'Salman-Fidinillah-CV.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
  };

  return (
    <section id="hero-section" className="editorial-hero page-width">
      <div className="hero-composition">
        <motion.div className="hero-introduction" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <img className="hero-avatar" src="/images/salman-fidinillah-profile.webp" alt="" width="88" height="88" fetchPriority="high" />
          <p className="hero-greeting">{lang === 'ID' ? 'Halo, Saya' : "Hello, I’m"}</p>
          <h1 id="hero-headline" aria-label="Salman Fidinillah">
            {['Salman', 'Fidinillah'].map((word, wordIndex) => <span className="hero-name-word" key={word} aria-hidden="true">{[...word].map((letter, index) => <span className="name-character" key={index} style={{ '--letter-index': index + wordIndex * 6 } as CSSProperties}>{letter}</span>)}</span>)}
          </h1>
          <p id="hero-tagline" className="hero-tagline">{t.heroTagline}</p>
          <div id="hero-ctas" className="hero-actions">
            <button id="cta-view-projects" className="ui-button ui-primary" onClick={() => { playSound(650, 0.08); setCurrentTab('projects'); }}>{t.viewProjects}</button>
            <button id="cta-download-cv" className="ui-button" onClick={handleDownloadCV}>{t.downloadCV}</button>
          </div>
          <div id="social-container" className="hero-socials">
            <span className="eyebrow">{t.findMeOn}</span>
            <nav className="social-dock" aria-label={t.findMeOn}>
              {SOCIAL_LINKS.map((link, i) => <a key={link.name} href={link.url} target={link.url.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer" aria-label={link.name} title={link.name} onClick={() => playSound(500 + i * 50, 0.05)}>
                <SocialIcon icon={link.icon} name={link.name} className="social-dock-icon" />
                <span className="dock-tooltip" aria-hidden="true">{link.name}</span>
              </a>)}
            </nav>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
