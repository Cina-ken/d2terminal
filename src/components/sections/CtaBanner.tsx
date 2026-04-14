import Link from 'next/link'
import { siteConfig } from '@/lib/config'

// ─── CTA Banner — Phase A upgrade ─────────────────────────────────────────
// Full-bleed image, gradient overlay, stronger emotional copy.

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          width={1600}
          height={900}
          style={{ filter: 'brightness(0.3)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(10,8,6,0.95) 0%, rgba(26,20,12,0.80) 100%)',
          }}
        />
        {/* Gold shimmer bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px gold-line opacity-50" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left — text */}
          <div className="text-center lg:text-left reveal-left">
            <span className="section-label block mb-4">Готовы?</span>
            <div className="divider mb-6 lg:mx-0 mx-auto" />
            <h2
              className="font-display mb-5"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--color-cream)',
                lineHeight: 1.15,
              }}
            >
              Запишитесь онлайн —
              <br />
              <em
                className="not-italic"
                style={{
                  background: 'linear-gradient(135deg, var(--color-champagne-light), var(--color-champagne))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                прямо сейчас
              </em>
            </h2>
            <p
              className="font-body text-lead max-w-md"
              style={{ color: 'rgba(250,248,245,0.6)' }}
            >
              Никаких звонков и ожидания. Выберите услугу,
              дату и удобное время — всё готово за&nbsp;1&nbsp;минуту.
            </p>

            {/* Mini trust badges */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
              {['⚡ Подтверждение за 15 мин', '🔄 Бесплатная отмена', '📅 До 60 дней вперёд'].map(b => (
                <span
                  key={b}
                  className="font-body text-xs"
                  style={{ color: 'rgba(250,248,245,0.4)' }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right — actions */}
          <div className="flex flex-col items-center gap-4 reveal">
            <Link
              href="/booking"
              className="btn-accent text-sm px-12 py-5 whitespace-nowrap"
              style={{ boxShadow: '0 8px 32px rgba(201,169,110,0.35)' }}
            >
              Записаться онлайн
            </Link>

            <span
              className="font-body text-xs"
              style={{ color: 'rgba(250,248,245,0.25)' }}
            >
              или
            </span>

            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 font-body text-sm transition-colors duration-300"
              style={{ color: 'rgba(250,248,245,0.5)' }}
            >
              <PhoneIcon />
              {siteConfig.phone}
            </a>

            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm transition-colors duration-300"
              style={{ color: 'rgba(250,248,245,0.5)' }}
            >
              <TelegramIcon />
              Написать в Telegram
            </a>

            <p
              className="font-body text-xs mt-2 text-center"
              style={{ color: 'rgba(250,248,245,0.22)' }}
            >
              {siteConfig.workingDays} · {siteConfig.workingHours}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.7h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l.72-.72a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.28 17z"/>
    </svg>
  )
}
function TelegramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-17.5 7.5a2.25 2.25 0 0 0 .126 4.17l3.918 1.32 2.088 6.433a.98.98 0 0 0 1.71.29l2.822-3.045 4.514 3.34a2.25 2.25 0 0 0 3.522-1.493l2.5-17.5a2.25 2.25 0 0 0-2.678-2.23z"/>
    </svg>
  )
}