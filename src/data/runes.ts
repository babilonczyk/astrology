export type RuneFieldType = 'runeName' | 'runeIcon' | 'runeNumber' | 'translation' | 'symbolRoot' | 'element' | 'keySentence' | 'shadowSign';

export type RuneElementKey = 'fire' | 'earth' | 'air' | 'water' | 'air_fire' | 'earth_fire' | 'earth_air' | 'water_earth' | 'air_earth_water' | 'all';

export interface RuneEntry {
  id: number;
  name: string;
  icon: string;
  translationKey: string;
  symbolRootKey: string;
  elementKey: RuneElementKey;
  keySentenceKey: string;
  shadowSignKey: string;
}

export const runeElementData: Record<RuneElementKey, {
  icons: string;
  names: Record<string, string>;
}> = {
  fire:             { icons: '\uD83D\uDD25',                     names: { en: 'Fire',                    pl: 'Ogie\u0144' } },
  earth:            { icons: '\uD83C\uDF0D',                     names: { en: 'Earth',                   pl: 'Ziemia' } },
  air:              { icons: '\uD83D\uDCA8',                     names: { en: 'Air',                     pl: 'Powietrze' } },
  water:            { icons: '\uD83D\uDCA7',                     names: { en: 'Water',                   pl: 'Woda' } },
  air_fire:         { icons: '\uD83D\uDCA8\uD83D\uDD25',        names: { en: 'Air, Fire',               pl: 'Powietrze, Ogie\u0144' } },
  earth_fire:       { icons: '\uD83C\uDF0D\uD83D\uDD25',        names: { en: 'Earth, Fire',             pl: 'Ziemia, Ogie\u0144' } },
  earth_air:        { icons: '\uD83C\uDF0D\uD83D\uDCA8',        names: { en: 'Earth, Air',              pl: 'Ziemia, Powietrze' } },
  water_earth:      { icons: '\uD83D\uDCA7\uD83C\uDF0D',        names: { en: 'Water, Earth',            pl: 'Woda, Ziemia' } },
  air_earth_water:  { icons: '\uD83D\uDCA8\uD83C\uDF0D\uD83D\uDCA7', names: { en: 'Air, Earth, Water',  pl: 'Powietrze, Ziemia, Woda' } },
  all:              { icons: '\uD83D\uDD25\uD83C\uDF0D\uD83D\uDCA8\uD83D\uDCA7', names: { en: 'All elements', pl: 'Wszystkie \u017Cywio\u0142y' } },
};

const runeTranslations: Record<string, Record<string, string>> = {
  fehu:      { en: 'cattle (movable wealth)',            pl: 'byd\u0142o (ruchomy maj\u0105tek)' },
  uruz:      { en: 'aurochs (wild ox)',                  pl: 'tur' },
  thurisaz:  { en: 'primordial giant',                   pl: 'praolbrzym' },
  ansuz:     { en: 'god Odin',                           pl: 'b\u00F3g Odyn' },
  raidho:    { en: 'journey',                            pl: 'podr\u00F3\u017C' },
  kenaz:     { en: 'torch / ulcer',                      pl: 'wrz\u00F3d' },
  gebo:      { en: 'gift / giving',                      pl: 'dar / dawanie' },
  wunjo:     { en: 'joy / happiness',                    pl: 'szcz\u0119\u015Bcie / u\u015Bmiech' },
  hagalaz:   { en: 'hail',                               pl: 'grad' },
  nauthiz:   { en: 'need / constraint',                  pl: 'przeszkoda / nie tu' },
  isa:       { en: 'ice',                                pl: 'l\u00F3d' },
  jera:      { en: 'harvest / year',                     pl: '\u017Cniwa' },
  eihwaz:    { en: 'yew tree',                           pl: 'cis' },
  pertho:    { en: 'lot / dice cup',                     pl: 'kolejno\u015B\u0107 zdarze\u0144' },
  algiz:     { en: "elk's antlers",                      pl: 'rogi \u0142osia' },
  sowilo:    { en: 'sun',                                pl: 's\u0142o\u0144ce' },
  tiwaz:     { en: 'god Tyr',                            pl: 'b\u00F3g Tyr' },
  berkano:   { en: 'birch',                              pl: 'brzoza' },
  ehwaz:     { en: 'horse',                              pl: 'ko\u0144' },
  mannaz:    { en: 'human',                              pl: 'cz\u0142owiek' },
  laguz:     { en: 'lake / water',                       pl: 'jezioro / por' },
  ingwaz:    { en: 'god Ing (Freyr)',                    pl: 'b\u00F3g Ing (Freyr)' },
  dagaz:     { en: 'day / dawn',                         pl: 'dzie\u0144 / \u015Bwit' },
  othala:    { en: 'homeland / heritage',                pl: 'ojczyzna' },
};

const runeSymbolRoots: Record<string, Record<string, string>> = {
  fehu:      { en: 'prosperity / rune of abundance',                  pl: 'dobrobyt / runa obfito\u015Bci' },
  uruz:      { en: 'strength / rune of strength and renewal',        pl: 'si\u0142a / runa si\u0142y i odnowy' },
  thurisaz:  { en: "Thor's hammer / rune of boundary and trial",     pl: 'm\u0142ot Thora / runa granicy i pr\u00F3by' },
  ansuz:     { en: 'divine guidance / rune of voice and sign',       pl: 'boska opieka / runa g\u0142osu i znaku' },
  raidho:    { en: 'path / rune of journey and rhythm',              pl: 'droga / runa drogi i rytmu' },
  kenaz:     { en: 'torch / rune of flame and knowledge',            pl: 'pochodnia / runa p\u0142omienia i wiedzy' },
  gebo:      { en: 'exchange / rune of gift and covenant',           pl: 'wymiana / runa daru i przymierza' },
  wunjo:     { en: 'joy / rune of joy and harmony',                  pl: 'rado\u015B\u0107 / runa rado\u015Bci i zgody' },
  hagalaz:   { en: 'hail / rune of breakthrough and transformation', pl: 'grad / runa prze\u0142omu i przebudowy' },
  nauthiz:   { en: 'necessity / rune of need and will',              pl: 'konieczno\u015B\u0107 / runa potrzeby i woli' },
  isa:       { en: 'ice / rune of ice and focus',                    pl: 'l\u00F3d / runa lodu i skupienia' },
  jera:      { en: 'harvest / rune of harvest and reward',           pl: 'plon / runa \u017Cniw i nagrody' },
  eihwaz:    { en: 'rebirth / rune of axis and endurance',           pl: 'odrodzenie / runa osi i wytrwa\u0142o\u015Bci' },
  pertho:    { en: 'fate / rune of fate and mystery',                pl: 'los / runa losu i tajemnicy' },
  algiz:     { en: 'protection / rune of protection and vigilance',  pl: 'ochrona / runa ochrony i czujno\u015Bci' },
  sowilo:    { en: 'sun / rune of sun and victory',                  pl: 's\u0142o\u0144ce / runa s\u0142o\u0144ca i zwyci\u0119stwa' },
  tiwaz:     { en: 'honor / rune of law and honor',                  pl: 'honor / runa prawa i honoru' },
  berkano:   { en: 'birth / rune of birth and nurture',              pl: 'narodziny / runa narodzin i opieki' },
  ehwaz:     { en: 'partnership / rune of movement and trust',       pl: 'partnerstwo / runa ruchu i zaufania' },
  mannaz:    { en: 'humanity / rune of human and community',         pl: 'cz\u0142owiecze\u0144stwo / runa cz\u0142owieka i wsp\u00F3lnoty' },
  laguz:     { en: 'water / rune of water and intuition',            pl: 'woda / runa wody i intuicji' },
  ingwaz:    { en: 'seed / rune of seed and maturation',             pl: 'ziarno / runa nasiona i dojrzewania' },
  dagaz:     { en: 'dawn / rune of awakening and renewal',           pl: 'jutrzenka / runa przebudzenia i odnowy' },
  othala:    { en: 'heritage / rune of home and heritage',           pl: 'dziedzictwo / runa domu i dziedzictwa' },
};

const runeKeySentences: Record<string, Record<string, string>> = {
  fehu:      { en: 'Abundance begins to flow when resources are set in motion. Give, and it shall be given unto you.', pl: 'Obfito\u015B\u0107 zaczyna p\u0142yn\u0105\u0107, gdy zas\u00F3b rusza w obieg. Obdarzaj, a zostanie Ci ofiarowane.' },
  uruz:      { en: 'Strength returns to the body when you stand firmly on the ground and channel energy into action.', pl: 'Si\u0142a wraca do cia\u0142a, gdy stajesz mocno na ziemi i prowadzisz energi\u0119 w czyn.' },
  thurisaz:  { en: 'Power protects best when it remains under awareness and serves a good purpose.', pl: 'Moc chroni najlepiej wtedy, gdy pozostaje pod \u015Bwiadomo\u015Bci\u0105 i s\u0142u\u017Cy dobremu celowi.' },
  ansuz:     { en: 'When silence opens the mind and throat, wisdom begins to speak through you.', pl: 'Gdy cisza otwiera g\u0142ow\u0119 i gard\u0142o, m\u0105dro\u015B\u0107 zaczyna m\u00F3wi\u0107 przez Ciebie.' },
  raidho:    { en: 'The path unfolds best when you hold your course and walk in harmony with your own rhythm.', pl: 'Droga uk\u0142ada si\u0119 najlepiej, gdy trzymasz kierunek i idziesz w zgodzie z w\u0142asnym rytmem.' },
  kenaz:     { en: 'Light reveals what has been maturing in hiding and gives strength to give it form.', pl: '\u015Awiat\u0142o ods\u0142ania to, co dojrzewa\u0142o w ukryciu i daje si\u0142\u0119, by nada\u0107 temu kszta\u0142t.' },
  gebo:      { en: 'What is offered from the heart returns multiplied and builds a bond.', pl: 'To, co ofiarowane z serca, wraca zwielokrotnione i buduje wi\u0119\u017A.' },
  wunjo:     { en: 'Joy opens a space in which life begins to cooperate with you.', pl: 'Rado\u015B\u0107 otwiera przestrze\u0144, w kt\u00F3rej \u017Cycie zaczyna wsp\u00F3\u0142pracowa\u0107 z Tob\u0105.' },
  hagalaz:   { en: 'What falls suddenly can shatter a rigid structure and open a new alignment of forces.', pl: 'To, co spada nagle, potrafi rozbi\u0107 skostnia\u0142y uk\u0142ad i otworzy\u0107 nowe ustawienie si\u0142.' },
  nauthiz:   { en: 'The pressure of fate orders the path when you accept necessity and learn to work with limitation.', pl: 'Nacisk losu porz\u0105dkuje drog\u0119, gdy przyjmujesz konieczno\u015B\u0107 i uczysz si\u0119 pracy z ograniczeniem.' },
  isa:       { en: 'Stillness can protect strength when everything demands silence, cold, and focus.', pl: 'Zatrzymanie potrafi ochroni\u0107 si\u0142\u0119, kiedy wszystko domaga si\u0119 ciszy, ch\u0142odu i skupienia.' },
  jera:      { en: 'What has been maturing through time and effort returns as harvest, result, and lesson.', pl: 'To, co dojrzewa\u0142o przez czas i prac\u0119, wraca jako plon, wynik i lekcja.' },
  eihwaz:    { en: 'True transformation grows from the depths and leads through a threshold that cannot be bypassed.', pl: 'Prawdziwa przemiana ro\u015Bnie z g\u0142\u0119bi i prowadzi przez pr\u00F3g, kt\u00F3rego nie da si\u0119 omin\u0105\u0107.' },
  pertho:    { en: 'Fate reveals itself most powerfully when you can read signs between chance and choice.', pl: 'Los ods\u0142ania si\u0119 najmocniej wtedy, gdy umiesz czyta\u0107 znaki pomi\u0119dzy przypadkiem a wyborem.' },
  algiz:     { en: 'Protection grows when you stand tall, attentive, and in harmony with your own light.', pl: 'Ochrona ro\u015Bnie wtedy, gdy stoisz wysoko, uwa\u017Cnie i w zgodzie z w\u0142asnym \u015Bwiat\u0142em.' },
  sowilo:    { en: 'Light gathers scattered forces and leads them toward fullness, certainty, and action.', pl: '\u015Awiat\u0142o zbiera rozproszone si\u0142y i prowadzi je ku pe\u0142ni, pewno\u015Bci i dzia\u0142aniu.' },
  tiwaz:     { en: 'The path opens for the one who keeps their word and carries their goal straight ahead.', pl: 'Droga otwiera si\u0119 temu, kto dochowuje s\u0142owa i niesie sw\u00F3j cel prosto.' },
  berkano:   { en: 'Life develops best where it has care, softness, and room to grow.', pl: '\u017Cycie rozwija si\u0119 najlepiej tam, gdzie ma opiek\u0119, mi\u0119kko\u015B\u0107 i miejsce do wzrostu.' },
  ehwaz:     { en: 'When two forces begin to walk in step, the path shortens and opens.', pl: 'Gdy dwie si\u0142y zaczynaj\u0105 i\u015B\u0107 jednym krokiem, droga skraca si\u0119 i otwiera.' },
  mannaz:    { en: 'A person becomes more complete when they see themselves among others and understand mutual connections.', pl: 'Cz\u0142owiek staje si\u0119 pe\u0142niejszy, gdy widzi siebie w\u015Br\u00F3d innych i rozumie wzajemne powi\u0105zania.' },
  laguz:     { en: 'What flows softly and deeply guides you further than reason alone.', pl: 'To, co p\u0142ynie mi\u0119kko i g\u0142\u0119boko, prowadzi Ci\u0119 dalej ni\u017C sam rozum.' },
  ingwaz:    { en: 'What has matured in silence breaks open at the right time and emerges into form.', pl: 'To, co dojrza\u0142o w ciszy, p\u0119ka we w\u0142a\u015Bciwym czasie i wychodzi ku formie.' },
  dagaz:     { en: 'Dawn comes when darkness loses its hold over thought and path.', pl: '\u015Awit przychodzi wtedy, gdy mrok ko\u0144czy w\u0142adz\u0119 nad my\u015Bl\u0105 i drog\u0105.' },
  othala:    { en: 'The power of lineage and home gives support from which it is easier to return to yourself and build further.', pl: 'Moc rodu i domu daje oparcie, z kt\u00F3rego \u0142atwiej wr\u00F3ci\u0107 do siebie i budowa\u0107 dalej.' },
};

const runeShadowSigns: Record<string, Record<string, string>> = {
  fehu:      { en: 'excess, envy, risk of poverty or loss, wasted property',                                       pl: 'nadmiar, zazdro\u015B\u0107, mo\u017Cliwo\u015B\u0107 biedy lub utraty, zmarnowanie w\u0142asno\u015Bci' },
  uruz:      { en: 'numbness, submissiveness, lack of strength, sickliness, misdirected energy',                   pl: 'odr\u0119twienie, ust\u0119pliwo\u015B\u0107, brak si\u0142, chorowito\u015B\u0107, \u017Ale prowadzona energia' },
  thurisaz:  { en: 'megalomania, blind rage, loss of control, abuse of power, dogmatism',                          pl: 'mania wielko\u015Bci, \u015Blepa z\u0142o\u015B\u0107, utrata kontroli, nadu\u017Cycie si\u0142y, dogmatyzm' },
  ansuz:     { en: 'mental blocks, empty talk, bad words, lack of inspiration, susceptibility to manipulation',    pl: 'blokady w rozumieniu, pustos\u0142owie, z\u0142e s\u0142owa, brak inspiracji, podatno\u015B\u0107 na manipulacj\u0119' },
  raidho:    { en: 'falling out of rhythm, stagnation, delays, bad timing, misdirected course',                   pl: 'wypadni\u0119cie z rytmu, zast\u00F3j, op\u00F3\u017Anienia, z\u0142y moment, \u017Ale prowadzony kierunek' },
  kenaz:     { en: 'smothered fire, anger, pain, burnout, destructive passion, loss of vitality',                  pl: 'zaduszony ogie\u0144, gniew, b\u00F3l, wypalenie, niszcz\u0105ca nami\u0119tno\u015B\u0107, utrata si\u0142 \u017Cycia' },
  gebo:      { en: 'blockages, discord, stinginess, envy, disconnection, dependence on others',                    pl: 'blokady, niezgoda, sk\u0105pstwo, zawi\u015B\u0107, roz\u0142\u0105czenie, uzale\u017Cnienie od drugiej strony' },
  wunjo:     { en: 'gloom, bad mood, depression, lack of cooperation, feeling of unhappiness',                     pl: 'osowia\u0142o\u015B\u0107, z\u0142y humor, przygnebienie, brak wsp\u00F3\u0142pracy, poczucie nieszcz\u0119\u015Bcia' },
  hagalaz:   { en: 'devastation, coldness, catastrophe, rigidity, energetic inactivity, crisis',                   pl: 'spustoszenie, ch\u0142\u00F3d, katastrofa, usztywnienie, energetyczna nieaktywno\u015B\u0107, kryzys' },
  nauthiz:   { en: 'poverty, coercion, oppression, conflict, weakness, chaos after loss of order',                 pl: 'bieda, przymus, ucisk, zatarg, os\u0142abienie, chaos po utracie porz\u0105dku' },
  isa:       { en: 'frozen life, immobility, numbness, dullness, egocentric withdrawal, failure',                  pl: 'zamro\u017Cenie \u017Cycia, bezruch, odr\u0119twienie, t\u0119pota, egocentryczne zamkni\u0119cie, niepowodzenie' },
  jera:      { en: 'premature harvest, procrastination, tardiness, indecision, unreadiness for own harvest',       pl: 'niedojrza\u0142y zbi\u00F3r, oci\u0105ganie, sp\u00F3\u017Anienie, niezdecydowanie, brak gotowo\u015Bci na w\u0142asny plon' },
  eihwaz:    { en: 'blocked growth, wall of impossibility, confusion, envy, lack of breakthrough, halted regeneration', pl: 'zablokowany wzrost, mur niemo\u017Cno\u015Bci, zamroczenie, zawi\u015B\u0107, brak przebicia, zatrzymana regeneracja' },
  pertho:    { en: 'stagnation, addiction, weakening, confused paths, escape into illusion, loss of power',        pl: 'stagnacja, na\u0142\u00F3g, os\u0142abienie, pomylenie dr\u00F3g, ucieczka w iluzj\u0119, utrata mocy' },
  algiz:     { en: 'distraction, tension, stress, lowered vigilance, feeling exposed to attack',                   pl: 'rozproszenie, napi\u0119cie, stres, obni\u017Cona czujno\u015B\u0107, poczucie ods\u0142oni\u0119cia na atak' },
  sowilo:    { en: 'pride, blind pursuit, bitterness, energy abuse, success without inner order',                  pl: 'pycha, \u015Blepe pod\u0105\u017Canie, rozgoryczenie, nadu\u017Cycie energii, sukces bez \u0142adu wewn\u0119trznego' },
  tiwaz:     { en: 'infidelity, abuse of trust, breaking the law, futile sacrifice, paralysis, turmoil',          pl: 'niewierno\u015B\u0107, nadu\u017Cycie zaufania, \u0142amanie prawa, daremna ofiara, bezw\u0142ad, zam\u0119t' },
  berkano:   { en: 'stunted growth, stagnation, conflict, wasted energy, secrecy, barrenness',                     pl: 'zahamowany rozw\u00F3j, stagnacja, konflikt, roztrwonienie energii, skryto\u015B\u0107, ja\u0142owo\u015B\u0107' },
  ehwaz:     { en: 'rigid harmony, betrayal, passivity, loss of individuality, laziness, disconnect of will and action', pl: 'skostnia\u0142a harmonia, zdrada, bezwolno\u015B\u0107, utrata indywidualno\u015Bci, gnu\u015Bno\u015B\u0107, rozjazd woli i czynu' },
  mannaz:    { en: 'loss of orientation, chaos, lack of insight, severed bonds, misunderstanding community',       pl: 'utrata orientacji, chaos, brak przenikliwo\u015Bci, zerwanie wi\u0119zi, niezrozumienie wsp\u00F3lnoty' },
  laguz:     { en: 'fear, going in circles, stagnation, procrastination, loss of direction, flight from initiation', pl: 'strach, kr\u0105\u017Cenie w k\u00F3\u0142ko, zast\u00F3j, odwlekanie, utrata kierunku, ucieczka przed wtajemniczeniem' },
  ingwaz:    { en: 'alienation, paralysis, disconnection from reality, halted maturation, disturbed sense of world', pl: 'wyobcowanie, parali\u017C, odci\u0119cie od rzeczywisto\u015Bci, zatrzymane dojrzewanie, zaburzone poczucie \u015Bwiata' },
  dagaz:     { en: 'blinding, fanaticism, betrayal of ideals, loss of orientation, darkness, fear',                pl: 'o\u015Blepienie, fanatyzm, zdrada idea\u0142u, utrata orientacji, mrok, l\u0119k' },
  othala:    { en: 'loss of order, loss of family hearth, extreme attachment, isolation, hatred of the foreign',    pl: 'utrata \u0142adu, utrata rodzinnego ogniska, skrajne przywi\u0105zanie, zamkni\u0119cie, nienawi\u015B\u0107 do obcego' },
};

export const runeData: RuneEntry[] = [
  { id: 1,  name: 'Fehu',     icon: '\u16A0', translationKey: 'fehu',     symbolRootKey: 'fehu',     elementKey: 'fire',             keySentenceKey: 'fehu',     shadowSignKey: 'fehu' },
  { id: 2,  name: 'Uruz',     icon: '\u16A2', translationKey: 'uruz',     symbolRootKey: 'uruz',     elementKey: 'earth',            keySentenceKey: 'uruz',     shadowSignKey: 'uruz' },
  { id: 3,  name: 'Thurisaz', icon: '\u16A6', translationKey: 'thurisaz', symbolRootKey: 'thurisaz', elementKey: 'air',              keySentenceKey: 'thurisaz', shadowSignKey: 'thurisaz' },
  { id: 4,  name: 'Ansuz',    icon: '\u16A8', translationKey: 'ansuz',    symbolRootKey: 'ansuz',    elementKey: 'air',              keySentenceKey: 'ansuz',    shadowSignKey: 'ansuz' },
  { id: 5,  name: 'Raidho',   icon: '\u16B1', translationKey: 'raidho',   symbolRootKey: 'raidho',   elementKey: 'air_fire',         keySentenceKey: 'raidho',   shadowSignKey: 'raidho' },
  { id: 6,  name: 'Kenaz',    icon: '\u16B2', translationKey: 'kenaz',    symbolRootKey: 'kenaz',    elementKey: 'fire',             keySentenceKey: 'kenaz',    shadowSignKey: 'kenaz' },
  { id: 7,  name: 'Gebo',     icon: '\u16B7', translationKey: 'gebo',     symbolRootKey: 'gebo',     elementKey: 'water_earth',      keySentenceKey: 'gebo',     shadowSignKey: 'gebo' },
  { id: 8,  name: 'Wunjo',    icon: '\u16B9', translationKey: 'wunjo',    symbolRootKey: 'wunjo',    elementKey: 'air',              keySentenceKey: 'wunjo',    shadowSignKey: 'wunjo' },
  { id: 9,  name: 'Hagalaz',  icon: '\u16BA', translationKey: 'hagalaz',  symbolRootKey: 'hagalaz',  elementKey: 'all',              keySentenceKey: 'hagalaz',  shadowSignKey: 'hagalaz' },
  { id: 10, name: 'Nauthiz',  icon: '\u16BE', translationKey: 'nauthiz',  symbolRootKey: 'nauthiz',  elementKey: 'earth_fire',       keySentenceKey: 'nauthiz',  shadowSignKey: 'nauthiz' },
  { id: 11, name: 'Isa',      icon: '\u16C1', translationKey: 'isa',      symbolRootKey: 'isa',      elementKey: 'water',            keySentenceKey: 'isa',      shadowSignKey: 'isa' },
  { id: 12, name: 'Jera',     icon: '\u16C3', translationKey: 'jera',     symbolRootKey: 'jera',     elementKey: 'earth',            keySentenceKey: 'jera',     shadowSignKey: 'jera' },
  { id: 13, name: 'Eihwaz',   icon: '\u16C7', translationKey: 'eihwaz',   symbolRootKey: 'eihwaz',   elementKey: 'air_earth_water',  keySentenceKey: 'eihwaz',   shadowSignKey: 'eihwaz' },
  { id: 14, name: 'Pertho',   icon: '\u16C8', translationKey: 'pertho',   symbolRootKey: 'pertho',   elementKey: 'water_earth',      keySentenceKey: 'pertho',   shadowSignKey: 'pertho' },
  { id: 15, name: 'Algiz',    icon: '\u16C9', translationKey: 'algiz',    symbolRootKey: 'algiz',    elementKey: 'earth_air',        keySentenceKey: 'algiz',    shadowSignKey: 'algiz' },
  { id: 16, name: 'Sowilo',   icon: '\u16CA', translationKey: 'sowilo',   symbolRootKey: 'sowilo',   elementKey: 'fire',             keySentenceKey: 'sowilo',   shadowSignKey: 'sowilo' },
  { id: 17, name: 'Tiwaz',    icon: '\u16CF', translationKey: 'tiwaz',    symbolRootKey: 'tiwaz',    elementKey: 'air',              keySentenceKey: 'tiwaz',    shadowSignKey: 'tiwaz' },
  { id: 18, name: 'Berkano',  icon: '\u16D2', translationKey: 'berkano',  symbolRootKey: 'berkano',  elementKey: 'water_earth',      keySentenceKey: 'berkano',  shadowSignKey: 'berkano' },
  { id: 19, name: 'Ehwaz',    icon: '\u16D6', translationKey: 'ehwaz',    symbolRootKey: 'ehwaz',    elementKey: 'all',              keySentenceKey: 'ehwaz',    shadowSignKey: 'ehwaz' },
  { id: 20, name: 'Mannaz',   icon: '\u16D7', translationKey: 'mannaz',   symbolRootKey: 'mannaz',   elementKey: 'all',              keySentenceKey: 'mannaz',   shadowSignKey: 'mannaz' },
  { id: 21, name: 'Laguz',    icon: '\u16DA', translationKey: 'laguz',    symbolRootKey: 'laguz',    elementKey: 'water',            keySentenceKey: 'laguz',    shadowSignKey: 'laguz' },
  { id: 22, name: 'Ingwaz',   icon: '\u16DD', translationKey: 'ingwaz',   symbolRootKey: 'ingwaz',   elementKey: 'all',              keySentenceKey: 'ingwaz',   shadowSignKey: 'ingwaz' },
  { id: 23, name: 'Dagaz',    icon: '\u16DE', translationKey: 'dagaz',    symbolRootKey: 'dagaz',    elementKey: 'fire',             keySentenceKey: 'dagaz',    shadowSignKey: 'dagaz' },
  { id: 24, name: 'Othala',   icon: '\u16DF', translationKey: 'othala',   symbolRootKey: 'othala',   elementKey: 'earth',            keySentenceKey: 'othala',   shadowSignKey: 'othala' },
];

export const allRuneFields: RuneFieldType[] = ['runeName', 'runeIcon', 'runeNumber', 'translation', 'symbolRoot', 'element', 'keySentence', 'shadowSign'];

export type RuneGameType = 'full' | 'preview';

export function getActiveRuneFields(gameType: RuneGameType): RuneFieldType[] {
  if (gameType === 'preview') return ['runeName', 'runeIcon'];
  return allRuneFields;
}

export function pickRuneShownFields(mode: number, gameType: RuneGameType = 'full'): RuneFieldType[] {
  if (gameType === 'preview') {
    const pair: RuneFieldType[] = ['runeName', 'runeIcon'];
    return [pair[Math.random() < 0.5 ? 0 : 1]];
  }

  const numShown = allRuneFields.length - mode;
  let shuffled = [...allRuneFields].sort(() => Math.random() - 0.5);
  let shown = shuffled.slice(0, numShown);

  // Element must never be the sole visible field
  if (shown.length === 1 && shown[0] === 'element') {
    const others = allRuneFields.filter(f => f !== 'element');
    shown = [others[Math.floor(Math.random() * others.length)]];
  }

  return shown;
}

export function pickRandomRune(excludeId?: number): RuneEntry {
  const candidates = excludeId
    ? runeData.filter(r => r.id !== excludeId)
    : runeData;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

export function getRuneTranslation(key: string, locale: string): string {
  return runeTranslations[key]?.[locale] || runeTranslations[key]?.['en'] || key;
}

export function getRuneSymbolRoot(key: string, locale: string): string {
  return runeSymbolRoots[key]?.[locale] || runeSymbolRoots[key]?.['en'] || key;
}

export function getRuneKeySentence(key: string, locale: string): string {
  return runeKeySentences[key]?.[locale] || runeKeySentences[key]?.['en'] || key;
}

export function getRuneShadowSign(key: string, locale: string): string {
  return runeShadowSigns[key]?.[locale] || runeShadowSigns[key]?.['en'] || key;
}

export function getRuneElementDisplay(key: RuneElementKey, locale: string): string {
  const elem = runeElementData[key];
  if (!elem) return key;
  return elem.names[locale] || elem.names['en'];
}

export function getRuneFieldValue(entry: RuneEntry, field: RuneFieldType, locale: string): string {
  switch (field) {
    case 'runeName': return entry.name;
    case 'runeIcon': return entry.icon;
    case 'runeNumber': return String(entry.id);
    case 'translation': return entry.translationKey;
    case 'symbolRoot': return entry.symbolRootKey;
    case 'element': return entry.elementKey;
    case 'keySentence': return entry.keySentenceKey;
    case 'shadowSign': return entry.shadowSignKey;
  }
}

export function formatRuneFieldDisplay(field: RuneFieldType, value: string, locale: string): string {
  if (field === 'element') return getRuneElementDisplay(value as RuneElementKey, locale);
  if (field === 'keySentence') return getRuneKeySentence(value, locale);
  if (field === 'shadowSign') return getRuneShadowSign(value, locale);
  if (field === 'translation') return getRuneTranslation(value, locale);
  if (field === 'symbolRoot') return getRuneSymbolRoot(value, locale);
  return value;
}

export function getAllRuneNames(): string[] {
  return runeData.map(r => r.name);
}

export function getAllRuneIcons(): string[] {
  return runeData.map(r => r.icon);
}

export function getAllRuneTranslations(locale: string): { key: string; display: string }[] {
  return runeData.map(r => ({ key: r.translationKey, display: getRuneTranslation(r.translationKey, locale) }));
}

export function getAllRuneSymbolRoots(locale: string): { key: string; display: string }[] {
  return runeData.map(r => ({ key: r.symbolRootKey, display: getRuneSymbolRoot(r.symbolRootKey, locale) }));
}

export function getAllRuneElements(locale: string): { key: RuneElementKey; display: string }[] {
  return (Object.keys(runeElementData) as RuneElementKey[]).map(k => ({
    key: k,
    display: getRuneElementDisplay(k, locale),
  }));
}

export function getRandomDistractors(
  correctKey: string,
  allKeys: string[],
  count: number,
): string[] {
  const others = allKeys.filter(k => k !== correctKey);
  const shuffled = [...others].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function getAllKeySentenceKeys(): string[] {
  return runeData.map(r => r.keySentenceKey);
}

export function getAllShadowSignKeys(): string[] {
  return runeData.map(r => r.shadowSignKey);
}
