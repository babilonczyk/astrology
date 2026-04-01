import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft } from 'lucide-react';
import { elementData, type ElementKey } from '../../data/zodiac';
import type { Locale } from '../../lib/i18n';

interface ElementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (value: string) => void;
  title: string;
  propertyTitle: string;
  locale: Locale;
}

export function ElementModal({ isOpen, onClose, onSelect, title, propertyTitle, locale }: ElementModalProps) {
  const [step, setStep] = useState<'element' | 'property'>('element');
  const [selectedElement, setSelectedElement] = useState<ElementKey | null>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setStep('element');
      setSelectedElement(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (step === 'property') {
          setStep('element');
          setSelectedElement(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, step, onClose]);

  const handleElementSelect = (key: ElementKey) => {
    setSelectedElement(key);
    setStep('property');
  };

  const handlePropertySelect = (propertyKey: string) => {
    if (!selectedElement) return;
    onSelect(`${selectedElement}:${propertyKey}`);
    onClose();
  };

  const handleBack = () => {
    setStep('element');
    setSelectedElement(null);
  };

  const elements = useMemo(
    () => (Object.entries(elementData) as [ElementKey, typeof elementData[ElementKey]][])
      .sort(() => Math.random() - 0.5),
    [isOpen]
  );
  const properties = useMemo(
    () => selectedElement
      ? Object.entries(elementData[selectedElement].properties).sort(() => Math.random() - 0.5)
      : [],
    [selectedElement]
  );

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
            aria-label={step === 'element' ? title : propertyTitle}
          >
            {/* Drag indicator (mobile) */}
            <div className="sm:hidden flex justify-center mb-4">
              <div className="w-10 h-1 rounded-full bg-border/60" />
            </div>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                {step === 'property' && (
                  <button
                    onClick={handleBack}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-strong hover:bg-surface-hover/50 transition-colors cursor-pointer"
                  >
                    <ChevronLeft size={18} />
                  </button>
                )}
                <h3 className="font-serif text-lg font-semibold text-text-brightest">
                  {step === 'element' ? title : propertyTitle}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-strong hover:bg-surface-hover/50 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              {step === 'element' ? (
                <motion.div
                  key="elements"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.15 }}
                  className="grid grid-cols-2 gap-3"
                >
                  {elements.map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => handleElementSelect(key)}
                      className="group flex flex-col items-center gap-2 p-5 rounded-xl border border-transparent hover:border-gold/40 hover:bg-gold/5 transition-all cursor-pointer"
                    >
                      <span className="text-4xl sm:text-5xl transition-transform group-hover:scale-110">
                        {data.icon}
                      </span>
                      <span className="text-sm text-text-muted group-hover:text-gold-light transition-colors">
                        {data.names[locale] || data.names['en']}
                      </span>
                    </button>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="properties"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.15 }}
                  className="flex flex-col gap-2"
                >
                  {properties.map(([propKey, labels]) => (
                    <button
                      key={propKey}
                      onClick={() => handlePropertySelect(propKey)}
                      className="group flex items-center gap-3 p-4 rounded-xl border border-transparent hover:border-gold/40 hover:bg-gold/5 transition-all cursor-pointer text-left"
                    >
                      <span className="text-2xl shrink-0">
                        {selectedElement && elementData[selectedElement].icon}
                      </span>
                      <span className="text-sm text-text-muted group-hover:text-gold-light transition-colors leading-snug">
                        {labels[locale] || labels['en']}
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
