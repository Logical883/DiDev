import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FilmProvider } from './components/FilmContext'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Loader } from './components/Loader'
import { ScrollToTop } from './lib/page'
import { AboutPage } from './pages/About'
import { AcademyPage } from './pages/Academy'
import { ConsultingPage } from './pages/Consulting'
import { ContactPage } from './pages/Contact'
import { HomePage } from './pages/Home'
import { NetworkPage } from './pages/Network'
import { NotFoundPage } from './pages/NotFound'
import { gatePage } from './components/UnderDevelopment'

export default function App() {
  return (
    <BrowserRouter>
      <FilmProvider>
        <ScrollToTop />
        <a
          href="#main"
          className="absolute top-3 left-3 z-[100] -translate-y-24 bg-yellow px-4 py-3 text-sm font-semibold text-navy focus:translate-y-0"
        >
          Skip to content
        </a>
        <Loader />
        <Header />
        <main id="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={gatePage(<AboutPage />)} />
            <Route path="/academy" element={gatePage(<AcademyPage />)} />
            <Route path="/consulting" element={gatePage(<ConsultingPage />)} />
            <Route path="/network" element={gatePage(<NetworkPage />)} />
            <Route path="/contact" element={gatePage(<ContactPage />)} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </FilmProvider>
    </BrowserRouter>
  )
}
