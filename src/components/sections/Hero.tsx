
'use client'

import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

// ─── Hero — Premium redesign ──────────────────────────────────────────────
// Vertical editorial layout. Strong typographic hierarchy.
// Emotional storytelling: WHO you are → WHAT you offer → WHY now.

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">

      {/* ── Full-bleed background ─────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1800&q=85&auto=format&fit=crop"
          alt="Салон красоты D2 Terminal"
          className="w-full h-full object-cover object-center"
          width={1800}
          height={1200}
          style={{ filter: 'brightness(0.38)' }}
        />

        {/* Deep asymmetric gradient — heavier left, lighter right */}
        <div className="absolute inset-0" style={{
          background: `
            linear-gradient(
              108deg,
              rgba(6,5,3,0.97) 0%,
              rgba(14,11,7,0.88) 40%,
              rgba(20,16,10,0.60) 70%,
              rgba(6,5,3,0.40) 100%
            )
          `,
        }} />

        {/* Champagne vertical accent — left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px]" style={{
          background: 'linear-gradient(to bottom, transparent 5%, var(--color-champagne) 35%, var(--color-champagne-light) 50%, var(--color-champagne) 65%, transparent 95%)',
          opacity: 0.7,
        }} />

        {/* Subtle noise grain — premium texture */}
        <div className="absolute inset-0 opacity-[0.18]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }} />

        {/* Bottom fade — blends into content below */}
        <div className="absolute bottom-0 left-0 right-0 h-48" style={{
          background: 'linear-gradient(to bottom, transparent, rgba(6,5,3,0.5))',
        }} />
      </div>

      {/* ── Content — bottom-aligned editorial layout ─────────────────────── */}
      <div className="section-container relative z-10 pb-20 pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

          {/* ── Left: Main headline block ───────────────────────────────── */}
          <div className="lg:col-span-7">

            {/* Location + status pill */}
            <div className="mb-10 animate-fade-in" style={{ animationFillMode: 'both' }}>
              <span className="badge-pill">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Ростов-на-Дону · Сейчас открыто · {siteConfig.workingHours}
              </span>
            </div>

            {/* WHO — salon name, small */}
            <p
              className="font-body mb-3 animate-fade-up"
              style={{
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'var(--color-champagne)',
                animationDelay: '100ms',
                animationFillMode: 'both',
              }}
            >
              D2 Terminal · Салон красоты
            </p>

            {/* WHAT — main emotional headline */}
            <h1
              className="font-display text-hero animate-fade-up"
              style={{
                color: 'var(--color-cream)',
                animationDelay: '200ms',
                animationFillMode: 'both',
                marginBottom: '0.5rem',
              }}
            >
              Премиальный
              <br />
              <em
                className="not-italic block"
                style={{
                  background: 'linear-gradient(135deg, var(--color-champagne-light) 0%, var(--color-champagne) 50%, var(--color-champagne-dark) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                уход за собой
              </em>
            </h1>

            {/* WHY — benefit line */}
            <p
              className="font-display text-h2 animate-fade-up"
              style={{
                color: 'rgba(250,248,245,0.35)',
                fontWeight: 300,
                animationDelay: '320ms',
                animationFillMode: 'both',
                marginBottom: '2.5rem',
              }}
            >
              в Ростове-на-Дону
            </p>

            {/* Tagline — benefit-driven, pain-point */}
            <p
              className="text-lead animate-fade-up"
              style={{
                color: 'rgba(250,248,245,0.65)',
                maxWidth: '28rem',
                animationDelay: '420ms',
                animationFillMode: 'both',
                marginBottom: '0.75rem',
              }}
            >
              Запишитесь онлайн за&nbsp;1&nbsp;минуту.
              Без звонков. Без ожидания.
            </p>

            <p
              className="font-body animate-fade-up"
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                color: 'rgba(250,248,245,0.38)',
                animationDelay: '480ms',
                animationFillMode: 'both',
                marginBottom: '2.5rem',
              }}
            >
              Стрижки · Маникюр · Педикюр · Массаж · Эпиляция
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up"
              style={{ animationDelay: '560ms', animationFillMode: 'both' }}
            >
              <Link
                href="/booking"
                className="btn-accent"
                style={{ boxShadow: '0 8px 40px rgba(201,169,110,0.40)', padding: '1.2rem 3rem' }}
              >
                Записаться онлайн
              </Link>
              <Link
                href="/gallery"
                className="btn-outline"
                style={{
                  borderColor: 'rgba(250,248,245,0.25)',
                  color: 'rgba(250,248,245,0.8)',
                  padding: '1.2rem 3rem',
                }}
              >
                Наши работы
              </Link>
            </div>
          </div>

          {/* ── Right: Stats column ──────────────────────────────────────── */}
          <div
            className="lg:col-span-5 lg:pl-12 animate-fade-up"
            style={{
              animationDelay: '680ms',
              animationFillMode: 'both',
              borderLeft: '1px solid rgba(250,248,245,0.08)',
            }}
          >
            {/* Vertical stat blocks */}
            <div className="grid grid-cols-2 gap-px" style={{ background: 'rgba(250,248,245,0.06)' }}>
              {[
                { to: 5,    suffix: '+',  label: 'лет на рынке',       prefix: ''   },
                { to: 3000, suffix: '+',  label: 'клиентов',            prefix: ''   },
                { to: 4,    suffix: ' ★', label: 'средняя оценка Google', prefix: '4.' },
                { to: 12,   suffix: ' ч', label: 'работаем в день',     prefix: ''   },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="flex flex-col p-6"
                  style={{ background: 'rgba(6,5,3,0.6)', backdropFilter: 'blur(12px)' }}
                >
                  <span
                    className="font-display leading-none mb-2"
                    style={{
                      fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                      color: 'var(--color-champagne-light)',
                    }}
                  >
                    {stat.prefix}
                    <AnimatedCounter to={stat.to} suffix={stat.suffix} duration={1800} />
                  </span>
                  <span
                    className="font-body"
                    style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: 'rgba(250,248,245,0.38)', textTransform: 'uppercase' }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Telegram quick link */}
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 mt-4 font-body transition-colors duration-300"
              style={{ fontSize: '0.7rem', letterSpacing: '0.12em', color: 'rgba(250,248,245,0.35)' }}
            >
              <span
                className="w-8 h-8 flex items-center justify-center shrink-0"
                style={{ background: 'rgba(250,248,245,0.06)', border: '1px solid rgba(250,248,245,0.1)' }}
              >
                <TelegramIcon />
              </span>
              НАПИСАТЬ В TELEGRAM
            </a>
          </div>
        </div>
      </div>

      {/* ── Scroll cue ───────────────────────────────────────────────────── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: '1400ms', animationFillMode: 'both' }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-1">
          <div className="w-px h-10 animate-pulse" style={{
            background: 'linear-gradient(to bottom, var(--color-champagne), transparent)',
          }} />
          <svg width="10" height="6" viewBox="0 0 10 6" style={{ color: 'var(--color-champagne)', opacity: 0.5 }}>
            <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
      </div>

      {/* ── Bottom gold line ─────────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-px gold-line opacity-35" />
    </section>
  )
}

function TelegramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-17.5 7.5a2.25 2.25 0 0 0 .126 4.17l3.918 1.32 2.088 6.433a.98.98 0 0 0 1.71.29l2.822-3.045 4.514 3.34a2.25 2.25 0 0 0 3.522-1.493l2.5-17.5a2.25 2.25 0 0 0-2.678-2.23z"/>
    </svg>
  )
}