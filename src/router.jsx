import { createContext, useCallback, useContext, useEffect, useState } from 'react'

// Minimal History-API router — no dependency, clean URLs (/about, /blog/slug).
// Static hosts need an SPA fallback to index.html; see netlify.toml / vercel.json.

const RouterContext = createContext(null)

const currentPath = () =>
  typeof window === 'undefined' ? '/' : window.location.pathname || '/'

export function RouterProvider({ children }) {
  const [path, setPath] = useState(currentPath)

  const navigate = useCallback((to, { replace = false } = {}) => {
    if (to === window.location.pathname) return
    window.history[replace ? 'replaceState' : 'pushState']({}, '', to)
    setPath(to)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  useEffect(() => {
    const onPop = () => setPath(currentPath())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  // Intercept same-origin link clicks so they don't full-reload the page.
  // Hash links (#work) and modified/target clicks are left to the browser.
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0) return
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return

      const a = e.target.closest('a')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href) return
      if (a.target && a.target !== '_self') return
      if (a.hasAttribute('download')) return
      if (!href.startsWith('/')) return // external, mailto:, tel:, #hash

      e.preventDefault()
      navigate(href)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [navigate])

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function useRouter() {
  const ctx = useContext(RouterContext)
  if (!ctx) throw new Error('useRouter must be used inside <RouterProvider>')
  return ctx
}
