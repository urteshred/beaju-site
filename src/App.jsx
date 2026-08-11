import Hero from './components/Hero.jsx'
import FeaturedShowcase from './components/FeaturedShowcase.jsx'
import WorkGrid from './components/WorkGrid.jsx'
import AboutUs from './components/AboutUs.jsx'
import Process from './components/Process.jsx'
import Systems from './components/Systems.jsx'
import FAQ from './components/FAQ.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import { useEffect } from 'react'
import Cursor from './components/Cursor.jsx'
import Nav from './components/Nav.jsx'
import SocialRail from './components/SocialRail.jsx'

export default function App() {
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

  return (
    <>
      <Cursor />
      <Nav />
      <SocialRail />

      <main>
        <Hero />
        <FeaturedShowcase />
        <WorkGrid />
        <AboutUs />
        <Process />
        <Systems />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}
