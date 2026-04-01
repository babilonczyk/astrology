export type Locale = 'en' | 'pl';

const translations: Record<string, Record<Locale, string>> = {
  // Nav
  'nav.home':          { en: 'Home',                pl: 'Strona g\u0142\u00F3wna' },
  'nav.tools':         { en: 'Tools',               pl: 'Narz\u0119dzia' },

  // Hub
  'hub.title':         { en: 'Astrologia',          pl: 'Astrologia' },
  'hub.subtitle':      { en: 'Your Astrology Learning Hub', pl: 'Twoje centrum nauki astrologii' },
  'hub.tools':         { en: 'Tools',               pl: 'Narz\u0119dzia' },
  'hub.flashcards':    { en: 'Flashcards',          pl: 'Fiszki' },
  'hub.flashcards.desc': {
    en: 'Master zodiac signs, ruling planets, house sectors, and elements with infinite flashcards. Track your streak and challenge yourself.',
    pl: 'Opanuj znaki zodiaku, planety w\u0142adaj\u0105ce, sektory dom\u00F3w i \u017Cywio\u0142y za pomoc\u0105 niesko\u0144czonych fiszek. \u015Aled\u017A swoj\u0105 seri\u0119 i rzucaj sobie wyzwania.',
  },
  'hub.start':         { en: 'Start Learning',      pl: 'Zacznij nauk\u0119' },
  'hub.comingSoon':    { en: 'More tools coming soon...', pl: 'Wi\u0119cej narz\u0119dzi ju\u017C wkr\u00F3tce...' },

  // Flashcard game
  'game.title':        { en: 'Flashcards',          pl: 'Fiszki' },
  'game.chooseMode':   { en: 'Choose Your Challenge', pl: 'Wybierz poziom trudno\u015Bci' },
  'game.hidden1':      { en: '1 hidden',            pl: '1 ukryte' },
  'game.hidden2':      { en: '2 hidden',            pl: '2 ukryte' },
  'game.hidden3':      { en: '3 hidden',            pl: '3 ukryte' },
  'game.hidden4':      { en: '4 hidden',            pl: '4 ukryte' },
  'game.hidden5':      { en: '5 hidden',            pl: '5 ukrytych' },
  'game.difficulty1':  { en: 'Beginner',            pl: 'Pocz\u0105tkuj\u0105cy' },
  'game.difficulty2':  { en: 'Easy',                pl: '\u0141atwy' },
  'game.difficulty3':  { en: 'Medium',              pl: '\u015Aredni' },
  'game.difficulty4':  { en: 'Expert',              pl: 'Ekspert' },
  'game.difficulty5':  { en: 'Master',              pl: 'Mistrz' },
  'game.streak':       { en: 'Streak',              pl: 'Seria' },
  'game.best':         { en: 'Best',                pl: 'Najlepsza' },
  'game.check':        { en: 'Check Answer',        pl: 'Sprawd\u017A odpowied\u017A' },
  'game.next':         { en: 'Next Card',           pl: 'Nast\u0119pna karta' },
  'game.correct':      { en: 'Correct!',            pl: 'Dobrze!' },
  'game.wrong':        { en: 'Wrong!',              pl: '\u0179le!' },
  'game.back':         { en: 'Back to Hub',         pl: 'Powr\u00F3t' },
  'game.tapToAnswer':  { en: 'Tap to answer',       pl: 'Kliknij, aby odpowiedzie\u0107' },
  'game.typeAnswer':   { en: 'Type your answer...', pl: 'Wpisz odpowied\u017A...' },
  'game.enterSector':  { en: 'Enter sector (1\u201312)', pl: 'Wpisz sektor (1\u201312)' },
  'game.tryAgain':     { en: 'Try Again',           pl: 'Spr\u00F3buj ponownie' },

  // Field labels
  'field.zodiacName':  { en: 'Zodiac Name',         pl: 'Nazwa zodiaku' },
  'field.zodiacSign':  { en: 'Zodiac Sign',         pl: 'Znak zodiaku' },
  'field.planetName':  { en: 'Planet Name',         pl: 'Nazwa planety' },
  'field.planetIcon':  { en: 'Planet Icon',         pl: 'Ikona planety' },
  'field.sector':      { en: 'Sector Number',       pl: 'Numer sektora' },
  'field.element':     { en: 'Element',             pl: '\u017Bywio\u0142' },

  // Modals
  'modal.chooseZodiac': { en: 'Choose Zodiac Sign', pl: 'Wybierz znak zodiaku' },
  'modal.choosePlanet': { en: 'Choose Planet Icon', pl: 'Wybierz ikon\u0119 planety' },
  'modal.chooseZodiacName': { en: 'Choose Zodiac Name', pl: 'Wybierz nazw\u0119 zodiaku' },
  'modal.choosePlanetName': { en: 'Choose Planet Name', pl: 'Wybierz nazw\u0119 planety' },
  'modal.chooseElement': { en: 'Choose Element',    pl: 'Wybierz \u017Cywio\u0142' },
  'modal.chooseProperty': { en: 'Choose Property',  pl: 'Wybierz w\u0142a\u015Bciwo\u015B\u0107' },

  // Fuzzy warning
  'fuzzy.title':       { en: 'Are you sure?',       pl: 'Czy jeste\u015B pewien?' },
  'fuzzy.message':     {
    en: 'It looks like you might have a spelling mistake somewhere.',
    pl: 'Wygl\u0105da na to, \u017Ce gdzie\u015B m\u00F3g\u0142 si\u0119 wkra\u015B\u0107 b\u0142\u0105d w pisowni.',
  },
  'fuzzy.confirm':     { en: 'Yes, I\'m sure',      pl: 'Tak, jestem pewien' },
  'fuzzy.fix':         { en: 'Let me fix it',       pl: 'Poprawi\u0119' },
};

export function t(key: string, locale: Locale): string {
  return translations[key]?.[locale] || translations[key]?.['en'] || key;
}

export function getLocaleFromCookie(): Locale {
  if (typeof document === 'undefined') return 'en';
  const match = document.cookie.match(/(?:^|;\s*)locale=(\w+)/);
  const val = match?.[1];
  return val === 'pl' ? 'pl' : 'en';
}

export function setLocaleCookie(locale: Locale): void {
  document.cookie = `locale=${locale};path=/;max-age=${365 * 24 * 60 * 60};SameSite=Lax`;
}
