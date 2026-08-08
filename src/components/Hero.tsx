import React, { useState } from 'react';
import { Terminal, FileText } from 'lucide-react';
import { TranslationDict } from '../translations';
import { SOCIAL_LINKS } from '../data';
import { SocialLinks } from './SocialLinks';

// Planetary System Orbit SVG Tech Icons
function ReactIcon() {
  return (
    <svg className="w-5 h-5 text-[#61DAFB]" viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
      <g stroke="currentColor">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );
}

function TsIcon() {
  return (
    <svg className="w-5 h-5 text-[#3178C6]" viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="12" fill="#3178C6"/>
      <text x="82" y="80" fill="white" fontSize="42" fontWeight="bold" textAnchor="end" fontFamily="Inter, sans-serif">TS</text>
    </svg>
  );
}

function JsIcon() {
  return (
    <svg className="w-5 h-5 text-[#F7DF1E]" viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="12" fill="#F7DF1E"/>
      <text x="82" y="80" fill="black" fontSize="42" fontWeight="bold" textAnchor="end" fontFamily="Inter, sans-serif">JS</text>
    </svg>
  );
}

function HtmlIcon() {
  return (
    <svg className="w-5 h-5 text-[#E34F26]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm10.5 19.3l5-1.6.6-6.6H7.3l-.2-2.5h10.4l.2-2.5H4.4l.7 7.6h7.3l-.1.9-2.2.7-2.2-.7-.1-1.3H5.6l.2 3.1 6.2 2z"/>
    </svg>
  );
}

function CssIcon() {
  return (
    <svg className="w-5 h-5 text-[#1572B6]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm10.5 19.3l5-1.6.6-6.6H5l-.5-5.1h13.2l.2-2.5H4.1l.9 10.1h7.4l-.1.9-2.2.7-2.2-.7-.1-1.3H5.6l.2 3.1 6.2 2z"/>
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg className="w-5 h-5 text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.999 0L2.148 5.688v11.375l9.851 5.688 9.854-5.688V5.688L11.999 0zm4.27 15.524l-1.533.885v-4.945l-2.737 1.579v3.366l-1.533.885v-4.251l2.737-1.58v-1.77L10.47 11.23v4.294l-1.533.885v-5.179l4.27-2.464V6.982l1.533-.885v2.668l1.531-.885v4.944l2.737-1.58V8.878l1.533-.885v4.251l-2.737 1.58v1.7z"/>
    </svg>
  );
}

function NextIcon() {
  return (
    <svg className="w-5 h-5 text-current" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
    </svg>
  );
}

function ExpressIcon() {
  return (
    <span className="text-[10px] font-extrabold tracking-tighter text-current font-mono select-none">EX</span>
  );
}

function DockerIcon() {
  return (
    <svg className="w-5 h-5 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.983 11.078h2.119c.102 0 .186-.083.186-.185V9.006a.185.185 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118c.103 0 .185-.083.185-.186V3.575a.186.186 0 0 0-.185-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118c.103 0 .185-.083.185-.186V6.29a.186.186 0 0 0-.185-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.953 2.715h2.119c.102 0 .185-.083.185-.185V9.006a.185.185 0 0 0-.185-.186h-2.119a.186.186 0 0 0-.186.186v1.888c0 .102.084.185.186.185m-2.955 0h2.119c.102 0 .185-.083.185-.185V9.006a.185.185 0 0 0-.185-.186H5.12a.185.185 0 0 0-.185.186v1.888c0 .102.083.185.185.185m-2.954 0h2.119c.102 0 .185-.083.185-.185V9.006a.185.185 0 0 0-.185-.186h-2.119a.186.186 0 0 0-.186.186v1.888c0 .102.084.185.186.185m1.316-2.715h2.119c.102 0 .186-.083.186-.186V6.29a.185.185 0 0 0-.186-.185H7.28a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m2.954 0h2.119c.102 0 .186-.083.186-.186V6.29a.185.185 0 0 0-.186-.185h-2.119a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-5.908 8.133c-.1 0-.17-.008-.19-.011a.094.094 0 0 1-.036-.017.06.06 0 0 1-.018-.027c-.012-.041-.038-.174-.038-.358 0-.819.344-1.789.967-2.732h-.002c.07-.107.113-.162.117-.168a.185.185 0 0 1 .155-.08h15.932c.11 0 .205.074.22.183.155.774.298 1.956-.37 3.018-.458.729-1.296 1.151-2.493 1.254a.185.185 0 0 1-.19-.117c-.368-.838-1.223-1.425-2.222-1.425h-.545c-.999 0-1.854.587-2.222 1.425a.185.185 0 0 1-.19.117H6.963a.185.185 0 0 1-.19-.117c-.368-.838-1.224-1.425-2.222-1.425h-.545c-.999 0-1.854.587-2.222 1.425a.185.185 0 0 1-.19.117z"/>
    </svg>
  );
}

function MongoIcon() {
  return (
    <svg className="w-5 h-5 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 24c-.03 0-.07 0-.1-.01-1.63-.5-4.04-2.82-5.38-5.18C4.54 15.39 3.9 12.03 4.58 8.64c.26-1.28.87-2.48 1.83-3.56 1.95-2.2 4.14-3.79 5.09-4.47l.48-.35.48.35c.95.68 3.14 2.27 5.09 4.47.96 1.08 1.57 2.28 1.83 3.56.68 3.39.04 6.75-1.93 10.17-1.34 2.36-3.75 4.68-5.38 5.18-.03.01-.07.01-.1.01zM12 2.54c-.58.46-2.28 1.86-3.86 3.64-.78.88-1.27 1.84-1.48 2.87-.55 2.76-.04 5.48 1.54 8.27 1.15 2.03 3.15 4 4.52 4.49V2.54h-1.02V2.54z"/>
    </svg>
  );
}

function PythonIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.012 0C5.394 0 5.85 2.874 5.85 2.874l.006 2.964h6.24v.882H3.591S0 6.273 0 11.907c0 5.637 3.12 5.433 3.12 5.433h1.86v-2.613s-.084-3.12 3.057-3.12H14.1S17.1 11.385 17.1 8.28V4.14S17.433 0 12.012 0zm-3.69 1.773a.925.925 0 1 1 0 1.85.925.925 0 0 1 0-1.85zM11.988 24c6.618 0 6.162-2.874 6.162-2.874l-.006-2.964H11.91v-.882h8.496s3.591.447 3.591-5.187c0-5.637-3.12-5.433-3.12-5.433h-1.86v2.613s.084 3.12-3.057 3.12H9.9s-3 2.223-3 5.328v4.14s-.333 4.14 5.088 4.14zm3.69-1.773a.925.925 0 1 1 0-1.85.925.925 0 0 1 0 1.85z" fill="url(#python-grad)" />
      <defs>
        <linearGradient id="python-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3776AB" />
          <stop offset="50%" stopColor="#3776AB" />
          <stop offset="100%" stopColor="#FFE873" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function GraphQLIcon() {
  return (
    <svg className="w-5 h-5 text-[#E10098]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm0 9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.276zm-8.542-4.93a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.277zm0-9.863a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.542-3.378L2.953 6.777v10.448l9.049 5.224 9.047-5.224V6.777zm0 1.601 7.66 13.27H4.34zm-1.387.371L3.97 15.037V7.363zm2.774 0 6.646 3.838v7.674zM5.355 17.44h13.293l-6.646 3.836z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-5 h-5 text-current" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

interface HeroProps {
  lang: 'ID' | 'EN';
  darkMode: boolean;
  t: TranslationDict;
  soundEnabled: boolean;
  setCurrentTab: (tab: string) => void;
}

export default function Hero({ lang, darkMode, t, soundEnabled, setCurrentTab }: HeroProps) {
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
    <section 
      id="hero-section"
      className="min-h-screen relative flex items-center justify-center pt-28 lg:pt-20 pb-12 overflow-hidden bg-grid-pattern"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center relative z-10">
        
        {/* Left Side: Text and Actions */}
        <div className="order-1 lg:col-span-7 flex flex-col items-start gap-5">
          
          {/* Availability Badge */}
          <div 
            id="status-badge"
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wider uppercase transition-all ${
              darkMode 
                ? 'bg-emerald-500/5 border-emerald-500/30 text-emerald-400 shadow-md shadow-emerald-500/5' 
                : 'bg-emerald-50 border-emerald-300 text-emerald-700 shadow-sm'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>{t.availableForWork}</span>
          </div>

          {/* Heading with Name */}
          <div id="hero-headline" className="space-y-2">
            <h1 className={`font-display text-4xl md:text-5xl lg:text-[5.5rem] font-bold tracking-tight leading-none ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Halo, Saya <br className="hidden md:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-sm font-extrabold">
                Salman
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent font-extrabold">
                Fidinillah
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <p id="hero-tagline" className={`text-base md:text-lg max-w-xl leading-relaxed transition-colors ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {t.heroTagline}
          </p>

          {/* Action CTAs */}
          <div id="hero-ctas" className="flex w-full sm:w-auto flex-wrap items-center gap-4 mt-2">
            <button
              id="cta-view-projects"
              onClick={() => {
                playSound(650, 0.08);
                setCurrentTab('projects');
              }}
              className="w-full sm:w-auto justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 transition-all hover:shadow-cyan-500/30 hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              <span>{t.viewProjects}</span>
            </button>
            <button
              id="cta-download-cv"
              onClick={handleDownloadCV}
              className={`w-full sm:w-auto justify-center px-6 py-3.5 rounded-xl border font-semibold text-sm transition-all hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer ${
                darkMode 
                  ? 'border-white/10 hover:border-white/30 text-white bg-white/5 hover:bg-white/10 shadow-sm' 
                  : 'border-black/10 hover:border-black/30 text-gray-800 bg-gray-50 hover:bg-gray-100 shadow-sm'
              }`}
            >
              <FileText className="w-4 h-4 text-cyan-500" />
              <span>{t.downloadCV}</span>
            </button>
          </div>

          {/* Find Me On Socials */}
          <div id="social-container" className="flex flex-col gap-2 mt-4">
            <span className={`text-xs font-bold tracking-wider uppercase ${
              darkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
              {t.findMeOn}
            </span>
            <div className="flex items-center gap-3">
              <SocialLinks 
                links={SOCIAL_LINKS} 
                variant="footer" 
                darkMode={darkMode} 
                onItemClick={(idx) => playSound(500 + idx * 50, 0.05)}
              />
            </div>
          </div>

        </div>

        {/* Right Side: Portrait Sphere & Shell Terminal */}
        <div id="avatar-col" className="order-2 lg:col-span-5 flex flex-col items-center justify-center relative">
          
          {/* Portrait Glowing Ring Container */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            
            {/* Spinning decorative background paths (dimmed) */}
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/10 animate-[spin_120s_linear_infinite] pointer-events-none" />
            <div className="absolute inset-4 rounded-full border border-purple-500/10 animate-[spin_90s_linear_infinite_reverse] pointer-events-none" />

            {/* Glowing outer radial gradient */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 opacity-20 blur-2xl pulse-glow pointer-events-none" />

            {/* PLANETARY SYSTEM ORBITS CONTAINER */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-[0.52] sm:scale-[0.68] md:scale-[0.72] lg:scale-100 origin-center z-10">
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes orbit-cw {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                @keyframes orbit-ccw {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(-360deg); }
                }
                .animate-orbit-cw {
                  animation: orbit-cw var(--speed, 40s) linear infinite;
                }
                .animate-orbit-ccw {
                  animation: orbit-ccw var(--speed, 40s) linear infinite;
                }
              `}} />

              {/* Orbit 1 Ring (Innermost) */}
              <div className="absolute w-[310px] h-[310px] rounded-full border border-black/[0.06] dark:border-white/[0.06] pointer-events-none" />
              {/* Orbit 1 Rotating System */}
              <div 
                className="absolute w-[310px] h-[310px] rounded-full animate-orbit-cw pointer-events-none" 
                style={{ '--speed': '30s' } as React.CSSProperties}
              >
                {/* HTML5 */}
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
                  style={{ transform: 'translate(-50%, -50%) rotate(0deg) translateY(-155px) rotate(0deg)' }}
                >
                  <div 
                    onMouseEnter={() => playSound(400, 0.05)}
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-full shadow-lg flex items-center justify-center border backdrop-blur-md transition-all hover:scale-125 duration-300 pointer-events-auto cursor-pointer animate-orbit-ccw ${
                      darkMode 
                        ? 'bg-[#0c0c12]/90 border-orange-500/30 text-white hover:border-orange-500 shadow-orange-500/10' 
                        : 'bg-white/95 border-orange-500/30 text-gray-800 hover:border-orange-500 shadow-md shadow-orange-500/5'
                    }`}
                    style={{ '--speed': '30s' } as React.CSSProperties}
                  >
                    <HtmlIcon />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-black/90 dark:bg-white/90 text-white dark:text-black text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-30">
                      HTML5
                    </div>
                  </div>
                </div>

                {/* CSS3 */}
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
                  style={{ transform: 'translate(-50%, -50%) rotate(120deg) translateY(-155px) rotate(-120deg)' }}
                >
                  <div 
                    onMouseEnter={() => playSound(440, 0.05)}
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-full shadow-lg flex items-center justify-center border backdrop-blur-md transition-all hover:scale-125 duration-300 pointer-events-auto cursor-pointer animate-orbit-ccw ${
                      darkMode 
                        ? 'bg-[#0c0c12]/90 border-blue-500/30 text-white hover:border-blue-500 shadow-blue-500/10' 
                        : 'bg-white/95 border-blue-500/30 text-gray-800 hover:border-blue-500 shadow-md shadow-blue-500/5'
                    }`}
                    style={{ '--speed': '30s' } as React.CSSProperties}
                  >
                    <CssIcon />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-black/90 dark:bg-white/90 text-white dark:text-black text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-30">
                      CSS3
                    </div>
                  </div>
                </div>

                {/* GraphQL */}
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
                  style={{ transform: 'translate(-50%, -50%) rotate(240deg) translateY(-155px) rotate(-240deg)' }}
                >
                  <div 
                    onMouseEnter={() => playSound(480, 0.05)}
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-full shadow-lg flex items-center justify-center border backdrop-blur-md transition-all hover:scale-125 duration-300 pointer-events-auto cursor-pointer animate-orbit-ccw ${
                      darkMode 
                        ? 'bg-[#0c0c12]/90 border-pink-500/30 text-white hover:border-pink-500 shadow-pink-500/10' 
                        : 'bg-white/95 border-pink-500/30 text-gray-800 hover:border-pink-500 shadow-md shadow-pink-500/5'
                    }`}
                    style={{ '--speed': '30s' } as React.CSSProperties}
                  >
                    <GraphQLIcon />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-black/90 dark:bg-white/90 text-white dark:text-black text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-30">
                      GraphQL
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbit 2 Ring (Middle) */}
              <div className="absolute w-[420px] h-[420px] rounded-full border border-black/[0.06] dark:border-white/[0.06] pointer-events-none" />
              {/* Orbit 2 Rotating System (Reverse CCW) */}
              <div 
                className="absolute w-[420px] h-[420px] rounded-full animate-orbit-ccw pointer-events-none" 
                style={{ '--speed': '45s' } as React.CSSProperties}
              >
                {/* Docker */}
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
                  style={{ transform: 'translate(-50%, -50%) rotate(45deg) translateY(-210px) rotate(-45deg)' }}
                >
                  <div 
                    onMouseEnter={() => playSound(520, 0.05)}
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-full shadow-lg flex items-center justify-center border backdrop-blur-md transition-all hover:scale-125 duration-300 pointer-events-auto cursor-pointer animate-orbit-cw ${
                      darkMode 
                        ? 'bg-[#0c0c12]/90 border-cyan-500/30 text-white hover:border-cyan-500 shadow-cyan-500/10' 
                        : 'bg-white/95 border-cyan-500/30 text-gray-800 hover:border-cyan-500 shadow-md shadow-cyan-500/5'
                    }`}
                    style={{ '--speed': '45s' } as React.CSSProperties}
                  >
                    <DockerIcon />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-black/90 dark:bg-white/90 text-white dark:text-black text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-30">
                      Docker
                    </div>
                  </div>
                </div>

                {/* Next.js */}
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
                  style={{ transform: 'translate(-50%, -50%) rotate(135deg) translateY(-210px) rotate(-135deg)' }}
                >
                  <div 
                    onMouseEnter={() => playSound(560, 0.05)}
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-full shadow-lg flex items-center justify-center border backdrop-blur-md transition-all hover:scale-125 duration-300 pointer-events-auto cursor-pointer animate-orbit-cw ${
                      darkMode 
                        ? 'bg-[#0c0c12]/90 border-gray-500/30 text-white hover:border-white shadow-gray-500/10' 
                        : 'bg-white/95 border-gray-300 text-gray-800 hover:border-gray-900 shadow-md shadow-gray-500/5'
                    }`}
                    style={{ '--speed': '45s' } as React.CSSProperties}
                  >
                    <NextIcon />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-black/90 dark:bg-white/90 text-white dark:text-black text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-30">
                      Next.js
                    </div>
                  </div>
                </div>

                {/* Express */}
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
                  style={{ transform: 'translate(-50%, -50%) rotate(225deg) translateY(-210px) rotate(-225deg)' }}
                >
                  <div 
                    onMouseEnter={() => playSound(600, 0.05)}
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-full shadow-lg flex items-center justify-center border backdrop-blur-md transition-all hover:scale-125 duration-300 pointer-events-auto cursor-pointer animate-orbit-cw ${
                      darkMode 
                        ? 'bg-[#0c0c12]/90 border-gray-400/30 text-white hover:border-gray-300 shadow-gray-400/10' 
                        : 'bg-white/95 border-gray-300 text-gray-800 hover:border-gray-800 shadow-md shadow-gray-400/5'
                    }`}
                    style={{ '--speed': '45s' } as React.CSSProperties}
                  >
                    <ExpressIcon />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-black/90 dark:bg-white/90 text-white dark:text-black text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-30">
                      Express
                    </div>
                  </div>
                </div>

                {/* GitHub */}
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
                  style={{ transform: 'translate(-50%, -50%) rotate(315deg) translateY(-210px) rotate(-315deg)' }}
                >
                  <div 
                    onMouseEnter={() => playSound(640, 0.05)}
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-full shadow-lg flex items-center justify-center border backdrop-blur-md transition-all hover:scale-125 duration-300 pointer-events-auto cursor-pointer animate-orbit-cw ${
                      darkMode 
                        ? 'bg-[#0c0c12]/90 border-purple-500/30 text-white hover:border-purple-400 shadow-purple-500/10' 
                        : 'bg-white/95 border-purple-500/30 text-gray-800 hover:border-purple-600 shadow-md shadow-purple-500/5'
                    }`}
                    style={{ '--speed': '45s' } as React.CSSProperties}
                  >
                    <GitHubIcon />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-black/90 dark:bg-white/90 text-white dark:text-black text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-30">
                      GitHub
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbit 3 Ring (Outermost) */}
              <div className="absolute w-[540px] h-[540px] rounded-full border border-black/[0.06] dark:border-white/[0.06] pointer-events-none" />
              {/* Orbit 3 Rotating System */}
              <div 
                className="absolute w-[540px] h-[540px] rounded-full animate-orbit-cw pointer-events-none" 
                style={{ '--speed': '60s' } as React.CSSProperties}
              >
                {/* React */}
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
                  style={{ transform: 'translate(-50%, -50%) rotate(0deg) translateY(-270px) rotate(0deg)' }}
                >
                  <div 
                    onMouseEnter={() => playSound(680, 0.05)}
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-full shadow-lg flex items-center justify-center border backdrop-blur-md transition-all hover:scale-125 duration-300 pointer-events-auto cursor-pointer animate-orbit-ccw ${
                      darkMode 
                        ? 'bg-[#0c0c12]/90 border-cyan-400/30 text-white hover:border-cyan-400 shadow-cyan-400/10' 
                        : 'bg-white/95 border-cyan-400/30 text-gray-800 hover:border-cyan-500 shadow-md shadow-cyan-400/5'
                    }`}
                    style={{ '--speed': '60s' } as React.CSSProperties}
                  >
                    <ReactIcon />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-black/90 dark:bg-white/90 text-white dark:text-black text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-30">
                      React
                    </div>
                  </div>
                </div>

                {/* JavaScript */}
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
                  style={{ transform: 'translate(-50%, -50%) rotate(60deg) translateY(-270px) rotate(-60deg)' }}
                >
                  <div 
                    onMouseEnter={() => playSound(720, 0.05)}
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-full shadow-lg flex items-center justify-center border backdrop-blur-md transition-all hover:scale-125 duration-300 pointer-events-auto cursor-pointer animate-orbit-ccw ${
                      darkMode 
                        ? 'bg-[#0c0c12]/90 border-yellow-400/30 text-white hover:border-yellow-400 shadow-yellow-400/10' 
                        : 'bg-white/95 border-yellow-400/30 text-gray-800 hover:border-yellow-500 shadow-md shadow-yellow-400/5'
                    }`}
                    style={{ '--speed': '60s' } as React.CSSProperties}
                  >
                    <JsIcon />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-black/90 dark:bg-white/90 text-white dark:text-black text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-30">
                      JavaScript
                    </div>
                  </div>
                </div>

                {/* TypeScript */}
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
                  style={{ transform: 'translate(-50%, -50%) rotate(120deg) translateY(-270px) rotate(-120deg)' }}
                >
                  <div 
                    onMouseEnter={() => playSound(760, 0.05)}
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-full shadow-lg flex items-center justify-center border backdrop-blur-md transition-all hover:scale-125 duration-300 pointer-events-auto cursor-pointer animate-orbit-ccw ${
                      darkMode 
                        ? 'bg-[#0c0c12]/90 border-blue-400/30 text-white hover:border-blue-400 shadow-blue-400/10' 
                        : 'bg-white/95 border-blue-400/30 text-gray-800 hover:border-blue-500 shadow-md shadow-blue-400/5'
                    }`}
                    style={{ '--speed': '60s' } as React.CSSProperties}
                  >
                    <TsIcon />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-black/90 dark:bg-white/90 text-white dark:text-black text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-30">
                      TypeScript
                    </div>
                  </div>
                </div>

                {/* Node.js */}
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
                  style={{ transform: 'translate(-50%, -50%) rotate(180deg) translateY(-270px) rotate(-180deg)' }}
                >
                  <div 
                    onMouseEnter={() => playSound(800, 0.05)}
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-full shadow-lg flex items-center justify-center border backdrop-blur-md transition-all hover:scale-125 duration-300 pointer-events-auto cursor-pointer animate-orbit-ccw ${
                      darkMode 
                        ? 'bg-[#0c0c12]/90 border-green-400/30 text-white hover:border-green-400 shadow-green-400/10' 
                        : 'bg-white/95 border-green-400/30 text-gray-800 hover:border-green-500 shadow-md shadow-green-400/5'
                    }`}
                    style={{ '--speed': '60s' } as React.CSSProperties}
                  >
                    <NodeIcon />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-black/90 dark:bg-white/90 text-white dark:text-black text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-30">
                      Node.js
                    </div>
                  </div>
                </div>

                {/* Python */}
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
                  style={{ transform: 'translate(-50%, -50%) rotate(240deg) translateY(-270px) rotate(-240deg)' }}
                >
                  <div 
                    onMouseEnter={() => playSound(840, 0.05)}
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-full shadow-lg flex items-center justify-center border backdrop-blur-md transition-all hover:scale-125 duration-300 pointer-events-auto cursor-pointer animate-orbit-ccw ${
                      darkMode 
                        ? 'bg-[#0c0c12]/90 border-yellow-500/30 text-white hover:border-yellow-500 shadow-yellow-500/10' 
                        : 'bg-white/95 border-yellow-500/30 text-gray-800 hover:border-yellow-600 shadow-md shadow-yellow-500/5'
                    }`}
                    style={{ '--speed': '60s' } as React.CSSProperties}
                  >
                    <PythonIcon />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-black/90 dark:bg-white/90 text-white dark:text-black text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-30">
                      Python
                    </div>
                  </div>
                </div>

                {/* MongoDB */}
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
                  style={{ transform: 'translate(-50%, -50%) rotate(300deg) translateY(-270px) rotate(-300deg)' }}
                >
                  <div 
                    onMouseEnter={() => playSound(880, 0.05)}
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-full shadow-lg flex items-center justify-center border backdrop-blur-md transition-all hover:scale-125 duration-300 pointer-events-auto cursor-pointer animate-orbit-ccw ${
                      darkMode 
                        ? 'bg-[#0c0c12]/90 border-emerald-500/30 text-white hover:border-emerald-500 shadow-emerald-500/10' 
                        : 'bg-white/95 border-emerald-500/30 text-gray-800 hover:border-emerald-500 shadow-md shadow-emerald-500/5'
                    }`}
                    style={{ '--speed': '60s' } as React.CSSProperties}
                  >
                    <MongoIcon />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-black/90 dark:bg-white/90 text-white dark:text-black text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-30">
                      MongoDB
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Main Avatar Card Frame */}
            <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 z-20 ${
              darkMode ? 'border-white/5' : 'border-gray-900/5'
            } shadow-2xl`}>
              <img 
                src="/images/salman-fidinillah-profile.webp" 
                alt="Salman Fidinillah" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>

            {/* FLOATING CARD 1: Role */}
            <div 
              id="float-role"
              className={`absolute -top-4 left-0 px-4 py-2 rounded-2xl border flex items-center gap-2 shadow-lg backdrop-blur-md transition-transform hover:scale-105 z-30 ${
                darkMode 
                  ? 'bg-[#0c0c12]/85 border-white/10 text-white' 
                  : 'bg-white/85 border-black/10 text-gray-900'
              }`}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-gray-500 font-bold">Role</span>
                <span className="text-xs font-extrabold">{t.roleTitle}</span>
              </div>
            </div>

            {/* FLOATING CARD 2: Location */}
            <div 
              id="float-location"
              className={`absolute -bottom-4 right-0 px-4 py-2 rounded-2xl border flex items-center gap-2 shadow-lg backdrop-blur-md transition-transform hover:scale-105 z-30 ${
                darkMode 
                  ? 'bg-[#0c0c12]/85 border-white/10 text-white' 
                  : 'bg-white/85 border-black/10 text-gray-900'
              }`}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-gray-500 font-bold">Location</span>
                <span className="text-xs font-extrabold">{t.locationTitle}</span>
              </div>
            </div>

          </div>

          {/* Floating Shell Terminal */}
          <div 
            id="hero-terminal"
            className="w-full max-w-sm mt-8 rounded-2xl border shadow-2xl overflow-hidden glass-panel backdrop-blur-xl transition-all hover:border-cyan-500/30 text-left"
          >
            {/* Window Header */}
            <div className="px-4 py-3 bg-white/5 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="font-mono text-[10px] text-gray-400 flex items-center gap-1">
                <Terminal className="w-3 h-3 text-cyan-400" /> salmansegf@dev - zsh
              </span>
              <span className="w-4" />
            </div>

            {/* Terminal Screen */}
            <div className="p-4 font-mono text-xs space-y-2 h-44 overflow-y-auto no-scrollbar bg-black/40 text-gray-300">
              {terminalHistory.map((line, idx) => {
                if (line.startsWith('$')) {
                  return (
                    <div key={idx} className="flex items-start text-cyan-400">
                      <span className="text-purple-400 mr-2">salmansegf@dev:~$</span>
                      <span>{line.substring(2)}</span>
                    </div>
                  );
                }
                return (
                  <div 
                    key={idx} 
                    className={`${
                      line.startsWith('✓') 
                        ? 'text-emerald-400' 
                        : line.startsWith('Available') || line.startsWith('🤫') || line.startsWith('🎵')
                          ? 'text-purple-300' 
                          : 'text-gray-400'
                    } whitespace-pre-wrap leading-relaxed`}
                  >
                    {line}
                  </div>
                );
              })}
              
              {/* Active prompt form */}
              <form onSubmit={handleTerminalSubmit} className="flex items-center text-cyan-400">
                <span className="text-purple-400 mr-2">salmansegf@dev:~$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder='Type "help"...'
                  className="bg-transparent border-none outline-none flex-1 text-cyan-400 caret-cyan-400 font-mono focus:ring-0 p-0 text-xs"
                />
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
