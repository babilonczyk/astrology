/**
 * Renders planet/zodiac symbols. Uses inline SVG for Pluto and Ceres
 * (poor Unicode font support), text for everything else.
 * All symbols render at a visually consistent size inside a centered container.
 */

import type { CSSProperties } from 'react';

const PLUTO = '\u2647';
const CERES = '\u26B3';

function PlutoSvg({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path
        style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 0.7, strokeLinecap: 'round', strokeLinejoin: 'round' }}
        d="M7.25 3.5a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0ZM6 11V5.5m-2.5 2.5h5M2.25 2.25a3.75 3.75 0 0 0 7.5 0"
      />
    </svg>
  );
}

function CeresSvg({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path
        style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 0.7, strokeLinecap: 'round', strokeLinejoin: 'round' }}
        d="M4.23 1.73A2.5 2.5 0 0 1 8.5 3.5C8.5 4.88 7.38 6 6 6v5m-2.5-2.5h5"
      />
    </svg>
  );
}

interface AstroSymbolProps {
  symbol: string;
  className?: string;
  /** Size in px — controls the container height and visual size */
  size?: number;
}

export function AstroSymbol({ symbol, className, size = 40 }: AstroSymbolProps) {
  const containerStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: size,
    width: size,
    lineHeight: 1,
  };

  // SVG icons are drawn edge-to-edge in their viewBox, so render them
  // at ~80% of container to match the visual weight of Unicode glyphs
  const svgSize = Math.round(size * 0.8);

  if (symbol === PLUTO) {
    return (
      <span className={className} style={containerStyle}>
        <PlutoSvg size={svgSize} />
      </span>
    );
  }
  if (symbol === CERES) {
    return (
      <span className={className} style={containerStyle}>
        <CeresSvg size={svgSize} />
      </span>
    );
  }

  return (
    <span className={className} style={{ ...containerStyle, fontSize: size * 0.85, fontWeight: 500 }}>
      {symbol}
    </span>
  );
}
