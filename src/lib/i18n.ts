export type Locale = 'en' | 'pl';

const translations: Record<string, Record<Locale, string>> = {
  // Nav
  'nav.home':          { en: 'Home',                pl: 'Strona g\u0142\u00F3wna' },
  'nav.tools':         { en: 'Tools',               pl: 'Narz\u0119dzia' },

  // Hub
  'hub.title':         { en: 'Esoterica',           pl: 'Ezoteryka' },
  'hub.subtitle':      { en: 'Your Esoteric Learning Hub', pl: 'Twoje centrum nauki ezoteryki' },
  'hub.tools':         { en: 'Learning Tools',      pl: 'Narz\u0119dzia do nauki' },
  'hub.flashcards':    { en: 'Astrology Flashcards', pl: 'Fiszki astrologiczne' },
  'hub.flashcards.desc': {
    en: 'Master zodiac signs, ruling planets, house sectors, and elements with infinite flashcards. Track your streak and challenge yourself.',
    pl: 'Opanuj znaki zodiaku, planety w\u0142adaj\u0105ce, sektory dom\u00F3w i \u017Cywio\u0142y za pomoc\u0105 niesko\u0144czonych fiszek. \u015Aled\u017A swoj\u0105 seri\u0119 i rzucaj sobie wyzwania.',
  },
  'hub.start':         { en: 'Start Learning',      pl: 'Zacznij nauk\u0119' },
  'hub.comingSoon':    { en: 'More tools coming soon...', pl: 'Wi\u0119cej narz\u0119dzi ju\u017C wkr\u00F3tce...' },

  // Flashcard game
  'game.title':        { en: 'Astrology Flashcards', pl: 'Fiszki astrologiczne' },
  'game.chooseMode':   { en: 'Choose Your Challenge', pl: 'Wybierz poziom trudno\u015Bci' },
  'game.hidden1':      { en: '1 hidden',            pl: '1 ukryte' },
  'game.hidden2':      { en: '2 hidden',            pl: '2 ukryte' },
  'game.hidden3':      { en: '3 hidden',            pl: '3 ukryte' },
  'game.hidden4':      { en: '4 hidden',            pl: '4 ukryte' },
  'game.hidden5':      { en: '5 hidden',            pl: '5 ukrytych' },
  'game.hidden6':      { en: '6 hidden',            pl: '6 ukrytych' },
  'game.hidden7':      { en: '7 hidden',            pl: '7 ukrytych' },
  'game.difficulty1':  { en: 'Beginner',            pl: 'Pocz\u0105tkuj\u0105cy' },
  'game.difficulty2':  { en: 'Easy',                pl: '\u0141atwy' },
  'game.difficulty3':  { en: 'Medium',              pl: '\u015Aredni' },
  'game.difficulty4':  { en: 'Expert',              pl: 'Ekspert' },
  'game.difficulty5':  { en: 'Master',              pl: 'Mistrz' },
  'game.difficulty6':  { en: 'Grandmaster',         pl: 'Arcymistrz' },
  'game.difficulty7':  { en: 'Legend',              pl: 'Legenda' },
  'game.streak':       { en: 'Streak',              pl: 'Seria' },
  'game.best':         { en: 'Best',                pl: 'Najlepsza' },
  'game.check':        { en: 'Check Answer',        pl: 'Sprawd\u017A odpowied\u017A' },
  'game.next':         { en: 'Next Card',           pl: 'Nast\u0119pna karta' },
  'game.correct':      { en: 'Correct!',            pl: 'Dobrze!' },
  'game.wrong':        { en: 'Wrong!',              pl: '\u0179le!' },
  'game.back':         { en: 'Back',                 pl: 'Powr\u00F3t' },
  'game.tapToAnswer':  { en: 'Tap to answer',       pl: 'Kliknij, aby odpowiedzie\u0107' },
  'game.typeAnswer':   { en: 'Type your answer...', pl: 'Wpisz odpowied\u017A...' },
  'game.enterSector':  { en: 'Enter sector (1\u201312)', pl: 'Wpisz sektor (1\u201312)' },
  'game.tryAgain':     { en: 'Try Again',           pl: 'Spr\u00F3buj ponownie' },
  'game.preview':      { en: 'Preview',             pl: 'Podgl\u0105d' },
  'game.previewZodiac': { en: 'Zodiac Signs',       pl: 'Znaki zodiaku' },
  'game.previewPlanet': { en: 'Planets',            pl: 'Planety' },
  'game.previewRune':     { en: 'Name & Symbol',      pl: 'Nazwa i symbol' },
  'game.previewAspects':  { en: 'Aspects',            pl: 'Aspekty' },
  'game.previewFundament':{ en: 'Foundation',          pl: 'Fundament' },

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

  // Hub - Runes
  'hub.runes':       { en: 'Rune Flashcards',   pl: 'Fiszki runiczne' },
  'hub.runes.desc':  {
    en: 'Learn the Elder Futhark runes \u2013 names, symbols, meanings, elements, key sentences and shadow signs through infinite flashcards.',
    pl: 'Poznaj runy Starszego Futharku \u2013 nazwy, symbole, znaczenia, \u017Cywio\u0142y, zdania klucz i znaki w cieniu za pomoc\u0105 niesko\u0144czonych fiszek.',
  },

  // Rune game
  'rune.game.title':       { en: 'Rune Flashcards',         pl: 'Fiszki runiczne' },
  'rune.game.enterNumber': { en: 'Enter number (1\u201324)', pl: 'Wpisz numer (1\u201324)' },

  // Rune field labels
  'rune.field.runeName':     { en: 'Rune Name',       pl: 'Nazwa runy' },
  'rune.field.runeIcon':     { en: 'Rune Symbol',     pl: 'Ikona runy' },
  'rune.field.runeNumber':   { en: 'Rune Number',     pl: 'Numer runy' },
  'rune.field.translation':  { en: 'Translation',     pl: 'T\u0142umaczenie' },
  'rune.field.symbolRoot':   { en: 'Root Symbol',     pl: 'Symbol rdze\u0144' },
  'rune.field.element':      { en: 'Element',         pl: '\u017Bywio\u0142' },
  'rune.field.keySentence':  { en: 'Key Sentence',    pl: 'Zdanie klucz' },
  'rune.field.shadowSign':   { en: 'Shadow Sign',     pl: 'Znak w cieniu' },

  // Rune modals
  'rune.modal.chooseName':        { en: 'Choose Rune Name',     pl: 'Wybierz nazw\u0119 runy' },
  'rune.modal.chooseIcon':        { en: 'Choose Rune Symbol',   pl: 'Wybierz ikon\u0119 runy' },
  'rune.modal.chooseTranslation': { en: 'Choose Translation',   pl: 'Wybierz t\u0142umaczenie' },
  'rune.modal.chooseSymbolRoot':  { en: 'Choose Root Symbol',   pl: 'Wybierz symbol rdze\u0144' },
  'rune.modal.chooseElement':     { en: 'Choose Element',       pl: 'Wybierz \u017Cywio\u0142' },
  'rune.modal.chooseKeySentence': { en: 'Choose Key Sentence',  pl: 'Wybierz zdanie klucz' },
  'rune.modal.chooseShadowSign':  { en: 'Choose Shadow Sign',   pl: 'Wybierz znak w cieniu' },

  // Hub - Aspekty
  'hub.aspekty':      { en: 'Aspect Flashcards',   pl: 'Fiszki aspekt\u00F3w' },
  'hub.aspekty.desc': {
    en: 'Learn astrological aspects \u2013 conjunction, sextile, trine, square, opposition and more \u2013 with symbol and name flashcards.',
    pl: 'Poznaj aspekty astrologiczne \u2013 koniunkcj\u0119, sekstyl, trygon, kwadrat, opozycj\u0119 i inne \u2013 za pomoc\u0105 fiszek symbol\u00F3w i nazw.',
  },

  // Hub - Fundament
  'hub.fundament':      { en: 'Foundation Flashcards', pl: 'Fiszki fundamentu' },
  'hub.fundament.desc': {
    en: 'Master the foundational symbols \u2013 special points (Asc, MC, nodes), qualities (cardinal, fixed, mutable) and elements (fire, earth, air, water).',
    pl: 'Opanuj podstawowe symbole \u2013 punkty specjalne (Asc, MC, w\u0119z\u0142y), jako\u015Bci (kardynalna, sta\u0142a, zmienna) i \u017Cywio\u0142y (ogie\u0144, ziemia, powietrze, woda).',
  },

  // Aspect game
  'aspect.game.title':      { en: 'Aspect Flashcards', pl: 'Aspekty' },
  'aspect.field.symbol':    { en: 'Symbol',            pl: 'Symbol' },
  'aspect.field.name':      { en: 'Aspect',            pl: 'Aspekt' },
  'aspect.modal.pickName':  { en: 'Choose Aspect',     pl: 'Wybierz aspekt' },
  'aspect.modal.pickSymbol':{ en: 'Choose Symbol',     pl: 'Wybierz symbol' },

  // Fundament game
  'fundament.game.title':      { en: 'Foundation Flashcards', pl: 'Fundament' },
  'fundament.field.symbol':    { en: 'Symbol',               pl: 'Symbol' },
  'fundament.field.name':      { en: 'Name',                 pl: 'Nazwa' },
  'fundament.modal.pickName':  { en: 'Choose Name',          pl: 'Wybierz nazw\u0119' },
  'fundament.modal.pickSymbol':{ en: 'Choose Symbol',        pl: 'Wybierz symbol' },

  // Shared mode labels
  'game.iconToName': { en: 'Symbol \u2192 Name', pl: 'Symbol \u2192 Nazwa' },
  'game.nameToIcon': { en: 'Name \u2192 Symbol', pl: 'Nazwa \u2192 Symbol' },

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
