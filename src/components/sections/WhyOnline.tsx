import Link from 'next/link'

// ─── WhyOnline Section ────────────────────────────────────────────────────
// Phase C: "Почему онлайн?" — emotional benefit selling.
// Addresses real pain points: waiting on hold, inconvenient hours, uncertainty.

const reasons = [
  {
    icon: '📵',
    problem: 'Устали звонить?',
    solution: 'Запись онлайн 24/7',
    description: 'Не нужно ждать на линии или перезванивать. Записывайтесь в любое время — хоть в 2 часа ночи.',
  },
  {
    icon: '⚡',
    problem: 'Долго и сложно?',
    solution: 'Всего 3 шага — 1 минута',
    description: 'Выберите услугу, дату и время. Никаких регистраций, никаких лишних вопросов. Просто и быстро.',
  },
  {
    icon: '✅',
    problem: 'Не уверены?',
    solution: 'Подтверждение за 15 минут',
    description: 'Мы сразу свяжемся с вами и подтвердим запись. Никакой неопределённости — всё чётко.',
  },
  {
    icon: '🔄',
    problem: 'Планы изменились?',
    solution: 'Бесплатная отмена',
    description: 'Перенесите или отмените запись без штрафов. Просто напишите нам в Telegram.',
  },
]

export default function WhyOnline() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'var(--color-cream)' }}
      id="why-online"
    >
      {/* Gold ambient top glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(201,169,110,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Heading + CTA ──────────────────────────────────── */}
          <div className="reveal-left">
            <span className="section-label block mb-4">Удобство прежде всего</span>
            <div className="divider mb-6" />
            <h2 className="font-display text-h1 text-charcoal-800 mb-6 leading-tight">
              Почему онлайн-запись
              <br />
              <em
                className="not-italic"
                style={{
                  background: 'linear-gradient(135deg, var(--color-champagne-dark), var(--color-champagne))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                удобнее?
              </em>
            </h2>
            <p className="font-body text-lead text-ink-secondary mb-8 max-w-md leading-relaxed">
              Мы убрали всё лишнее. Теперь записаться в салон так же просто,
              как заказать такси — быстро, понятно, без ожидания.
            </p>

            {/* Stats row */}
            <div
              className="flex gap-8 py-6 mb-8"
              style={{ borderTop: '1px solid var(--color-cream-dark)', borderBottom: '1px solid var(--color-cream-dark)' }}
            >
              {[
                { value: '< 1 мин', label: 'среднее время записи' },
                { value: '15 мин',  label: 'время подтверждения'  },
                { value: '24 / 7',  label: 'доступность записи'   },
              ].map(stat => (
                <div key={stat.label}>
                  <p
                    className="font-display text-2xl text-charcoal-800 leading-none"
                  >
                    {stat.value}
                  </p>
                  <p className="font-body text-xs text-ink-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/booking"
              className="btn-primary px-10 py-5"
              style={{ boxShadow: '0 4px 20px rgba(26,26,26,0.15)' }}
            >
              Записаться за 1 минуту
            </Link>
          </div>

          {/* ── Right: Reason cards ───────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div
                key={r.solution}
                className="reveal luxury-card"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Icon */}
                <div className="text-3xl mb-4">{r.icon}</div>

                {/* Problem label */}
                <p
                  className="font-body text-xs font-medium tracking-widest uppercase mb-1"
                  style={{ color: 'var(--color-ink-muted)' }}
                >
                  {r.problem}
                </p>

                {/* Solution */}
                <h3 className="font-display text-xl text-charcoal-800 mb-2 leading-tight">
                  {r.solution}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-ink-secondary leading-relaxed">
                  {r.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}