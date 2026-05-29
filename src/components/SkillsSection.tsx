import React from 'react'
import { ArrowRight, Code2, Layers, Zap, Brain, Palette, Settings } from 'lucide-react'
import { CanvasPortrait } from './CanvasPortrait'

interface SkillsSectionProps {
  progress: number
  onNavigate: (tab: string) => void
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ progress, onNavigate }) => {
  const coreStacks = [
    {
      category: 'AI & Machine Learning',
      tools: 'TensorFlow · PyTorch · NLP · Computer Vision · Deep Learning',
      icon: Brain,
      color: 'violet'
    },
    {
      category: 'Backend & Full-Stack',
      tools: 'Python · Java · Firebase · Database Design',
      icon: Layers,
      color: 'pink'
    },
    {
      category: 'Frontend & Mobile',
      tools: 'React · React Native · JavaScript · Tailwind · UI/UX',
      icon: Code2,
      color: 'blue'
    },
    {
      category: 'SaaS & Startups',
      tools: 'SaaS Development · Scalable Architecture · Signal Processing',
      icon: Zap,
      color: 'emerald'
    }
  ]

  const thoughts = [
    'What should the user feel?',
    'What must be instant?',
    'What can be simplified?'
  ]

  const technicalDepths = [
    { title: 'Component Architecture', desc: 'Atomic design, high-reusability, modularity, strict typing.', icon: Layers },
    { title: 'State Management', desc: 'React context, local persistence, optimized reactive hooks.', icon: Brain },
    { title: 'Performance Optimization', desc: 'Code splitting, tree-shaking, rendering paths, image optimization.', icon: Zap },
    { title: 'Accessibility (a11y)', desc: 'Semantic HTML, aria attributes, full keyboard control compliance.', icon: Palette },
    { title: 'Clean Code Standards', desc: 'DRY principles, clean documentation, descriptive naming, lint enforcement.', icon: Code2 },
    { title: 'Systematic Debugging', desc: 'Browser rendering profiles, memory leak audits, test assertions.', icon: Settings }
  ]


  return (
    <div className="w-full text-white relative font-sans min-h-screen">
      {/* Full Screen Canvas Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0" style={{ top: '60px', height: 'calc(100vh - 60px)' }}>
        <div className="w-full h-full">
          <CanvasPortrait progress={progress} />
        </div>
      </div>

      <div className="relative z-10 w-full py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 relative">
        
        {/* Left Column: Fixed Sticky Philosophy */}
        <div className="md:w-1/3 md:sticky md:top-32 h-fit flex flex-col gap-4 text-left">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-[1px] bg-violet-500" />
            <span className="text-xs uppercase tracking-widest text-violet-400 font-mono">Philosophy</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-white">
            Skills aren't tools.
          </h2>
          <h3 className="text-3xl md:text-5xl font-light text-white/50">
            They're <span className="text-gradient">decisions</span>.
          </h3>
          <p className="text-sm text-white/40 max-w-xs mt-6 leading-relaxed">
            A developer's skill lies in knowing which abstraction to build, when to optimize, and how to deliver value.
          </p>
          <div className="mt-8 p-4 glass-card rounded-xl border border-white/5">
            <p className="text-xs text-white/50 font-mono">
              "The best code is the code that solves the problem with the least complexity."
            </p>
          </div>
        </div>

        {/* Right Column: Scrolling Skill Elements */}
        <div className="md:w-2/3 flex flex-col gap-24 text-left">
          
          {/* Core Stack Section */}
          <section className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-gradient-to-r from-violet-500 to-transparent" />
              <div>
                <span className="text-[10px] tracking-widest text-violet-400 uppercase font-mono">01 / STACK</span>
                <h4 className="text-2xl font-bold mt-1 text-white">Core Stack</h4>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {coreStacks.map((stack, idx) => {
                const Icon = stack.icon;
                const colorClasses = {
                  violet: 'hover:border-violet-500/30 hover:text-violet-300 group-hover:bg-violet-500/5',
                  pink: 'hover:border-pink-500/30 hover:text-pink-300 group-hover:bg-pink-500/5',
                  blue: 'hover:border-blue-500/30 hover:text-blue-300 group-hover:bg-blue-500/5',
                  emerald: 'hover:border-emerald-500/30 hover:text-emerald-300 group-hover:bg-emerald-500/5'
                };
                const colorBorder = {
                  violet: 'text-violet-400',
                  pink: 'text-pink-400',
                  blue: 'text-blue-400',
                  emerald: 'text-emerald-400'
                };
                const colorText = {
                  violet: 'text-violet-400',
                  pink: 'text-pink-400',
                  blue: 'text-blue-400',
                  emerald: 'text-emerald-400'
                };
                return (
                  <div key={idx} className={`glass-card p-6 rounded-xl border border-white/5 group cursor-pointer shimmer-hover transition-all duration-300 ${colorClasses[stack.color as keyof typeof colorClasses]}`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${colorBorder[stack.color as keyof typeof colorBorder]}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <span className={`text-xs font-semibold uppercase tracking-wider ${colorText[stack.color as keyof typeof colorText]}`}>{stack.category}</span>
                        <p className="text-lg font-bold text-white/90 mt-2 font-mono">{stack.tools}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* How I Think Section */}
          <section className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-gradient-to-r from-pink-500 to-transparent" />
              <div>
                <span className="text-[10px] tracking-widest text-pink-400 uppercase font-mono">02 / MINDSET</span>
                <h4 className="text-2xl font-bold mt-1 text-white">How I Think</h4>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-violet-500/5 via-transparent to-pink-500/5">
              <h5 className="text-xl md:text-3xl font-light text-white/90 leading-tight mb-8">
                "I don't start with code. <br />I start with <span className="text-pink-400 font-semibold">intent</span>."
              </h5>
              <p className="text-sm text-white/50 uppercase tracking-widest mb-4 font-mono">Questions I ask:</p>
              <ul className="flex flex-col gap-4">
                {thoughts.map((thought, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/80 group">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-violet-500/20 to-pink-500/20 border border-violet-500/30 flex items-center justify-center text-xs font-bold text-violet-400 group-hover:scale-110 transition-transform duration-300">
                      {idx + 1}
                    </span>
                    <span className="text-base font-medium group-hover:text-pink-300 transition-colors duration-300">{thought}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Technical Depth Section */}
          <section className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-gradient-to-r from-blue-500 to-transparent" />
              <div>
                <span className="text-[10px] tracking-widest text-blue-400 uppercase font-mono">03 / CAPABILITIES</span>
                <h4 className="text-2xl font-bold mt-1 text-white">Technical Depth</h4>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technicalDepths.map((depth, idx) => {
                const Icon = depth.icon;
                return (
                  <div key={idx} className="glass-card p-6 rounded-xl border border-white/5 hover:border-blue-500/20 transition-all duration-300 group shimmer-hover">
                    <div className="flex items-start gap-3">
                      <Icon className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <h5 className="font-bold text-white mb-1.5 group-hover:text-blue-300 transition-colors duration-300">{depth.title}</h5>
                        <p className="text-white/60 text-xs leading-relaxed">{depth.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Closing & Call to Action */}
          <section className="flex flex-col items-center justify-center text-center p-8 rounded-2xl border border-dashed border-white/10 bg-gradient-to-br from-violet-500/5 to-pink-500/5 group cursor-pointer hover:border-violet-500/20 transition-all duration-300">
            <span className="text-[10px] tracking-widest text-white/30 uppercase font-mono mb-2">CONCLUSION</span>
            <h4 className="text-2xl font-bold text-white mb-2">"Skills evolve. Standards don't."</h4>
            <p className="text-xs text-white/50 mb-8 max-w-xs">Building scalable products by combining rigorous software systems and delightful interactions.</p>
            
            <button
              onClick={() => onNavigate('Home')}
              className="px-8 py-3.5 rounded-xl btn-gradient text-sm font-semibold text-white flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-xl active:scale-95 transition-all btn-glow"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </button>
          </section>
        </div>

      </div>
      </div>
    </div>
  )
}
