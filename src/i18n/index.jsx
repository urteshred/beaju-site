import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import en from './locales/en.js'
import lt from './locales/lt.js'
import ru from './locales/ru.js'
import pl from './locales/pl.js'

export const locales = { en, lt, ru, pl }
export const localeList = [en, lt, ru, pl].map((l) => ({
  code: l.code,
  label: l.label,
}))

const STORAGE_KEY = 'vanthore:lang'

// Geographic hint: the visitor's IANA timezone maps to a likely language.
// This is privacy-preserving (no IP lookup, no third-party request).
const TZ_LANG = {
  'Europe/Vilnius': 'lt',
  'Europe/Riga': 'ru',
  'Europe/Tallinn': 'ru',
  'Europe/Warsaw': 'pl',
  'Europe/Moscow': 'ru',
  'Europe/Kaliningrad': 'ru',
  'Europe/Minsk': 'ru',
  'Europe/Kiev': 'ru',
  'Europe/Kyiv': 'ru',
}

export function detectLocale() {
  if (typeof window === 'undefined') return 'en'

  // 1. Explicit choice wins and is remembered.
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && locales[saved]) return saved
  } catch {
    /* storage blocked — fall through to detection */
  }

  // 2. ?lang=lt in the URL (handy for sharing/campaigns).
  const param = new URLSearchParams(window.location.search).get('lang')
  if (param && locales[param]) return param

  // 3. Browser language preferences, in the visitor's own priority order.
  const prefs = navigator.languages?.length
    ? navigator.languages
    : [navigator.language || 'en']
  for (const tag of prefs) {
    const base = String(tag).toLowerCase().split('-')[0]
    if (locales[base]) return base
  }

  // 4. Geographic fallback from the device timezone.
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    if (TZ_LANG[tz]) return TZ_LANG[tz]
  } catch {
    /* Intl unavailable */
  }

  return 'en'
}

// Missing keys in a translation fall back to English so the site never
// renders a blank string while a locale is being filled in.
function withFallback(target, fallback) {
  if (target === undefined || target === null) return fallback
  if (typeof target !== 'object' || Array.isArray(target)) return target
  if (typeof fallback !== 'object' || fallback === null) return target
  const out = { ...fallback, ...target }
  for (const key of Object.keys(fallback)) {
    out[key] = withFallback(target[key], fallback[key])
  }
  return out
}

const I18nContext = createContext(null)

export function I18nProvider({ children }) {
  const [code, setCode] = useState(() => detectLocale())

  const t = useMemo(() => withFallback(locales[code] || en, en), [code])

  useEffect(() => {
    document.documentElement.lang = t.htmlLang || code
    document.title = t.meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', t.meta.description)
  }, [code, t])

  const setLocale = (next) => {
    if (!locales[next]) return
    setCode(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* storage blocked — language still applies for this session */
    }
  }

  const value = useMemo(() => ({ code, t, setLocale }), [code, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>')
  return ctx
}
