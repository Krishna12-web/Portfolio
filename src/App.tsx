import { useState, useEffect, useRef } from 'react'
import { HomeSection } from './components/HomeSection'
import { AboutSection } from './components/AboutSection'
import { SkillsSection } from './components/SkillsSection'
import { CertificationsSection } from './components/CertificationsSection'
import { ContactSection } from './components/ContactSection'
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react'

function App() {
  const [activeTab, setActiveTab] = useState<string>('Home')
  const [scrollProgress, setScrollProgress] = useState<number>(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const rafRef = useRef<number>(0)
  const lastScrollYRef = useRef<number>(0)

  // RAF-throttled scroll handler with improved performance
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any })
    setScrollProgress(0)
    lastScrollYRef.current = 0

    const handleScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY
        
        if (Math.abs(scrollY - lastScrollYRef.current) < 2) {
          rafRef.current = 0
          return
        }
        lastScrollYRef.current = scrollY

        const docHeight = document.documentElement.scrollHeight
        const viewHeight = window.innerHeight
        const maxScroll = docHeight - viewHeight
        if (maxScroll <= 0) {
          setScrollProgress(0)
        } else {
          const rawProgress = scrollY / maxScroll
          setScrollProgress(Math.min(1, Math.max(0, rawProgress)))
        }
        rafRef.current = 0
      })
    }

    const timeoutId = setTimeout(() => {
      window.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll()
    }, 0)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [activeTab])

  const handleNavigate = (tab: string) => {
    setActiveTab(tab)
    setMobileMenuOpen(false)
  }

  const getWorkspaceHeight = () => {
    switch (activeTab) {
      case 'Home':
        return 'h-[500vh]'
      case 'About':
        return 'h-[500vh]'
      case 'Skills':
        return 'h-[160vh]'
      case 'Certifications':
        return 'h-[120vh]'
      case 'Contact':
        return 'h-[100vh]'
      default:
        return 'h-[100vh]'
    }
  }

  return (
    <div className={`relative min-h-screen bg-[#030712] overflow-x-hidden text-white transition-colors duration-500`}>
      
      {/* Dynamic Background with Animated Orbs and Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-violet-600/8 blur-[80px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-pink-600/8 blur-[80px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-blue-600/5 blur-[60px] animate-pulse" style={{ animationDuration: '12s' }} />
        
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[2px] h-[2px] bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header / Premium Fixed Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-white/5 px-6 py-4 md:px-12 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          <div 
            onClick={() => handleNavigate('Home')} 
            className="flex items-center gap-2 cursor-pointer group"
            id="brand-logo"
          >
            <div className="p-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 group-hover:bg-violet-500/20 transition-all">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">
              Krishna<span className="text-violet-400">.S</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
            {['Home', 'About', 'Skills', 'Certifications', 'Contact'].map((tab) => (
              <button
                key={tab}
                id={`nav-${tab.toLowerCase()}`}
                onClick={() => handleNavigate(tab)}
                className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-widest cursor-pointer select-none transition-all duration-300 rounded-lg ${
                  activeTab === tab 
                    ? 'text-white bg-white/5 border border-white/10' 
                    : 'text-white/40 hover:text-white/80 hover:bg-white/2 border border-transparent'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavigate('Contact')}
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 active:scale-98 cursor-pointer text-white"
            >
              <span>Uplink</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors cursor-pointer"
            id="mobile-nav-toggle"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-[#030712]/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        {['Home', 'About', 'Skills', 'Certifications', 'Contact'].map((tab) => (
          <button
            key={tab}
            onClick={() => handleNavigate(tab)}
            className={`text-2xl font-bold tracking-wider uppercase ${
              activeTab === tab ? 'text-violet-400 font-extrabold' : 'text-white/50'
            }`}
          >
            {tab}
          </button>
        ))}
        <button
          onClick={() => handleNavigate('Contact')}
          className="mt-8 px-8 py-3.5 rounded-xl btn-gradient text-sm font-semibold tracking-wider uppercase text-white"
        >
          Get in Touch
        </button>
      </div>

      {/* Active Tab Scroll Container Workspace */}
      <div className={`relative z-10 w-full ${getWorkspaceHeight()}`}>
        <main id="main-content">
          {activeTab === 'Home' && (
            <HomeSection progress={scrollProgress} onNavigate={handleNavigate} />
          )}
          {activeTab === 'About' && (
            <AboutSection progress={scrollProgress} />
          )}
          {activeTab === 'Skills' && (
            <SkillsSection progress={scrollProgress} onNavigate={handleNavigate} />
          )}
          {activeTab === 'Certifications' && (
            <CertificationsSection progress={scrollProgress} />
          )}
          {activeTab === 'Contact' && (
            <ContactSection />
          )}
        </main>
      </div>

    </div>
  )
}

export default App