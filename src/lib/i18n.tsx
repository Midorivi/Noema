/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { ReactNode } from "react";
import { en } from "@/locales/en";
import type { Dictionary } from "@/locales/en";
import { ko } from "@/locales/ko";

export type Language = "en" | "ko";

const STORAGE_KEY = "noema-lang";

const dictionaries: Record<Language, Dictionary> = { en, ko };

/** Curtain choreography (ms) — close, hold while closed (swap happens here), reopen. */
const CURTAIN_CLOSE = 750;
const CURTAIN_HOLD = 550;
const CURTAIN_OPEN = 750;
const REDUCED_FADE = 400;

type Phase = "idle" | "closing" | "opening" | "fade";

interface LanguageContextValue {
  lang: Language;
  /** Dot-path lookup, e.g. t("home.hero.tagline") or t("mission.values.items.0.title"). */
  t: (key: string) => string;
  /** Typed access to the active dictionary — use for mapping over arrays. */
  dict: Dictionary;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLanguage(): Language {
  if (typeof window === "undefined") return "en";
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "ko" ? "ko" : "en";
  } catch {
    return "en";
  }
}

function lookup(dict: Dictionary, key: string): string {
  let current: unknown = dict;
  for (const part of key.split(".")) {
    if (current !== null && typeof current === "object") {
      current = (current as Record<string, unknown>)[part];
    } else {
      current = undefined;
      break;
    }
  }
  return typeof current === "string" ? current : key;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(readStoredLanguage);
  const [phase, setPhase] = useState<Phase>("idle");
  const [target, setTarget] = useState<Language>(lang);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage unavailable — preference simply won't persist */
    }
  }, [lang]);

  useEffect(
    () => () => {
      timers.current.forEach((id) => window.clearTimeout(id));
    },
    [],
  );

  const schedule = useCallback((fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  }, []);

  const transitionTo = useCallback(
    (next: Language) => {
      if (phase !== "idle" || next === lang) return;
      setTarget(next);

      const reducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion) {
        // Instant swap with a gentle crossfade — no curtain sweep.
        setLang(next);
        setPhase("fade");
        schedule(() => setPhase("idle"), REDUCED_FADE);
        return;
      }

      setPhase("closing");
      // Swap the language only once the curtains are fully closed.
      schedule(() => setLang(next), CURTAIN_CLOSE);
      schedule(() => setPhase("opening"), CURTAIN_CLOSE + CURTAIN_HOLD);
      schedule(() => setPhase("idle"), CURTAIN_CLOSE + CURTAIN_HOLD + CURTAIN_OPEN);
    },
    [lang, phase, schedule],
  );

  const toggleLanguage = useCallback(() => {
    transitionTo(lang === "en" ? "ko" : "en");
  }, [lang, transitionTo]);

  const dict = dictionaries[lang];
  const t = useCallback((key: string) => lookup(dictionaries[lang], key), [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      t,
      dict,
      toggleLanguage,
      setLanguage: transitionTo,
      isTransitioning: phase !== "idle",
    }),
    [lang, t, dict, toggleLanguage, transitionTo, phase],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
      <CurtainOverlay phase={phase} target={target} />
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

/**
 * Full-viewport opera-curtain transition. Two velvet panels sweep closed from
 * the viewport edges, meet at a glowing gold seam, the target language name is
 * announced like a line in a program booklet, then the curtains reopen on the
 * swapped language.
 */
function CurtainOverlay({ phase, target }: { phase: Phase; target: Language }) {
  if (phase === "idle") return null;

  if (phase === "fade") {
    return <div aria-hidden="true" className="lang-fade-overlay" />;
  }

  const closed = phase === "closing";
  const word = target === "ko" ? "한국어" : "English";

  return (
    <div
      aria-hidden="true"
      data-closed={closed}
      className="lang-curtain"
      lang={target}
    >
      <div className="curtain-panel curtain-panel--left" />
      <div className="curtain-panel curtain-panel--right" />
      <div className="curtain-seam" />
      <div className="curtain-announce">
        <span className="curtain-rule curtain-rule--left" />
        <span className="curtain-word font-serif">{word}</span>
        <span className="curtain-rule curtain-rule--right" />
      </div>
    </div>
  );
}
