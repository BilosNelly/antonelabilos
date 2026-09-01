import { useEffect, useRef } from 'react'
import './App.css'
import { useRoute } from './router'
import { Marquee, Nav } from './components'
import { About, CaseStudy, Contact, Home, NotFound, Work } from './pages'
import { caseStudy, frontendCaseStudy } from './content'

const DEFAULT_TITLE =
  'Antonela Bilos · AI Engineer and UX focused Software Engineer'

const TITLES: Record<string, string> = {
  '/': DEFAULT_TITLE,
  '/work': 'Work · Antonela Bilos, AI and Software Engineer',
  [caseStudy.slug]:
    'Simplifying revenue management through user research · Antonela Bilos',
  [frontendCaseStudy.slug]:
    'Frontend architecture adopted by 15+ teams · Antonela Bilos',
  '/about': 'About Antonela Bilos · AI Engineer and UX focused Software Engineer',
  '/contact': 'Contact Antonela Bilos · AI and Software Engineer',
}

function renderPage(route: string) {
  switch (route) {
    case '/':
      return <Home />
    case '/work':
      return <Work />
    case caseStudy.slug:
      return <CaseStudy data={caseStudy} />
    case frontendCaseStudy.slug:
      return <CaseStudy data={frontendCaseStudy} />
    case '/about':
      return <About />
    case '/contact':
      return <Contact />
    default:
      return <NotFound />
  }
}

function App() {
  const route = useRoute()
  const isHome = route === '/'
  const surfaceRef = useRef<HTMLElement>(null)

  useEffect(() => {
    document.title = TITLES[route] ?? DEFAULT_TITLE
    surfaceRef.current?.scrollTo({ top: 0 })
  }, [route])

  return (
    <div className="app">
      <main
        ref={surfaceRef}
        className={`surface ${isHome ? 'surface--hero' : 'surface--page'}`}
      >
        <Nav route={route} hero={isHome} />
        <div className="view" key={route}>
          {renderPage(route)}
        </div>
      </main>
      <Marquee />
    </div>
  )
}

export default App
