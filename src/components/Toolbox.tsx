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
    document.getElementById(`skill-stack-${stackNum}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };



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
    <section id="toolbox-section" className="editorial-page page-width">
      <div className="section-heading"><span className="eyebrow">{lang === 'ID' ? 'Peralatan Tempur' : 'My Stack'}</span><h1>{t.toolboxTitle}</h1><p>{t.toolboxSubtitle}</p></div>
      <div id="toolbox-categories-pill" className="filter-buttons skill-navigation">{SKILL_CATEGORIES.map(cat => <button className="ui-button filter-button" key={cat.stackNumber} id={`stack-pill-${cat.stackNumber}`} aria-pressed={activeStack === cat.stackNumber} onClick={() => handleStackChange(cat.stackNumber)}>{getStackIcon(cat.stackNumber)}{cat.title}</button>)}</div>
      <div id="toolbox-display-board" className="skill-stacks">{SKILL_CATEGORIES.map(category => <section className="skill-stack" id={`skill-stack-${category.stackNumber}`} key={category.stackNumber}><div className="section-heading"><span className="eyebrow">STACK - {category.stackNumber}</span><h2>{category.title}</h2></div><div className="skills-grid">{category.skills.map(skill => <div id={`skill-item-${skill.name}`} key={skill.name} className="skill-item" onMouseEnter={() => setHoveredSkill(skill.name)} onMouseLeave={() => setHoveredSkill(null)}>{renderSkillBadge(skill.name,skill.color)}<span>{skill.name}</span></div>)}</div></section>)}</div>
    </section>
  );
}
