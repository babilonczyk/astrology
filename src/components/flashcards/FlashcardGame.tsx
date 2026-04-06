import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Trophy, Check, X, ArrowRight, Star, ChevronLeft } from 'lucide-react';
import {
  allFields, getActiveFields, pickShownFields, pickRandomEntry, getFieldValue, formatFieldDisplay,
  type FieldType, type ZodiacEntry, type AstroGameType,
} from '../../data/zodiac';
import { type Locale, t, getLocaleFromCookie } from '../../lib/i18n';
import { getCookie, setCookie } from '../../lib/cookies';
import { SelectionModal } from './SelectionModal';
import { ElementModal } from './ElementModal';
import { AstroSymbol } from './AstroSymbol';

export function FlashcardGame() {
  const [locale, setLocale] = useState<Locale>('en');
  const [gameType, setGameType] = useState<AstroGameType>('full');
  const [mode, setMode] = useState<number | null>(null);
  const [currentEntry, setCurrentEntry] = useState<ZodiacEntry | null>(null);
  const [shownFields, setShownFields] = useState<FieldType[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [editingField, setEditingField] = useState<FieldType | null>(null);
  const [modalType, setModalType] = useState<'zodiac' | 'planet' | 'element' | 'zodiacName' | 'planetName' | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [cardNumber, setCardNumber] = useState(0);
  const [fieldOrder, setFieldOrder] = useState<FieldType[]>(allFields);

  useEffect(() => {
    setLocale(getLocaleFromCookie());
    const saved = getCookie('bestStreak');
    if (saved) setBestStreak(parseInt(saved, 10) || 0);
  }, []);

  const activeFields = getActiveFields(gameType);
  const hiddenFields = activeFields.filter(f => !shownFields.includes(f));
  const allFilled = hiddenFields.every(f => userAnswers[f]?.trim());
  const allCorrect = isChecked && hiddenFields.every(f => results[f]);

  const generateNewCard = useCallback((m: number, gt: AstroGameType, excludeId?: number) => {
    const entry = pickRandomEntry(excludeId);
    const shown = pickShownFields(m, gt);
    setCurrentEntry(entry);
    setShownFields(shown);
    setUserAnswers({});
    setEditingField(null);
    setModalType(null);
    setIsChecked(false);
    setResults({});
    setFieldOrder(allFields);
    setCardNumber(prev => prev + 1);
  }, []);

  const startGame = (selectedMode: number) => {
    setGameType('full');
    setMode(selectedMode);
    setCurrentStreak(0);
    generateNewCard(selectedMode, 'full');
  };

  const startPreview = (gt: AstroGameType) => {
    setGameType(gt);
    setMode(1);
    setCurrentStreak(0);
    generateNewCard(1, gt);
  };

  const evaluateAnswers = () => {
    if (!currentEntry) return;
    const newResults: Record<string, boolean> = {};
    let correct = true;

    for (const field of hiddenFields) {
      const correctValue = getFieldValue(currentEntry, field, locale);
      const answer = userAnswers[field] || '';
      const ok = field === 'sector'
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
        setCookie('bestStreak', String(newStreak));
      }
    } else {
      setCurrentStreak(0);
    }
  };

  const handleFieldClick = (field: FieldType) => {
    if (isChecked || shownFields.includes(field)) return;

    if (field === 'sector') {
      setEditingField(field);
      return;
    }

    setEditingField(null);
    if (field === 'zodiacSign') setModalType('zodiac');
    else if (field === 'planetIcon') setModalType('planet');
    else if (field === 'zodiacName') setModalType('zodiacName');
    else if (field === 'planetName') setModalType('planetName');
    else if (field === 'element') setModalType('element');
  };

  const handleModalSelect = (value: string) => {
    let field: FieldType;
    if (modalType === 'zodiac') field = 'zodiacSign';
    else if (modalType === 'planet') field = 'planetIcon';
    else if (modalType === 'zodiacName') field = 'zodiacName';
    else if (modalType === 'planetName') field = 'planetName';
    else field = 'element';
    setUserAnswers(prev => ({ ...prev, [field]: value }));
    setModalType(null);
  };

  // Helper: format value for display (handles element encoding)
  const displayVal = (field: FieldType, v: string) =>
    formatFieldDisplay(field, v, locale);

  /* ── Mode Selector ────────────────────────────────── */

  if (mode === null) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center w-full max-w-xl"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-brightest mb-2">
            {t('game.title', locale)}
          </h2>
          <div className="ornament mb-4">
            <span className="text-gold text-xs">{'\u2726'}</span>
          </div>
          {/* Preview buttons */}
          <p className="text-text-muted text-xs uppercase tracking-[0.15em] mb-3">{t('game.preview', locale)}</p>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onClick={() => startPreview('previewZodiac')}
              className="glass-gold rounded-2xl p-4 sm:p-5 flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(201,165,92,0.12)]"
            >
              <span className="text-2xl">{'\u2648'}</span>
              <div className="text-sm font-semibold text-text-strong">{t('game.previewZodiac', locale)}</div>
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              onClick={() => startPreview('previewPlanet')}
              className="glass-gold rounded-2xl p-4 sm:p-5 flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(201,165,92,0.12)]"
            >
              <span className="text-2xl">{'\u2643'}</span>
              <div className="text-sm font-semibold text-text-strong">{t('game.previewPlanet', locale)}</div>
            </motion.button>
          </div>

          <p className="text-text-muted text-xs uppercase tracking-[0.15em] mb-3">
            {t('game.chooseMode', locale)}
          </p>

          {/* Top row: 3 modes */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
            {([1, 2, 3] as const).map((m, i) => (
              <motion.button
                key={m}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06 }}
                onClick={() => startGame(m)}
                className="glass-gold rounded-2xl p-4 sm:p-5 flex flex-col items-center gap-2.5 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(201,165,92,0.12)]"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={12} className={j < m ? 'text-gold fill-gold' : 'text-border/40'} />
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

          {/* Bottom row: 2 modes */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {([4, 5] as const).map((m, i) => (
              <motion.button
                key={m}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.06 }}
                onClick={() => startGame(m)}
                className="glass-gold rounded-2xl p-4 sm:p-5 flex flex-col items-center gap-2.5 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(201,165,92,0.12)]"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={12} className={j < m ? 'text-gold fill-gold' : 'text-border/40'} />
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

          {/* Best streak reminder */}
          {bestStreak > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
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

  /* ── Game ──────────────────────────────────────────── */

  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-6 py-8">
      {/* Streak */}
      <motion.div
        className="flex items-center justify-center gap-8 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex items-center gap-2.5">
          <Flame
            size={22}
            className={
              currentStreak > 0 ? 'text-gold drop-shadow-[0_0_6px_rgba(201,165,92,0.5)]' : 'text-text-muted/30'
            }
          />
          <div>
            <div className="text-[10px] uppercase tracking-[0.15em] text-text-muted">
              {t('game.streak', locale)}
            </div>
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
            <div className="text-[10px] uppercase tracking-[0.15em] text-text-muted">
              {t('game.best', locale)}
            </div>
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
                const value = getFieldValue(currentEntry, field, locale);
                const answer = userAnswers[field] || '';
                const isEditing = editingField === field;
                const isSymbol = field === 'zodiacSign' || field === 'planetIcon';
                const isModal = field !== 'sector';
                const isNumber = field === 'sector';
                const hasAnswer = answer.trim() !== '';
                const fieldOk = results[field];

                return (
                  <div key={field}>
                    {i > 0 && <div className="border-t border-border/20 my-0.5" />}

                    <div
                      className={[
                        'py-3.5 px-3 rounded-xl transition-all duration-200',
                        !isShown && !isChecked
                          ? `cursor-pointer ${hasAnswer ? 'hover:bg-violet/5' : 'hover:bg-surface-hover/30'}`
                          : '',
                        isEditing ? 'bg-surface-hover/20 ring-1 ring-gold/20' : '',
                        isChecked && !isShown ? (fieldOk ? 'bg-success/5' : 'bg-danger/5') : '',
                      ].join(' ')}
                      onClick={() => handleFieldClick(field)}
                    >
                      {/* Label */}
                      <div className="text-[10px] uppercase tracking-[0.15em] text-text-muted mb-1.5 flex items-center gap-1.5">
                        {t(`field.${field}`, locale)}
                        {isChecked && !isShown && (
                          fieldOk
                            ? <Check size={11} className="text-success" />
                            : <X size={11} className="text-danger" />
                        )}
                      </div>

                      {/* Content */}
                      {isShown ? (
                        /* ── Revealed field ── */
                        <div>
                          {isSymbol ? (
                            <AstroSymbol symbol={displayVal(field, value)} className="text-gold-light" size={40} />
                          ) : (
                            <div className="font-medium text-gold-light text-xl">
                              {displayVal(field, value)}
                            </div>
                          )}
                        </div>
                      ) : isChecked ? (
                        /* ── After check ── */
                        <div>
                          {isSymbol ? (
                            <AstroSymbol
                              symbol={displayVal(field, answer) || '\u2014'}
                              className={fieldOk ? 'text-success' : 'text-danger line-through'}
                              size={40}
                            />
                          ) : (
                            <div className={`font-medium text-xl ${fieldOk ? 'text-success' : 'text-danger line-through'}`}>
                              {displayVal(field, answer) || '\u2014'}
                            </div>
                          )}
                          {!fieldOk && (
                            <div>
                              {isSymbol ? (
                                <AstroSymbol symbol={displayVal(field, value)} className="mt-1 text-success/80" size={28} />
                              ) : (
                                <div className="mt-1 text-sm text-success/80">
                                  {displayVal(field, value)}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ) : isEditing && !isModal ? (
                        /* ── Active input ── */
                        <input
                          type={isNumber ? 'number' : 'text'}
                          min={isNumber ? 1 : undefined}
                          max={isNumber ? 12 : undefined}
                          value={answer}
                          onChange={e =>
                            setUserAnswers(prev => ({ ...prev, [field]: e.target.value }))
                          }
                          onBlur={() => setEditingField(null)}
                          onKeyDown={e => {
                            if (e.key === 'Enter') setEditingField(null);
                          }}
                          placeholder={
                            isNumber
                              ? t('game.enterSector', locale)
                              : t('game.typeAnswer', locale)
                          }
                          className="w-full bg-transparent text-xl text-violet-light font-medium outline-none placeholder:text-text-muted/40 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          autoFocus
                          autoComplete="off"
                        />
                      ) : hasAnswer ? (
                        /* ── Filled but not checked ── */
                        <div>
                          {isSymbol ? (
                            <AstroSymbol symbol={displayVal(field, answer)} className="text-violet-light" size={40} />
                          ) : (
                            <div className="font-medium text-violet-light text-xl">
                              {displayVal(field, answer)}
                            </div>
                          )}
                        </div>
                      ) : (
                        /* ── Empty placeholder ── */
                        <div className="text-base text-text-muted/30 animate-shimmer select-none">
                          {t('game.tapToAnswer', locale)}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Action */}
              <div className="mt-6">
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
                    onClick={() => generateNewCard(mode!, gameType, currentEntry?.id)}
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
        onClick={() => {
          setMode(null);
          setGameType('full');
          setCurrentStreak(0);
        }}
        className="mt-6 flex items-center gap-1.5 text-sm text-text-muted/50 hover:text-text-muted transition-colors cursor-pointer"
      >
        <ChevronLeft size={14} />
        {t('game.chooseMode', locale)}
      </button>

      {/* Selection Modal (zodiac / planet / names) */}
      <SelectionModal
        type={(modalType as 'zodiac' | 'planet' | 'zodiacName' | 'planetName') || 'zodiac'}
        isOpen={modalType !== null && modalType !== 'element'}
        onClose={() => setModalType(null)}
        onSelect={handleModalSelect}
        title={
          modalType === 'zodiac' ? t('modal.chooseZodiac', locale) :
          modalType === 'zodiacName' ? t('modal.chooseZodiacName', locale) :
          modalType === 'planetName' ? t('modal.choosePlanetName', locale) :
          t('modal.choosePlanet', locale)
        }
        locale={locale}
      />

      {/* Element Modal */}
      <ElementModal
        isOpen={modalType === 'element'}
        onClose={() => setModalType(null)}
        onSelect={handleModalSelect}
        title={t('modal.chooseElement', locale)}
        propertyTitle={t('modal.chooseProperty', locale)}
        locale={locale}
      />

    </div>
  );
}
