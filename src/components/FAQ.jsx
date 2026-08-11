import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqCategories, faqData, faqCount } from '../data/faq.js'
import { useI18n } from '../i18n/index.jsx'

const ease = [0.16, 1, 0.3, 1]
const categoryKeys = Object.keys(faqCategories)

function PlusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// Highlights the matched query inside a string.
function Highlight({ text, query }) {
  if (!query) return text
  const i = text.toLowerCase().indexOf(query.toLowerCase())
  if (i === -1) return text
  return (
    <>
      {text.slice(0, i)}
      <mark className="faq__mark">{text.slice(i, i + query.length)}</mark>
      {text.slice(i + query.length)}
    </>
  )
}

function Item({ item, index, openKey, setOpenKey, query, category }) {
  const key = `${category}-${item.q}`
  const isOpen = openKey === key

  return (
    <motion.div
      className="faq__item"
      data-open={isOpen}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3), ease }}
    >
      <button
        className="faq__q"
        aria-expanded={isOpen}
        onClick={() => setOpenKey(isOpen ? null : key)}
      >
        <span className="faq__q-text">
          <Highlight text={item.q} query={query} />
        </span>
        <motion.span
          className="faq__icon"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease }}
        >
          <PlusIcon />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="a"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            style={{ overflow: 'hidden' }}
          >
            <p className="faq__a">
              <Highlight text={item.a} query={query} />
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const { t } = useI18n()
  const [selected, setSelected] = useState(categoryKeys[0])
  const [query, setQuery] = useState('')
  const [openKey, setOpenKey] = useState(null)

  const q = query.trim().toLowerCase()

  // When searching we ignore tabs and match across every category.
  const results = useMemo(() => {
    if (!q) return null
    const hits = []
    for (const [cat, items] of Object.entries(faqData)) {
      for (const item of items) {
        const haystack = `${item.q} ${item.a} ${item.tags || ''}`.toLowerCase()
        if (haystack.includes(q)) hits.push({ ...item, category: cat })
      }
    }
    return hits
  }, [q])

  const visible = results ?? faqData[selected].map((i) => ({ ...i, category: selected }))

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="faq__head">
          <span className="eyebrow faq__eyebrow">{t.faq.label}</span>
          <h2 className="faq__title">{t.faq.title}</h2>
          <p className="faq__count">{faqCount} answers</p>
        </div>

        {/* search */}
        <div className="faq__search">
          <span className="faq__search-icon">
            <SearchIcon />
          </span>
          <input
            type="search"
            className="faq__input"
            placeholder="Search: pricing, timeline, WordPress, SEO…"
            aria-label="Search the FAQ"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setOpenKey(null)
            }}
          />
          {query && (
            <button
              className="faq__clear"
              onClick={() => setQuery('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* category tabs — hidden while searching */}
        {!q && (
          <div className="faq__tabs" role="tablist">
            {categoryKeys.map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={selected === key}
                className="faq__tab"
                data-active={selected === key}
                onClick={() => {
                  setSelected(key)
                  setOpenKey(null)
                }}
              >
                <span className="faq__tab-label">{faqCategories[key]}</span>
                {selected === key && (
                  <motion.span
                    className="faq__tab-bg"
                    layoutId="faq-tab"
                    transition={{ type: 'spring', stiffness: 480, damping: 38 }}
                  />
                )}
              </button>
            ))}
          </div>
        )}

        {q && (
          <p className="faq__results">
            {visible.length === 0
              ? `No matches for “${query}”.`
              : `${visible.length} ${visible.length === 1 ? 'match' : 'matches'} for “${query}”`}
          </p>
        )}

        <div className="faq__list">
          <AnimatePresence mode="wait">
            <motion.div
              key={q ? `search:${q}` : selected}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease }}
            >
              {visible.map((item, i) => (
                <div key={`${item.category}-${item.q}`}>
                  {q && (
                    <span className="faq__cat-tag">
                      {faqCategories[item.category]}
                    </span>
                  )}
                  <Item
                    item={item}
                    index={i}
                    openKey={openKey}
                    setOpenKey={setOpenKey}
                    query={query.trim()}
                    category={item.category}
                  />
                </div>
              ))}

              {visible.length === 0 && (
                <p className="faq__empty">
                  Nothing matched. Try “price”, “how long”, “hosting”, “SEO” or{' '}
                  <a href="#contact">just ask us directly</a>.
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
