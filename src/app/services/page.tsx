import type { Metadata } from 'next'
import Link from 'next/link'
import SiteLayout from '@/components/layout/SiteLayout'
import ServicesList from '@/components/sections/ServicesList'
import CtaBanner from '@/components/sections/CtaBanner'
import { services } from '@/lib/config'
import { formatPrice } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Услуги и цены — Стрижки, Маникюр, Массаж, Эпиляция',
  description:
    'Полный прайс-лист салона красоты D2 Terminal: стрижки от 700₽, маникюр от 800₽, массаж от 1500₽, эпиляция от 400₽. Ростов-на-Дону, ежедневно 10:00–22:00.',
  alternates: { canonical: 'https://d2terminal.vercel.app/services' },
}

// ─── Service visual data ──────────────────────────────────────────────────
// Each service gets a real image, a tagline, a differentiator, and a master

const serviceVisuals: Record<string, {
  image:         string
  tagline:       string
  differentiator: string
  masterName:    string
  guarantee:     string
}> = {
  haircut: {
    image:          'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&auto=format&fit=crop',
    tagline:        'Авторские стрижки и окрашивание',
    differentiator: 'Работаем с любым типом волос. Мастера с опытом от 5 лет — только профессиональная косметика Davines и L\'Oréal.',
    masterName:     'Алёна Соколова',
    guarantee:      'Бесплатная коррекция в течение 7 дней',
  },
  manicure: {
    image:          'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80&auto=format&fit=crop',
    tagline:        'Маникюр и педикюр с гарантией стойкости',
    differentiator: 'Гель-лак держится до 3–4 недель без сколов. Используем только сертифицированные материалы. Стерильные инструменты.',
    masterName:     'Карина Михайлова',
    guarantee:      'Гарантия стойкости 3 недели',
  },
  massage: {
    image:          'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80&auto=format&fit=crop',
    tagline:        'Массаж от сертифицированных специалистов',
    differentiator: 'Расслабляющий, лечебный и антицеллюлитный. Работаем с профессиональными маслами. Курсы со скидкой 15%.',
    masterName:     'Марина Иванова',
    guarantee:      'Скидка 15% на курс от 5 сеансов',
  },
  epilation: {
    image:          'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80&auto=format&fit=crop',
    tagline:        'Шугаринг и эпиляция — гладкость надолго',
    differentiator: 'Натуральная сахарная паста, минимальный дискомфорт. Результат до 3–5 недель. Гипоаллергенные материалы.',
    masterName:     'Ольга Петрова',
    guarantee:      'Минимальный дискомфорт гарантирован',
  },
}

export default function ServicesPage() {
  return (
    <SiteLayout>

      {/* ── Dark hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: 'var(--color-charcoal-800)' }}>
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=70&auto=format&fit=crop"
            alt=""
            aria-hidden="true"
            width={1600} height={900}
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.2)' }}
          />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(10,8,6,0.95) 0%, rgba(26,20,12,0.85) 100%)' }} />
        </div>

        <div className="section-container relative z-10 pt-36 pb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="divider" />
            <span className="section-label">Прайс-лист 2025</span>
          </div>
          <h1 className="font-display text-h1 mb-4" style={{ color: 'var(--color-cream)' }}>
            Наши услуги
          </h1>
          <p className="font-body text-lead max-w-xl mb-10"
            style={{ color: 'rgba(250,248,245,0.6)' }}>
            Все цены актуальны. Для сложных процедур окончательная стоимость
            рассчитывается индивидуально на консультации.
          </p>

          {/* Quick service jump cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {services.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex flex-col gap-2 p-4 transition-all duration-300 group"
                style={{
                  border: '1px solid rgba(201,169,110,0.2)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                <span className="text-2xl">{s.icon}</span>
                <span className="font-display text-lg" style={{ color: 'var(--color-cream)' }}>
                  {s.title}
                </span>
                <span className="font-body text-xs" style={{ color: 'var(--color-champagne)' }}>
                  от {formatPrice(s.priceFrom)}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose us strip ───────────────────────────────────────── */}
      <section style={{ background: 'var(--color-champagne)', padding: '14px 0' }}>
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {[
              '✓ Опыт мастеров от 4 лет',
              '✓ Профессиональная косметика',
              '✓ Стерильные инструменты',
              '✓ Гарантия на все услуги',
              '✓ Работаем ежедневно 10–22',
            ].map(t => (
              <span key={t} className="font-body text-xs font-medium"
                style={{ color: 'var(--color-charcoal-900)', letterSpacing: '0.04em' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service sections ──────────────────────────────────────────── */}
      {services.map((service, i) => {
        const visual = serviceVisuals[service.id]
        const isEven = i % 2 === 0
        return (
          <section
            key={service.id}
            id={service.id}
            className="py-20 lg:py-28"
            style={{ background: isEven ? 'var(--color-cream)' : 'var(--color-cream-warm)' }}
          >
            <div className="section-container">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                !isEven ? 'lg:[direction:rtl]' : ''
              }`}>

                {/* Image column */}
                <div className={`reveal${!isEven ? ' lg:[direction:ltr]' : ''}`}>
                  <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={visual.image}
                      alt={service.title}
                      width={800} height={600}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    {/* Guarantee badge */}
                    <div
                      className="absolute bottom-4 left-4 right-4 p-3 font-body text-xs"
                      style={{
                        background: 'rgba(10,8,6,0.85)',
                        backdropFilter: 'blur(8px)',
                        color: 'var(--color-champagne)',
                        border: '1px solid rgba(201,169,110,0.3)',
                      }}
                    >
                      ✓ {visual.guarantee}
                    </div>
                  </div>

                  {/* Master card */}
                  <div
                    className="mt-4 flex items-center gap-4 p-4"
                    style={{ background: '#fff', border: '1px solid var(--color-cream-dark)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-display text-xl shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, var(--color-champagne-light), var(--color-champagne))',
                        color: '#fff',
                      }}
                    >
                      {visual.masterName.charAt(0)}
                    </div>
                    <div>
                      <p className="font-body text-xs text-ink-muted uppercase tracking-widest">
                        Ведущий мастер
                      </p>
                      <p className="font-display text-lg text-charcoal-800">{visual.masterName}</p>
                    </div>
                    <Link
                      href={`/booking?service=${service.id}`}
                      className="ml-auto btn-accent py-2.5 px-5 text-[10px] shrink-0"
                    >
                      Записаться
                    </Link>
                  </div>
                </div>

                {/* Content column */}
                <div className={`reveal${!isEven ? ' lg:[direction:ltr]' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{service.icon}</span>
                    <span className="section-label">{visual.tagline}</span>
                  </div>
                  <div className="divider mb-5" />
                  <h2 className="font-display text-h2 text-charcoal-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="font-body text-sm text-ink-secondary leading-relaxed mb-6">
                    {visual.differentiator}
                  </p>

                  {/* Price table */}
                  <div style={{ border: '1px solid var(--color-cream-dark)', overflow: 'hidden' }}>
                    {/* Header */}
                    <div
                      className="grid grid-cols-3 px-5 py-3"
                      style={{ background: 'var(--color-charcoal-800)' }}
                    >
                      {['Услуга', 'Время', 'Цена'].map((h, j) => (
                        <span key={h} className="font-body text-[9px] font-medium tracking-widest uppercase"
                          style={{ color: 'rgba(250,248,245,0.5)', textAlign: j === 2 ? 'right' : 'left' }}>
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Rows */}
                    {service.items?.map((item, idx) => (
                      <div
                        key={item.name}
                        className="grid grid-cols-3 px-5 py-3.5 items-center transition-colors duration-200 hover:bg-cream-warm"
                        style={{
                          borderTop: '0.5px solid var(--color-cream-dark)',
                          background: idx % 2 === 0 ? '#fff' : 'rgba(250,248,245,0.5)',
                        }}
                      >
                        <span className="font-body text-sm text-charcoal-800 pr-3">{item.name}</span>
                        <span className="font-body text-xs text-ink-muted text-center">{item.duration ?? '—'}</span>
                        <span className="font-display text-lg text-charcoal-800 text-right">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                    ))}

                    {/* Footnote */}
                    <div
                      className="px-5 py-3"
                      style={{ background: 'var(--color-cream-warm)', borderTop: '0.5px solid var(--color-cream-dark)' }}
                    >
                      <p className="font-body text-xs text-ink-muted">
                        * Точная стоимость рассчитывается после консультации мастера
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={`/booking?service=${service.id}`} className="btn-primary">
                      Записаться на {service.title.toLowerCase()}
                    </Link>
                    <a
                      href="https://t.me/d2terminal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      Задать вопрос
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      <CtaBanner />
    </SiteLayout>
  )
}