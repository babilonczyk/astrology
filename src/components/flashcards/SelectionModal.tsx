import { useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { zodiacData, planetIcons, getZodiacName, getPlanetName } from '../../data/zodiac';
import type { Locale } from '../../lib/i18n';
import { AstroSymbol } from './AstroSymbol';

interface SelectionModalProps {
  type: 'zodiac' | 'planet' | 'zodiacName' | 'planetName';
  isOpen: boolean;
  onClose: () => void;
  onSelect: (value: string) => void;
  title: string;
  locale: Locale;
}

export function SelectionModal({ type, isOpen, onClose, onSelect, title, locale }: SelectionModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const isNameType = type === 'zodiacName' || type === 'planetName';

  const items = useMemo(() => {
    if (type === 'zodiac') {
      return zodiacData.map(z => ({ value: z.zodiacSign, display: z.zodiacSign }));
    } else if (type === 'planet') {
      return Object.entries(planetIcons).map(([, icon]) => ({ value: icon, display: icon }));
    } else if (type === 'zodiacName') {
      return zodiacData.map(z => ({ value: getZodiacName(z.zodiacKey, locale), display: getZodiacName(z.zodiacKey, locale) }));
    } else {
      return Object.keys(planetIcons).map(key => ({ value: getPlanetName(key, locale), display: getPlanetName(key, locale) }));
    }
  }, [type, isOpen, locale]).sort(() => Math.random() - 0.5);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={backdropRef}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => { if (e.target === backdropRef.current) onClose(); }}
        >
          <div className="absolute inset-0 bg-void/85 backdrop-blur-md" />

          <motion.div
            className="relative glass-gold rounded-t-3xl sm:rounded-2xl p-6 sm:p-8 w-full sm:max-w-md max-h-[85vh] overflow-y-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-label={title}
          >
            {/* Drag indicator (mobile) */}
            <div className="sm:hidden flex justify-center mb-4">
              <div className="w-10 h-1 rounded-full bg-border/60" />
            </div>

            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg font-semibold text-text-brightest">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-strong hover:bg-surface-hover/50 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className={`grid gap-2 ${
              isNameType ? 'grid-cols-2 sm:grid-cols-3' :
              type === 'zodiac' ? 'grid-cols-4' : 'grid-cols-5'
            }`}>
              {items.map((item) => (
                <button
                  key={item.value}
                  onClick={() => { onSelect(item.value); onClose(); }}
                  className={`group flex flex-col items-center gap-1.5 rounded-xl border border-border/20 bg-surface/30 hover:border-gold/40 hover:bg-gold/5 transition-all cursor-pointer ${
                    isNameType ? 'py-3 px-4' : 'p-3'
                  }`}
                >
                  {isNameType ? (
                    <span className="transition-transform group-hover:scale-105 text-base font-medium text-text group-hover:text-gold-light">
                      {item.display}
                    </span>
                  ) : (
                    <span className="transition-transform group-hover:scale-110">
                      <AstroSymbol symbol={item.display} size={36} />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
