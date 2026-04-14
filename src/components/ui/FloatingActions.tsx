
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/lib/config'
import { cn } from '@/lib/utils'

export default function FloatingActions() {
  const pathname               = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [visible,  setVisible]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    const t = setTimeout(() => setVisible(true), 800)
    return () => { window.removeEventListener('scroll', onScroll); clearTimeout(t) }
  }, [])

  const isBookingPage = pathname === '/booking'

  return (
    <>
      {/* ── 1. Mobile sticky bar ─────────────────────────────────────── */}
      {!isBookingPage && (
        <div className={cn(
          'fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-500 ease-in-out',
          visible ? 'translate-y-0' : 'translate-y-full'
        )}>
          <div className="pb-safe" style={{ background: 'var(--color-charcoal-800)' }}>
            <div className="flex items-stretch">
              <Link
                href="/booking"
                className="flex-1 flex items-center justify-center gap-2 py-4 font-body text-xs font-medium tracking-widest uppercase transition-colors duration-300"
                style={{ background: 'var(--color-champagne)', color: 'var(--color-charcoal-900)' }}
              >
                <CalendarIcon />
                Записаться онлайн
              </Link>
              <a
                href="https://wa.me/79281731173"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 transition-colors duration-300"
                style={{ background: '#25D366', borderLeft: '1px solid rgba(0,0,0,0.15)', color: '#fff' }}
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center px-4 transition-colors duration-300"
                style={{ background: 'var(--color-charcoal-700)', borderLeft: '1px solid var(--color-charcoal-600)', color: 'var(--color-cream)' }}
                aria-label="Позвонить"
              >
                <PhoneIcon />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── 2. Desktop floating buttons ──────────────────────────────── */}
      <div className={cn(
        'fixed bottom-8 right-8 z-40 hidden md:flex flex-col items-end gap-3',
        'transition-all duration-500 ease-in-out',
        scrolled && visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      )}>
        {/* WhatsApp */}
        <div className="flex items-center gap-3">
          <span className="font-body text-xs px-3 py-1.5" style={{ background: 'var(--color-charcoal-800)', color: 'var(--color-cream)' }}>
            WhatsApp
          </span>
          <a
            href="https://wa.me/79281731173"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-12 h-12 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95"
            style={{ background: '#25D366', boxShadow: '0 4px 16px rgba(37,211,102,0.35)' }}
          >
            <WhatsAppIcon />
          </a>
        </div>

        {/* Telegram */}
        <div className="flex items-center gap-3">
          <span className="font-body text-xs px-3 py-1.5" style={{ background: 'var(--color-charcoal-800)', color: 'var(--color-cream)' }}>
            Telegram
          </span>
          <a
            href={siteConfig.telegram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
            style={{ background: 'var(--color-charcoal-800)', color: 'var(--color-cream)', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}
          >
            <TelegramIconLg />
          </a>
        </div>
      </div>
    </>
  )
}

function CalendarIcon() {
  return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
}
function PhoneIcon() {
  return <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.7h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l.72-.72a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.28 17z"/></svg>
}
function WhatsAppIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
}
function TelegramIconLg() {
  return <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-17.5 7.5a2.25 2.25 0 0 0 .126 4.17l3.918 1.32 2.088 6.433a.98.98 0 0 0 1.71.29l2.822-3.045 4.514 3.34a2.25 2.25 0 0 0 3.522-1.493l2.5-17.5a2.25 2.25 0 0 0-2.678-2.23z"/></svg>
}