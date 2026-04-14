'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// ─── PromoBanner ──────────────────────────────────────────────────────────
// Dismissible announcement strip shown above the Navbar.
// Persists dismissed state in sessionStorage so it doesn't re-appear
// on every navigation within the same session.

const PROMO_KEY = 'd2_promo_dismissed'

export default function PromoBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only show if not dismissed this session
    const dismissed = sessionStorage.getItem(PROMO_KEY)
    if (!dismissed) setVisible(true)
  }, [])

  function dismiss() {
    sessionStorage.setItem(PROMO_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="relative z-50 w-full flex items-center justify-center gap-4 px-4 py-2.5"
      style={{
        background: 'linear-gradient(90deg, var(--color-charcoal-900) 0%, #1c1408 50%, var(--color-charcoal-900) 100%)',
        borderBottom: '1px solid rgba(201,169,110,0.2)',
      }}
    >
      {/* Shimmer gold line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--color-champagne), transparent)',
          opacity: 0.6,
        }}
      />

      {/* Promo text */}
      <div className="flex items-center gap-2 flex-wrap justify-center">
        <span
          className="font-body text-[10px] font-medium tracking-[0.15em] uppercase"
          style={{ color: 'var(--color-champagne)' }}
        >
          🎉 Акция
        </span>
        <span
          className="font-body text-[11px]"
          style={{ color: 'rgba(250,248,245,0.75)' }}
        >
          Скидка 10% на первое посещение для новых клиентов
        </span>
        <Link
          href="/booking"
          className="font-body text-[10px] font-medium tracking-[0.12em] uppercase px-3 py-1 transition-all duration-300"
          style={{
            border: '1px solid rgba(201,169,110,0.5)',
            color: 'var(--color-champagne)',
          }}
          onClick={dismiss}
        >
          Записаться
        </Link>
      </div>

      {/* Dismiss button */}
      <button
        onClick={dismiss}
        aria-label="Закрыть баннер"
        className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 transition-colors duration-300"
        style={{ color: 'rgba(250,248,245,0.35)' }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}