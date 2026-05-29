import React from 'react'
import { FadeIn } from './FadeIn'
import { Mail, Globe, Send } from 'lucide-react'

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20 relative">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn delay={0} y={30} duration={0.8}>
          <span className="text-violet-400 uppercase tracking-widest text-sm font-semibold">Get in Touch</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6 tracking-tight">
            Let's build something <span className="text-gradient">impactful</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Available for frontend roles & freelance work. Always open to discussing new projects,
            creative ideas, or opportunities to be part of your visions.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} y={30} duration={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="mailto:krishnaasaini644@gmail.com"
              className="px-8 py-4 rounded-xl btn-gradient text-sm font-semibold text-white flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl transition-all"
            >
              <Send className="w-4 h-4" />
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-saini-tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl glass-card text-sm font-semibold text-white flex items-center justify-center gap-2 border border-white/10 hover:border-violet-500/30 hover:text-violet-300 transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={30} duration={0.8}>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <a
              href="mailto:krishnaasaini644@gmail.com"
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-violet-500/20 transition-all group"
            >
              <Mail className="w-6 h-6 text-violet-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-white/80 text-sm">krishnaasaini644@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-saini-tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-pink-500/20 transition-all group"
            >
              <svg className="w-6 h-6 text-pink-400 mx-auto mb-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-white/80 text-sm">LinkedIn Profile</span>
            </a>
            <a
              href="https://krishna-saini-qsou58o.gamma.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-blue-500/20 transition-all group"
            >
              <Globe className="w-6 h-6 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-white/80 text-sm">Portfolio Website</span>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.7} y={30} duration={0.8}>
          <div className="mt-20 pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Krishna Saini.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}