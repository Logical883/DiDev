import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { FilmProvider } from './components/FilmContext'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Loader } from './components/Loader'
import { ScrollToTop } from './lib/page'
import { PageSkeleton } from './components/Skeletons'
import { gatePage } from './components/UnderDevelopment'
import { ScrollProgress } from './components/ScrollProgress'

// Each page is its own chunk. While one downloads, <PageSkeleton /> is shown.
const HomePage = lazy(() => import('./pages/Home').then((m) => ({ default: m.HomePage })))
const AboutPage = lazy(() => import('./pages/About').then((m) => ({ default: m.AboutPage })))
const AcademyPage = lazy(() => import('./pages/Academy').then((m) => ({ default: m.AcademyPage })))
const AcademyProgrammePage = lazy(() => import('./pages/AcademyProgramme').then((m) => ({ default: m.AcademyProgrammePage })))
const ConsultingPage = lazy(() => import('./pages/Consulting').then((m) => ({ default: m.ConsultingPage })))
const ContactPage = lazy(() => import('./pages/Contact').then((m) => ({ default: m.ContactPage })))
const NetworkPage = lazy(() => import('./pages/Network').then((m) => ({ default: m.NetworkPage })))
const NotFoundPage = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFoundPage })))

/**
 * Keyed by pathname so that every navigation mounts a fresh Suspense boundary.
 * Without the key, React keeps the old page on screen while the next page's
 * chunk downloads and the skeleton would only show on a first visit.
 */
function PageRoutes() {
  const { pathname } = useLocation()

  return (
    <Suspense key={pathname} fallback={<PageSkeleton />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={gatePage(<AboutPage />)} />
        <Route path="/academy" element={gatePage(<AcademyPage />)} />
        <Route path="/academy/:slug" element={gatePage(<AcademyProgrammePage />)} />
        <Route path="/consulting" element={gatePage(<ConsultingPage />)} />
        <Route path="/network" element={gatePage(<NetworkPage />)} />
        <Route path="/contact" element={gatePage(<ContactPage />)} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <FilmProvider>
        <ScrollToTop />
        <ScrollProgress />
        <a
          href="#main"
          className="absolute top-3 left-3 z-[100] -translate-y-24 bg-yellow px-4 py-3 text-sm font-semibold text-navy focus:translate-y-0"
        >
          Skip to content
        </a>
        <Loader />
        <Header />
        <main id="main">
          <PageRoutes />
        </main>
        <Footer />
      </FilmProvider>
    </BrowserRouter>
  )
}