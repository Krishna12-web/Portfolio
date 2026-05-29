import React, { useEffect, useState, useRef, useCallback } from 'react'

interface CanvasPortraitProps {
  progress: number
}

const TOTAL_FRAMES = 240
const FRAME_DIR = '/ezgif-45ef1810f8fc4ec0-jpg'

export const CanvasPortrait: React.FC<CanvasPortraitProps> = ({ progress }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const lastDrawnFrameRef = useRef<number>(-1)
  const rafIdRef = useRef<number>(0)
  const [loadedCount, setLoadedCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Frame index: 0-based for array access
  // Use throttling to reduce redraw frequency during fast scrolling
  const targetFrameIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(progress * (TOTAL_FRAMES - 1))))
  const displayFrame = targetFrameIndex + 1 // 1-based for display

  // ---------- Draw a single frame to canvas ----------
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const img = imagesRef.current[index]
    if (!img || !img.complete || !img.naturalWidth) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const w = canvas.width / dpr
    const h = canvas.height / dpr

    // Use setTransform for better performance
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, w, h)

    // Enable high-quality image rendering
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'

    // Cover-fit: fill canvas without letterboxing
    const imgRatio = img.naturalWidth / img.naturalHeight
    const canvasRatio = w / h
    let drawW: number, drawH: number, drawX: number, drawY: number

    if (canvasRatio > imgRatio) {
      drawW = w
      drawH = w / imgRatio
      drawX = 0
      drawY = (h - drawH) / 2
    } else {
      drawH = h
      drawW = h * imgRatio
      drawX = (w - drawW) / 2
      drawY = 0
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH)
  }, [])

  // ---------- Resize canvas, then redraw current frame ----------
  const resizeAndDraw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || isLoading) return
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width  = rect.width  * dpr
    canvas.height = rect.height * dpr
    lastDrawnFrameRef.current = -1 // force redraw after resize
    drawFrame(targetFrameIndex)
  }, [drawFrame, targetFrameIndex, isLoading])

  // ---------- Preload all 240 frames ----------
  useEffect(() => {
    let loaded = 0
    let errored = 0
    const total = TOTAL_FRAMES
    const imgs: HTMLImageElement[] = new Array(total)

    const check = () => {
      if (loaded + errored === total) {
        if (errored > 30) { setHasError(true) }
        else               { imagesRef.current = imgs; setIsLoading(false) }
      }
    }

    for (let i = 0; i < total; i++) {
      const img = new Image()
      const frameStr = String(i + 1).padStart(3, '0')
      img.src = `${FRAME_DIR}/ezgif-frame-${frameStr}.jpg`
      imgs[i] = img
      img.onload  = () => { loaded++;  setLoadedCount(c => c + 1); check() }
      img.onerror = () => { errored++; check() }
    }
  }, [])

  // ---------- Initial canvas size after loading ----------
  useEffect(() => {
    if (!isLoading) {
      resizeAndDraw()
    }
  }, [isLoading, resizeAndDraw])

  // ---------- Resize listener ----------
  useEffect(() => {
    if (isLoading) return
    window.addEventListener('resize', resizeAndDraw)
    return () => window.removeEventListener('resize', resizeAndDraw)
  }, [isLoading, resizeAndDraw])

  // ---------- Throttled frame redraw using RAF ----------
  useEffect(() => {
    if (isLoading) return
    
    // Cancel any pending animation frame
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current)
    }

    // Use RAF for smooth updates
    rafIdRef.current = requestAnimationFrame(() => {
      // Draw every frame to ensure maximum quality and smoothness
      if (lastDrawnFrameRef.current !== targetFrameIndex) {
        lastDrawnFrameRef.current = targetFrameIndex
        drawFrame(targetFrameIndex)
      }
      rafIdRef.current = 0
    })

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [targetFrameIndex, drawFrame, isLoading])

  // ---------- Loading HUD ----------
  if (isLoading) {
    const pct = Math.round((loadedCount / TOTAL_FRAMES) * 100)
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#030712] font-mono gap-4 select-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-ping" />
          <span className="text-[11px] uppercase tracking-widest text-violet-400 font-bold">Buffering Visual Feed</span>
        </div>
        <div className="w-56 h-[3px] bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width: `${pct}%`,
              background: 'linear-gradient(90deg,#7c3aed,#db2777)'
            }}
          />
        </div>
        <span className="text-[10px] tracking-wider text-white/30">
          {loadedCount} / {TOTAL_FRAMES} FRAMES — {pct}%
        </span>
      </div>
    )
  }

  if (hasError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#030712] font-mono text-rose-400 text-xs gap-2">
        <span>UPLINK FAILED</span>
        <span className="text-[10px] text-white/30">Could not load frame assets from /public/ezgif-*.</span>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ touchAction: 'none', pointerEvents: 'none' }}
      />
      {/* CSS Vignette Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(3,7,18,0) 35%, rgba(3,7,18,0.08) 50%, rgba(3,7,18,0.25) 80%)'
        }}
      />
      {/* HTML HUD Labels */}
      <div className="absolute bottom-3 left-5 font-mono text-[10px] text-white/15 pointer-events-none">
        FRAME: {String(displayFrame).padStart(3, '0')}/240
      </div>
      <div className="absolute bottom-3 right-5 font-mono text-[10px] text-white/15 pointer-events-none">
        SYNC: {(progress * 100).toFixed(0)}%
      </div>
    </div>
  )
}
