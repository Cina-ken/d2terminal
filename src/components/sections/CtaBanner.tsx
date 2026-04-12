import Link from 'next/link'
import { siteConfig } from '@/lib/config'

// ─── CTA Banner ───────────────────────────────────────────────────────────
// Full-width dark section above the footer — final push to book

export default function CtaBanner() {
  return (
    <section className="bg-charcoal-900 py-20 lg:py-28 relative overflow-hidden">

      {/* Decorative background text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display text-[20vw] text-white/[0.02] leading-none whitespace-nowrap">
          Beauty
        </span>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Text */}
          <div className="text-center lg:text-left reveal-left">
            <span className="section-label block mb-4">Готовы?</span>
            <div className="divider mb-6 lg:mx-0 mx-auto" />
            <h2 className="font-display text-h1 text-cream leading-tight">
              Запишитесь онлайн
              <br />
              <em className="not-italic text-champagne">прямо сейчас</em>
            </h2>
            <p className="font-body text-lead text-cream/60 mt-4 max-w-md">
              Никаких звонков и ожиданий. Выберите услугу, дату и удобное время — всё готово за 1 минуту.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col items-center gap-4 reveal">
            <Link href="/booking" className="btn-accent text-base px-12 py-5">
              Записаться онлайн
            </Link>

            <span className="font-body text-xs text-cream/30">или</span>

            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 font-body text-sm text-cream/50 hover:text-cream transition-colors duration-300"
            >
              <PhoneIcon />
              {siteConfig.phone}
            </a>

            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm text-cream/50 hover:text-champagne transition-colors duration-300"
            >
              <TelegramIcon />
              Написать в Telegram
            </a>

            <p className="font-body text-xs text-cream/25 mt-2 text-center">
              {siteConfig.workingDays} · {siteConfig.workingHours}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Icons ────────────────────────────────────────────────────────────────

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