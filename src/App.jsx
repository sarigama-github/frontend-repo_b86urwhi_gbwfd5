import Hero3D from './components/Hero3D'
import MetroMap from './components/MetroMap'
import ProjectsShowcase from './components/ProjectsShowcase'
import FooterContact from './components/FooterContact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-30 backdrop-blur-md bg-slate-950/50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">PJ</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-100">
            <a href="#stations" className="hover:text-white">Journey</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="px-3 py-1.5 rounded-full bg-blue-500 hover:bg-blue-400 text-white text-sm">Hire me</a>
        </div>
      </header>

      <main className="pt-14">
        <Hero3D />
        <MetroMap />
        <ProjectsShowcase />
      </main>

      <FooterContact />
    </div>
  )
}

export default App
