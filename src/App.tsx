import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import BioSection from './components/BioSection'
import ProjectsSection from './components/ProjectsSection'
import LinkedInSection from './components/LinkedInSection'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import ScrollToAnchor from './components/ScrollToAnchor'

const Home = () => (
  <>
    <HeroSection />
    <BioSection />
    <ProjectsSection />
    <LinkedInSection />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-400 selection:text-slate-950">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
