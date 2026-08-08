import { useState } from 'react';
import { LayoutGrid, Layers, Cpu, Award, Zap, QrCode, Globe, Linkedin, Instagram, RefreshCw } from 'lucide-react';
import { TranslationDict } from '../translations';

interface AboutServicesProps {
  lang: 'ID' | 'EN';
  darkMode: boolean;
  t: TranslationDict;
  soundEnabled: boolean;
}

export default function AboutServices({ lang, darkMode, t, soundEnabled }: AboutServicesProps) {
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
    <section 
      id="about-section"
      className="py-24 relative overflow-hidden bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* About Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <div className="space-y-4">
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase ${
                darkMode ? 'bg-white/5 text-gray-400' : 'bg-black/5 text-gray-600'
              }`}>
                {lang === 'ID' ? 'Kisah Singkat' : 'Brief Bio'}
              </div>
              <h2 className={`font-display text-3xl md:text-5xl font-extrabold tracking-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {lang === 'ID' ? 'Tentang ' : 'About '}<span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Saya</span>
              </h2>
            </div>

            <div className={`space-y-6 text-sm md:text-base leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <p id="about-p1">
                {t.aboutText1}
              </p>
              <p id="about-p2">
                {t.aboutText2}
              </p>
            </div>

            {/* Metrics Dashboard */}
            <div id="about-stats-grid" className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  id={`stat-card-${index}`}
                  className={`p-4 rounded-2xl border transition-all hover:-translate-y-1 ${
                    darkMode 
                      ? 'bg-[#0c0c12]/50 border-white/5 hover:border-white/15 hover:bg-white/5' 
                      : 'bg-white/80 border-black/5 hover:border-black/10 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {stat.icon}
                  </div>
                  <div className={`text-2xl md:text-3xl font-extrabold font-display ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-[10px] md:text-xs font-medium uppercase tracking-wider ${
                    darkMode ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right ID Card (Interactive Flip Card) */}
          <div id="id-card-col" className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Card Frame 3D Container */}
            <div className="perspective-1000 w-[280px] h-[400px] md:w-[320px] md:h-[450px] relative cursor-pointer" onClick={handleFlip}>
              
              <div 
                className={`w-full h-full duration-700 preserve-3d relative ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                
                {/* FRONT OF THE CARD */}
                <div className={`absolute inset-0 backface-hidden rounded-3xl p-6 border flex flex-col justify-between overflow-hidden shadow-2xl ${
                  darkMode 
                    ? 'bg-[#0c0c12] border-white/10 text-white' 
                    : 'bg-[#12121e] border-white/10 text-white' /* Hardcode to beautiful dark for ID Card as requested */
                }`}>
                  {/* Neon decorative grid lines inside the card */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />

                  {/* Top bar of Card */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <div className="w-1 h-1 rounded-full bg-yellow-400" />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-400 font-bold">SALMANSEGF SECURE</span>
                  </div>

                  {/* Central details (Portrait & Name) */}
                  <div className="flex flex-col items-center gap-4 relative z-10 my-auto text-center">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-cyan-500/40 p-1 bg-[#08080c] shadow-lg shadow-cyan-500/25">
                      <img 
                        src="/images/salman-fidinillah-profile.webp" 
                        alt="Salman Fidinillah Portrait" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover rounded-full grayscale"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-display text-lg md:text-xl font-extrabold tracking-tight uppercase leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Salman Fidinillah
                      </h3>
                      <p className="font-mono text-[10px] md:text-xs text-cyan-400 font-bold uppercase tracking-widest">
                        Fullstack Developer
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Details */}
                  <div className="flex items-end justify-between relative z-10 border-t border-white/5 pt-4">
                    <div className="flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-gray-500" />
                      <Linkedin className="w-3.5 h-3.5 text-gray-500" />
                      <Instagram className="w-3.5 h-3.5 text-gray-500" />
                    </div>
                    <span className="font-mono text-[8px] text-gray-500">ID: #4ED87843</span>
                  </div>

                </div>

                {/* BACK OF THE CARD */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl p-6 border border-white/10 flex flex-col justify-between overflow-hidden shadow-2xl bg-[#08080c] text-white">
                  
                  {/* Decorative circuit pattern */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl" />

                  {/* Back Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] text-gray-500">SYSTEM: AUTHORIZED CODER</span>
                    <RefreshCw className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
                  </div>

                  {/* Back QR and Handle Details */}
                  <div className="flex flex-col items-center gap-4 my-auto relative z-10">
                    <div className="p-3 bg-white rounded-2xl shadow-xl shadow-purple-500/10">
                      <QrCode className="w-24 h-24 text-black" />
                    </div>
                    <div className="text-center space-y-1">
                      <span className="font-mono text-xs text-purple-400 font-extrabold">@salmansegf</span>
                      <p className="text-[10px] text-gray-500 max-w-[180px] leading-relaxed mx-auto">
                        Scan code or search handle to connect instantly across digital channels.
                      </p>
                    </div>
                  </div>

                  {/* Back Bottom */}
                  <div className="border-t border-white/5 pt-4 flex justify-between items-center text-[8px] font-mono text-gray-500">
                    <span>SECURITY TYPE: SHA256</span>
                    <span>SALMAN V.2.6</span>
                  </div>

                </div>

              </div>

            </div>

            {/* Tap To Flip Helper Text */}
            <p className={`text-xs font-semibold mt-4 flex items-center gap-1.5 tracking-wider uppercase ${
              darkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{lang === 'ID' ? 'Sentuh untuk membalik →' : 'Tap to flip →'}</span>
            </p>

          </div>

        </div>

        {/* SERVICES SECTION */}
        <div id="services-grid-container" className="pt-24 space-y-12">
          
          <div className="text-center space-y-3">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase ${
              darkMode ? 'bg-white/5 text-gray-400' : 'bg-black/5 text-gray-600'
            }`}>
              {t.whatIDo}
            </div>
            <h3 className={`font-display text-3xl md:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {t.whatIDoSubtitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                id={`service-card-${index}`}
                className={`p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-start gap-4 text-left ${
                  darkMode 
                    ? 'bg-[#0c0c12]/40 border-white/5 hover:border-white/15 shadow-sm' 
                    : 'bg-white/80 border-black/5 hover:border-black/10 shadow-sm'
                }`}
              >
                {/* Icon Circle Wrapper */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${service.color} ${service.shadow} flex items-center justify-center`}>
                  {service.icon}
                </div>
                
                <div className="space-y-2">
                  <h4 className={`text-lg font-bold font-display ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h4>
                  <p className={`text-xs md:text-sm leading-relaxed ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Tailwind Perspective Utility injection styling */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
