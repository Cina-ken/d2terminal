'use client'

import { useEffect } from 'react'

// ─── ScrollReveal ──────────────────────────────────────────────────────────
// Runs ONLY on the client after hydration is complete.
// Adds .is-visible to any element with .reveal or .reveal-left class.
// This avoids the SSR/client mismatch that caused the hydration error.

export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-left')
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Renders nothing — purely a behaviour hook
  return null
}