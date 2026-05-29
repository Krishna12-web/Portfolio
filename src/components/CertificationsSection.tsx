import React from 'react'
import { Award, BadgeCheck, Zap } from 'lucide-react'
import { CanvasPortrait } from './CanvasPortrait'

interface CertificationsSectionProps {
  progress: number
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ progress }) => {
  const certifications = [
    {
      title: 'Introduction to Security in the World of AI',
      issuer: 'Professional Certification',
      icon: Zap,
      color: 'violet'
    },
    {
      title: 'Tata - GenAI Powered Data Analytics Job Simulation',
      issuer: 'Tata Consultancy Services',
      icon: BadgeCheck,
      color: 'pink'
    },
    {
      title: 'Generative AI',
      issuer: 'AI & ML Certification',
      icon: Award,
      color: 'blue'
    },
    {
      title: 'Inspect Rich Documents with Gemini Multimodality',
      issuer: 'Google AI Learning',
      icon: Zap,
      color: 'emerald'
    },
    {
      title: 'Multimodal and Multimodal RAG Skill Badge',
      issuer: 'AI Foundation',
      icon: BadgeCheck,
      color: 'amber'
    },
    {
      title: 'Tata - Cybersecurity Analyst Job Simulation',
      issuer: 'Tata Consultancy Services',
      icon: Award,
      color: 'cyan'
    }
  ]

  const getOpacity = (start: number, end: number) => {
    const pad = 0.05
    if (progress < start - pad || progress > end + pad) return 0
    if (progress >= start && progress <= end) return 1
    if (progress < start) {
      return (progress - (start - pad)) / pad
    } else {
      return ((end + pad) - progress) / pad
    }
  }

  return (
    <div className="w-full text-white relative font-sans min-h-screen">
      {/* Full Screen Canvas Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0" style={{ top: '60px', height: 'calc(100vh - 60px)' }}>
        <div className="w-full h-full">
          <CanvasPortrait progress={progress} />
        </div>
      </div>

      <div className="relative z-10 w-full py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-gradient-to-r from-amber-500 to-transparent" />
              <span className="text-[10px] tracking-widest text-amber-400 uppercase font-mono">Certifications & Skills</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight mb-4">
              Industry <span className="text-gradient">Recognized</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl">
              Professional certifications and skill badges demonstrating expertise in AI, cybersecurity, and modern development practices.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => {
              const Icon = cert.icon
              const colorMap: { [key: string]: { border: string; icon: string; hover: string } } = {
                violet: { border: 'border-violet-500/20', icon: 'text-violet-400', hover: 'hover:border-violet-500/40 hover:bg-violet-500/5' },
                pink: { border: 'border-pink-500/20', icon: 'text-pink-400', hover: 'hover:border-pink-500/40 hover:bg-pink-500/5' },
                blue: { border: 'border-blue-500/20', icon: 'text-blue-400', hover: 'hover:border-blue-500/40 hover:bg-blue-500/5' },
                emerald: { border: 'border-emerald-500/20', icon: 'text-emerald-400', hover: 'hover:border-emerald-500/40 hover:bg-emerald-500/5' },
                amber: { border: 'border-amber-500/20', icon: 'text-amber-400', hover: 'hover:border-amber-500/40 hover:bg-amber-500/5' },
                cyan: { border: 'border-cyan-500/20', icon: 'text-cyan-400', hover: 'hover:border-cyan-500/40 hover:bg-cyan-500/5' }
              }
              const colors = colorMap[cert.color] || colorMap.violet

              return (
                <div
                  key={idx}
                  className={`glass-card p-6 rounded-xl border ${colors.border} ${colors.hover} transition-all duration-300 group cursor-pointer shimmer-hover`}
                  style={{
                    opacity: getOpacity(0, 1),
                    transform: `translateY(${Math.max(0, (progress * 20) % 10)}px)`
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-white/5 border border-white/10 ${colors.icon} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-white/90 mb-2 text-sm leading-tight group-hover:text-white transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-white/50">{cert.issuer}</p>
                  <div className={`w-0 h-0.5 bg-gradient-to-r ${colors.icon} mt-4 group-hover:w-full transition-all duration-300`} />
                </div>
              )
            })}
          </div>

          {/* Skills Summary */}
          <div className="mt-20 p-8 glass-card rounded-2xl border border-white/5 bg-gradient-to-r from-violet-500/5 via-transparent to-pink-500/5">
            <h3 className="text-2xl font-bold text-white mb-6">Technical Proficiencies</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Python',
                'Java',
                'JavaScript/TypeScript',
                'React',
                'React Native',
                'TensorFlow',
                'PyTorch',
                'Firebase',
                'NLP',
                'Computer Vision',
                'Signal Processing',
                'SaaS Architecture',
                'Data Analytics',
                'Cybersecurity Fundamentals',
                'Machine Learning',
                'Deep Learning'
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg glass-card text-sm text-white/70 border border-white/10 hover:border-violet-500/30 hover:text-violet-300 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
