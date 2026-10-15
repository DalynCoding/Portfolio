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
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
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
