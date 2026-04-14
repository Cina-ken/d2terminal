'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { navLinks, siteConfig } from '@/lib/config'

// ─── Navbar ───────────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname                    = usePathname()
  const [menuOpen,  setMenuOpen]    = useState(false)
  const [scrolled,  setScrolled]    = useState(false)

  // Add shadow + bg on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-500',
          scrolled
            ? 'py-4 border-b'
            : 'bg-transparent py-6'
        )}
        style={scrolled ? {
          background: 'rgba(250,248,245,0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderColor: 'var(--color-cream-dark)',
          boxShadow: '0 1px 24px rgba(0,0,0,0.06)',
        } : {}}
      >
        <div className="section-container flex items-center justify-between">

          {/* ── Logo ───────────────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex flex-col leading-none group"
            aria-label="D2 Terminal — на главную"
          >
            <span
              className="font-display text-2xl tracking-tight transition-colors duration-300 group-hover:text-champagne"
              style={{ color: scrolled ? 'var(--color-charcoal-800)' : 'var(--color-cream)' }}
            >
              D2 Terminal
            </span>
            <span
              className="font-body text-[10px] tracking-[0.2em] uppercase mt-0.5 transition-colors duration-300"
              style={{ color: scrolled ? 'var(--color-ink-muted)' : 'rgba(250,248,245,0.45)' }}
            >
              Салон красоты
            </span>
          </Link>

          {/* ── Desktop Nav ────────────────────────────────────────────── */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Основная навигация">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'nav-link',
                  pathname === link.href && 'nav-link-active',
                  !scrolled && 'text-[rgba(250,248,245,0.75)] hover:text-champagne'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTA ────────────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href={siteConfig.phoneHref}
              className="font-body text-xs font-medium tracking-wide transition-colors duration-300"
              style={{ color: scrolled ? 'var(--color-ink-secondary)' : 'rgba(250,248,245,0.6)' }}
            >
              {siteConfig.phone}
            </a>
            <Link
              href="/booking"
              className="btn-primary py-3 px-6 text-[11px]"
              style={!scrolled ? {
                background: 'var(--color-champagne)',
                color: 'var(--color-charcoal-900)',
              } : {}}
            >
              Записаться
            </Link>
          </div>

          {/* ── Mobile Burger ──────────────────────────────────────────── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 group"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
          >
            <span
              className={cn(
                'block w-6 h-px bg-charcoal-800 transition-all duration-300 origin-center',
                menuOpen && 'rotate-45 translate-y-[5px]'
              )}
            />
            <span
              className={cn(
                'block w-4 h-px bg-charcoal-800 transition-all duration-300 ml-auto',
                menuOpen && 'opacity-0 w-6'
              )}
            />
            <span
              className={cn(
                'block w-6 h-px bg-charcoal-800 transition-all duration-300 origin-center',
                menuOpen && '-rotate-45 -translate-y-[5px]'
              )}
            />
          </button>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ──────────────────────────────────────────── */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden',
          'bg-cream flex flex-col',
          'transition-all duration-500 ease-in-out',
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Top spacing for header */}
        <div className="h-24" />

        <nav
          className="flex flex-col px-8 pt-10 flex-1"
          aria-label="Мобильная навигация"
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-display text-4xl text-charcoal-800 py-5 border-b border-cream-dark',
                'hover:text-champagne transition-colors duration-300',
                'transform transition-all duration-500',
                menuOpen
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-8 opacity-0',
                pathname === link.href && 'text-champagne'
              )}
              style={{ transitionDelay: menuOpen ? `${i * 80}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}

          {/* Contact info in mobile menu */}
          <div
            className={cn(
              'mt-auto pb-12 pt-8 space-y-4',
              'transform transition-all duration-500',
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
            style={{ transitionDelay: menuOpen ? '400ms' : '0ms' }}
          >
            <a
              href={siteConfig.phoneHref}
              className="block font-body text-lg text-ink-secondary hover:text-champagne transition-colors"
            >
              {siteConfig.phone}
            </a>
            <p className="font-body text-sm text-ink-muted">
              {siteConfig.workingDays} · {siteConfig.workingHours}
            </p>
            <Link href="/booking" className="btn-primary inline-block mt-4">
              Записаться онлайн
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}