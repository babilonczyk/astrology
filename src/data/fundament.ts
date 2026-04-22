export interface FundamentEntry {
  id: number;
  key: string;
  category: 'inne' | 'jakosc' | 'zywiol';
  symbol: string;
  names: Record<string, string>;
}

export const fundamentData: FundamentEntry[] = [
  // Inne
  { id: 1,  key: 'ascendent',        category: 'inne',   symbol: 'TEXT:Asc',  names: { en: 'Ascendent',       pl: 'Ascendent' } },
  { id: 2,  key: 'descendent',       category: 'inne',   symbol: 'TEXT:Desc', names: { en: 'Descendent',      pl: 'Descendent' } },
  { id: 3,  key: 'medium_coeli',     category: 'inne',   symbol: 'TEXT:MC',   names: { en: 'Medium Coeli',    pl: 'Medium Coeli' } },
  { id: 4,  key: 'imum_coeli',       category: 'inne',   symbol: 'TEXT:IC',   names: { en: 'Imum Coeli',      pl: 'Imum Coeli' } },
  { id: 5,  key: 'retrogradacja',    category: 'inne',   symbol: 'TEXT:Rx',   names: { en: 'Retrograde',      pl: 'Retrogradacja' } },
  { id: 6,  key: 'vertex',           category: 'inne',   symbol: 'TEXT:Vx',   names: { en: 'Vertex',          pl: 'Vertex' } },
  { id: 7,  key: 'punkt_wschodni',   category: 'inne',   symbol: 'TEXT:Ep',   names: { en: 'East Point',      pl: 'Punkt wschodni' } },
  { id: 8,  key: 'wezel_polnocny',   category: 'inne',   symbol: '\u260A',    names: { en: 'North Node',      pl: 'W\u0119ze\u0142 P\u00F3\u0142nocny' } },
  { id: 9,  key: 'wezel_poludniowy', category: 'inne',   symbol: '\u260B',    names: { en: 'South Node',      pl: 'W\u0119ze\u0142 Po\u0142udniowy' } },
  // Jako\u015Bci
  { id: 10, key: 'kardynalna',       category: 'jakosc', symbol: '\u25A1',    names: { en: 'Cardinal',        pl: 'Kardynalna' } },
  { id: 11, key: 'stala',            category: 'jakosc', symbol: 'SVG:FIXED', names: { en: 'Fixed',           pl: 'Sta\u0142a' } },
  { id: 12, key: 'zmienna',          category: 'jakosc', symbol: 'SVG:MUTABLE', names: { en: 'Mutable',       pl: 'Zmienna' } },
  // \u017Bywio\u0142y
  { id: 13, key: 'ogien',            category: 'zywiol', symbol: '\u25B3',    names: { en: 'Fire',            pl: 'Ogie\u0144' } },
  { id: 14, key: 'ziemia',           category: 'zywiol', symbol: 'SVG:EARTH', names: { en: 'Earth',           pl: 'Ziemia' } },
  { id: 15, key: 'powietrze',        category: 'zywiol', symbol: 'SVG:AIR',   names: { en: 'Air',             pl: 'Powietrze' } },
  { id: 16, key: 'woda',             category: 'zywiol', symbol: '\u25BD',    names: { en: 'Water',           pl: 'Woda' } },
];

export function pickRandomFundament(excludeId?: number): FundamentEntry {
  const candidates = excludeId ? fundamentData.filter(f => f.id !== excludeId) : fundamentData;
  return candidates[Math.floor(Math.random() * candidates.length)];
}
