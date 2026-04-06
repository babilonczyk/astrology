import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface TripleChoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (value: string) => void;
  title: string;
  options: string[];
  getDisplay: (key: string) => string;
}

export function TripleChoiceModal({
  isOpen, onClose, onSelect, title,
  options, getDisplay,
}: TripleChoiceModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const labels = ['A', 'B', 'C'];

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
          onClick={e => { if (e.target === backdropRef.current) onClose(); }}
        >
          <div className="absolute inset-0 bg-void/85 backdrop-blur-md" />

          <motion.div
            className="relative glass-gold rounded-t-3xl sm:rounded-2xl p-6 sm:p-8 w-full sm:max-w-lg max-h-[85vh] overflow-y-auto"
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
              <h3 className="font-serif text-lg font-semibold text-text-brightest">{title}</h3>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-strong hover:bg-surface-hover/50 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {options.map((key, idx) => (
                <button
                  key={key}
                  onClick={() => { onSelect(key); onClose(); }}
                  className="group text-left flex gap-3 p-4 rounded-xl border border-border/20 bg-surface/30 hover:border-gold/40 hover:bg-gold/5 transition-all cursor-pointer"
                >
                  <span className="shrink-0 w-7 h-7 rounded-lg bg-gold/10 text-gold text-xs font-bold flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    {labels[idx]}
                  </span>
                  <span className="text-sm text-text group-hover:text-gold-light transition-colors leading-relaxed">
                    {getDisplay(key)}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
