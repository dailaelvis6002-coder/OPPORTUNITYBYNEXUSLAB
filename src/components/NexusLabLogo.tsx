import React from 'react';

interface NexusLabLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const NexusLabLogo: React.FC<NexusLabLogoProps> = ({
  className = '',
  variant = 'auto',
  showWordmark = true,
  size = 'md'
}) => {
  const sizeMap = {
    sm: { icon: 34, title: 'text-xs', sub: 'text-[9px]' },
    md: { icon: 42, title: 'text-sm', sub: 'text-[10px]' },
    lg: { icon: 54, title: 'text-base', sub: 'text-xs' },
    xl: { icon: 70, title: 'text-xl', sub: 'text-sm' }
  };

  const currentSize = sizeMap[size];
  const isLight = variant === 'light';
  const nexusTextColor = isLight ? '#0E0D11' : '#FFFFFF';
  const subTextColor = isLight ? '#716D66' : '#A19C93';
  const goldPrimary = '#D97706'; // Rich Golden Yellow
  const goldBright = '#F59E0B'; // Vibrant Gold
  const goldLight = '#FBBF24'; // Star / Accent Gold

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Nexus Lab Monogram Emblem: NL with Graduate Scholar, Open Book & Orbiting Star */}
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
        role="img"
        aria-label="Nexus Lab Official Emblem"
      >
        <defs>
          {/* Refined Gold Gradient */}
          <linearGradient id="nlGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#E5A910" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          {/* Clean White Gradient */}
          <linearGradient id="nlWhiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#EDE9E3" />
          </linearGradient>

          {/* Star Glow */}
          <filter id="goldStarGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Deep Obsidian Background Badge */}
        <rect width="120" height="120" rx="22" fill="#0A0A0C" />

        {/* 1. Golden Shooting Star Arc */}
        <path
          d="M 28 62 C 45 28, 70 20, 86 16"
          stroke={goldBright}
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* 2. Four-Point Shining Star at Apex */}
        <g filter="url(#goldStarGlow)">
          <path
            d="M 86 16 L 89 7 L 92 16 L 101 19 L 92 22 L 89 31 L 86 22 L 77 19 Z"
            fill={goldLight}
          />
        </g>
        <circle cx="89" cy="19" r="1.8" fill="#FFFFFF" />

        {/* 3. Letter 'N' - Left White Vertical Bar & Gold Inner Diagonal */}
        {/* Left vertical pillar */}
        <path
          d="M 22 36 L 33 36 L 33 80 L 22 80 Z"
          fill="url(#nlWhiteGrad)"
        />
        {/* Top-left serif angled cut */}
        <path
          d="M 22 36 L 38 24 L 38 36 Z"
          fill="url(#nlWhiteGrad)"
        />
        {/* Gold inner diagonal facet */}
        <path
          d="M 33 42 L 54 66 L 47 73 L 33 55 Z"
          fill="url(#nlGoldGrad)"
        />

        {/* 4. Letter 'L' - Architectural Right Column & Base */}
        {/* Gold inner perspective facet */}
        <path
          d="M 67 36 L 75 30 L 75 78 L 67 78 Z"
          fill="url(#nlGoldGrad)"
        />
        {/* White outer 'L' structure */}
        <path
          d="M 75 30 L 87 22 L 87 75 L 100 75 L 100 83 L 75 83 Z"
          fill="url(#nlWhiteGrad)"
        />

        {/* 5. Center Scholar with Graduation Cap & Backpack */}
        <g fill="#FFFFFF">
          {/* Graduate Head */}
          <circle cx="56" cy="50" r="4.2" />
          
          {/* Golden Mortarboard (Graduation Cap) */}
          <polygon
            points="56,41 64,45 56,49 48,45"
            fill={goldBright}
          />
          {/* Mortarboard Tassel */}
          <path
            d="M 50 46 L 48 51 L 46 51"
            stroke={goldBright}
            strokeWidth="1.2"
            fill="none"
          />

          {/* Student Torso & Body */}
          <path
            d="M 53 54 C 53 54, 57 54, 58 55 C 60 57, 60 66, 61 74 L 57 74 L 56 65 L 53 74 L 49 74 C 50 67, 51 58, 53 54 Z"
          />

          {/* Golden Backpack */}
          <rect
            x="46"
            y="55"
            width="5"
            height="8"
            rx="2.5"
            fill={goldBright}
          />
        </g>

        {/* 6. Open Book at Base (Curved Pages) */}
        {/* Upper White Pages */}
        <path
          d="M 12 79 C 28 72, 45 74, 56 82 C 67 74, 84 72, 100 79 C 84 74, 67 76, 56 85 C 45 76, 28 74, 12 79 Z"
          fill="url(#nlWhiteGrad)"
        />
        {/* Lower Golden Horizon Page Arc */}
        <path
          d="M 16 83 C 30 78, 45 80, 56 87 C 67 80, 82 78, 96 83 C 82 80, 67 82, 56 89 C 45 82, 30 80, 16 83 Z"
          fill="url(#nlGoldGrad)"
        />

        {/* 7. Bottom Atomic Orbit Emblem in Gold */}
        <g stroke={goldBright} strokeWidth="1.2" fill="none">
          <circle cx="56" cy="104" r="1.8" fill={goldBright} />
          <ellipse cx="56" cy="104" rx="8" ry="3.5" transform="rotate(30 56 104)" />
          <ellipse cx="56" cy="104" rx="8" ry="3.5" transform="rotate(-30 56 104)" />
          {/* Flanking golden divider lines */}
          <line x1="20" y1="104" x2="44" y2="104" strokeWidth="1" opacity="0.8" />
          <line x1="68" y1="104" x2="92" y2="104" strokeWidth="1" opacity="0.8" />
        </g>
      </svg>

      {/* Official Wordmark */}
      {showWordmark && (
        <div className="flex flex-col text-left">
          <div className="flex items-center tracking-[0.24em] font-extrabold uppercase leading-none">
            <span style={{ color: nexusTextColor }} className="text-sm sm:text-base font-black">
              NEXUS
            </span>
            <span style={{ color: goldPrimary }} className="text-sm sm:text-base font-black ml-1.5">
              LAB
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-1">
            <span className="h-[1px] w-4" style={{ backgroundColor: isLight ? '#E5DFD5' : '#333139' }} />
            <span 
              className="text-[9px] tracking-[0.16em] uppercase font-bold"
              style={{ color: isLight ? '#8C5A0C' : '#F59E0B' }}
            >
              OPPORTUNITY
            </span>
            <span className="h-[1px] w-4" style={{ backgroundColor: isLight ? '#E5DFD5' : '#333139' }} />
          </div>
        </div>
      )}
    </div>
  );
};
