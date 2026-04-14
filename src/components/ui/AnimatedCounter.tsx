'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  to:       number
  suffix?:  string
  prefix?:  string
  duration?: number
}

// ─── AnimatedCounter ──────────────────────────────────────────────────────
// Counts from 0 to `to` when it enters the viewport.

export default function AnimatedCounter({
  to,
  suffix   = '',
  prefix   = '',
  duration = 1800,
}: AnimatedCounterProps) {
  const [count,   setCount]   = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * to))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, to, duration])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString('ru-RU')}{suffix}
    </span>
  )
}