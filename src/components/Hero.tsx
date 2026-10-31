import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TranslationDict } from '../translations';
import { SOCIAL_LINKS } from '../data';
import DesignerAnimation from './DesignerAnimation';

interface HeroProps {
  lang: 'ID' | 'EN';
  darkMode: boolean;
  t: TranslationDict;
  soundEnabled: boolean;
  setCurrentTab: (tab: string) => void;
}

export default function Hero({ lang, t, soundEnabled, setCurrentTab }: HeroProps) {
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'npm run build',
    '✓ compiled successfully',
    'deploy -_'
  ]);
  const [terminalInput, setTerminalInput] = useState('');

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

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    playSound(500, 0.05, 'triangle');
    const cmd = terminalInput.trim().toLowerCase();
    const newHistory = [...terminalHistory, `$ ${terminalInput}`];

    let reply = '';
    if (cmd === 'help') {
      reply = 'Available commands: about, projects, contact, skills, clear, sfx, secret';
    } else if (cmd === 'about') {
      reply = lang === 'ID'
        ? 'Salman Fidinillah - Fullstack Developer berfokus pada performa tinggi & desain UI/UX terarah.'
        : 'Salman Fidinillah - Fullstack Developer focusing on high performance & purposeful UI/UX design.';
    } else if (cmd === 'projects') {
      reply = 'Cyber Academy AI, InvitaLab, Kangen Haramain, ScanMed AI';
    } else if (cmd === 'skills') {
      reply = 'Frontend: React, Next.js, Vue, Svelte, TS. Backend: Node, Express, Nest, Go, Laravel, PHP.';
    } else if (cmd === 'contact') {
      reply = 'salmansegaf52@gmail.com | WA: 087762342876';
    } else if (cmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else if (cmd === 'sfx') {
      reply = '🎵 Playing system diagnostic sounds!';
      playSound(880, 0.3, 'sine');
      setTimeout(() => playSound(1320, 0.3, 'sine'), 100);
    } else if (cmd === 'secret') {
      reply = '🤫 Secret unlocked! salmansegf is ready to build your next-gen high-performance application.';
    } else {
      reply = `Command not found: "${terminalInput}". Type "help" for a list of commands.`;
    }

    setTerminalHistory([...newHistory, reply]);
    setTerminalInput('');
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
          <div id="status-badge" className="availability">{t.availableForWork}</div>
          <p className="hero-greeting">{lang === 'ID' ? 'Halo, Saya' : "Hello, I’m"}</p>
          <h1 id="hero-headline">Salman<br />Fidinillah</h1>
          <p id="hero-tagline" className="hero-tagline">{t.heroTagline}</p>
          <div id="hero-ctas" className="hero-actions">
            <button id="cta-view-projects" className="ui-button ui-primary" onClick={() => { playSound(650, 0.08); setCurrentTab('projects'); }}>{t.viewProjects}</button>
            <button id="cta-download-cv" className="ui-button" onClick={handleDownloadCV}>{t.downloadCV}</button>
          </div>
          <div id="social-container" className="hero-socials">
            <span className="eyebrow">{t.findMeOn}</span>
            <div className="social-text-links">{SOCIAL_LINKS.map((link, i) => <a key={link.name} href={link.url} target={link.url.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer" onClick={() => playSound(500 + i * 50, 0.05)}>{link.name}</a>)}</div>
          </div>
        </motion.div>
        <div id="avatar-col" className="hero-visual">
          <div className="portrait-collage">
            <div className="portrait-image"><img src="/images/salman-fidinillah-profile.webp" alt="Salman Fidinillah" width="600" height="480" fetchPriority="high" /></div>
            <h2 id="float-role">{t.roleTitle}</h2>
            <p id="float-location">{t.locationTitle}</p>
            <div className="hero-animation-sticker"><DesignerAnimation /></div>
          </div>
          <div id="hero-terminal" className="editorial-terminal">
            <div className="terminal-title"><span aria-hidden="true">● ● ●</span><span>salmansegf@dev - zsh</span></div>
            <div className="terminal-screen">
              <div className="terminal-history" aria-live="polite">{terminalHistory.map((line, i) => <p key={i} className={line.startsWith('✓') ? 'terminal-success' : ''}>{line}</p>)}</div>
              <form onSubmit={handleTerminalSubmit} className="terminal-prompt">
                <label htmlFor="terminal-input">salmansegf@dev:~$</label>
                <input id="terminal-input" autoComplete="off" spellCheck={false} type="text" value={terminalInput} onChange={e => setTerminalInput(e.target.value)} placeholder='Type "help"...' aria-label={lang === 'ID' ? 'Perintah terminal, ketik help' : 'Terminal command, type help'} />
              </form>
            </div>
          </div>
          <p className="hero-technologies">HTML5 · CSS3 · GraphQL · Docker · Next.js · Express · GitHub · React · JavaScript · TypeScript · Node.js · Python · MongoDB</p>
        </div>
      </div>
    </section>
  );
}
