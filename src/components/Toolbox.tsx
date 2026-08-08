import { useState } from 'react';
import { Layers, Server, Database, Brain, Wrench, Palette, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';
import { TranslationDict } from '../translations';
import TechLogo from './TechLogos';

interface ToolboxProps {
  lang: 'ID' | 'EN';
  darkMode: boolean;
  t: TranslationDict;
  soundEnabled: boolean;
}

export default function Toolbox({ lang, darkMode, t, soundEnabled }: ToolboxProps) {
  const [activeStack, setActiveStack] = useState<number>(1);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const playTabSound = () => {
    if (soundEnabled) {
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5 note
        osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.08); // G5 note
        gain.gain.setValueAtTime(0.03, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      } catch (e) {}
    }
  };

  const handleStackChange = (stackNum: number) => {
    playTabSound();
    setActiveStack(stackNum);
  };

  const currentCategory = SKILL_CATEGORIES.find(cat => cat.stackNumber === activeStack) || SKILL_CATEGORIES[0];

  const getStackIcon = (num: number) => {
    switch (num) {
      case 1: return <Layers className="w-5 h-5" />;
      case 2: return <Server className="w-5 h-5" />;
      case 3: return <Database className="w-5 h-5" />;
      case 4: return <Brain className="w-5 h-5" />;
      case 5: return <Wrench className="w-5 h-5" />;
      case 6: return <Palette className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  // Helper to generate a dynamic abstract vector logo badge if a real logo is not loaded
  const renderSkillBadge = (name: string, color: string) => {
    return (
      <div 
        className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-extrabold font-mono transition-transform duration-300 relative"
        style={{ 
          background: darkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
          border: hoveredSkill === name ? `2px solid ${color}` : `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
          boxShadow: hoveredSkill === name ? `0 0 16px ${color}25` : 'none',
        }}
      >
        <TechLogo name={name} color={color} darkMode={darkMode} />
        {hoveredSkill === name && (
          <span 
            className="absolute inset-0 rounded-full animate-ping opacity-25"
            style={{ backgroundColor: color }}
          />
        )}
      </div>
    );
  };

  return (
    <section 
      id="toolbox-section"
      className="py-24 relative overflow-hidden bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase ${
            darkMode ? 'bg-white/5 text-gray-400' : 'bg-black/5 text-gray-600'
          }`}>
            {lang === 'ID' ? 'Peralatan Tempur' : 'My Stack'}
          </div>
          <h2 className={`font-display text-3xl md:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {lang === 'ID' ? 'Teknologi & ' : 'Tech Stack & '}<span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Ekosistem</span>
          </h2>
          <p className={`text-sm md:text-base max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {t.toolboxSubtitle}
          </p>
        </div>

        {/* Categories Tab Pill Selector */}
        <div 
          id="toolbox-categories-pill"
          className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto mb-16"
        >
          {SKILL_CATEGORIES.map((cat) => {
            const isSelected = activeStack === cat.stackNumber;
            return (
              <button
                key={cat.stackNumber}
                id={`stack-pill-${cat.stackNumber}`}
                onClick={() => handleStackChange(cat.stackNumber)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-sans text-xs md:text-sm font-semibold transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-lg shadow-cyan-500/10'
                    : darkMode
                      ? 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                      : 'bg-black/5 text-gray-600 hover:text-black hover:bg-black/10'
                }`}
              >
                {getStackIcon(cat.stackNumber)}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Arena */}
        <div 
          id="toolbox-display-board"
          className={`p-6 sm:p-8 md:p-12 rounded-3xl border relative overflow-hidden transition-all duration-500 text-center max-w-5xl mx-auto ${
            darkMode 
              ? 'bg-[#0c0c12]/50 border-white/5 shadow-2xl shadow-cyan-500/5' 
              : 'bg-white border-black/5 shadow-2xl shadow-black/5'
          }`}
        >
          {/* Subtle neon glowing accent */}
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl" />
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />

          {/* Stack Label Title */}
          <div className="space-y-2 mb-12">
            <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest">
              STACK - {currentCategory.stackNumber}
            </span>
            <h3 className={`font-display text-2xl md:text-3xl font-extrabold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {currentCategory.title}
            </h3>
          </div>

          {/* Skills Hex Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center">
            {currentCategory.skills.map((skill, index) => (
              <div
                key={index}
                id={`skill-item-${skill.name}`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="flex flex-col items-center gap-3 transition-transform hover:scale-105"
              >
                {/* Circular Skill Logo Badge */}
                {renderSkillBadge(skill.name, skill.color)}

                {/* Skill Name */}
                <span 
                  className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors duration-300"
                  style={{ 
                    color: hoveredSkill === skill.name ? skill.color : (darkMode ? '#9ca3af' : '#4b5563') 
                  }}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
