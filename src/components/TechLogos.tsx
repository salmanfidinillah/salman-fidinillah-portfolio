import React from 'react';

interface TechLogoProps {
  name: string;
  color: string;
  darkMode: boolean;
}

export default function TechLogo({ name, color, darkMode }: TechLogoProps) {
  const norm = name.toLowerCase().replace(/[\s.-]/g, '');

  switch (norm) {
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23 23 20.46" className="w-7 h-7" fill="none" stroke={color} strokeWidth="1">
          <circle cx="0" cy="0" r="2.05" fill={color}/>
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </svg>
      );
    case 'nextjs':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke={darkMode ? '#fff' : '#000'} strokeWidth="4">
          <circle cx="50" cy="50" r="45" fill={darkMode ? '#0a0a0a' : '#f5f5f5'} />
          <path d="M72 75L40 32H32V68H38V42L65 77C67 76 70 75 72 75Z" fill={darkMode ? '#fff' : '#000'} stroke="none" />
          <rect x="63" y="32" width="6" height="36" fill={darkMode ? '#fff' : '#000'} stroke="none" />
        </svg>
      );
    case 'vuejs':
      return (
        <svg viewBox="0 0 256 221" className="w-7 h-7">
          <path d="M204.8 0H256L128 220.8 0 0h51.2L128 132.48z" fill="#41B883"/>
          <path d="M158.72 0H204.8L128 132.48 51.2 0h46.08L128 66.24z" fill="#35495E"/>
        </svg>
      );
    case 'svelte':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#FF3E00" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M75 35c-2-5-7-8-12-8H44l15-18c3-3 2-8-1-10s-8-2-10 1L18 38c-3 3-2 8 1 10s8 2 10-1l15-18h11c2 0 4 1 5 3s0 4-1 5L29 71c-3 3-2 8 1 10s8 2 10-1l30-35c3-3 2-8-1-10z" />
        </svg>
      );
    case 'typescript':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="#3178C6">
          <rect width="100" height="100" rx="15"/>
          <path d="M32 75v-8h10v-30h8v30h10v8zM58 52c0 4-1 7-3 9-2 2-5 3-9 3-3 0-6 0-9-1v-8c2 1 5 2 8 2 3 0 5-1 5-4s-2-4-5-5c-4-2-7-3-9-5-2-2-3-5-3-9 0-4 1-7 3-9 2-2 5-3 9-3 3 0 6 1 8 2v8c-2-1-5-2-8-2-2 0-4 1-4 3s2 3 5 4c4 2 7 3 9 5 2 2 3 5 3 9z" fill="#FFF" />
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="#F7DF1E">
          <rect width="100" height="100" rx="15"/>
          <path d="M35 75c-2 2-5 3-8 3-4 0-7-1-9-3v-8c2 2 5 3 8 3 4 0 5-2 5-6v-25h8v25c0 3-.8 6-2 8zM65 52c0 4-1 7-3 9-2 2-5 3-9 3-3 0-6 0-9-1v-8c2 1 5 2 8 2 3 0 5-1 5-4s-2-4-5-5c-4-2-7-3-9-5-2-2-3-5-3-9 0-4 1-7 3-9 2-2 5-3 9-3 3 0 6 1 8 2v8c-2-1-5-2-8-2-2 0-4 1-4 3s2 3 5 4c4 2 7 3 9 5 2 2 3 5 3 9z" fill="#000" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg viewBox="0 0 256 154" className="w-7 h-7" fill="#38BDF8">
          <path d="M128 0C101.4 0 83.1 12.8 73 38.4c15.2-12.8 30.4-17.9 45.7-15.3 8.7 1.5 15 7.9 21.9 15 11.2 11.5 24.3 24.9 51.4 24.9 26.6 0 44.9-12.8 55-38.4-15.2 12.8-30.4 17.9-45.7 15.3-8.7-1.5-15-7.9-21.9-15C168.2 13.4 155.1 0 128 0zm-73.1 76.8C28.3 76.8 10 89.6 0 115.2c15.2-12.8 30.4-17.9 45.7-15.3 8.7 1.5 15 7.9 21.9 15 11.2 11.5 24.3 24.9 51.4 24.9 26.6 0 44.9-12.8 55-38.4-15.2 12.8-30.4 17.9-45.7 15.3-8.7-1.5-15-7.9-21.9-15C93.1 90.2 80 76.8 54.9 76.8z" />
        </svg>
      );
    case 'shadcnui':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke={darkMode ? '#fff' : '#000'} strokeWidth="10" strokeLinecap="round">
          <line x1="20" y1="80" x2="80" y2="20" strokeWidth="12" />
          <line x1="45" y1="85" x2="85" y2="45" opacity="0.5" />
        </svg>
      );
    case 'quasar':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#00b4ff" strokeWidth="8">
          <circle cx="50" cy="50" r="40" />
          <path d="M50 20 C32 20, 20 32, 20 50 C20 68, 32 80, 50 80 C68 80, 80 68, 80 50 C80 32, 68 20, 50 20 Z" fill="#00b4ff" fillOpacity="0.15" />
          <circle cx="50" cy="50" r="14" fill="#00b4ff" />
        </svg>
      );
    case 'redux':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#764ABC" strokeWidth="6">
          <ellipse rx="42" ry="15" cx="50" cy="50" transform="rotate(30 50 50)" />
          <ellipse rx="42" ry="15" cx="50" cy="50" transform="rotate(90 50 50)" />
          <ellipse rx="42" ry="15" cx="50" cy="50" transform="rotate(150 50 50)" />
          <circle cx="50" cy="50" r="8" fill="#764ABC" />
        </svg>
      );
    case 'framermotion':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none">
          <path d="M10 10h40L90 50H50L10 10z" fill="#FF007A"/>
          <path d="M50 50h40v40H50L50 50z" fill="#7B00FF"/>
          <path d="M10 50h40L10 90V50z" fill="#00F0FF"/>
        </svg>
      );
    case 'nodejs':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#339933" strokeWidth="6" strokeLinejoin="round">
          <path d="M50 10L85 30V70L50 90L15 70V30Z" fill="#339933" fillOpacity="0.1" />
          <path d="M50 10V90 M15 30 L85 70 M15 70 L85 30" strokeWidth="2" opacity="0.4" />
          <circle cx="50" cy="50" r="14" fill="#339933" />
        </svg>
      );
    case 'express':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill={darkMode ? '#fff' : '#000'}>
          <text x="50%" y="65%" textAnchor="middle" fontStyle="italic" fontWeight="900" fontSize="55" fontFamily="sans-serif">ex</text>
        </svg>
      );
    case 'nestjs':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="#E0234E">
          <path d="M50 5L89 27.5V72.5L50 95L11 72.5V27.5L50 5zm0 15L24 35v30l26 15l26-15V35L50 20z" />
          <circle cx="50" cy="50" r="10" />
        </svg>
      );
    case 'go':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="#00ADD8">
          <path d="M50 15c-19 0-35 15-35 35s15 35 35 35c15 0 28-10 33-24H60v-10h35c0-19-15-36-45-36zm0 15c10 0 18 8 18 20s-8 20-18 20-18-8-18-20 8-20 18-20z" />
        </svg>
      );
    case 'laravel':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#FF2E21" strokeWidth="6" strokeLinejoin="round">
          <path d="M50 12 L80 30 V68 L50 86 L20 68 V30 Z" />
          <path d="M50 12V86 M20 30L80 68 M20 68L80 30" strokeWidth="2" opacity="0.3" />
          <path d="M50 35 L68 45 V65 L50 75 L32 65 V45 Z" fill="#FF2E21" />
        </svg>
      );
    case 'php':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="#777BB4">
          <ellipse cx="50" cy="50" rx="45" ry="25" fill="none" stroke="#777BB4" strokeWidth="6" />
          <text x="50%" y="58%" textAnchor="middle" fontStyle="oblique" fontWeight="bold" fontSize="32" fontFamily="monospace">php</text>
        </svg>
      );
    case 'trpc':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#3975C6" strokeWidth="6">
          <circle cx="50" cy="50" r="40" />
          <path d="M50 10L90 50L50 90L10 50Z" />
          <circle cx="50" cy="50" r="8" fill="#3975C6" />
        </svg>
      );
    case 'graphql':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#E10098" strokeWidth="5">
          <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" />
          <line x1="50" y1="5" x2="50" y2="95" />
          <line x1="10" y1="28" x2="90" y2="72" />
          <line x1="10" y1="72" x2="90" y2="28" />
          <circle cx="50" cy="50" r="8" fill="#E10098" />
        </svg>
      );
    case 'postgresql':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="#336791">
          <path d="M50 5c-25 0-45 20-45 45s20 45 45 45 45-20 45-45S75 5 50 5zm0 15c17 0 30 13 30 30S67 80 50 80c-5 0-10-1-14-3L50 60H32v-5h13V45H32v-5h18V20z" />
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="#00758F">
          <ellipse cx="50" cy="35" rx="35" ry="15" />
          <path d="M15 35v20c0 8 16 15 35 15s35-7 35-15V35C85 43 69 50 50 50S15 43 15 35z" />
          <path d="M15 55v20c0 8 16 15 35 15s35-7 35-15V55C85 63 69 70 50 70S15 63 15 55z" opacity="0.8" />
        </svg>
      );
    case 'mariadb':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#003545" strokeWidth="6">
          <path d="M20 50 Q50 10 80 50 Q50 90 20 50 Z" />
          <circle cx="50" cy="50" r="10" fill="#003545" />
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="#47A248">
          <path d="M50 5C35 35 25 60 25 75c0 15 11 20 25 20s25-5 25-20c0-15-10-40-25-70z" />
          <path d="M50 5C45 35 40 60 40 75c0 10 4 15 10 15s10-5 10-15c0-15-5-40-10-70z" fill="#589636" />
        </svg>
      );
    case 'sqlite':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#003B57" strokeWidth="6">
          <polygon points="15,30 85,15 85,70 15,85" />
          <text x="50%" y="60%" textAnchor="middle" fontWeight="bold" fontSize="30" fill="#003B57" fontFamily="sans-serif">SQL</text>
        </svg>
      );
    case 'firebase':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="#FFA000">
          <path d="M15 75L50 10l20 23L15 75z" />
          <path d="M85 75L50 10l35 65z" fill="#FFCA28" opacity="0.8" />
          <path d="M15 75L50 85l35-10L50 40l-35 35z" fill="#F57C00" />
        </svg>
      );
    case 'drizzleorm':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#C5F11C" strokeWidth="6">
          <path d="M30 30 Q50 10 70 30 Q90 50 70 70 Q50 90 30 70 Q10 50 30 30 Z" />
          <circle cx="50" cy="50" r="8" fill="#C5F11C" />
          <line x1="50" y1="70" x2="50" y2="85" strokeWidth="4" />
        </svg>
      );
    case 'prisma':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="#2D3748">
          <path d="M50 5 L90 85 L10 85 Z" />
          <path d="M50 35 L75 80 L25 80 Z" fill="#4A5568" />
        </svg>
      );
    case 'supabase':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="#3ECF8E">
          <path d="M55 5L15 50h35L40 95L80 50H45L55 5z" />
        </svg>
      );
    case 'surrealdb':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#FF00A0" strokeWidth="6">
          <circle cx="50" cy="50" r="40" />
          <path d="M30 50 C 30 40, 40 30, 50 30 C 60 30, 70 40, 70 50 Z" />
          <circle cx="50" cy="50" r="8" fill="#FF00A0" />
        </svg>
      );
    case 'typeorm':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#E53E3E" strokeWidth="6">
          <rect x="15" y="15" width="70" height="70" rx="10" />
          <text x="50%" y="60%" textAnchor="middle" fontWeight="bold" fontSize="30" fill="#E53E3E" fontFamily="sans-serif">ORM</text>
        </svg>
      );
    case 'redis':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="#DC382D">
          <polygon points="50,10 15,30 50,50 85,30" />
          <polygon points="15,40 50,60 50,90 15,70" opacity="0.8" />
          <polygon points="85,40 50,60 50,90 85,70" opacity="0.6" />
        </svg>
      );
    case 'openai':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#412991" strokeWidth="6">
          <circle cx="50" cy="50" r="35" />
          <path d="M50 15c20 0 20 20 0 20s-20-20 0-20zm0 70c-20 0-20-20 0-20s20 20 0 20zM15 50c0-20 20-20 20 0s-20 20-20 0zm70 0c0 20-20 20-20 0s20-20 20 0z" opacity="0.8" />
          <circle cx="50" cy="50" r="6" fill="#412991" />
        </svg>
      );
    case 'huggingface':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7">
          <circle cx="50" cy="50" r="45" fill="#FFD21E"/>
          <circle cx="35" cy="45" r="5" fill="#000"/>
          <circle cx="65" cy="45" r="5" fill="#000"/>
          <path d="M 30 65 Q 50 85 70 65" fill="none" stroke="#000" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    case 'tensorflow':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="#FF6F00">
          <polygon points="50,10 15,30 15,70 50,90 85,70 85,30" />
          <polygon points="50,25 30,37 30,63 50,75 70,63 70,37" fill={darkMode ? '#0a0a0a' : '#fff'} />
          <circle cx="50" cy="50" r="10" />
        </svg>
      );
    case 'pytorch':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#EE4C2C" strokeWidth="6">
          <circle cx="50" cy="50" r="40" />
          <path d="M50 20 C 35 20, 25 35, 25 50 C 25 65, 35 80, 50 80 L 65 80 L 50 50 Z" fill="#EE4C2C" />
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7">
          <path d="M48 5c-18 0-17 8-17 8l.1 8H49v3H26c0 0-14-1-14 16s12 17 12 17h7v-10c0-11 9-11 9-11h22c0-11-9-18-18-18z" fill="#3776AB"/>
          <path d="M52 95c18 0 17-8 17-8l-.1-8H51v-3h23c0 0 14 1 14-16s-12-17-12-17h-7v10c0 11-9 11-9 11H38c0 11 9 18 18 18z" fill="#FFE052"/>
        </svg>
      );
    case 'chatgpt':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#10A37F" strokeWidth="6" strokeLinecap="round">
          <circle cx="50" cy="50" r="40" />
          <path d="M50 22a12 12 0 0 1 12 12c0 6-6 11-12 16c-6-5-12-10-12-16a12 12 0 0 1 12-12z" />
          <circle cx="50" cy="50" r="5" fill="#10A37F" />
        </svg>
      );
    case 'claudecode':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#D97706" strokeWidth="6">
          <polygon points="50,10 85,45 50,80 15,45" />
          <text x="50%" y="58%" textAnchor="middle" fontWeight="bold" fontSize="24" fill="#D97706" fontFamily="sans-serif">CC</text>
        </svg>
      );
    case 'codex':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke={darkMode ? '#fff' : '#000'} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="20" y="20" width="60" height="60" rx="8" />
          <path d="M35 40l10 10l-10 10 M55 60h10" strokeWidth="8" />
        </svg>
      );
    case 'kimi':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#4F46E5" strokeWidth="6">
          <circle cx="50" cy="50" r="40" />
          <text x="50%" y="62%" textAnchor="middle" fontWeight="black" fontSize="42" fill="#4F46E5" fontFamily="sans-serif">K</text>
        </svg>
      );
    case 'kiro':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#EC4899" strokeWidth="6" strokeLinecap="round">
          <circle cx="50" cy="50" r="40" />
          <line x1="35" y1="35" x2="65" y2="65" strokeWidth="8" />
          <line x1="65" y1="35" x2="35" y2="65" strokeWidth="8" />
        </svg>
      );
    case 'antigravity':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#2563EB" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          <line x1="50" y1="15" x2="50" y2="85" />
          <path d="M25 40l25-25l25 25" strokeWidth="8" />
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 115 115" className="w-7 h-7" fill="#F05032">
          <path d="M111.78,51.977,62.035,2.2381c-2.8622-2.8648-7.5082-2.8648-10.374,0l-10.329,10.33,13.102,13.102c3.0459-1.0284,6.5371-0.33888,8.9639,2.0884,2.4394,2.4424,3.124,5.9634,2.0698,9.0195l12.628,12.628c3.0551-1.0528,6.58-0.37262,9.0195,2.0712,3.4106,3.4096,3.4106,8.9345,0,12.345-3.4111,3.4116-8.936,3.4116-12.349,0-2.5645-2.5665-3.1988-6.3345-1.8999-9.4942l-11.777-11.777-0.001,30.991c0.8315,0.41162,1.6162,0.961,2.3091,1.6509,3.4096,3.4092,3.4096,8.9331,0,12.348-3.4106,3.4091-8.938,3.4091-12.345,0-3.4101-3.4146-3.4101-8.9385,0-12.348,0.84275-0.84125,1.8179-1.478,2.8584-1.9048v-31.279c-1.041-0.425-2.015-1.057-2.859-1.905-2.583-2.581-3.2051-6.372-1.8804-9.5439l-12.916-12.918-34.106,34.105c-2.8657,2.867-2.8657,7.513,0,10.378l49.742,49.739c2.8638,2.8648,7.5082,2.8648,10.376,0l49.512-49.504c2.8648-2.8662,2.8648-7.5136,0-10.379" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill={darkMode ? '#fff' : '#000'}>
          <path d="M50 5C25 5 5 25 5 50c0 20 13 37 31 43c2 0 3-1 3-2V81c-13 3-15-6-15-6c-2-5-5-7-5-7c-4-3 0-3 0-3c5 0 7 5 7 5c4 7 11 5 14 4c0-3 1-5 2-6c-10-1-21-5-21-23c0-5 2-9 5-13c0-1-2-5 0-11c0 0 4-1 13 5c4-1 8-2 12-2s8 1 12 2c9-6 13-5 13-5c2 6 0 10 0 11c3 4 5 8 5 13c0 18-11 22-22 23c2 2 3 5 3 10v15c0 1 1 2 3 2c18-6 31-23 31-43C95 25 75 5 50 5z" />
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="#2496ED">
          <path d="M92 42c-1-4-5-7-9-7-2 0-4 0-5 1c0-2 0-4-1-5-1-3-4-5-8-5-2 0-4 1-5 2l-1-5c-2-3-5-4-8-4-2 0-4 1-5 2V8c0-3-2-5-5-5s-5 2-5 5v15c-5 1-9 4-10 9H20c-4 0-8 3-9 7C1 45-2 53 3 60c3 5 9 8 15 8h58c6 0 12-3 15-8c5-7 2-15-4-18zM37 58H25v-9h12v9zm15 0h-12v-9h12v9zm15 0h-12v-9h12v9zm15 0h-12v-9h12v9z" />
        </svg>
      );
    case 'kubernetes':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="#326CE5">
          <polygon points="50,5 10,21 10,79 50,95 90,79 90,21" />
          <polygon points="50,18 21,30 21,70 50,82 79,70 79,30" fill={darkMode ? '#0a0a0a' : '#fff'} />
          <circle cx="50" cy="50" r="12" />
        </svg>
      );
    case 'aws':
      return (
        <svg viewBox="0 0 304 182" className="w-7 h-7" fill="none">
          <path 
            fill={darkMode ? '#ffffff' : '#232f3e'} 
            d="M86.4,66.4c0,3.7,0.4,6.7,1.1,8.9c0.8,2.2,1.8,4.6,3.2,7.2c0.5,0.8,0.7,1.6,0.7,2.3c0,1-0.6,2-1.9,3l-6.3,4.2c-0.9,0.6-1.8,0.9-2.6,0.9c-1,0-2-0.5-3-1.4C76.2,90,75,88.4,74,86.8c-1-1.7-2-3.6-3.1-5.9c-7.8,9.2-17.6,13.8-29.4,13.8c-8.4,0-15.1-2.4-20-7.2c-4.9-4.8-7.4-11.2-7.4-19.2c0-8.5,3-15.4,9.1-20.6c6.1-5.2,14.2-7.8,24.5-7.8c3.4,0,6.9,0.3,10.6,0.8c3.7,0.5,7.5,1.3,11.5,2.2v-7.3c0-7.6-1.6-12.9-4.7-16c-3.2-3.1-8.6-4.6-16.3-4.6c-3.5,0-7.1,0.4-10.8,1.3c-3.7,0.9-7.3,2-10.8,3.4c-1.6,0.7-2.8,1.1-3.5,1.3c-0.7,0.2-1.2,0.3-1.6,0.3c-1.4,0-2.1-1-2.1-3.1v-4.9c0-1.6,0.2-2.8,0.7-3.5c0.5-0.7,1.4-1.4,2.8-2.1c3.5-1.8,7.7-3.3,12.6-4.5c4.9-1.3,10.1-1.9,15.6-1.9c11.9,0,20.6,2.7,26.2,8.1c5.5,5.4,8.3,13.6,8.3,24.6V66.4z M45.8,81.6c3.3,0,6.7-0.6,10.3-1.8c3.6-1.2,6.8-3.4,9.5-6.4c1.6-1.9,2.8-4,3.4-6.4c0.6-2.4,1-5.3,1-8.7v-4.2c-2.9-0.7-6-1.3-9.2-1.7c-3.2-0.4-6.3-0.6-9.4-0.6c-6.7,0-11.6,1.3-14.9,4c-3.3,2.7-4.9,6.5-4.9,11.5c0,4.7,1.2,8.2,3.7,10.6C37.7,80.4,41.2,81.6,45.8,81.6z M126.1,92.4c-1.8,0-3-0.3-3.8-1c-0.8-0.6-1.5-2-2.1-3.9L96.7,10.2c-0.6-2-0.9-3.3-0.9-4c0-1.6,0.8-2.5,2.4-2.5h9.8c1.9,0,3.2,0.3,3.9,1c0.8,0.6,1.4,2,2,3.9l16.8,66.2l15.6-66.2c0.5-2,1.1-3.3,1.9-3.9c0.8-0.6,2.2-1,4-1h8c1.9,0,3.2,0.3,4,1c0.8,0.6,1.5,2,1.9,3.9l15.8,67l17.3-67c0.6-2,1.3-3.3,2-3.9c0.8-0.6,2.1-1,3.9-1h9.3c1.6,0,2.5,0.8,2.5,2.5c0,0.5-0.1,1-0.2,1.6c-0.1,0.6-0.3,1.4-0.7,2.5l-24.1,77.3c-0.6,2-1.3,3.3-2.1,3.9c-0.8,0.6-2.1,1-3.8,1h-8.6c-1.9,0-3.2-0.3-4-1c-0.8-0.7-1.5-2-1.9-4L156,23l-15.4,64.4c-0.5,2-1.1,3.3-1.9,4c-0.8,0.7-2.2,1-4,1H126.1z M254.6,95.1c-5.2,0-10.4-0.6-15.4-1.8c-5-1.2-8.9-2.5-11.5-4c-1.6-0.9-2.7-1.9-3.1-2.8c-0.4-0.9-0.6-1.9-0.6-2.8v-5.1c0-2.1,0.8-3.1,2.3-3.1c0.6,0,1.2,0.1,1.8,0.3c0.6,0.2,1.5,0.6,2.5,1c3.4,1.5,7.1,2.7,11,3.5c4,0.8,7.9,1.2,11.9,1.2c6.3,0,11.2-1.1,14.6-3.3c3.4-2.2,5.2-5.4,5.2-9.5c0-2.8-0.9-5.1-2.7-7c-1.8-1.9-5.2-3.6-10.1-5.2L246,52c-7.3-2.3-12.7-5.7-16-10.2c-3.3-4.4-5-9.3-5-14.5c0-4.2,0.9-7.9,2.7-11.1c1.8-3.2,4.2-6,7.2-8.2c3-2.3,6.4-4,10.4-5.2c4-1.2,8.2-1.7,12.6-1.7c2.2,0,4.5,0.1,6.7,0.4c2.3,0.3,4.4,0.7,6.5,1.1c2,0.5,3.9,1,5.7,1.6c1.8,0.6,3.2,1.2,4.2,1.8c1.4,0.8,2.4,1.6,3,2.5c0.6,0.8,0.9,1.9,0.9,3.3v4.7c0,2.1-0.8,3.2-2.3,3.2c-0.8,0-2.1-0.4-3.8-1.2c-5.7-2.6-12.1-3.9-19.2-3.9c-5.7,0-10.2,0.9-13.3,2.8c-3.1,1.9-4.7,4.8-4.7,8.9c0,2.8,1,5.2,3,7.1c2,1.9,5.7,3.8,11,5.5l14.2,4.5c7.2,2.3,12.4,5.5,15.5,9.6c3.1,4.1,4.6,8.8,4.6,14c0,4.3-0.9,8.2-2.6,11.6c-1.8,3.4-4.2,6.4-7.3,8.8c-3.1,2.5-6.8,4.3-11.1,5.6C264.4,94.4,259.7,95.1,254.6,95.1z" 
          />
          <path 
            fill="#FF9900" 
            d="M273.5,143.7c-32.9,24.3-80.7,37.2-121.8,37.2c-57.6,0-109.5-21.3-148.7-56.7c-3.1-2.8-0.3-6.6,3.4-4.4c42.4,24.6,94.7,39.5,148.8,39.5c36.5,0,76.6-7.6,113.5-23.2C274.2,133.6,278.9,139.7,273.5,143.7z" 
          />
          <path 
            fill="#FF9900" 
            d="M287.2,128.1c-4.2-5.4-27.8-2.6-38.5-1.3c-3.2,0.4-3.7-2.4-0.8-4.5c18.8-13.2,49.7-9.4,53.3-5c3.6,4.5-1,35.4-18.6,50.2c-2.7,2.3-5.3,1.1-4.1-1.9C282.5,155.7,291.4,133.4,287.2,128.1z" 
          />
        </svg>
      );
    case 'vercel':
      return (
        <svg viewBox="0 0 100 87" className="w-7 h-7" fill={darkMode ? '#fff' : '#000'}>
          <polygon points="50,0 100,87 0,87" />
        </svg>
      );
    case 'vite':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7">
          <polygon points="85,15 50,85 15,15" fill="url(#vite-grad)" />
          <polygon points="50,0 15,15 85,15" fill="#BD34FE" />
          <polygon points="58,25 35,55 52,55 42,80 68,42 51,42" fill="#FFD62B" />
          <defs>
            <linearGradient id="vite-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#41D1FF" />
              <stop offset="1" stopColor="#BD34FE" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'turborepo':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#EF4444" strokeWidth="8">
          <polygon points="50,10 90,50 50,90 10,50" />
          <line x1="30" y1="50" x2="70" y2="50" strokeWidth="10" strokeLinecap="round" />
        </svg>
      );
    case 'postman':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#FF6C37" strokeWidth="6">
          <circle cx="50" cy="50" r="40" />
          <path d="M35 60c5-10 15-15 25-10s15 15 10 25" strokeLinecap="round" />
          <circle cx="50" cy="35" r="10" fill="#FF6C37" stroke="none" />
        </svg>
      );
    case 'bun':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7">
          <circle cx="50" cy="50" r="45" fill="#FBF0E9" stroke="#E3C1B3" strokeWidth="3" />
          <ellipse cx="50" cy="55" rx="25" ry="20" fill="#FBF0E9" />
          <circle cx="42" cy="50" r="3" fill="#000" />
          <circle cx="58" cy="50" r="3" fill="#000" />
          <path d="M 46 63 Q 50 67 54 63" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'pnpm':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="#F69220">
          <rect x="15" y="15" width="20" height="20" rx="3" />
          <rect x="40" y="15" width="20" height="20" rx="3" />
          <rect x="65" y="15" width="20" height="20" rx="3" />
          <rect x="15" y="40" width="20" height="20" rx="3" />
          <rect x="65" y="40" width="20" height="20" rx="3" />
          <rect x="15" y="65" width="20" height="20" rx="3" />
          <rect x="40" y="65" width="20" height="20" rx="3" />
          <rect x="65" y="65" width="20" height="20" rx="3" />
        </svg>
      );
    case 'yarn':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#2C8EBB" strokeWidth="6">
          <circle cx="50" cy="50" r="40" />
          <path d="M35 35 L50 55 L65 35 M50 55 L50 75" strokeWidth="8" strokeLinecap="round" />
        </svg>
      );
    case 'rust':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke="#DEA584" strokeWidth="6">
          <circle cx="50" cy="50" r="40" strokeDasharray="8, 6" strokeWidth="8" />
          <text x="50%" y="60%" textAnchor="middle" fontWeight="bold" fontSize="36" fill="#DEA584" fontFamily="serif">R</text>
        </svg>
      );
    case 'figma':
      return (
        <svg viewBox="0 0 100 150" className="w-7 h-7">
          <path d="M25 0h25v25H25a25 25 0 0 1 0-50z" fill="#F24E1E"/>
          <path d="M75 25H50V0h25a25 25 0 0 1 0 50z" fill="#FF7262"/>
          <path d="M25 50h25v25H25a25 25 0 0 1 0-50z" fill="#A259FF"/>
          <path d="M25 100h25v25a25 25 0 0 1-25-25z" fill="#0ACF83"/>
          <circle cx="75" cy="75" r="25" fill="#1ABC9C"/>
        </svg>
      );
    case 'googlestitch':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7">
          <path d="M50 10 C 50 35, 65 50, 90 50 C 65 50, 50 65, 50 90 C 50 65, 35 50, 10 50 C 35 50, 50 35, 50 10 Z" fill="#4285F4"/>
          <path d="M50 50 L90 50 C65 50, 50 65, 50 90 Z" fill="#34A853"/>
          <path d="M50 50 L50 90 C50 65, 35 50, 10 50 Z" fill="#FBBC05"/>
          <path d="M50 50 L10 50 C35 50, 50 35, 50 10 Z" fill="#EA4335"/>
        </svg>
      );
    case 'sketch':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="#FDB300">
          <polygon points="50,10 85,35 50,90 15,35" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="white" strokeWidth="2" opacity="0.3" />
          <line x1="15" y1="35" x2="85" y2="35" stroke="white" strokeWidth="2" opacity="0.3" />
        </svg>
      );
    case 'canva':
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7">
          <defs>
            <linearGradient id="canva-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00C4CC" />
              <stop offset="100%" stopColor="#7D2AE8" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="12" fill="url(#canva-grad)" />
          <path 
            fill="#ffffff" 
            d="M6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 0 0 .584-.24.293.293 0 0 1 .134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 0 1 .075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 0 1-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 0 0-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 0 0 .102-.583c0-.343-.137-.515-.24-.515z" 
          />
        </svg>
      );
    case 'penpot':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none" stroke={darkMode ? '#fff' : '#000'} strokeWidth="6">
          <rect x="20" y="20" width="60" height="60" rx="8" />
          <circle cx="42" cy="42" r="8" fill={darkMode ? '#fff' : '#000'} />
          <circle cx="58" cy="58" r="8" fill={darkMode ? '#fff' : '#000'} />
        </svg>
      );
    case 'blender':
      return (
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="#E87D0D">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#E87D0D" strokeWidth="6" />
          <path d="M40 50 C40 35, 65 25, 75 45 C80 55, 70 65, 55 65 Z" />
          <circle cx="50" cy="50" r="7" fill={darkMode ? '#0a0a0a' : '#fff'} />
        </svg>
      );
    default:
      // Fallback simple generic icon containing the first character of name
      return (
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold font-mono border"
          style={{ 
            borderColor: color + '40',
            color: color,
            background: color + '10'
          }}
        >
          {name.charAt(0).toUpperCase()}
        </div>
      );
  }
}
