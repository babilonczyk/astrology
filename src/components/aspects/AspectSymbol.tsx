import type { CSSProperties } from 'react';

function ContraparallelSvg({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path
        style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 0.9, strokeLinecap: 'round' }}
        d="M3.5 1.5v9M8.5 1.5v9M10.5 1L1.5 11"
      />
    </svg>
  );
}

interface AspectSymbolProps {
  symbol: string;
  className?: string;
  size?: number;
}

export function AspectSymbol({ symbol, className, size = 40 }: AspectSymbolProps) {
  const containerStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: size,
    width: size,
    lineHeight: 1,
  };
  const svgSize = Math.round(size * 0.8);

  if (symbol === 'CONTRAPARALLEL') {
    return (
      <span className={className} style={containerStyle}>
        <ContraparallelSvg size={svgSize} />
      </span>
    );
  }

  return (
    <span className={className} style={{ ...containerStyle, fontSize: size * 0.85, fontWeight: 500 }}>
      {symbol}
    </span>
  );
}
