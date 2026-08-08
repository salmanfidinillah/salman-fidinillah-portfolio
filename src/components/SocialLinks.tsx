import React from 'react';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Facebook, 
  Send, 
  Globe, 
  Twitter, 
  ArrowUpRight 
} from 'lucide-react';
import { SocialLink } from '../types';

// Map known keys to Lucide icon components
const lucideIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  mail: Mail,
  email: Mail,
  facebook: Facebook,
  telegram: Send,
  send: Send,
  globe: Globe,
  twitter: Twitter,
};

interface SocialIconProps {
  icon: string;
  className?: string;
  name: string;
}

export function SocialIcon({ icon, className = "w-5 h-5", name }: SocialIconProps) {
  const iconLower = icon.toLowerCase().trim();

  // 1. If it maps to a Lucide icon
  if (lucideIconMap[iconLower]) {
    const IconComp = lucideIconMap[iconLower];
    return <IconComp className={className} />;
  }

  // 2. If it is an image path or URL
  if (
    icon.startsWith('http://') || 
    icon.startsWith('https://') || 
    icon.startsWith('/') || 
    icon.match(/\.(png|jpe?g|gif|svg|webp|avif)$/i)
  ) {
    return (
      <img 
        src={icon} 
        alt={name} 
        className={`${className} object-contain`} 
        referrerPolicy="no-referrer"
      />
    );
  }

  // 3. If it looks like raw SVG path or complete SVG markup
  if (icon.includes('<svg') || icon.includes('<path') || icon.includes('M')) {
    // If it's just path data, wrap in SVG
    if (!icon.includes('<svg')) {
      return (
        <svg 
          className={className} 
          viewBox="0 0 24 24" 
          fill="currentColor"
          aria-hidden="true"
        >
          <path d={icon} />
        </svg>
      );
    }
    // If it's a full SVG string, we can inject it safely
    return (
      <span 
        className={className} 
        dangerouslySetInnerHTML={{ __html: icon }} 
      />
    );
  }

  // Fallback to a default globe or first letter of name
  return <Globe className={className} />;
}

interface SocialLinksProps {
  links: SocialLink[];
  variant?: 'hero' | 'contact' | 'footer';
  className?: string;
  itemClassName?: string;
  iconClassName?: string;
  darkMode?: boolean;
  onItemClick?: (index: number) => void;
}

export function SocialLinks({ 
  links, 
  variant = 'hero', 
  className = "", 
  itemClassName = "", 
  iconClassName = "",
  darkMode = true,
  onItemClick
}: SocialLinksProps) {
  const getLinkProps = (url: string, name: string) => {
    const isEmail = url.startsWith('mailto:');
    const emailAddress = isEmail ? url.replace('mailto:', '').split('?')[0] : '';

    return {
      target: isEmail ? undefined : '_blank',
      rel: isEmail ? undefined : 'noopener noreferrer',
      ariaLabel: isEmail ? `Kirim email ke ${emailAddress}` : `Buka ${name}`
    };
  };
  
  if (variant === 'hero') {
    return (
      <div className={`flex flex-wrap items-center gap-3 ${className}`}>
        {links.map((social, idx) => {
          const linkProps = getLinkProps(social.url, social.name);
          return (
            <a
            key={`${social.name}-${idx}`}
            id={`hero-social-${social.name.toLowerCase()}`}
            href={social.url}
            target={linkProps.target}
            rel={linkProps.rel}
            aria-label={linkProps.ariaLabel}
            title={social.name}
            onClick={() => onItemClick && onItemClick(idx)}
            className={`p-3 rounded-xl border font-semibold text-sm transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95 ${
              darkMode 
                ? 'border-white/10 hover:border-cyan-500/50 bg-white/5 hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-400' 
                : 'border-black/10 hover:border-indigo-600/50 bg-black/5 hover:bg-indigo-600/50 hover:text-white text-gray-700'
            } ${itemClassName}`}
          >
            <SocialIcon 
              icon={social.icon} 
              className={iconClassName || "w-5 h-5"} 
              name={social.name} 
            />
            <span className="hidden sm:inline font-sans">{social.name}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100" />
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === 'contact') {
    return (
      <div className={`flex flex-wrap gap-3 ${className}`}>
        {links.map((s, idx) => {
          const linkProps = getLinkProps(s.url, s.name);
          return (
            <a
            key={`${s.name}-${idx}`}
            id={`contact-social-${s.name.toLowerCase()}`}
            href={s.url}
            target={linkProps.target}
            rel={linkProps.rel}
            aria-label={linkProps.ariaLabel}
            title={s.name}
            onClick={() => onItemClick && onItemClick(idx)}
            className={`p-3.5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 active:scale-95 ${
              darkMode 
                ? 'border-white/10 hover:border-cyan-400 bg-white/5 hover:bg-cyan-400/10 text-gray-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/10' 
                : 'border-black/10 hover:border-indigo-600 bg-black/5 hover:bg-indigo-600 hover:text-white text-gray-600 hover:shadow-lg hover:shadow-indigo-600/10'
            } ${itemClassName}`}
          >
            <SocialIcon 
              icon={s.icon} 
              className={iconClassName || "w-5 h-5"} 
              name={s.name} 
            />
            </a>
          );
        })}
      </div>
    );
  }

  // Footer / standard small icon row variant
  return (
    <div className={`flex flex-wrap gap-3.5 ${className}`}>
      {links.map((s, idx) => {
        const linkProps = getLinkProps(s.url, s.name);
        return (
          <a
          key={`${s.name}-${idx}`}
          id={`footer-social-${s.name.toLowerCase()}`}
          href={s.url}
          target={linkProps.target}
          rel={linkProps.rel}
          aria-label={linkProps.ariaLabel}
          title={s.name}
          onClick={() => onItemClick && onItemClick(idx)}
          className={`p-2.5 rounded-xl border transition-all duration-300 hover:scale-110 active:scale-95 ${
            darkMode 
              ? 'border-white/5 hover:border-cyan-400/50 bg-white/5 text-gray-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/5' 
              : 'border-black/5 hover:border-indigo-600/50 bg-black/5 text-gray-600 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-600/5'
          } ${itemClassName}`}
        >
          <SocialIcon 
            icon={s.icon} 
            className={iconClassName || "w-4 h-4"} 
            name={s.name} 
          />
          </a>
        );
      })}
    </div>
  );
}
