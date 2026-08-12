import { useEffect } from 'react'
import Hero from './components/Hero.jsx'
import FeaturedShowcase from './components/FeaturedShowcase.jsx'
import WorkGrid from './components/WorkGrid.jsx'
import AboutUs from './components/AboutUs.jsx'
import Process from './components/Process.jsx'
import Systems from './components/Systems.jsx'
import FAQ from './components/FAQ.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Cursor from './components/Cursor.jsx'
import Nav from './components/Nav.jsx'
import SocialRail from './components/SocialRail.jsx'
import AboutPage from './components/AboutPage.jsx'
import BlogPost from './components/BlogPost.jsx'
import { useRouter } from './router.jsx'

function Home() {
  return (
    <>
      <Hero />
      <FeaturedShowcase />
      <WorkGrid />
      <AboutUs />
      <Process />
      <Systems />
      <FAQ />
      <Testimonials />
      <Contact />
    </>
  )
}

export default function App() {
  const { path } = useRouter()

  // Hide the fixed nav + rail while scrolling down (so they never sit on top
  // of content); reveal them on scroll up or near the top.
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      if (y > last && y > 160) document.body.classList.add('chrome-hidden')
      else if (y < last || y < 160) document.body.classList.remove('chrome-hidden')
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // A hash on a sub-page (/#contact) means "go home, then to that section".
  useEffect(() => {
    if (path === '/' && window.location.hash) {
      const el = document.querySelector(window.location.hash)
      if (el) el.scrollIntoView()
    }
  }, [path])

  const blogSlug = path.startsWith('/blog/') ? path.slice('/blog/'.length) : null
  const isSubPage = path !== '/'

  return (
    <>
      <Cursor />
      {!isSubPage && <Nav />}
      <SocialRail />

      <main>
        {blogSlug ? (
          <BlogPost slug={blogSlug} />
        ) : path === '/about' ? (
          <AboutPage />
        ) : (
          <Home />
        )}
      </main>
    </>
  )
}
