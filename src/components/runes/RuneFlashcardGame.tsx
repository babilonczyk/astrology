import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Trophy, Check, X, ArrowRight, Star, ChevronLeft } from 'lucide-react';
import {
  allRuneFields, getActiveRuneFields, pickRuneShownFields, pickRandomRune, getRuneFieldValue, formatRuneFieldDisplay,
  getAllRuneNames, getAllRuneIcons, getAllRuneTranslations, getAllRuneSymbolRoots, getAllRuneElements,
  getAllKeySentenceKeys, getAllShadowSignKeys, getRuneKeySentence, getRuneShadowSign,
  getRandomDistractors,
  type RuneFieldType, type RuneEntry,
} from '../../data/runes';
import { type Locale, t, getLocaleFromCookie } from '../../lib/i18n';
import { getCookie, setCookie } from '../../lib/cookies';
import { RuneSelectionModal } from './RuneSelectionModal';
import { TripleChoiceModal } from './TripleChoiceModal';

type ModalType = 'runeName' | 'runeIcon' | 'translation' | 'symbolRoot' | 'element' | 'keySentence' | 'shadowSign' | null;

const MODES = [1, 2, 3, 4, 5, 6, 7] as const;
const MAX_STARS = 7;

export function RuneFlashcardGame() {
  const [locale, setLocale] = useState<Locale>('en');
  const [mode, setMode] = useState<number | null>(null);
  const [currentEntry, setCurrentEntry] = useState<RuneEntry | null>(null);
  const [shownFields, setShownFields] = useState<RuneFieldType[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [editingField, setEditingField] = useState<RuneFieldType | null>(null);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [cardNumber, setCardNumber] = useState(0);
  const [fieldOrder, setFieldOrder] = useState<RuneFieldType[]>(allRuneFields);
  const cachedModalItems = useRef<Record<string, { value: string; display: string }[]>>({});
  const cachedTripleOptions = useRef<Record<string, string[]>>({});

  useEffect(() => {
    setLocale(getLocaleFromCookie());
    const saved = getCookie('runesBestStreak');
    if (saved) setBestStreak(parseInt(saved, 10) || 0);
  }, []);

  const activeFields = mode !== null ? getActiveRuneFields(mode) : allRuneFields;
  const hiddenFields = activeFields.filter(f => !shownFields.includes(f));
  const allFilled = hiddenFields.every(f => userAnswers[f]?.trim());
  const allCorrect = isChecked && hiddenFields.every(f => results[f]);

  const generateNewCard = useCallback((m: number, excludeId?: number) => {
    const entry = pickRandomRune(excludeId);
    const shown = pickRuneShownFields(m);
    setCurrentEntry(entry);
    setShownFields(shown);
    setUserAnswers({});
    setEditingField(null);
    setModalType(null);
    setIsChecked(false);
    setResults({});
    setFieldOrder(allRuneFields);
    cachedModalItems.current = {};
    cachedTripleOptions.current = {};
    setCardNumber(prev => prev + 1);
  }, []);

  const startGame = (selectedMode: number) => {
    setMode(selectedMode);
    setCurrentStreak(0);
    generateNewCard(selectedMode);
  };

  const evaluateAnswers = () => {
    if (!currentEntry) return;
    const newResults: Record<string, boolean> = {};
    let correct = true;

    for (const field of hiddenFields) {
      const correctValue = getRuneFieldValue(currentEntry, field, locale);
      const answer = userAnswers[field] || '';
      const ok = field === 'runeNumber'
        ? answer.trim() === correctValue
        : answer === correctValue;
      newResults[field] = ok;
      if (!ok) correct = false;
    }

    setResults(newResults);
    setIsChecked(true);

    if (correct) {
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      if (newStreak > bestStreak) {
        setBestStreak(newStreak);
        setCookie('runesBestStreak', String(newStreak));
      }
    } else {
      setCurrentStreak(0);
    }
  };

  const handleFieldClick = (field: RuneFieldType) => {
    if (isChecked || shownFields.includes(field)) return;
    if (field === 'runeNumber') { setEditingField(field); return; }
    setEditingField(null);
    setModalType(field as ModalType);
  };

  const handleModalSelect = (value: string) => {
    if (!modalType) return;
    setUserAnswers(prev => ({ ...prev, [modalType]: value }));
    setModalType(null);
  };

  const displayVal = (field: RuneFieldType, v: string) =>
    formatRuneFieldDisplay(field, v, locale);

  const isRuneSymbol = (field: RuneFieldType) => field === 'runeIcon';
  const isLongText = (field: RuneFieldType) => field === 'keySentence' || field === 'shadowSign';

  /* ── Modal items (7 choices: 1 correct + 6 distractors, cached per card) ── */
  const getModalItems = (): { value: string; display: string }[] => {
    if (!currentEntry || !modalType) return [];
    if (cachedModalItems.current[modalType]) return cachedModalItems.current[modalType];

    const pick7 = (correctVal: string, allVals: { value: string; display: string }[]) => {
      const allKeys = allVals.map(v => v.value);
      const distractorKeys = getRandomDistractors(correctVal, allKeys, 6);
      const chosen = [correctVal, ...distractorKeys];
      return allVals.filter(v => chosen.includes(v.value)).sort(() => Math.random() - 0.5);
    };

    let items: { value: string; display: string }[] = [];
    if (modalType === 'runeName') {
      const all = getAllRuneNames().map(n => ({ value: n, display: n }));
      items = pick7(currentEntry.name, all);
    } else if (modalType === 'runeIcon') {
      const all = getAllRuneIcons().map(i => ({ value: i, display: i }));
      items = pick7(currentEntry.icon, all);
    } else if (modalType === 'translation') {
      const all = getAllRuneTranslations(locale).map(t => ({ value: t.key, display: t.display }));
      items = pick7(currentEntry.translationKey, all);
    } else if (modalType === 'symbolRoot') {
      const all = getAllRuneSymbolRoots(locale).map(s => ({ value: s.key, display: s.display }));
      items = pick7(currentEntry.symbolRootKey, all);
    } else if (modalType === 'element') {
      const all = getAllRuneElements(locale).map(e => ({ value: e.key, display: e.display }));
      items = pick7(currentEntry.elementKey, all);
    }

    cachedModalItems.current[modalType] = items;
    return items;
  };

  const getModalTitle = () => {
    if (modalType === 'runeName') return t('rune.modal.chooseName', locale);
    if (modalType === 'runeIcon') return t('rune.modal.chooseIcon', locale);
    if (modalType === 'translation') return t('rune.modal.chooseTranslation', locale);
    if (modalType === 'symbolRoot') return t('rune.modal.chooseSymbolRoot', locale);
    if (modalType === 'element') return t('rune.modal.chooseElement', locale);
    if (modalType === 'keySentence') return t('rune.modal.chooseKeySentence', locale);
    if (modalType === 'shadowSign') return t('rune.modal.chooseShadowSign', locale);
    return '';
  };

  const getTripleOptions = (field: string, correctKey: string, allKeys: string[]): string[] => {
    if (cachedTripleOptions.current[field]) return cachedTripleOptions.current[field];
    const others = allKeys.filter(k => k !== correctKey);
    const shuffledOthers = [...others].sort(() => Math.random() - 0.5);
    const distractors = shuffledOthers.slice(0, 2);
    const options = [correctKey, ...distractors].sort(() => Math.random() - 0.5);
    cachedTripleOptions.current[field] = options;
    return options;
  };

  const isTripleChoice = modalType === 'keySentence' || modalType === 'shadowSign';
  const isStandardModal = modalType !== null && !isTripleChoice;

  /* ── Mode Selector ── */
  if (mode === null) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center w-full max-w-2xl"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-brightest mb-2">
            {t('rune.game.title', locale)}
          </h2>
          <div className="ornament mb-4">
            <span className="font-runic text-gold text-sm">{'\u16A0'}</span>
          </div>
          <p className="text-text mb-10">{t('game.chooseMode', locale)}</p>

          {/* Top row: modes 1-4 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-3 sm:mb-4">
            {MODES.slice(0, 4).map((m, i) => (
              <motion.button
                key={m}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06 }}
                onClick={() => startGame(m)}
                className="glass-gold rounded-2xl p-4 sm:p-5 flex flex-col items-center gap-2.5 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(201,165,92,0.12)]"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: MAX_STARS }).map((_, j) => (
                    <Star key={j} size={11} className={j < m ? 'text-gold fill-gold' : 'text-border/40'} />
                  ))}
                </div>
                <div className="text-sm font-semibold text-text-strong">
                  {t(`game.hidden${m}` as const, locale)}
                </div>
                <div className="text-[11px] text-text-muted font-medium">
                  {t(`game.difficulty${m}` as const, locale)}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Bottom row: modes 5-7 */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {MODES.slice(4).map((m, i) => (
              <motion.button
                key={m}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.06 }}
                onClick={() => startGame(m)}
                className={`glass-gold rounded-2xl p-4 sm:p-5 flex flex-col items-center gap-2.5 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(201,165,92,0.12)] ${
                  m >= 6 ? 'border-gold/30' : ''
                }`}
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: MAX_STARS }).map((_, j) => (
                    <Star key={j} size={11} className={j < m ? 'text-gold fill-gold' : 'text-border/40'} />
                  ))}
                </div>
                <div className="text-sm font-semibold text-text-strong">
                  {t(`game.hidden${m}` as const, locale)}
                </div>
                <div className="text-[11px] text-text-muted font-medium">
                  {t(`game.difficulty${m}` as const, locale)}
                </div>
              </motion.button>
            ))}
          </div>

          {bestStreak > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex items-center justify-center gap-2 text-text-muted"
            >
              <Trophy size={16} className="text-gold/60" />
              <span className="text-sm">
                {t('game.best', locale)}: <strong className="text-gold">{bestStreak}</strong>
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    );
  }

  /* ── Game ── */
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-6 py-8">
      {/* Streak */}
      <motion.div className="flex items-center justify-center gap-8 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="flex items-center gap-2.5">
          <Flame
            size={22}
            className={currentStreak > 0 ? 'text-gold drop-shadow-[0_0_6px_rgba(201,165,92,0.5)]' : 'text-text-muted/30'}
          />
          <div>
            <div className="text-[10px] uppercase tracking-[0.15em] text-text-muted">{t('game.streak', locale)}</div>
            <motion.div
              key={currentStreak}
              initial={{ scale: 1.4 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="text-2xl font-bold text-gold tabular-nums"
            >
              {currentStreak}
            </motion.div>
          </div>
        </div>
        <div className="w-px h-10 bg-border/40" />
        <div className="flex items-center gap-2.5">
          <Trophy size={18} className="text-text-muted/40" />
          <div>
            <div className="text-[10px] uppercase tracking-[0.15em] text-text-muted">{t('game.best', locale)}</div>
            <div className="text-lg font-semibold text-text-strong tabular-nums">{bestStreak}</div>
          </div>
        </div>
      </motion.div>

      {/* Card */}
      <AnimatePresence mode="wait">
        {currentEntry && (
          <motion.div
            key={cardNumber}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="glass-gold rounded-3xl w-full max-w-md overflow-hidden"
          >
            {/* Result banner */}
            <AnimatePresence>
              {isChecked && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className={`text-center py-3 text-sm font-semibold tracking-wide ${
                    allCorrect ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'
                  }`}
                >
                  {allCorrect ? t('game.correct', locale) : t('game.wrong', locale)}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Fields */}
            <div className="p-5 sm:p-7">
              {fieldOrder.filter(f => activeFields.includes(f)).map((field, i) => {
                const isShown = shownFields.includes(field);
                const value = getRuneFieldValue(currentEntry, field, locale);
                const answer = userAnswers[field] || '';
                const isEditing = editingField === field;
                const isSymbol = isRuneSymbol(field);
                const isLong = isLongText(field);
                const isNumber = field === 'runeNumber';
                const hasAnswer = answer.trim() !== '';
                const fieldOk = results[field];

                return (
                  <div key={field}>
                    {i > 0 && <div className="border-t border-border/20 my-0.5" />}
                    <div
                      className={[
                        'py-3 px-3 rounded-xl transition-all duration-200',
                        !isShown && !isChecked
                          ? `cursor-pointer ${hasAnswer ? 'hover:bg-violet/5' : 'hover:bg-surface-hover/30'}`
                          : '',
                        isEditing ? 'bg-surface-hover/20 ring-1 ring-gold/20' : '',
                        isChecked && !isShown ? (fieldOk ? 'bg-success/5' : 'bg-danger/5') : '',
                      ].join(' ')}
                      onClick={() => handleFieldClick(field)}
                    >
                      {/* Label */}
                      <div className="text-[10px] uppercase tracking-[0.15em] text-text-muted mb-1 flex items-center gap-1.5">
                        {t(`rune.field.${field}`, locale)}
                        {isChecked && !isShown && (
                          fieldOk
                            ? <Check size={11} className="text-success" />
                            : <X size={11} className="text-danger" />
                        )}
                      </div>

                      {/* Content */}
                      {isShown ? (
                        isSymbol ? (
                          <div className="font-runic text-3xl text-gold-light">{displayVal(field, value)}</div>
                        ) : (
                          <div className={`font-medium text-gold-light ${isLong ? 'text-[13px] leading-relaxed' : 'text-lg'}`}>
                            {displayVal(field, value)}
                          </div>
                        )
                      ) : isChecked ? (
                        <div>
                          {isSymbol ? (
                            <div className={`font-runic text-3xl ${fieldOk ? 'text-success' : 'text-danger line-through'}`}>
                              {displayVal(field, answer) || '\u2014'}
                            </div>
                          ) : (
                            <div className={`font-medium ${isLong ? 'text-[13px] leading-relaxed' : 'text-lg'} ${fieldOk ? 'text-success' : 'text-danger line-through'}`}>
                              {displayVal(field, answer) || '\u2014'}
                            </div>
                          )}
                          {!fieldOk && (
                            isSymbol ? (
                              <div className="mt-1 font-runic text-3xl text-success/80">{displayVal(field, value)}</div>
                            ) : (
                              <div className={`mt-1 text-success/80 ${isLong ? 'text-xs leading-relaxed' : 'text-sm'}`}>
                                {displayVal(field, value)}
                              </div>
                            )
                          )}
                        </div>
                      ) : isEditing && isNumber ? (
                        <input
                          type="number"
                          min={1}
                          max={24}
                          value={answer}
                          onChange={e => setUserAnswers(prev => ({ ...prev, [field]: e.target.value }))}
                          onBlur={() => setEditingField(null)}
                          onKeyDown={e => { if (e.key === 'Enter') setEditingField(null); }}
                          placeholder={t('rune.game.enterNumber', locale)}
                          className="w-full bg-transparent text-lg text-violet-light font-medium outline-none placeholder:text-text-muted/40 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          autoFocus
                          autoComplete="off"
                        />
                      ) : hasAnswer ? (
                        isSymbol ? (
                          <div className="font-runic text-3xl text-violet-light">{displayVal(field, answer)}</div>
                        ) : (
                          <div className={`font-medium text-violet-light ${isLong ? 'text-[13px] leading-relaxed' : 'text-lg'}`}>
                            {displayVal(field, answer)}
                          </div>
                        )
                      ) : (
                        <div className="text-sm text-text-muted/30 animate-shimmer select-none">
                          {t('game.tapToAnswer', locale)}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Action */}
              <div className="mt-5">
                {!isChecked ? (
                  <button
                    onClick={evaluateAnswers}
                    disabled={!allFilled}
                    className={`w-full py-3.5 rounded-xl font-medium text-sm tracking-wide transition-all duration-200 ${
                      allFilled
                        ? 'bg-gold/15 border border-gold/30 text-gold hover:bg-gold/25 cursor-pointer'
                        : 'bg-surface-2/50 border border-border/30 text-text-muted/40 cursor-not-allowed'
                    }`}
                  >
                    {t('game.check', locale)}
                  </button>
                ) : (
                  <button
                    onClick={() => generateNewCard(mode!, currentEntry?.id)}
                    className="w-full py-3.5 rounded-xl font-medium text-sm tracking-wide bg-gold/15 border border-gold/30 text-gold hover:bg-gold/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {t('game.next', locale)}
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Change difficulty */}
      <button
        onClick={() => { setMode(null); setCurrentStreak(0); }}
        className="mt-6 flex items-center gap-1.5 text-sm text-text-muted/50 hover:text-text-muted transition-colors cursor-pointer"
      >
        <ChevronLeft size={14} />
        {t('game.chooseMode', locale)}
      </button>

      {/* Standard Selection Modal — always 1 column, 7 items */}
      <RuneSelectionModal
        isOpen={isStandardModal}
        onClose={() => setModalType(null)}
        onSelect={handleModalSelect}
        title={getModalTitle()}
        items={getModalItems()}
        variant={modalType === 'runeIcon' ? 'symbol' : 'text'}
        columns={1}
      />

      {/* Triple Choice Modal - Key Sentence */}
      {currentEntry && (
        <TripleChoiceModal
          isOpen={modalType === 'keySentence'}
          onClose={() => setModalType(null)}
          onSelect={handleModalSelect}
          title={getModalTitle()}
          options={getTripleOptions('keySentence', currentEntry.keySentenceKey, getAllKeySentenceKeys())}
          getDisplay={key => getRuneKeySentence(key, locale)}
        />
      )}

      {/* Triple Choice Modal - Shadow Sign */}
      {currentEntry && (
        <TripleChoiceModal
          isOpen={modalType === 'shadowSign'}
          onClose={() => setModalType(null)}
          onSelect={handleModalSelect}
          title={getModalTitle()}
          options={getTripleOptions('shadowSign', currentEntry.shadowSignKey, getAllShadowSignKeys())}
          getDisplay={key => getRuneShadowSign(key, locale)}
        />
      )}
    </div>
  );
}
