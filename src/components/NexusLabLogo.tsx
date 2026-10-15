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
  // Dimensions per size
  const sizeMap = {
    sm: { icon: 34, text: 'text-xs', sub: 'text-[9px]' },
    md: { icon: 44, text: 'text-sm', sub: 'text-[10px]' },
    lg: { icon: 56, text: 'text-base', sub: 'text-xs' },
    xl: { icon: 72, text: 'text-xl', sub: 'text-sm' }
  };

  const currentSize = sizeMap[size];

  // In light variant: text is dark; in dark variant: text is white
  const isLight = variant === 'light';
  const nexusTextColor = isLight ? '#0F172A' : '#FFFFFF';
  const subTextColor = isLight ? '#64748B' : '#94A3B8';
  const dividerColor = isLight ? '#CBD5E1' : '#334155';
  const atomColor = isLight ? '#DC2626' : '#EF4444';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Emblem Mark: NL with Mentorship Silhouette & Orbiting Star */}
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
        role="img"
        aria-label="Nexus Lab Logo Emblem"
      >
        <defs>
          <linearGradient id="nlRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="60%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#991B1B" />
          </linearGradient>
          <linearGradient id="nlWhiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
          <filter id="nlGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Dark Shield / Soft Glow for contrast */}
        <rect width="120" height="120" rx="24" fill="#0A0A0C" />

        {/* Shooting trajectory arc with star at apex */}
        <path
          d="M 45 65 Q 65 30 78 20"
          stroke="#EF4444"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="2 1"
          opacity="0.85"
        />
        {/* Guiding Star */}
        <path
          d="M 78 20 L 80 14 L 82 20 L 88 22 L 82 24 L 80 30 L 78 24 L 72 22 Z"
          fill="#DC2626"
          filter="url(#nlGlow)"
        />
        <circle cx="80" cy="22" r="1.5" fill="#FFFFFF" />

        {/* Dynamic Architectural 'N' in Crimson */}
        <path
          d="M 28 85 L 28 32 L 40 24 L 72 70 L 72 85 L 60 85 L 40 54 L 40 85 Z"
          fill="url(#nlRedGrad)"
        />

        {/* Silhouettes: Mentor & Child pointing toward the star */}
        <g fill="#0A0A0C">
          {/* Adult / Mentor silhouette */}
          <circle cx="37" cy="48" r="3.2" />
          <path d="M 34 52 L 39 52 L 42 66 L 39 84 L 37 84 L 35 68 L 33 84 L 31 84 L 33 60 Z" />
          {/* Mentor Raised Arm Pointing up */}
          <path d="M 37 54 L 45 42 L 46 43 L 39 56 Z" />

          {/* Child silhouette holding mentor hand */}
          <circle cx="45" cy="62" r="2.2" />
          <path d="M 43 65 L 48 65 L 49 76 L 47 84 L 45 84 L 44 75 L 42 84 L 40 84 L 42 70 Z" />
        </g>

        {/* Dynamic Overlapping 'L' in Polished White */}
        <path
          d="M 68 85 L 68 32 L 80 32 L 80 73 L 102 73 L 96 85 Z"
          fill="url(#nlWhiteGrad)"
        />
      </svg>

      {/* Official Typography & Wordmark */}
      {showWordmark && (
        <div className="flex flex-col">
          <div className="flex items-center tracking-[0.22em] font-extrabold uppercase leading-none">
            <span style={{ color: nexusTextColor }} className="text-sm sm:text-base font-black">
              NEXUS
            </span>
            <span className="text-red-600 text-sm sm:text-base font-black ml-1.5">
              LAB
            </span>
          </div>
          
          {/* Atomic Orbit Sub-divider */}
          <div className="flex items-center gap-1.5 mt-1">
            <span className="h-[1px] w-5" style={{ backgroundColor: dividerColor }} />
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={atomColor} strokeWidth="2">
              <circle cx="12" cy="12" r="2.5" fill={atomColor} />
              <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(30 12 12)" />
              <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-30 12 12)" />
            </svg>
            <span className="h-[1px] w-5" style={{ backgroundColor: dividerColor }} />
          </div>

          <span 
            className="text-[9px] tracking-[0.14em] uppercase font-semibold mt-0.5"
            style={{ color: subTextColor }}
          >
            Opportunity
          </span>
        </div>
      )}
    </div>
  );
};
