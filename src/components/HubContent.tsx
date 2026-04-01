import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

function ConstellationIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} width={32} height={32}>
      {/* Stars */}
      <circle cx="6" cy="8" r="1.6" fill="currentColor" />
      <circle cx="16" cy="4" r="1.8" fill="currentColor" />
      <circle cx="26" cy="10" r="1.5" fill="currentColor" />
      <circle cx="20" cy="18" r="1.7" fill="currentColor" />
      <circle cx="10" cy="22" r="1.5" fill="currentColor" />
      <circle cx="24" cy="27" r="1.6" fill="currentColor" />
      {/* Lines */}
      <line x1="6" y1="8" x2="16" y2="4" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <line x1="16" y1="4" x2="26" y2="10" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <line x1="26" y1="10" x2="20" y2="18" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <line x1="20" y1="18" x2="10" y2="22" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <line x1="20" y1="18" x2="24" y2="27" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <line x1="6" y1="8" x2="10" y2="22" stroke="currentColor" strokeWidth="0.7" opacity="0.35" />
    </svg>
  );
}
import { type Locale, t, getLocaleFromCookie } from '../lib/i18n';

export function HubContent() {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    setLocale(getLocaleFromCookie());
  }, []);

  return (
    <main className="flex-1 flex flex-col items-center px-4 sm:px-6">
      {/* Hero */}
      <motion.section
        className="text-center pt-20 sm:pt-28 pb-16 sm:pb-20 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-serif text-5xl sm:text-7xl font-bold text-violet-gradient mb-6 leading-tight">
          {locale === 'pl' ? 'Ezoteryka' : 'Esoterica'}
        </h1>
        <div className="ornament mb-6">
          <span className="text-violet text-xs">{'\u2726'}</span>
        </div>
        <p className="text-text text-lg sm:text-xl leading-relaxed">
          {t('hub.subtitle', locale)}
        </p>
      </motion.section>

      {/* Tools Section */}
      <motion.section
        className="w-full max-w-4xl pb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="font-serif text-2xl font-semibold text-text-strong mb-8 text-center">
          {t('hub.tools', locale)}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Astrology Flashcards */}
          <motion.a
            href="/flashcards"
            className="group glass-gold rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center no-underline transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_40px_rgba(201,165,92,0.1)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/15 to-gold/5 flex items-center justify-center mb-5 group-hover:from-gold/25 group-hover:to-gold/10 transition-all duration-300">
              <ConstellationIcon className="text-gold" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-text-brightest mb-3">
              {t('hub.flashcards', locale)}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">
              {t('hub.flashcards.desc', locale)}
            </p>
            <span className="inline-flex items-center gap-2 text-gold text-sm font-semibold group-hover:gap-3 transition-all">
              {t('hub.start', locale)}
              <ArrowRight size={16} />
            </span>
          </motion.a>

          {/* Rune Flashcards */}
          <motion.a
            href="/runes"
            className="group glass-gold rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center no-underline transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_40px_rgba(201,165,92,0.1)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/15 to-gold/5 flex items-center justify-center mb-5 group-hover:from-gold/25 group-hover:to-gold/10 transition-all duration-300">
              <span className="font-runic text-3xl text-gold leading-none">{'\u16A0'}</span>
            </div>
            <h3 className="font-serif text-xl font-semibold text-text-brightest mb-3">
              {t('hub.runes', locale)}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">
              {t('hub.runes.desc', locale)}
            </p>
            <span className="inline-flex items-center gap-2 text-gold text-sm font-semibold group-hover:gap-3 transition-all">
              {t('hub.start', locale)}
              <ArrowRight size={16} />
            </span>
          </motion.a>

          {/* Coming Soon */}
          <motion.div
            className="glass rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center opacity-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-border/20 flex items-center justify-center mb-5">
              <span className="text-2xl text-text-muted">{'\u2026'}</span>
            </div>
            <p className="text-text-muted text-sm">
              {t('hub.comingSoon', locale)}
            </p>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
