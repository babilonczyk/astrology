import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { type Locale, t, getLocaleFromCookie, setLocaleCookie } from '../lib/i18n';

const languages: { code: Locale; flag: string; label: string }[] = [
  { code: 'pl', flag: '\uD83C\uDDF5\uD83C\uDDF1', label: 'Polski' },
  { code: 'en', flag: '\uD83C\uDDEC\uD83C\uDDE7', label: 'English' },
];

interface NavBarProps {
  currentPage?: 'hub' | 'flashcards';
}

export function NavBar({ currentPage = 'hub' }: NavBarProps) {
  const [locale, setLocale] = useState<Locale>('en');
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLocale(getLocaleFromCookie());
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  const switchLocale = (next: Locale) => {
    if (next === locale) { setOpen(false); return; }
    setLocaleCookie(next);
    setLocale(next);
    setOpen(false);
    window.location.reload();
  };

  const current = languages.find(l => l.code === locale) || languages[0];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {currentPage !== 'hub' && (
            <a
              href="/"
              className="flex items-center gap-1.5 text-text-muted hover:text-gold transition-colors mr-2"
              aria-label={t('game.back', locale)}
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline text-sm">{t('game.back', locale)}</span>
            </a>
          )}
          <a href="/" className="flex items-center gap-2 no-underline">
            <span className="text-2xl" aria-hidden="true">{'\u2728'}</span>
            <span className="font-serif text-xl font-semibold text-gold-gradient tracking-wide">
              Astrologia
            </span>
          </a>
        </div>

        {/* Language dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-text-muted hover:text-text-strong hover:bg-surface-hover/50 transition-all cursor-pointer"
            aria-label="Switch language"
          >
            <span className="text-base">{current.flag}</span>
            <span className="font-medium text-xs">{current.label}</span>
            <ChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
          </button>

          {open && (
            <div className="absolute right-0 mt-1 glass-gold rounded-xl border border-border/30 overflow-hidden min-w-[140px] shadow-lg">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => switchLocale(lang.code)}
                  className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors cursor-pointer ${
                    lang.code === locale
                      ? 'text-gold bg-gold/10'
                      : 'text-text-muted hover:text-text-strong hover:bg-surface-hover/50'
                  }`}
                >
                  <span className="text-base">{lang.flag}</span>
                  <span className="font-medium">{lang.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
