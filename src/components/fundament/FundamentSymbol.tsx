import type { CSSProperties } from 'react';

function FixedSvg({ size }: { size: number }) {
  // Square divided by a horizontal line through the middle
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="1.5" width="9" height="9" stroke="currentColor" strokeWidth="0.9" fill="none" />
      <line x1="1.5" y1="6" x2="10.5" y2="6" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

function EarthSvg({ size }: { size: number }) {
  // Downward-pointing triangle with a horizontal bar crossing the middle
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <polygon
        points="1,1.5 11,1.5 6,10.5"
        stroke="currentColor" strokeWidth="0.9" fill="none"
        strokeLinejoin="round"
      />
      <line x1="3" y1="5" x2="9" y2="5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

function MutableSvg({ size }: { size: number }) {
  // Square with a single diagonal line from bottom-left to top-right
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="1.5" width="9" height="9" stroke="currentColor" strokeWidth="0.9" fill="none" />
      <line x1="1.5" y1="10.5" x2="10.5" y2="1.5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

function AirSvg({ size }: { size: number }) {
  // Upward-pointing triangle with a horizontal bar crossing the middle
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <polygon
        points="1,10.5 11,10.5 6,1.5"
        stroke="currentColor" strokeWidth="0.9" fill="none"
        strokeLinejoin="round"
      />
      <line x1="3" y1="7" x2="9" y2="7" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

interface FundamentSymbolProps {
  symbol: string;
  className?: string;
  size?: number;
}

export function FundamentSymbol({ symbol, className, size = 40 }: FundamentSymbolProps) {
  const containerStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: size,
    width: size,
    lineHeight: 1,
  };
  const svgSize = Math.round(size * 0.8);

  if (symbol.startsWith('TEXT:')) {
    const text = symbol.slice(5);
    return (
      <span
        className={className}
        style={{ ...containerStyle, fontSize: Math.round(size * 0.5), fontFamily: 'serif', fontWeight: 700, width: 'auto', minWidth: size }}
      >
        {text}
      </span>
    );
  }

  if (symbol === 'SVG:FIXED') {
    return (
      <span className={className} style={containerStyle}>
        <FixedSvg size={svgSize} />
      </span>
    );
  }

  if (symbol === 'SVG:MUTABLE') {
    return (
      <span className={className} style={containerStyle}>
        <MutableSvg size={svgSize} />
      </span>
    );
  }

  if (symbol === 'SVG:EARTH') {
    return (
      <span className={className} style={containerStyle}>
        <EarthSvg size={svgSize} />
      </span>
    );
  }

  if (symbol === 'SVG:AIR') {
    return (
      <span className={className} style={containerStyle}>
        <AirSvg size={svgSize} />
      </span>
    );
  }

  return (
    <span className={className} style={{ ...containerStyle, fontSize: size * 0.85, fontWeight: 500 }}>
      {symbol}
    </span>
  );
}
