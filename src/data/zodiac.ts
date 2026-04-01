export type FieldType = 'zodiacName' | 'zodiacSign' | 'planetName' | 'planetIcon' | 'sector' | 'element';

export type ElementKey = 'fire' | 'earth' | 'air' | 'water';

export interface ZodiacEntry {
  id: number;
  zodiacKey: string;
  zodiacSign: string;
  planetKey: string;
  planetIcon: string;
  sector: number;
  elementKey: ElementKey;
  elementPropertyKey: string;
}

export const elementData: Record<ElementKey, {
  icon: string;
  names: Record<string, string>;
  properties: Record<string, Record<string, string>>;
}> = {
  fire: {
    icon: '\uD83D\uDD25',
    names: { en: 'Fire', pl: 'Ogie\u0144' },
    properties: {
      fire_cardinal: { en: 'Cardinal fire / red', pl: 'Ogie\u0144 podstawowy / czerwony' },
      fire_fixed:    { en: 'Fixed fire / light / gold', pl: 'Ogie\u0144 sta\u0142y / \u015Bwiat\u0142o / z\u0142oto' },
      fire_mutable:  { en: 'Gas fire / blue', pl: 'Ogie\u0144 gazowy / niebieski' },
    },
  },
  earth: {
    icon: '\uD83C\uDF0D',
    names: { en: 'Earth', pl: 'Ziemia' },
    properties: {
      earth_fixed:    { en: 'Soil / fertility / matter', pl: 'Gleba / urodzaj / materia' },
      earth_mutable:  { en: 'Sand / particles / detail', pl: 'Piasek / drobiny / szczeg\u00F3\u0142' },
      earth_cardinal: { en: 'Rock / mountain / structure', pl: 'Ska\u0142a / g\u00F3ra / struktura' },
    },
  },
  air: {
    icon: '\uD83D\uDCA8',
    names: { en: 'Air', pl: 'Powietrze' },
    properties: {
      air_mutable:  { en: 'Air movement / information', pl: 'Ruch powietrza / informacja' },
      air_cardinal: { en: 'Relational air / communication form', pl: 'Relacyjne powietrze / forma komunikatu' },
      air_fixed:    { en: 'Electricity / rebellion / network', pl: 'Elektryczno\u015B\u0107 / bunt / sie\u0107' },
    },
  },
  water: {
    icon: '\uD83D\uDCA7',
    names: { en: 'Water', pl: 'Woda' },
    properties: {
      water_cardinal: { en: 'Liquid', pl: 'P\u0142yn' },
      water_fixed:    { en: 'Ice', pl: 'L\u00F3d' },
      water_mutable:  { en: 'Steam / fog / blur', pl: 'Para / mg\u0142a / rozmycie' },
    },
  },
};

export const zodiacData: ZodiacEntry[] = [
  { id: 1,  zodiacKey: 'aries',       zodiacSign: '\u2648', planetKey: 'mars',    planetIcon: '\u2642', sector: 1,  elementKey: 'fire',  elementPropertyKey: 'fire_cardinal' },
  { id: 2,  zodiacKey: 'taurus',      zodiacSign: '\u2649', planetKey: 'earth',   planetIcon: '\u2641', sector: 2,  elementKey: 'earth', elementPropertyKey: 'earth_fixed' },
  { id: 3,  zodiacKey: 'gemini',      zodiacSign: '\u264A', planetKey: 'mercury', planetIcon: '\u263F', sector: 3,  elementKey: 'air',   elementPropertyKey: 'air_mutable' },
  { id: 4,  zodiacKey: 'cancer',      zodiacSign: '\u264B', planetKey: 'moon',    planetIcon: '\u263D', sector: 4,  elementKey: 'water', elementPropertyKey: 'water_cardinal' },
  { id: 5,  zodiacKey: 'leo',         zodiacSign: '\u264C', planetKey: 'sun',     planetIcon: '\u2609', sector: 5,  elementKey: 'fire',  elementPropertyKey: 'fire_fixed' },
  { id: 6,  zodiacKey: 'virgo',       zodiacSign: '\u264D', planetKey: 'ceres',   planetIcon: '\u26B3', sector: 6,  elementKey: 'earth', elementPropertyKey: 'earth_mutable' },
  { id: 7,  zodiacKey: 'libra',       zodiacSign: '\u264E', planetKey: 'venus',   planetIcon: '\u2640', sector: 7,  elementKey: 'air',   elementPropertyKey: 'air_cardinal' },
  { id: 8,  zodiacKey: 'scorpio',     zodiacSign: '\u264F', planetKey: 'pluto',   planetIcon: '\u2647', sector: 8,  elementKey: 'water', elementPropertyKey: 'water_fixed' },
  { id: 9,  zodiacKey: 'sagittarius', zodiacSign: '\u2650', planetKey: 'jupiter', planetIcon: '\u2643', sector: 9,  elementKey: 'fire',  elementPropertyKey: 'fire_mutable' },
  { id: 10, zodiacKey: 'capricorn',   zodiacSign: '\u2651', planetKey: 'saturn',  planetIcon: '\u2644', sector: 10, elementKey: 'earth', elementPropertyKey: 'earth_cardinal' },
  { id: 11, zodiacKey: 'aquarius',    zodiacSign: '\u2652', planetKey: 'uranus',  planetIcon: '\u2645', sector: 11, elementKey: 'air',   elementPropertyKey: 'air_fixed' },
  { id: 12, zodiacKey: 'pisces',      zodiacSign: '\u2653', planetKey: 'neptune', planetIcon: '\u2646', sector: 12, elementKey: 'water', elementPropertyKey: 'water_mutable' },
];

export const allZodiacSigns = zodiacData.map(z => z.zodiacSign);

export const planetIcons: Record<string, string> = {
  sun:     '\u2609',
  moon:    '\u263D',
  mercury: '\u263F',
  venus:   '\u2640',
  earth:   '\u2641',
  mars:    '\u2642',
  jupiter: '\u2643',
  saturn:  '\u2644',
  uranus:  '\u2645',
  neptune: '\u2646',
  pluto:   '\u2647',
  ceres:   '\u26B3',
};

export const allPlanetIcons = Object.values(planetIcons);

export const allFields: FieldType[] = ['zodiacName', 'zodiacSign', 'planetName', 'planetIcon', 'sector', 'element'];

// All fields are unique identifiers (each value maps to exactly one zodiac entry)
export function pickShownFields(mode: number): FieldType[] {
  const numShown = 6 - mode;
  const shuffled = [...allFields].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, numShown);
}

export function pickRandomEntry(excludeId?: number): ZodiacEntry {
  const candidates = excludeId
    ? zodiacData.filter(z => z.id !== excludeId)
    : zodiacData;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

export function getFieldValue(entry: ZodiacEntry, field: FieldType, locale: 'en' | 'pl'): string {
  switch (field) {
    case 'zodiacName': return getZodiacName(entry.zodiacKey, locale);
    case 'zodiacSign': return entry.zodiacSign;
    case 'planetName': return getPlanetName(entry.planetKey, locale);
    case 'planetIcon': return entry.planetIcon;
    case 'sector': return String(entry.sector);
    case 'element': return `${entry.elementKey}:${entry.elementPropertyKey}`;
  }
}

export function getElementDisplayValue(value: string, locale: string): string {
  const [elemKey, propKey] = value.split(':');
  const elem = elementData[elemKey as ElementKey];
  if (!elem) return value;
  const elemName = elem.names[locale] || elem.names['en'];
  const propName = elem.properties[propKey]?.[locale] || elem.properties[propKey]?.['en'] || propKey;
  return `${elemName} \u2192 ${propName}`;
}

export function formatFieldDisplay(field: FieldType, value: string, locale: string): string {
  if (field === 'element') return getElementDisplayValue(value, locale);
  return value;
}

const zodiacNames: Record<string, Record<string, string>> = {
  aries:       { en: 'Aries',       pl: 'Baran' },
  taurus:      { en: 'Taurus',      pl: 'Byk' },
  gemini:      { en: 'Gemini',      pl: 'Bli\u017Ani\u0119ta' },
  cancer:      { en: 'Cancer',      pl: 'Rak' },
  leo:         { en: 'Leo',         pl: 'Lew' },
  virgo:       { en: 'Virgo',       pl: 'Panna' },
  libra:       { en: 'Libra',       pl: 'Waga' },
  scorpio:     { en: 'Scorpio',     pl: 'Skorpion' },
  sagittarius: { en: 'Sagittarius', pl: 'Strzelec' },
  capricorn:   { en: 'Capricorn',   pl: 'Kozioro\u017Cec' },
  aquarius:    { en: 'Aquarius',    pl: 'Wodnik' },
  pisces:      { en: 'Pisces',      pl: 'Ryby' },
};

const planetNames: Record<string, Record<string, string>> = {
  sun:     { en: 'Sun',     pl: 'S\u0142o\u0144ce' },
  moon:    { en: 'Moon',    pl: 'Ksi\u0119\u017Cyc' },
  mercury: { en: 'Mercury', pl: 'Merkury' },
  venus:   { en: 'Venus',   pl: 'Wenus' },
  earth:   { en: 'Earth',   pl: 'Ziemia' },
  mars:    { en: 'Mars',    pl: 'Mars' },
  jupiter: { en: 'Jupiter', pl: 'Jowisz' },
  saturn:  { en: 'Saturn',  pl: 'Saturn' },
  uranus:  { en: 'Uranus',  pl: 'Uran' },
  neptune: { en: 'Neptune', pl: 'Neptun' },
  pluto:   { en: 'Pluto',   pl: 'Pluton' },
  ceres:   { en: 'Ceres',   pl: 'Ceres' },
};

export function getZodiacName(key: string, locale: string): string {
  return zodiacNames[key]?.[locale] || zodiacNames[key]?.['en'] || key;
}

export function getPlanetName(key: string, locale: string): string {
  return planetNames[key]?.[locale] || planetNames[key]?.['en'] || key;
}

export function getAllZodiacNames(locale: string): string[] {
  return Object.values(zodiacNames).map(v => v[locale] || v['en']);
}

export function getAllPlanetNames(locale: string): string[] {
  return Object.values(planetNames).map(v => v[locale] || v['en']);
}

export function getZodiacKeyBySign(sign: string): string | undefined {
  return zodiacData.find(z => z.zodiacSign === sign)?.zodiacKey;
}

export function getPlanetKeyByIcon(icon: string): string | undefined {
  return Object.entries(planetIcons).find(([, i]) => i === icon)?.[0];
}
