'use client'

import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import AnimatedCounter from '@/components/ui/AnimatedCounter'


// ─── Hero Section ─────────────────────────────────────────────────────────
// Phase A upgrade: full-bleed image, gradient overlay, emotional copy,
// animated counters, premium visual layers.

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── Full-bleed background image ───────────────────────────────────
          Using a high-quality Unsplash beauty salon photo.
          Owner replaces this URL with their own real photo later.
      ──────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1800&q=80&auto=format&fit=crop"
          alt="Салон красоты D2 Terminal"
          className="w-full h-full object-cover object-center"
          width={1800}
          height={1200}
          style={{ filter: 'brightness(0.45)' }}
        />

        {/* Multi-layer gradient for depth and text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                105deg,
                rgba(10,8,6,0.92) 0%,
                rgba(26,20,12,0.75) 45%,
                rgba(10,8,6,0.50) 100%
              )
            `,
          }}
        />

        {/* Champagne gold vignette — left edge glow */}
        <div
          className="absolute inset-y-0 left-0 w-1"
          style={{
            background: 'linear-gradient(to bottom, transparent, var(--color-champagne), transparent)',
          }}
        />

        {/* Subtle noise texture for premium feel */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '180px 180px',
          }}
        />
      </div>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="section-container relative z-10 pt-36 pb-28">
        <div className="max-w-3xl">

          {/* Label pill */}
          <div
            className="animate-fade-in mb-8"
            style={{ animationFillMode: 'both' }}
          >
            <span className="badge-pill text-champagne border-champagne/50">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne inline-block" />
              Ростов-на-Дону · Ежедневно {siteConfig.workingHours}
            </span>
          </div>

          {/* Main heading — emotional, benefit-driven */}
          <h1
            className="font-display text-hero text-[var(--color-cream)] mb-6 animate-fade-up leading-none"
            style={{ animationDelay: '150ms', animationFillMode: 'both' }}
          >
            Красота,{' '}
            <em
              className="not-italic"
              style={{
                background: 'linear-gradient(135deg, var(--color-champagne-light), var(--color-champagne), var(--color-champagne-dark))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              которую
            </em>
            <br />
            вы заслуживаете
          </h1>

          {/* Emotional tagline */}
          <p
            className="text-lead max-w-lg mb-4 animate-fade-up"
            style={{
              animationDelay: '280ms',
              animationFillMode: 'both',
              color: 'rgba(250,248,245,0.72)',
            }}
          >
            Запишитесь онлайн за&nbsp;1&nbsp;минуту.
            Без звонков. Без ожидания.
            Удобное время — в пару кликов.
          </p>

          <p
            className="font-body text-sm mb-10 animate-fade-up"
            style={{
              animationDelay: '340ms',
              animationFillMode: 'both',
              color: 'rgba(250,248,245,0.45)',
              letterSpacing: '0.04em',
            }}
          >
            Стрижки · Маникюр · Педикюр · Массаж · Эпиляция
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up"
            style={{ animationDelay: '420ms', animationFillMode: 'both' }}
          >
            <Link
              href="/booking"
              className="btn-accent text-sm px-10 py-5 shadow-lg"
              style={{ boxShadow: '0 8px 32px rgba(201,169,110,0.35)' }}
            >
              Записаться онлайн
            </Link>
            <Link
              href="/services"
              className="btn-outline text-sm px-10 py-5"
              style={{
                borderColor: 'rgba(250,248,245,0.3)',
                color: 'rgba(250,248,245,0.85)',
              }}
            >
              Наши услуги
            </Link>
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-xs font-medium tracking-widest uppercase py-5 px-2"
              style={{ color: 'rgba(250,248,245,0.55)' }}
            >
              <TelegramIcon />
              Telegram
            </a>
          </div>

          {/* ── Animated stats strip ──────────────────────────────────────── */}
          <div
            className="flex flex-wrap items-center gap-8 mt-16 pt-10 animate-fade-up"
            style={{
              animationDelay: '580ms',
              animationFillMode: 'both',
              borderTop: '1px solid rgba(250,248,245,0.12)',
            }}
          >
            {[
              { to: 5,    suffix: '+',  label: 'лет на рынке',       prefix: '' },
              { to: 3000, suffix: '+',  label: 'довольных клиентов',  prefix: '' },
              { to: 4,    suffix: ' ★', label: 'средняя оценка',      prefix: '4.' },
              { to: 12,   suffix: '',   label: 'часов в день',         prefix: '' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className="font-display leading-none mb-1"
                  style={{
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                    color: 'var(--color-champagne-light)',
                  }}
                >
                  {stat.prefix}
                  <AnimatedCounter
                    to={stat.to}
                    suffix={stat.suffix}
                    duration={1600}
                  />
                </span>
                <span
                  className="font-body text-xs tracking-wide"
                  style={{ color: 'rgba(250,248,245,0.45)' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────────────── */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in"
        style={{ animationDelay: '1200ms', animationFillMode: 'both' }}
        aria-hidden="true"
      >
        <span
          className="font-body text-[9px] tracking-[0.25em] uppercase"
          style={{ color: 'rgba(250,248,245,0.35)' }}
        >
          Прокрутите
        </span>
        <div className="flex flex-col items-center gap-1">
          <div
            className="w-px h-8 animate-pulse"
            style={{
              background: 'linear-gradient(to bottom, var(--color-champagne), transparent)',
            }}
          />
          <svg
            width="10" height="6" viewBox="0 0 10 6" fill="none"
            style={{ color: 'var(--color-champagne)', opacity: 0.6 }}
          >
            <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* ── Bottom decorative strip ───────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-px gold-line opacity-40" />
    </section>
  )
}

function TelegramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-17.5 7.5a2.25 2.25 0 0 0 .126 4.17l3.918 1.32 2.088 6.433a.98.98 0 0 0 1.71.29l2.822-3.045 4.514 3.34a2.25 2.25 0 0 0 3.522-1.493l2.5-17.5a2.25 2.25 0 0 0-2.678-2.23z"/>
    </svg>
  )
}