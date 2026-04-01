import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Layers, ArrowRight } from 'lucide-react';
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
        <h1 className="font-serif text-5xl sm:text-7xl font-bold text-gold-gradient mb-6 leading-tight">
          Astrologia
        </h1>
        <div className="ornament mb-6">
          <span className="text-gold text-xs">{'\u2726'}</span>
        </div>
        <p className="text-text-muted text-lg sm:text-xl leading-relaxed">
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
          {/* Flashcard Tool Card */}
          <a
            href="/flashcards"
            className="group glass-gold rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center no-underline transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/15 transition-colors">
              <Layers size={28} className="text-gold" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-text-brightest mb-3">
              {t('hub.flashcards', locale)}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">
              {t('hub.flashcards.desc', locale)}
            </p>
            <span className="inline-flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all">
              {t('hub.start', locale)}
              <ArrowRight size={16} />
            </span>
          </a>

          {/* Coming Soon Placeholder */}
          <div className="glass rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center opacity-40">
            <div className="w-16 h-16 rounded-2xl bg-border/30 flex items-center justify-center mb-5">
              <span className="text-2xl text-text-muted">{'\u2026'}</span>
            </div>
            <p className="text-text-muted text-sm">
              {t('hub.comingSoon', locale)}
            </p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
