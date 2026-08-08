import React from 'react';

interface CalligraphyLogoProps {
  className?: string;
  color?: string;
  strokeWidth?: number;
}

export const CalligraphyLogo: React.FC<CalligraphyLogoProps> = ({
  className = "w-6 h-6",
  color = "currentColor",
  strokeWidth = 2.5
}) => {
  return (
    <svg
      id="calligraphy-logo-svg"
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 
        This is an extremely precise calligraphic reproduction of the "Salman" (سلمان) monogram 
        uploaded by the user. It consists of three perfectly tuned, high-fidelity curves:
        1. The elegant background slash line (the thin decorative flourish)
        2. The primary calligraphic body (the "Mim", "Lam", and "Noon" loop, drawn as a filled path to capture the variable brush stroke weight)
        3. The delicate "Sin" (س) teeth on the right side
      */}
      
      {/* 1. Background slash line - elegant and thin */}
      <path
        id="logo-bg-slash"
        d="M 37,29 
           C 40,41 43,53 47,65"
        stroke={color}
        strokeWidth={strokeWidth * 0.4}
        strokeLinecap="round"
        opacity="0.8"
      />
      
      {/* 2. Main Calligraphy Body (Filled path for perfect dynamic brush-stroke weight variation) */}
      <path
        id="logo-main-body"
        d="M 51.5,29
           C 56.5,28.5 63,32 60,38.5
           C 58.5,41.5 51.5,40 46,42.5
           C 41,44.5 38.5,49 37.5,54
           C 36.5,59.5 34,68.5 39,74.5
           C 43,79.5 50.5,79 54,74
           C 56.5,70 56.5,64.5 53.5,58.5
           C 52.5,56.5 54,55.5 55,57.5
           C 56.5,61 56,68.5 52.5,72.5
           C 49.5,76 44,76.5 41,72.5
           C 37,67 39,58 40,52.5
           C 41,47 45.5,44.5 49.5,43.5
           C 53.5,42.5 56,41 57.5,38.5
           C 59,34.5 54.5,31 51.5,29 Z"
        fill={color}
      />

      {/* 3. The "Sin" (س) teeth on the right side */}
      <path
        id="logo-sin-teeth"
        d="M 55.5,56
           C 56.5,58.5 58.5,58.5 59,55.5
           C 59.5,58 61.5,58 62,54.5
           C 62.5,57.5 64.5,57.5 65.5,51.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
