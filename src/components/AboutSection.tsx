import React from 'react'
import { CanvasPortrait } from './CanvasPortrait'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface AboutSectionProps {
  progress: number
}

export const AboutSection: React.FC<AboutSectionProps> = ({ progress }) => {
  return (
    <div className="w-full text-white relative font-sans min-h-screen">
      {/* Full Screen Canvas Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0" style={{ top: '60px', height: 'calc(100vh - 60px)' }}>
        <div className="w-full h-full">
          <CanvasPortrait progress={progress} />
        </div>
      </div>

      <div className="relative z-10 w-full">
        {/* Chapter 1 - My Journey */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 py-20 relative">
          <AboutChapter01 />
        </section>

        {/* Chapter 3 - Projects */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 py-20 relative">
          <AboutChapter03 />
        </section>

        {/* Chapter 4 & 5 - Education (Left, B&W) + Experience (Right, Colored) */}
        <section className="min-h-screen w-full flex items-center justify-center px-6 md:px-12 py-20 relative">
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 items-start" style={{ gap: '0' }}>
            {/* Left - Education (Black & White) */}
            <div className="flex items-start justify-center md:pr-12 md:border-r border-white/8">
              <AboutChapter05 />
            </div>
            {/* Right - Experience */}
            <div className="flex items-start justify-center md:pl-12 mt-12 md:mt-0">
              <AboutChapter04 />
            </div>
          </div>
        </section>

        {/* Chapter 2 - Expertise */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 py-20 relative">
          <AboutChapter02 />
        </section>
      </div>
    </div>
  )
}

const AboutChapter01: React.FC = () => {
  const [lineRef, lineStyles] = useScrollReveal({ direction: 'left', delay: 0, distance: 20 })
  const [labelRef, labelStyles] = useScrollReveal({ direction: 'left', delay: 0.05, distance: 20 })
  const [subtitleRef, subtitleStyles] = useScrollReveal({ direction: 'up', delay: 0.1, distance: 20 })
  const [titleRef, titleStyles] = useScrollReveal({ direction: 'right', delay: 0.15, distance: 20 })

  return (
    <div className="max-w-4xl">
      <div ref={lineRef} style={lineStyles} className="flex items-center gap-3 mb-6">
        <div className="w-16 h-[1px] bg-gradient-to-r from-violet-500 to-transparent" />
        <span ref={labelRef} style={labelStyles} className="text-xs uppercase tracking-widest text-violet-400">My Journey</span>
      </div>
      <p ref={subtitleRef} style={subtitleStyles} className="text-white/50 text-lg md:text-2xl font-light mb-4">
        AI Developer &amp; ML Researcher
      </p>
      <h2 ref={titleRef} style={titleStyles} className="text-4xl md:text-7xl font-bold tracking-tight text-white/90">
        Building <span className="text-gradient">advanced AI solutions</span> that matter.
      </h2>
    </div>
  )
}

const AboutChapter02: React.FC = () => {
  const [lineRef, lineStyles] = useScrollReveal({ direction: 'right', delay: 0, distance: 20 })
  const [labelRef, labelStyles] = useScrollReveal({ direction: 'right', delay: 0.05, distance: 20 })
  const [subtitleRef, subtitleStyles] = useScrollReveal({ direction: 'up', delay: 0.1, distance: 20 })
  const [point1Ref, point1Styles] = useScrollReveal({ direction: 'left', delay: 0.15, distance: 20 })
  const [point2Ref, point2Styles] = useScrollReveal({ direction: 'left', delay: 0.2, distance: 20 })
  const [point3Ref, point3Styles] = useScrollReveal({ direction: 'left', delay: 0.25, distance: 20 })

  return (
    <div className="max-w-4xl">
      <div ref={lineRef} style={lineStyles} className="flex items-center gap-3 mb-6">
        <div className="w-16 h-[1px] bg-gradient-to-r from-pink-500 to-transparent" />
        <span ref={labelRef} style={labelStyles} className="text-xs uppercase tracking-widest text-pink-400">Expertise</span>
      </div>
      <p ref={subtitleRef} style={subtitleStyles} className="text-white/50 text-lg md:text-2xl font-light mb-8">
        Combining technical depth with leadership.
      </p>
      <div className="flex flex-col gap-6 text-3xl md:text-5xl font-black tracking-tight text-white/90">
        <p ref={point1Ref} style={point1Styles} className="hover:text-violet-300 transition-colors duration-300">Machine Learning &amp; AI/ML Frameworks</p>
        <p ref={point2Ref} style={point2Styles} className="hover:text-pink-300 transition-colors duration-300">Signal Processing &amp; Software Development</p>
        <p ref={point3Ref} style={point3Styles} className="hover:text-blue-300 transition-colors duration-300">Leadership &amp; Brand Management</p>
      </div>
    </div>
  )
}

const AboutChapter03: React.FC = () => {
  const [lineRef, lineStyles] = useScrollReveal({ direction: 'left', delay: 0, distance: 20 })
  const [labelRef, labelStyles] = useScrollReveal({ direction: 'left', delay: 0.05, distance: 20 })
  const [subtitleRef, subtitleStyles] = useScrollReveal({ direction: 'up', delay: 0.1, distance: 20 })
  const [point1Ref, point1Styles] = useScrollReveal({ direction: 'right', delay: 0.15, distance: 20 })
  const [point2Ref, point2Styles] = useScrollReveal({ direction: 'right', delay: 0.2, distance: 20 })
  const [point3Ref, point3Styles] = useScrollReveal({ direction: 'right', delay: 0.25, distance: 20 })
  const [point4Ref, point4Styles] = useScrollReveal({ direction: 'right', delay: 0.3, distance: 20 })

  return (
    <div className="max-w-4xl">
      <div ref={lineRef} style={lineStyles} className="flex items-center gap-3 mb-6">
        <div className="w-16 h-[1px] bg-gradient-to-r from-blue-500 to-transparent" />
        <span ref={labelRef} style={labelStyles} className="text-xs uppercase tracking-widest text-blue-400">Projects</span>
      </div>
      <p ref={subtitleRef} style={subtitleStyles} className="text-white/50 text-lg md:text-2xl font-light mb-8">
        Real-world impact through innovation.
      </p>
      <div className="flex flex-col gap-4 text-lg md:text-2xl font-semibold tracking-tight text-white/90">
        <p ref={point1Ref} style={point1Styles}>• JARVIS-like Virtual Assistant with NLP &amp; voice recognition</p>
        <p ref={point2Ref} style={point2Styles}>• Real-time Emotion Detection for mental health applications</p>
        <p ref={point3Ref} style={point3Styles}>• AI-Powered Teaching Tools for multi-grade classrooms</p>
        <p ref={point4Ref} style={point4Styles}>• Lunar DEM Generation research surpassing NASA/ISRO solutions</p>
      </div>
    </div>
  )
}

// ── Experience ─────────────────────────────────────────────────────────────
const AboutChapter04: React.FC = () => {
  const [lineRef, lineStyles] = useScrollReveal({ direction: 'right', delay: 0, distance: 20 })
  const [labelRef, labelStyles] = useScrollReveal({ direction: 'right', delay: 0.05, distance: 20 })
  const [subtitleRef, subtitleStyles] = useScrollReveal({ direction: 'up', delay: 0.1, distance: 20 })
  const [titleRef, titleStyles] = useScrollReveal({ direction: 'left', delay: 0.15, distance: 20 })
  const [card1Ref, card1Styles] = useScrollReveal({ direction: 'up', delay: 0.2, distance: 20 })
  const [card2Ref, card2Styles] = useScrollReveal({ direction: 'up', delay: 0.27, distance: 20 })
  const [card3Ref, card3Styles] = useScrollReveal({ direction: 'up', delay: 0.34, distance: 20 })

  return (
    <div className="w-full max-w-md">
      {/* Label */}
      <div ref={lineRef} style={lineStyles} className="flex items-center gap-3 mb-4">
        <div className="w-8 h-[1px]" style={{ background: 'linear-gradient(to right, #34d399, transparent)' }} />
        <span ref={labelRef} style={labelStyles}
          className="text-[10px] uppercase tracking-[0.22em] font-semibold"
          style={{ color: '#34d399' }}>
          Experience
        </span>
      </div>

      {/* Subtitle */}
      <p ref={subtitleRef} style={subtitleStyles} className="text-white/35 text-xs font-light mb-2 tracking-wide">
        Leadership meets technical excellence.
      </p>

      {/* Heading */}
      <h2 ref={titleRef} style={titleStyles}
        className="text-2xl md:text-3xl font-bold tracking-tight text-white/90 mb-8">
        Roles that{' '}
        <span style={{
          background: 'linear-gradient(90deg, #a78bfa, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>defined</span>{' '}
        my journey.
      </h2>

      {/* Timeline */}
      <div className="flex flex-col gap-0 w-full relative">
        {/* Vertical line */}
        <div
          className="absolute top-3 bottom-3"
          style={{
            left: '10px',
            width: '1px',
            background: 'linear-gradient(to bottom, rgba(167,139,250,0.4), rgba(236,72,153,0.2), transparent)',
          }}
        />

        {/* Card 1 — Technical Head */}
        <div ref={card1Ref} style={card1Styles} className="flex gap-4 items-start group mb-4">
          <div className="flex-shrink-0 mt-[3px]" style={{
            width: '21px', height: '21px', borderRadius: '50%',
            border: '1px solid rgba(167,139,250,0.5)', background: 'rgba(167,139,250,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.3s'
          }}>
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#a78bfa' }} />
          </div>
          <div className="flex-1 rounded-xl p-4 group-hover:bg-white/[0.04] transition-all duration-300"
            style={{ border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-semibold text-sm tracking-wide" style={{ color: '#c4b5fd' }}>Technical Head</h3>
              <span className="text-[10px] font-mono shrink-0" style={{ color: 'rgba(255,255,255,0.25)' }}>Oct 2025 — Present</span>
            </div>
            <p className="text-xs tracking-wide" style={{ color: 'rgba(255,255,255,0.45)' }}>HackLoop</p>
          </div>
        </div>

        {/* Card 2 — Google Gemini */}
        <div ref={card2Ref} style={card2Styles} className="flex gap-4 items-start group mb-4">
          <div className="flex-shrink-0 mt-[3px]" style={{
            width: '21px', height: '21px', borderRadius: '50%',
            border: '1px solid rgba(236,72,153,0.5)', background: 'rgba(236,72,153,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.3s'
          }}>
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#f472b6' }} />
          </div>
          <div className="flex-1 rounded-xl p-4 group-hover:bg-white/[0.04] transition-all duration-300"
            style={{ border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-semibold text-sm tracking-wide" style={{ color: '#f9a8d4' }}>Campus Ambassador</h3>
              <span className="text-[10px] font-mono shrink-0" style={{ color: 'rgba(255,255,255,0.25)' }}>Aug 2025 — Jan 2026</span>
            </div>
            <p className="text-xs tracking-wide" style={{ color: 'rgba(255,255,255,0.45)' }}>Google Gemini</p>
          </div>
        </div>

        {/* Card 3 — E-Cell IIT Bombay */}
        <div ref={card3Ref} style={card3Styles} className="flex gap-4 items-start group">
          <div className="flex-shrink-0 mt-[3px]" style={{
            width: '21px', height: '21px', borderRadius: '50%',
            border: '1px solid rgba(59,130,246,0.5)', background: 'rgba(59,130,246,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.3s'
          }}>
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#60a5fa' }} />
          </div>
          <div className="flex-1 rounded-xl p-4 group-hover:bg-white/[0.04] transition-all duration-300"
            style={{ border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-semibold text-sm tracking-wide" style={{ color: '#93c5fd' }}>Campus Ambassador</h3>
              <span className="text-[10px] font-mono shrink-0" style={{ color: 'rgba(255,255,255,0.25)' }}>Aug 2025 — Dec 2025</span>
            </div>
            <p className="text-xs tracking-wide" style={{ color: 'rgba(255,255,255,0.45)' }}>E-Cell IIT Bombay</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Education ──────────────────────────────────────────────────────────────
const AboutChapter05: React.FC = () => {
  const [lineRef, lineStyles] = useScrollReveal({ direction: 'left', delay: 0, distance: 20 })
  const [labelRef, labelStyles] = useScrollReveal({ direction: 'left', delay: 0.05, distance: 20 })
  const [badgeRef, badgeStyles] = useScrollReveal({ direction: 'up', delay: 0.12, distance: 20 })
  const [nameRef, nameStyles] = useScrollReveal({ direction: 'up', delay: 0.2, distance: 20 })
  const [divRef, divStyles] = useScrollReveal({ direction: 'left', delay: 0.28, distance: 15 })
  const [dateRef, dateStyles] = useScrollReveal({ direction: 'up', delay: 0.34, distance: 20 })
  const [locRef, locStyles] = useScrollReveal({ direction: 'up', delay: 0.4, distance: 20 })

  return (
    <div className="w-full max-w-md">
      {/* Label */}
      <div ref={lineRef} style={lineStyles} className="flex items-center gap-3 mb-5">
        <div className="w-8 h-[1px]" style={{ background: 'rgba(255,255,255,0.25)' }} />
        <span ref={labelRef} style={labelStyles}
          className="text-xs uppercase tracking-[0.22em] font-semibold"
          style={{ color: 'rgba(255,255,255,0.45)' }}>
          Education
        </span>
      </div>

      {/* Degree badge */}
      <div ref={badgeRef} style={badgeStyles}
        className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full"
        style={{
          border: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(255,255,255,0.03)',
        }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.35)' }} />
        <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.45)' }}>
          B.Tech · Computer Science
        </span>
      </div>

      {/* Institution name — bold, pure white */}
      <h2
        ref={nameRef}
        style={{
          ...nameStyles,
          fontSize: 'clamp(4rem, 9vw, 7rem)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          color: '#ffffff',
          lineHeight: 1,
          marginBottom: '1.25rem',
        }}
      >
        ABESIT
      </h2>

      {/* Thin white divider */}
      <div
        ref={divRef}
        style={{ ...divStyles, width: '64px', height: '1px', background: 'rgba(255,255,255,0.18)', marginBottom: '1.5rem' }}
      />

      {/* Year range */}
      <div ref={dateRef} style={dateStyles} className="flex items-center gap-4">
        <span className="font-mono text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.4)' }}>2024</span>
        <div style={{ width: '48px', height: '2px', background: 'rgba(255,255,255,0.12)' }} />
        <span className="font-mono text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.4)' }}>2028</span>
      </div>

      {/* Location */}
      <div
        ref={locRef}
        style={{ ...locStyles, marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p className="text-xs uppercase tracking-widest font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Ghaziabad, Uttar Pradesh
        </p>
      </div>
    </div>
  )
}