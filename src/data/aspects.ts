export interface AspectEntry {
  id: number;
  key: string;
  symbol: string;
  names: Record<string, string>;
}

export const aspectsData: AspectEntry[] = [
  { id: 1, key: 'conjunction',    symbol: '\u260C', names: { en: 'Conjunction (0\u00B0)',   pl: 'Koniunkcja (0\u00B0)' } },
  { id: 2, key: 'semisextile',    symbol: '\u26BA', names: { en: 'Semisextile (30\u00B0)',  pl: 'Konfinis (30\u00B0)' } },
  { id: 3, key: 'sextile',        symbol: '\u26B9', names: { en: 'Sextile (60\u00B0)',      pl: 'Sekstyl (60\u00B0)' } },
  { id: 4, key: 'square',         symbol: '\u25A1', names: { en: 'Square (90\u00B0)',       pl: 'Kwadratura (90\u00B0)' } },
  { id: 5, key: 'trine',          symbol: '\u25B3', names: { en: 'Trine (120\u00B0)',       pl: 'Trygon (120\u00B0)' } },
  { id: 6, key: 'quincunx',       symbol: '\u26BB', names: { en: 'Quincunx (150\u00B0)',    pl: 'Kwinkunks (150\u00B0)' } },
  { id: 7, key: 'opposition',     symbol: '\u260D', names: { en: 'Opposition (180\u00B0)',  pl: 'Opozycja (180\u00B0)' } },
  { id: 8, key: 'parallel',       symbol: '\u2225', names: { en: 'Parallel',                pl: 'Paralela' } },
  { id: 9, key: 'contraparallel', symbol: 'CONTRAPARALLEL', names: { en: 'Contraparallel', pl: 'Kontrparalela' } },
];

export function pickRandomAspect(excludeId?: number): AspectEntry {
  const candidates = excludeId ? aspectsData.filter(a => a.id !== excludeId) : aspectsData;
  return candidates[Math.floor(Math.random() * candidates.length)];
}
