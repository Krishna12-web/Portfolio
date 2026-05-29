import React from 'react'
import { CanvasPortrait } from './CanvasPortrait'
import { FileText, Send, Sparkles, Terminal, ArrowUpRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface HomeSectionProps {
  progress: number
  onNavigate: (tab: string) => void
}

export const HomeSection: React.FC<HomeSectionProps> = ({ progress, onNavigate }) => {
  const projects = [
    {
      title: 'JARVIS-like Virtual Assistant',
      tech: 'Python · AI/ML · NLP',
      desc: 'An advanced AI-powered virtual assistant with natural language processing capabilities, voice recognition, and smart home integration.'
    },
    {
      title: 'Real-time Emotion Detection',
      tech: 'TensorFlow · OpenCV · Deep Learning',
      desc: 'A sophisticated emotion recognition system that analyzes facial expressions in real-time for mental health and UX applications.'
    },
    {
      title: 'AI-Powered Teaching Tools',
      tech: 'React Native · Firebase · ML',
      desc: 'Educational platform for multi-grade classrooms with personalized learning paths and adaptive content delivery.'
    }
  ]

  return (
    <div className="relative w-full min-h-screen text-white select-none">
      {/* Full Screen Canvas Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0" style={{ top: '60px', height: 'calc(100vh - 60px)' }}>
        <div className="w-full h-full">
          <CanvasPortrait progress={progress} />
        </div>
      </div>

      {/* Scroll indicator with glow effect */}
      <div 
        className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 text-[10px] tracking-widest text-white/40 uppercase z-20 pointer-events-none transition-all duration-300"
        style={{ opacity: progress > 0.9 ? 0 : 1 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-violet-500/0 via-violet-500/50 to-violet-500/0" />
        <span className="animate-bounce text-violet-400">↓</span>
        <span className="text-white/50">Scroll</span>
      </div>

      {/* Main Content - Full width with text on top of image */}
      <div className="relative z-10 w-full">
        
        {/* SECTION 1 — INTRO */}
        <IntroContent />

        {/* SECTION 2 — SKILLS */}
        <SkillsContent />

        {/* SECTION 3 — PROJECTS */}
        <ProjectsContent projects={projects} />

        {/* SECTION 4 — ACHIEVEMENTS */}
        <AchievementsContent />

        {/* SECTION 5 — CTA */}
        <CTAContent onNavigate={onNavigate} />
      </div>
    </div>
  )
}

// Sub-components with scroll reveal animations
const IntroContent: React.FC = () => {
  // Reduced delays and distances for snappier animations
  const [badgeRef, badgeStyles] = useScrollReveal({ direction: 'up', delay: 0.05, distance: 15 })
  const [titleRef, titleStyles] = useScrollReveal({ direction: 'up', delay: 0.1, distance: 20 })
  const [descRef, descStyles] = useScrollReveal({ direction: 'up', delay: 0.15, distance: 20 })

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 py-20 relative">
      <div className="max-w-3xl text-center md:text-left">
        <div ref={badgeRef} style={badgeStyles} className="flex items-center gap-2 px-4 py-1.5 rounded-full glass-card w-fit mx-auto md:mx-0 text-[11px] uppercase tracking-widest text-violet-400 border border-violet-500/20 mb-8 shimmer-hover inline-flex">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Creative Developer Portfolio</span>
        </div>
        <h1 ref={titleRef} style={titleStyles} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Hi, I'm <span className="text-gradient">Krishna Saini</span>.
        </h1>
        <p ref={descRef} style={descStyles} className="text-lg md:text-xl font-light text-white/70 leading-relaxed max-w-2xl">
          AI Developer & ML Researcher building advanced solutions in Machine Learning, Signal Processing & Software Development.
        </p>
      </div>
    </section>
  )
}

const SkillsContent: React.FC = () => {
  const [titleRef, titleStyles] = useScrollReveal({ direction: 'up', delay: 0.05, distance: 20 })
  const [skillsRef, skillsStyles] = useScrollReveal({ direction: 'up', delay: 0.1, distance: 20 })

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 py-20 relative">
      <div className="max-w-3xl">
        <h2 ref={titleRef} style={titleStyles} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 md:text-center lg:text-left">
          Specialized in <span className="text-gradient">AI & Full-Stack Development</span>.
        </h2>
        <div ref={skillsRef} style={skillsStyles} className="flex flex-wrap gap-4 md:justify-center lg:justify-start">
          {['Python', 'Java', 'React Native', 'TensorFlow', 'Firebase', 'NLP'].map((skill, index) => (
            <span 
              key={index}
              className="px-5 py-3 rounded-xl glass-card text-sm font-medium text-white/80 border border-white/10 hover:border-violet-500/30 hover:text-violet-300 transition-all duration-200 whitespace-nowrap shimmer-hover cursor-default"
              style={{
                transitionDelay: `${index * 50}ms`
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

interface Project {
  title: string
  tech: string
  desc: string
}

const ProjectsContent: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [titleRef, titleStyles] = useScrollReveal({ direction: 'up', delay: 0.05, distance: 20 })
  const [descRef, descStyles] = useScrollReveal({ direction: 'up', delay: 0.1, distance: 20 })
  const [gridRef, gridStyles] = useScrollReveal({ direction: 'up', delay: 0.15, distance: 25 })

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 py-20 relative">
      <div className="w-full max-w-4xl">
        <div ref={titleRef} style={titleStyles} className="flex items-center gap-3 mb-4 md:text-center lg:text-left">
          <div className="w-12 h-[1px] bg-gradient-to-r from-violet-500 to-transparent" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Selected Works
          </h2>
        </div>
        <p ref={descRef} style={descStyles} className="text-white/60 text-base md:text-lg mb-12 md:text-center lg:text-left max-w-2xl">
          Projects focused on performance, design, and usability. Built with real-world production standards.
        </p>

        <div ref={gridRef} style={gridStyles} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {projects.map((proj, index) => (
            <div 
              key={index}
              className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 hover:border-pink-500/30 flex flex-col justify-between h-auto md:h-[240px] transition-all duration-300 group cursor-pointer shimmer-hover"
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] tracking-widest text-pink-400 uppercase font-mono whitespace-nowrap group-hover:text-pink-300 transition-colors">{proj.tech}</span>
                  <Terminal className="w-4 h-4 text-white/30 group-hover:text-pink-400 transition-colors flex-shrink-0" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-pink-300 transition-colors">{proj.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed line-clamp-3">{proj.desc}</p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-pink-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>View Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const AchievementsContent: React.FC = () => {
  const [titleRef, titleStyles] = useScrollReveal({ direction: 'up', delay: 0.05, distance: 20 })
  const [descRef, descStyles] = useScrollReveal({ direction: 'up', delay: 0.1, distance: 20 })
  const [cardsRef, cardsStyles] = useScrollReveal({ direction: 'up', delay: 0.15, distance: 25 })

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 py-20 relative">
      <div className="max-w-3xl">
        <h2 ref={titleRef} style={titleStyles} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 md:text-center lg:text-left">
          Proven <span className="text-gradient">track record</span>.
        </h2>
        <p ref={descRef} style={descStyles} className="text-white/60 text-base md:text-lg mb-12 font-mono md:text-center lg:text-left">
          AI/ML · Research · Leadership · Startups
        </p>

        <div ref={cardsRef} style={cardsStyles} className="flex flex-col md:flex-row gap-6 md:justify-center lg:justify-start">
          <div className="flex-1 glass-card p-8 rounded-2xl border border-white/10 flex flex-col justify-center items-center md:items-start shimmer-hover group">
            <span className="text-5xl md:text-6xl font-black text-violet-400 mb-2 group-hover:scale-110 transition-transform duration-300">3+</span>
            <span className="text-sm uppercase tracking-widest text-white/60 whitespace-nowrap">AI Projects Delivered</span>
          </div>
          <div className="flex-1 glass-card p-8 rounded-2xl border border-white/10 flex flex-col justify-center items-center md:items-start shimmer-hover group">
            <span className="text-5xl md:text-6xl font-black text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">4+</span>
            <span className="text-sm uppercase tracking-widest text-white/60 whitespace-nowrap">Leadership Roles</span>
          </div>
          <div className="flex-1 glass-card p-8 rounded-2xl border border-white/10 flex flex-col justify-center items-center md:items-start shimmer-hover group">
            <span className="text-5xl md:text-6xl font-black text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">6+</span>
            <span className="text-sm uppercase tracking-widest text-white/60 whitespace-nowrap">AI/ML Certifications</span>
          </div>
        </div>
      </div>
    </section>
  )
}

const CTAContent: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const [titleRef, titleStyles] = useScrollReveal({ direction: 'up', delay: 0.05, distance: 20 })
  const [descRef, descStyles] = useScrollReveal({ direction: 'up', delay: 0.1, distance: 20 })
  const [buttonsRef, buttonsStyles] = useScrollReveal({ direction: 'up', delay: 0.15, distance: 25 })

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 py-20 relative">
      <div className="max-w-3xl text-center md:text-left">
        <h2 ref={titleRef} style={titleStyles} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
          Let's build something <span className="text-gradient">impactful</span>.
        </h2>
        <p ref={descRef} style={descStyles} className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl">
          Available for frontend roles & freelance work.
        </p>

        <div ref={buttonsRef} style={buttonsStyles} className="flex flex-col sm:flex-row gap-4 w-full max-w-md md:mx-0">
          <button
            onClick={() => onNavigate('Contact')}
            className="px-8 py-4 rounded-xl btn-gradient text-sm font-semibold text-white flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl active:scale-95 transition-all whitespace-nowrap btn-glow"
          >
            Contact Me
            <Send className="w-4 h-4" />
          </button>
          <a
            href="/Krishna%20Saini%20Resume2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl glass-card text-sm font-semibold text-white flex items-center justify-center gap-2 border border-white/10 hover:border-violet-500/30 hover:text-violet-300 active:scale-95 transition-all whitespace-nowrap shimmer-hover"
          >
            View Resume
            <FileText className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
