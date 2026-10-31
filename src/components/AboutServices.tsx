import { useState } from 'react';
import { LayoutGrid, Layers, Cpu, Award, Zap, QrCode, Globe, Linkedin, Instagram, RefreshCw } from 'lucide-react';
import DesignerAnimation from './DesignerAnimation';
import { TranslationDict } from '../translations';

interface AboutServicesProps {
  lang: 'ID' | 'EN';
  darkMode: boolean;
  t: TranslationDict;
  soundEnabled: boolean;
}

export default function AboutServices({ lang, t, soundEnabled }: AboutServicesProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const playFlipSound = () => {
    if (soundEnabled) {
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(330, ctx.currentTime); // E4 note
        osc.frequency.exponentialRampToValueAtTime(165, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      } catch (e) {}
    }
  };

  const handleFlip = () => {
    playFlipSound();
    setIsFlipped(!isFlipped);
  };

  const stats = [
    { value: '15+', label: t.completedProjects, icon: <LayoutGrid className="w-5 h-5 text-cyan-400" /> },
    { value: '10+', label: t.satisfiedClients, icon: <Award className="w-5 h-5 text-purple-400" /> },
    { value: '2+', label: t.yearsExp, icon: <Zap className="w-5 h-5 text-yellow-400" /> },
    { value: '15+', label: t.commitsThisYear, icon: <Cpu className="w-5 h-5 text-emerald-400" /> }
  ];

  const services = [
    {
      title: t.services.webDev.title,
      desc: t.services.webDev.desc,
      icon: <Globe className="w-6 h-6 text-white" />,
      color: 'from-cyan-500 to-blue-600',
      shadow: 'shadow-cyan-500/10'
    },
    {
      title: t.services.uiux.title,
      desc: t.services.uiux.desc,
      icon: <Layers className="w-6 h-6 text-white" />,
      color: 'from-purple-500 to-indigo-600',
      shadow: 'shadow-purple-500/10'
    },
    {
      title: t.services.api.title,
      desc: t.services.api.desc,
      icon: <Cpu className="w-6 h-6 text-white" />,
      color: 'from-indigo-500 to-blue-600',
      shadow: 'shadow-indigo-500/10'
    },
    {
      title: t.services.audit.title,
      desc: t.services.audit.desc,
      icon: <Zap className="w-6 h-6 text-white" />,
      color: 'from-yellow-500 to-orange-500',
      shadow: 'shadow-yellow-500/10'
    }
  ];

  return (
    <section id="about-section" className="about-section">
      <div className="page-width">
        <div className="section-heading"><span className="eyebrow">{lang === 'ID' ? 'Kisah Singkat' : 'Brief Bio'}</span><h2>{t.aboutTitle}</h2></div>
        <div className="about-composition">
          <div id="id-card-col" className="profile-column">
            <button className={`profile-flip ${isFlipped ? 'is-flipped' : ''}`} onClick={handleFlip} aria-pressed={isFlipped} aria-label={lang === 'ID' ? 'Balik kartu profil Salman Fidinillah' : 'Flip Salman Fidinillah profile card'}>
              <span className="profile-inner">
                <span className="profile-face profile-front" aria-hidden={isFlipped}>
                  <span className="eyebrow">SALMANSEGF SECURE</span>
                  <img src="/images/salman-fidinillah-profile.webp" alt="Salman Fidinillah Portrait" loading="lazy" width="300" height="280" />
                  <strong>Salman Fidinillah</strong><span className="profile-role">Fullstack Developer</span><span className="profile-meta">ID: #4ED87843</span>
                  <span className="profile-social-icons"><Globe size={16}/><Linkedin size={16}/><Instagram size={16}/></span>
                </span>
                <span className="profile-face profile-back" aria-hidden={!isFlipped}>
                  <span className="eyebrow">SYSTEM: AUTHORIZED CODER</span>
                  <QrCode className="profile-qr" size={120} />
                  <strong>@salmansegf</strong><span>Scan code or search handle to connect instantly across digital channels.</span>
                  <span className="profile-meta">SECURITY TYPE: SHA256<br />SALMAN V.2.6</span>
                </span>
              </span>
            </button>
            <button className="ui-button flip-helper" onClick={handleFlip}><RefreshCw size={15}/>{lang === 'ID' ? 'Sentuh untuk membalik →' : 'Tap to flip →'}</button>
          </div>
          <div className="about-copy">
            <p id="about-p1">{t.aboutText1}</p><p id="about-p2">{t.aboutText2}</p>
            <div id="about-stats-grid" className="stats-grid">{stats.map((stat, i) => <div key={stat.label} id={`stat-card-${i}`} className="stat-card"><span className="stat-icon">{stat.icon}</span><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
          </div>
        </div>
        <div id="services-grid-container" className="services-section">
          <div className="services-heading">
            <div className="section-heading"><span className="eyebrow">{t.whatIDo}</span><h3>{t.whatIDoSubtitle}</h3></div>
            <DesignerAnimation className="services-animation" />
          </div>
          <div className="services-grid">{services.map((service,i) => <div key={service.title} id={`service-card-${i}`} className="service-card"><div className="service-icon">{service.icon}</div><h4>{service.title}</h4><p>{service.desc}</p></div>)}</div>
        </div>
      </div>
    </section>
  );
}
