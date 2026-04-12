'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/lib/config'
import { cn } from '@/lib/utils'

// ─── FloatingActions ──────────────────────────────────────────────────────
// Two floating UI elements:
// 1. Sticky "Записаться" bar — shown on mobile, hidden on booking page
// 2. Telegram floating button — shown on all pages after scrolling 300px

export default function FloatingActions() {
  const pathname              = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [visible,  setVisible]  = useState(false)

  // Show after 300px scroll, hide on booking page sticky bar
  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > 300
      setScrolled(past)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    // Delay mount animation
    const t = setTimeout(() => setVisible(true), 800)
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(t)
    }
  }, [])

  const isBookingPage = pathname === '/booking'

  return (
    <>
      {/* ── 1. Sticky Mobile Booking Bar ─────────────────────────────────
          Shown at the bottom on mobile devices.
          Hidden on the booking page (user is already there).
          Hidden on desktop (md+).
      ──────────────────────────────────────────────────────────────────── */}
      {!isBookingPage && (
        <div
          className={cn(
            'fixed bottom-0 left-0 right-0 z-40 md:hidden',
            'transition-transform duration-500 ease-in-out',
            visible ? 'translate-y-0' : 'translate-y-full'
          )}
        >
          {/* Safe area padding for iOS home indicator */}
          <div className="bg-charcoal-800 pb-safe">
            <div className="flex items-stretch">
              {/* Main book button */}
              <Link
                href="/booking"
                className="flex-1 flex items-center justify-center gap-2
                           bg-champagne text-charcoal-900 py-4
                           font-body text-xs font-medium tracking-widest uppercase
                           transition-colors duration-300 hover:bg-champagne-dark"
              >
                <CalendarIcon />
                Записаться онлайн
              </Link>

              {/* Phone quick-dial */}
              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center px-5
                           bg-charcoal-700 text-cream
                           border-l border-charcoal-600
                           transition-colors duration-300 hover:bg-charcoal-600"
                aria-label="Позвонить"
              >
                <PhoneIcon />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── 2. Telegram Floating Button ───────────────────────────────────
          Appears on desktop after scrolling 300px.
          Fixed to bottom-right corner.
          Hidden on mobile (use sticky bar instead).
      ──────────────────────────────────────────────────────────────────── */}
      <div
        className={cn(
          'fixed bottom-8 right-8 z-40 hidden md:flex flex-col items-end gap-3',
          'transition-all duration-500 ease-in-out',
          scrolled && visible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        )}
      >
        {/* Tooltip label */}
        <div
          className={cn(
            'bg-charcoal-800 text-cream text-xs font-body px-3 py-1.5',
            'transition-all duration-300',
            scrolled ? 'opacity-100' : 'opacity-0'
          )}
        >
          Написать в Telegram
        </div>

        {/* Telegram button */}
        <a
          href={siteConfig.telegram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать в Telegram"
          className="w-14 h-14 bg-charcoal-800 flex items-center justify-center
                     text-cream shadow-lg
                     transition-all duration-300
                     hover:bg-champagne hover:scale-110
                     active:scale-95"
        >
          <TelegramIconLg />
        </a>
      </div>
    </>
  )
}

// ─── Icons ────────────────────────────────────────────────────────────────

function CalendarIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8"  y1="2" x2="8"  y2="6"/>
      <line x1="3"  y1="10" x2="21" y2="10"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.7h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l.72-.72a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.28 17z"/>
    </svg>
  )
}

function TelegramIconLg() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-17.5 7.5a2.25 2.25 0 0 0 .126 4.17l3.918 1.32 2.088 6.433a.98.98 0 0 0 1.71.29l2.822-3.045 4.514 3.34a2.25 2.25 0 0 0 3.522-1.493l2.5-17.5a2.25 2.25 0 0 0-2.678-2.23z"/>
    </svg>
  )
}