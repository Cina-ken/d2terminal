'use client'

import { useState } from 'react'
import Link from 'next/link'
import { galleryItems, galleryCategories } from '@/lib/config'
import type { WorkCategory } from '@/types'

// ─── WorksGallery ─────────────────────────────────────────────────────────
// Phase B: "Наши работы" section.
// Filterable grid of work photos with category tabs and hover overlay.

export default function WorksGallery() {
  const [active, setActive] = useState<WorkCategory>('all')

  const filtered = active === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === active)

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'var(--color-charcoal-900)' }}
      id="works"
    >
      {/* Subtle gold grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
        }}
      />

      <div className="section-container relative z-10">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-label block mb-4">Портфолио</span>
            <div className="divider mb-6" />
            <h2
              className="font-display text-h2"
              style={{ color: 'var(--color-cream)' }}
            >
              Наши работы
            </h2>
            <p
              className="font-body text-sm mt-3 max-w-md"
              style={{ color: 'rgba(250,248,245,0.5)' }}
            >
              Реальные результаты наших мастеров. Каждая работа — это забота о вашей красоте.
            </p>
          </div>

          {/* Instagram link */}
          <a
            href="https://www.instagram.com/d2terminal/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-xs font-medium tracking-widest uppercase shrink-0 transition-colors duration-300 text-[rgba(250,248,245,0.4)] hover:text-champagne"
          >
            <InstagramIcon />
            Смотреть в Instagram
          </a>
        </div>

        {/* ── Filter tabs ──────────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {galleryCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id as WorkCategory)}
              className="font-body text-xs font-medium tracking-widest uppercase px-5 py-2.5 transition-all duration-300"
              style={{
                background: active === cat.id
                  ? 'var(--color-champagne)'
                  : 'rgba(255,255,255,0.04)',
                color: active === cat.id
                  ? 'var(--color-charcoal-900)'
                  : 'rgba(250,248,245,0.5)',
                border: `1px solid ${active === cat.id
                  ? 'var(--color-champagne)'
                  : 'rgba(250,248,245,0.1)'}`,
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── Photo grid ───────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="relative overflow-hidden group cursor-pointer"
              style={{
                aspectRatio: i % 5 === 0 ? '1 / 1.3' : '1 / 1',
                gridRow: i % 5 === 0 ? 'span 1' : 'span 1',
              }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={600}
                height={600}
                loading="lazy"
              />

              {/* Dark overlay — always slightly visible */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(to top, rgba(10,8,6,0.85) 0%, rgba(10,8,6,0.1) 60%, transparent 100%)',
                  opacity: 0.7,
                }}
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-400 opacity-0 group-hover:opacity-100"
                style={{ background: 'rgba(10,8,6,0.5)' }}
              />

              {/* Content — visible at bottom always, more on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                <p
                  className="font-display text-base leading-tight mb-1"
                  style={{ color: 'var(--color-cream)' }}
                >
                  {item.title}
                </p>
                <p
                  className="font-body text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ color: 'rgba(250,248,245,0.6)', transitionDelay: '80ms' }}
                >
                  {item.description} · Мастер {item.master}
                </p>
              </div>

              {/* Category tag — top right */}
              <div
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              >
                <span
                  className="font-body text-[9px] font-medium tracking-widest uppercase px-2 py-1"
                  style={{
                    background: 'var(--color-champagne)',
                    color: 'var(--color-charcoal-900)',
                  }}
                >
                  {galleryCategories.find(c => c.id === item.category)?.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ───────────────────────────────────────────────── */}
        <div
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 reveal"
          style={{ borderTop: '1px solid rgba(250,248,245,0.08)' }}
        >
          <p
            className="font-body text-sm text-center sm:text-left"
            style={{ color: 'rgba(250,248,245,0.4)' }}
          >
            Хотите такой же результат?
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/d2terminal/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs font-medium tracking-widest uppercase px-6 py-3 transition-all duration-300"
              style={{
                border: '1px solid rgba(250,248,245,0.2)',
                color: 'rgba(250,248,245,0.6)',
              }}
            >
              Все работы в Instagram
            </a>
            <Link
              href="/booking"
              className="btn-accent"
              style={{ boxShadow: '0 4px 20px rgba(201,169,110,0.3)' }}
            >
              Записаться
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}