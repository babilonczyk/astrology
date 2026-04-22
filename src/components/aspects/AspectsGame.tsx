import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Trophy, Check, X, ArrowRight, ChevronLeft } from 'lucide-react';
import { pickRandomAspect, type AspectEntry } from '../../data/aspects';
import { type Locale, t, getLocaleFromCookie } from '../../lib/i18n';
import { getCookie, setCookie } from '../../lib/cookies';
import { AspectSymbol } from './AspectSymbol';
import { AspectsSelectionModal } from './AspectsSelectionModal';

export function AspectsGame({ onBack }: { onBack: () => void }) {
  const [locale, setLocale] = useState<Locale>('en');
  const [entry, setEntry] = useState<AspectEntry | null>(null);
  const [shownField, setShownField] = useState<'symbol' | 'name'>('symbol');
  const [userAnswer, setUserAnswer] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [result, setResult] = useState(false);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [cardNumber, setCardNumber] = useState(0);

  const generateNewCard = useCallback((excludeId?: number) => {
    setEntry(pickRandomAspect(excludeId));
    setShownField(Math.random() < 0.5 ? 'symbol' : 'name');
    setUserAnswer('');
    setModalOpen(false);
    setIsChecked(false);
    setResult(false);
    setCardNumber(prev => prev + 1);
  }, []);

  useEffect(() => {
    setLocale(getLocaleFromCookie());
    const saved = getCookie('aspectsBestStreak');
    if (saved) setBestStreak(parseInt(saved, 10) || 0);
    generateNewCard();
  }, [generateNewCard]);

  const evaluateAnswer = () => {
    if (!entry) return;
    const correctAnswer = shownField === 'symbol'
      ? (entry.names[locale] || entry.names['en'])
      : entry.symbol;
    const ok = userAnswer === correctAnswer;
    setResult(ok);
    setIsChecked(true);
    if (ok) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > bestStreak) {
        setBestStreak(newStreak);
        setCookie('aspectsBestStreak', String(newStreak));
      }
    } else {
      setStreak(0);
    }
  };

  const shownLabel = shownField === 'symbol' ? t('aspect.field.symbol', locale) : t('aspect.field.name', locale);
  const hiddenLabel = shownField === 'symbol' ? t('aspect.field.name', locale) : t('aspect.field.symbol', locale);

  const shownValue = entry
    ? (shownField === 'symbol' ? entry.symbol : (entry.names[locale] || entry.names['en']))
    : '';

  const correctAnswer = entry
    ? (shownField === 'symbol' ? (entry.names[locale] || entry.names['en']) : entry.symbol)
    : '';

  if (!entry) return null;

  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-6 py-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
        <h2 className="font-serif text-2xl font-bold text-text-brightest mb-1">{t('aspect.game.title', locale)}</h2>
        <div className="ornament"><span className="text-gold text-xs">{'\u2726'}</span></div>
      </motion.div>

      {/* Streak */}
      <motion.div
        className="flex items-center justify-center gap-8 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex items-center gap-2.5">
          <Flame
            size={22}
            className={streak > 0 ? 'text-gold drop-shadow-[0_0_6px_rgba(201,165,92,0.5)]' : 'text-text-muted/30'}
          />
          <div>
            <div className="text-[10px] uppercase tracking-[0.15em] text-text-muted">{t('game.streak', locale)}</div>
            <motion.div
              key={streak}
              initial={{ scale: 1.4 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="text-2xl font-bold text-gold tabular-nums"
            >
              {streak}
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
                  result ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'
                }`}
              >
                {result ? t('game.correct', locale) : t('game.wrong', locale)}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="p-5 sm:p-7">
            {/* Shown field */}
            <div className="py-3.5 px-3 rounded-xl">
              <div className="text-[10px] uppercase tracking-[0.15em] text-text-muted mb-1.5">{shownLabel}</div>
              {shownField === 'symbol' ? (
                <AspectSymbol symbol={shownValue} className="text-gold-light" size={40} />
              ) : (
                <div className="font-medium text-gold-light text-xl">{shownValue}</div>
              )}
            </div>

            <div className="border-t border-border/20 my-0.5" />

            {/* Hidden field */}
            <div
              className={[
                'py-3.5 px-3 rounded-xl transition-all duration-200',
                !isChecked ? 'cursor-pointer hover:bg-surface-hover/30' : '',
                isChecked ? (result ? 'bg-success/5' : 'bg-danger/5') : '',
              ].join(' ')}
              onClick={() => { if (!isChecked) setModalOpen(true); }}
            >
              <div className="text-[10px] uppercase tracking-[0.15em] text-text-muted mb-1.5 flex items-center gap-1.5">
                {hiddenLabel}
                {isChecked && (
                  result
                    ? <Check size={11} className="text-success" />
                    : <X size={11} className="text-danger" />
                )}
              </div>

              {isChecked ? (
                <div>
                  {shownField === 'name' ? (
                    <AspectSymbol
                      symbol={userAnswer || '\u2014'}
                      className={result ? 'text-success' : 'text-danger line-through'}
                      size={40}
                    />
                  ) : (
                    <div className={`font-medium text-xl ${result ? 'text-success' : 'text-danger line-through'}`}>
                      {userAnswer || '\u2014'}
                    </div>
                  )}
                  {!result && (
                    <div className="mt-1">
                      {shownField === 'name' ? (
                        <AspectSymbol symbol={correctAnswer} className="text-success/80" size={28} />
                      ) : (
                        <div className="text-sm text-success/80">{correctAnswer}</div>
                      )}
                    </div>
                  )}
                </div>
              ) : userAnswer ? (
                shownField === 'name' ? (
                  <AspectSymbol symbol={userAnswer} className="text-violet-light" size={40} />
                ) : (
                  <div className="font-medium text-violet-light text-xl">{userAnswer}</div>
                )
              ) : (
                <div className="text-base text-text-muted/30 animate-shimmer select-none">
                  {t('game.tapToAnswer', locale)}
                </div>
              )}
            </div>

            {/* Action */}
            <div className="mt-6">
              {!isChecked ? (
                <button
                  onClick={evaluateAnswer}
                  disabled={!userAnswer}
                  className={`w-full py-3.5 rounded-xl font-medium text-sm tracking-wide transition-all duration-200 ${
                    userAnswer
                      ? 'bg-gold/15 border border-gold/30 text-gold hover:bg-gold/25 cursor-pointer'
                      : 'bg-surface-2/50 border border-border/30 text-text-muted/40 cursor-not-allowed'
                  }`}
                >
                  {t('game.check', locale)}
                </button>
              ) : (
                <button
                  onClick={() => generateNewCard(entry.id)}
                  className="w-full py-3.5 rounded-xl font-medium text-sm tracking-wide bg-gold/15 border border-gold/30 text-gold hover:bg-gold/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {t('game.next', locale)}
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={onBack}
        className="mt-6 flex items-center gap-1.5 text-sm text-text-muted/50 hover:text-text-muted transition-colors cursor-pointer"
      >
        <ChevronLeft size={14} />
        {t('game.chooseMode', locale)}
      </button>

      <AspectsSelectionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelect={v => { setUserAnswer(v); setModalOpen(false); }}
        title={shownField === 'symbol' ? t('aspect.modal.pickName', locale) : t('aspect.modal.pickSymbol', locale)}
        variant={shownField === 'symbol' ? 'name' : 'symbol'}
        locale={locale}
      />
    </div>
  );
}
