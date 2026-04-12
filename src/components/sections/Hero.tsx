'use client'

import Link from 'next/link'
import { siteConfig } from '@/lib/config'

// ─── Hero Section ─────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-cream">

      {/* ── Background texture / decorative elements ─────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        {/* Large faint display letter as background texture */}
        <span
          className="absolute -right-12 top-1/2 -translate-y-1/2 font-display text-[28vw] leading-none text-charcoal-800/[0.025] select-none"
          aria-hidden="true"
        >
          D2
        </span>

        {/* Thin horizontal rule — editorial touch */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-cream-dark opacity-60" />

        {/* Gold accent line — left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-champagne/40 to-transparent" />
      </div>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="section-container relative z-10 pt-32 pb-24">
        <div className="max-w-4xl">

          {/* Label */}
          <div className="flex items-center gap-4 mb-10 animate-fade-in">
            <div className="divider" />
            <span className="section-label">Ростов-на-Дону</span>
          </div>

          {/* Main heading */}
          <h1
            className="text-hero font-display text-charcoal-800 mb-6 animate-fade-up"
            style={{ animationDelay: '100ms', animationFillMode: 'both' }}
          >
            Салон красоты
            <br />
            <em className="not-italic text-champagne">D2 Terminal</em>
          </h1>

          {/* Tagline */}
          <p
            className="text-lead text-ink-secondary max-w-lg mb-12 animate-fade-up"
            style={{ animationDelay: '250ms', animationFillMode: 'both' }}
          >
            {siteConfig.tagline} — стрижки, маникюр, массаж и эпиляция.<br />
            Работаем ежедневно с {siteConfig.workingHours}.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up"
            style={{ animationDelay: '400ms', animationFillMode: 'both' }}
          >
            <Link href="/booking" className="btn-primary">
              Записаться онлайн
            </Link>
            <Link href="/services" className="btn-outline">
              Наши услуги
            </Link>
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex items-center gap-2"
            >
              <TelegramIcon />
              Написать в Telegram
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap items-center gap-6 mt-14 pt-10 border-t border-cream-dark animate-fade-up"
            style={{ animationDelay: '550ms', animationFillMode: 'both' }}
          >
            {[
              { value: '5+',    label: 'лет на рынке'        },
              { value: '3 000+', label: 'довольных клиентов'  },
              { value: '10–22', label: 'часы работы'          },
              { value: '4.9 ★', label: 'средняя оценка'       },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-2xl text-charcoal-800 leading-none">
                  {stat.value}
                </span>
                <span className="font-body text-xs text-ink-muted mt-1 tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────────── */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: '800ms', animationFillMode: 'both' }}
        aria-hidden="true"
      >
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-ink-muted">
          Прокрутите
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-champagne/60 to-transparent animate-pulse" />
      </div>
    </section>
  )
}

// ─── Inline icon ─────────────────────────────────────────────────────────

function TelegramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-17.5 7.5a2.25 2.25 0 0 0 .126 4.17l3.918 1.32 2.088 6.433a.98.98 0 0 0 1.71.29l2.822-3.045 4.514 3.34a2.25 2.25 0 0 0 3.522-1.493l2.5-17.5a2.25 2.25 0 0 0-2.678-2.23z"/>
    </svg>
  )
}