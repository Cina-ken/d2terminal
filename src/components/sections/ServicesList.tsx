'use client'

import { useState } from 'react'
import Link from 'next/link'
import { services } from '@/lib/config'
import { formatPrice } from '@/lib/utils'
import type { Service } from '@/types'

// ─── Services List ────────────────────────────────────────────────────────

export default function ServicesList() {
  const [activeId, setActiveId] = useState<string>(services[0].id)

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="section-container">

        {/* ── Category Tabs ─────────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-16 border-b border-cream-dark pb-6">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveId(service.id)}
              className={[
                'flex items-center gap-2 px-5 py-3 font-body text-sm font-medium',
                'transition-all duration-300',
                activeId === service.id
                  ? 'bg-charcoal-800 text-cream'
                  : 'bg-white border border-cream-dark text-ink-secondary hover:border-champagne hover:text-champagne',
              ].join(' ')}
            >
              <span className="text-base">{service.icon}</span>
              {service.title}
            </button>
          ))}
        </div>

        {/* ── Active Service Panel ───────────────────────────────────────── */}
        {services.map((service) =>
          activeId === service.id ? (
            <ServicePanel key={service.id} service={service} />
          ) : null
        )}
      </div>
    </section>
  )
}

// ─── Service Panel ────────────────────────────────────────────────────────

function ServicePanel({ service }: { service: Service }) {
  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

        {/* ── Left: Info column ─────────────────────────────────────────── */}
        <div className="lg:col-span-1">
          {/* Icon */}
          <div className="text-5xl mb-6" aria-hidden="true">
            {service.icon}
          </div>

          {/* Label */}
          <span className="section-label block mb-3">{service.title}</span>
          <div className="divider mb-5" />

          {/* Description */}
          <p className="font-body text-sm text-ink-secondary leading-relaxed mb-8">
            {service.description}
          </p>

          {/* Quick stats */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center justify-between py-3 border-b border-cream-dark">
              <span className="font-body text-xs text-ink-muted uppercase tracking-wide">
                Стоимость от
              </span>
              <span className="font-display text-xl text-champagne">
                {formatPrice(service.priceFrom)}
              </span>
            </div>
            {service.duration && (
              <div className="flex items-center justify-between py-3 border-b border-cream-dark">
                <span className="font-body text-xs text-ink-muted uppercase tracking-wide">
                  Длительность
                </span>
                <span className="font-body text-sm text-charcoal-800">
                  {service.duration}
                </span>
              </div>
            )}
            <div className="flex items-center justify-between py-3 border-b border-cream-dark">
              <span className="font-body text-xs text-ink-muted uppercase tracking-wide">
                Запись
              </span>
              <span className="font-body text-sm text-charcoal-800">
                Онлайн / По телефону
              </span>
            </div>
          </div>

          {/* CTA */}
          <Link
            href={`/booking?service=${service.id}`}
            className="btn-primary w-full text-center block"
          >
            Записаться на {service.title.toLowerCase()}
          </Link>

          {/* Note */}
          <p className="font-body text-xs text-ink-muted mt-4 text-center leading-relaxed">
            Точная стоимость уточняется у администратора
          </p>
        </div>

        {/* ── Right: Price table ────────────────────────────────────────── */}
        <div className="lg:col-span-2">
          <h2 className="font-display text-h2 text-charcoal-800 mb-8">
            Прайс-лист
          </h2>

          {service.items && service.items.length > 0 ? (
            <div className="space-y-0 border border-cream-dark">
              {/* Table header */}
              <div className="grid grid-cols-3 bg-charcoal-800 px-6 py-3">
                <span className="font-body text-xs font-medium tracking-widest uppercase text-cream/60 col-span-1">
                  Услуга
                </span>
                <span className="font-body text-xs font-medium tracking-widest uppercase text-cream/60 text-center">
                  Длительность
                </span>
                <span className="font-body text-xs font-medium tracking-widest uppercase text-cream/60 text-right">
                  Цена
                </span>
              </div>

              {/* Table rows */}
              {service.items.map((item, index) => (
                <div
                  key={item.name}
                  className={[
                    'grid grid-cols-3 px-6 py-4 items-center',
                    'transition-colors duration-200 hover:bg-cream-warm',
                    index % 2 === 0 ? 'bg-white' : 'bg-cream/60',
                    index !== service.items!.length - 1
                      ? 'border-b border-cream-dark'
                      : '',
                  ].join(' ')}
                >
                  {/* Service name */}
                  <span className="font-body text-sm text-charcoal-800 col-span-1 pr-4">
                    {item.name}
                  </span>

                  {/* Duration */}
                  <span className="font-body text-sm text-ink-muted text-center">
                    {item.duration ?? '—'}
                  </span>

                  {/* Price */}
                  <div className="text-right">
                    <span className="font-display text-lg text-charcoal-800">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                </div>
              ))}

              {/* Table footer note */}
              <div className="bg-cream-warm px-6 py-4 border-t border-cream-dark">
                <p className="font-body text-xs text-ink-muted">
                  * Цены указаны в рублях. Стоимость может варьироваться в зависимости от длины волос, сложности работы и используемых материалов.
                </p>
              </div>
            </div>
          ) : (
            <p className="font-body text-sm text-ink-muted">
              Прайс-лист обновляется. Уточняйте цены у администратора.
            </p>
          )}

          {/* Bottom action strip */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-cream-warm border border-cream-dark">
            <div>
              <p className="font-body text-sm font-medium text-charcoal-800">
                Не нашли нужную услугу?
              </p>
              <p className="font-body text-xs text-ink-muted mt-1">
                Свяжитесь с нами — подберём подходящий вариант
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+79281731173"
                className="btn-outline py-3 px-5 text-xs"
              >
                Позвонить
              </a>
              <a
                href="https://t.me/d2terminal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-3 px-5 text-xs"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Other services quick links ─────────────────────────────────── */}
      <div className="mt-20 pt-12 border-t border-cream-dark">
        <p className="section-label mb-8 block">Другие услуги</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {services
            .filter((s) => s.id !== service.id)
            .map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                  // Handled by parent tab state — re-render triggers
                }}
                className="flex items-center gap-4 p-5 bg-white border border-cream-dark hover:border-champagne transition-colors duration-300 group text-left"
              >
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <p className="font-body text-sm font-medium text-charcoal-800 group-hover:text-champagne transition-colors duration-300">
                    {s.title}
                  </p>
                  <p className="font-body text-xs text-ink-muted mt-0.5">
                    от {formatPrice(s.priceFrom)}
                  </p>
                </div>
                <svg
                  className="ml-auto w-4 h-4 text-champagne opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
        </div>
      </div>
    </div>
  )
}