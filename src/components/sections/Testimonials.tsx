import { testimonials } from '@/lib/config'
import StarRating from '@/components/ui/StarRating'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

// ─── Testimonials — Phase B upgrade ───────────────────────────────────────
// Google rating strip, upgraded cards with source badges, avatar photos,
// animated overall rating counter.

export default function Testimonials() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'var(--color-cream-warm)' }}
      id="testimonials"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #1a1a1a 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="section-container relative z-10">

        {/* ── Google Rating Strip ──────────────────────────────────────── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-16 p-6 reveal"
          style={{
            background: '#fff',
            border: '1px solid var(--color-cream-dark)',
            boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
          }}
        >
          <div className="flex items-center gap-5">
            {/* Google icon */}
            <div
              className="w-12 h-12 flex items-center justify-center shrink-0"
              style={{ background: 'var(--color-cream)', border: '1px solid var(--color-cream-dark)' }}
            >
              <GoogleIcon />
            </div>
            <div>
              <p className="font-body text-xs font-medium tracking-widest uppercase text-ink-muted mb-1">
                Google Reviews
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl text-charcoal-800">
                  4.9
                </span>
                <span className="font-body text-sm text-ink-muted">/ 5.0</span>
              </div>
              <StarRating rating={5} size="md" className="mt-1" />
            </div>
          </div>

          <div
            className="h-px sm:h-14 w-full sm:w-px"
            style={{ background: 'var(--color-cream-dark)' }}
          />

          {/* Review count */}
          <div className="text-center sm:text-left">
            <p
              className="font-display text-4xl text-charcoal-800"
            >
              <AnimatedCounter to={64} duration={1400} suffix="+" />
            </p>
            <p className="font-body text-xs text-ink-muted mt-1 tracking-wide">
              отзывов на Google
            </p>
          </div>

          <div
            className="h-px sm:h-14 w-full sm:w-px"
            style={{ background: 'var(--color-cream-dark)' }}
          />

          {/* Yandex */}
          <div className="text-center sm:text-left">
            <p className="font-body text-xs font-medium tracking-widest uppercase text-ink-muted mb-1">
              Яндекс Карты
            </p>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl text-charcoal-800">4.8</span>
              <span className="font-body text-sm text-ink-muted">/ 5.0</span>
            </div>
            <StarRating rating={5} size="md" className="mt-1" />
          </div>

          <div
            className="h-px sm:h-14 w-full sm:w-px"
            style={{ background: 'var(--color-cream-dark)' }}
          />

          {/* 2GIS */}
          <div className="text-center sm:text-left">
            <p className="font-body text-xs font-medium tracking-widest uppercase text-ink-muted mb-1">
              2ГИС
            </p>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl text-charcoal-800">4.9</span>
              <span className="font-body text-sm text-ink-muted">/ 5.0</span>
            </div>
            <StarRating rating={5} size="md" className="mt-1" />
          </div>
        </div>

        {/* ── Section header ───────────────────────────────────────────── */}
        <div className="mb-12">
          <span className="section-label block mb-4">Отзывы клиентов</span>
          <div className="divider mb-6" />
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display text-h2 text-charcoal-800">
              Нам доверяют
            </h2>
            <p className="font-body text-sm text-ink-muted max-w-xs">
              Реальные отзывы от клиентов. Каждый — история красоты.
            </p>
          </div>
        </div>

        {/* ── Review cards ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="reveal luxury-card flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Top row — stars + source badge */}
              <div className="flex items-center justify-between mb-5">
                <StarRating rating={t.rating} />
                <span
                  className="font-body text-[9px] font-medium tracking-widest uppercase px-2.5 py-1"
                  style={{
                    background: 'var(--color-cream-warm)',
                    color: 'var(--color-ink-muted)',
                    border: '1px solid var(--color-cream-dark)',
                  }}
                >
                  Google
                </span>
              </div>

              {/* Large quote mark */}
              <div
                className="font-display text-6xl leading-none mb-2 select-none"
                style={{ color: 'rgba(201,169,110,0.25)' }}
                aria-hidden="true"
              >
                "
              </div>

              {/* Review text */}
              <p className="font-body text-sm text-ink-secondary leading-relaxed flex-1 mb-6">
                {t.text}
              </p>

              {/* Footer — avatar + name + date */}
              <div
                className="flex items-center justify-between gap-3 pt-4"
                style={{ borderTop: '1px solid var(--color-cream-dark)' }}
              >
                <div className="flex items-center gap-3">
                  {/* Avatar with gradient background */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-display text-lg"
                    style={{
                      background: 'linear-gradient(135deg, var(--color-champagne-light), var(--color-champagne))',
                      color: '#fff',
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-charcoal-800 leading-none">
                      {t.name}
                    </p>
                    <p className="font-body text-xs text-ink-muted mt-1">
                      {t.service}
                    </p>
                  </div>
                </div>
                <span className="font-body text-xs text-ink-muted shrink-0">
                  {t.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Google Icon ──────────────────────────────────────────────────────────

function GoogleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}