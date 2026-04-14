'use client'

import Link from 'next/link'
import { masters } from '@/lib/config'
import StarRating from '@/components/ui/StarRating'

// ─── Masters Section ──────────────────────────────────────────────────────
// Phase B: "Наши мастера" — team profiles with photo, role, specialties.

export default function Masters() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'var(--color-cream)' }}
      id="masters"
    >
      <div className="section-container">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="reveal">
            <span className="section-label block mb-4">Команда</span>
            <div className="divider mb-6" />
            <h2 className="font-display text-h2 text-charcoal-800">
              Наши мастера
            </h2>
            <p className="font-body text-sm text-ink-secondary mt-3 max-w-md leading-relaxed">
              Опытные специалисты с подтверждённой квалификацией.
              Каждый мастер — профессионал своего дела.
            </p>
          </div>
          <div className="reveal">
            <Link href="/booking" className="btn-outline">
              Выбрать мастера
            </Link>
          </div>
        </div>

        {/* ── Master cards grid ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {masters.map((master, i) => (
            <div
              key={master.id}
              className="reveal group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="overflow-hidden transition-all duration-500 border border-cream-dark bg-white hover:-translate-y-1"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
              >
                {/* Photo */}
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: '3 / 4' }}
                >
                  <img
                    src={master.image}
                    alt={master.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    width={400}
                    height={533}
                    loading="lazy"
                  />

                  {/* Gradient overlay at bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-24"
                    style={{
                      background: 'linear-gradient(to top, rgba(26,26,26,0.7), transparent)',
                    }}
                  />

                  {/* Experience badge */}
                  <div
                    className="absolute top-3 left-3 font-body text-[9px] font-medium tracking-widest uppercase px-2.5 py-1"
                    style={{
                      background: 'var(--color-champagne)',
                      color: 'var(--color-charcoal-900)',
                    }}
                  >
                    {master.experience}
                  </div>

                  {/* Rating overlay at bottom */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                    <StarRating rating={Math.round(master.rating)} size="sm" />
                    <span
                      className="font-body text-xs"
                      style={{ color: 'rgba(250,248,245,0.8)' }}
                    >
                      {master.rating} ({master.reviewCount})
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-display text-lg text-charcoal-800 leading-tight mb-1">
                    {master.name}
                  </h3>
                  <p
                    className="font-body text-xs font-medium tracking-widest uppercase mb-4"
                    style={{ color: 'var(--color-champagne)' }}
                  >
                    {master.role}
                  </p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {master.specialties.map(spec => (
                      <span
                        key={spec}
                        className="font-body text-[10px] px-2.5 py-1"
                        style={{
                          background: 'var(--color-cream-warm)',
                          color: 'var(--color-ink-secondary)',
                          border: '1px solid var(--color-cream-dark)',
                        }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Book with this master */}
                  <Link
                    href={`/booking?service=${master.specialties[0]}`}
                    className="w-full block text-center font-body text-[10px] font-medium tracking-widest uppercase py-3 transition-all duration-300 border border-charcoal-800 text-charcoal-800 hover:bg-charcoal-800 hover:text-cream"
                  >
                    Записаться
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}