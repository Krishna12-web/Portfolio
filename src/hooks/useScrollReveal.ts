import { useEffect, useRef, useState } from 'react'

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none'

interface UseScrollRevealOptions {
  direction?: RevealDirection
  threshold?: number
  delay?: number
  distance?: number
  duration?: number
}

interface RevealStyles {
  opacity: number
  transform: string
  transition: string
  willChange?: string
}

// Shared IntersectionObserver instance to reduce overhead
// Using a singleton pattern to reuse the same observer across all elements
let globalObserver: IntersectionObserver | null = null
const observedElements = new Map<Element, () => void>()

// Initialize the global observer once
function getGlobalObserver() {
  if (!globalObserver) {
    globalObserver = new IntersectionObserver(
      (entries) => {
        // Batch process all entries for better performance
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const callback = observedElements.get(entry.target)
            if (callback) {
              callback()
              observedElements.delete(entry.target)
              globalObserver?.unobserve(entry.target)
            }
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px' // Reduced root margin for earlier trigger
      }
    )
  }
  return globalObserver
}

export function useScrollReveal(options: UseScrollRevealOptions = {}): [React.RefObject<HTMLDivElement | null>, RevealStyles] {
  const {
    direction = 'up',
    threshold: _threshold, // eslint-disable-line @typescript-eslint/no-unused-vars
    delay = 0,
    distance = 30, // Reduced distance for snappier animation
    duration = 0.35 // Reduced duration for faster, snappier text animation
  } = options

  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || isVisible) return

    const observer = getGlobalObserver()
    
    // Store callback for this element
    observedElements.set(element, () => {
      setIsVisible(true)
    })

    observer.observe(element)

    return () => {
      if (element) {
        observedElements.delete(element)
        observer.unobserve(element)
      }
    }
  }, [isVisible])

  const getTransform = () => {
    if (isVisible) return 'translateX(0) translateY(0)'
    
    switch (direction) {
      case 'up':
        return `translateY(${distance}px)`
      case 'down':
        return `translateY(-${distance}px)`
      case 'left':
        return `translateX(${distance}px)`
      case 'right':
        return `translateX(-${distance}px)`
      default:
        return 'translateX(0) translateY(0)'
    }
  }

  const styles: RevealStyles = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s, transform ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
    willChange: isVisible ? 'auto' : 'opacity, transform' // Optimize for animation
  }

  return [ref, styles]
}

// Pre-configured reveal hooks for common patterns
export const useRevealUp = (delay = 0) => useScrollReveal({ direction: 'up', delay })
export const useRevealLeft = (delay = 0) => useScrollReveal({ direction: 'left', delay })
export const useRevealRight = (delay = 0) => useScrollReveal({ direction: 'right', delay })
export const useRevealNone = (delay = 0) => useScrollReveal({ direction: 'none', delay })