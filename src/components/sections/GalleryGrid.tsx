'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { galleryItems, galleryCategories, siteConfig } from '@/lib/config'
import type { WorkCategory } from '@/types'

// ─── GalleryGrid ──────────────────────────────────────────────────────────
// Phase: Dedicated Gallery page component.
// Features: filter tabs, responsive 3-col grid, hover zoom + overlay,
// category badge, master name, Instagram CTA strip.

export default function GalleryGrid() {
  const [active, setActive] = useState<WorkCategory>('all')

  const filtered = useMemo(() =>
    active === 'all'
      ? galleryItems
      : galleryItems.filter(item => item.category === active),
    [active]
  )

  const categoryLabel = galleryCategories.find(c => c.id === active)?.label ?? 'Все работы'

  return (
    <section
      className="py-16 lg:py-24"
      style={{ background: 'var(--color-charcoal-900)' }}
    >
      <div className="section-container">

        {/* ── Filter tabs ──────────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-4">
          {galleryCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id as WorkCategory)}
              className="font-body text-xs font-medium tracking-widest uppercase px-5 py-2.5 transition-all duration-300"
              style={{
                background: active === cat.id ? 'var(--color-champagne)' : 'rgba(255,255,255,0.04)',
                color:      active === cat.id ? 'var(--color-charcoal-900)' : 'rgba(250,248,245,0.5)',
                border:     `1px solid ${active === cat.id ? 'var(--color-champagne)' : 'rgba(250,248,245,0.1)'}`,
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Result count */}
        <div className="flex items-center justify-between mb-8">
          <p className="font-body text-xs" style={{ color: 'rgba(250,248,245,0.35)' }}>
            {categoryLabel} — {filtered.length} {getCountLabel(filtered.length)}
          </p>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-xs font-medium tracking-widest uppercase transition-colors duration-300"
            style={{ color: 'rgba(250,248,245,0.4)' }}
          >
            <InstagramIcon />
            Все работы в Instagram
          </a>
        </div>

        {/* ── Photo grid ───────────────────────────────────────────────── */}
        {filtered.length > 0 ? (
          <div className="columns-2 md:columns-3 gap-3 space-y-3">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className="break-inside-avoid relative overflow-hidden group cursor-pointer"
                style={{
                  // Alternate heights for masonry feel
                  aspectRatio: i % 4 === 0 ? '3/4' : i % 3 === 0 ? '4/3' : '1/1',
                  display: 'block',
                }}
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Base gradient — always slightly visible at bottom */}
                <div
                  className="absolute inset-0 transition-opacity duration-400"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,8,6,0.9) 0%, rgba(10,8,6,0.2) 50%, transparent 100%)',
                  }}
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: 'rgba(10,8,6,0.35)' }}
                />

                {/* Category pill — top right */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-1 group-hover:translate-y-0">
                  <span
                    className="font-body text-[9px] font-medium tracking-widest uppercase px-2.5 py-1.5"
                    style={{
                      background: 'var(--color-champagne)',
                      color: 'var(--color-charcoal-900)',
                    }}
                  >
                    {galleryCategories.find(c => c.id === item.category)?.label}
                  </span>
                </div>

                {/* Content — slides up on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-400"
                >
                  <p
                    className="font-display text-lg leading-tight"
                    style={{ color: 'var(--color-cream)' }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="font-body text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ color: 'rgba(250,248,245,0.65)', transitionDelay: '60ms' }}
                  >
                    {item.description}
                  </p>
                  {item.master !== 'D2 Terminal' && (
                    <p
                      className="font-body text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{ color: 'var(--color-champagne)', transitionDelay: '100ms' }}
                    >
                      Мастер: {item.master}
                    </p>
                  )}
                </div>

                {/* Book button — appears on hover */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-400 -translate-y-1 group-hover:translate-y-0">
                  <Link
                    href={`/booking?service=${item.category}`}
                    className="font-body text-[9px] font-medium tracking-widest uppercase px-3 py-1.5 transition-all duration-300"
                    style={{
                      background: 'rgba(10,8,6,0.7)',
                      color: 'rgba(250,248,245,0.8)',
                      border: '1px solid rgba(250,248,245,0.2)',
                      backdropFilter: 'blur(8px)',
                    }}
                    onClick={e => e.stopPropagation()}
                  >
                    Записаться →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-display text-2xl" style={{ color: 'rgba(250,248,245,0.4)' }}>
              Работы не найдены
            </p>
          </div>
        )}

        {/* ── Bottom CTA strip ─────────────────────────────────────────── */}
        <div
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10"
          style={{ borderTop: '1px solid rgba(250,248,245,0.08)' }}
        >
          <div>
            <p className="font-display text-2xl" style={{ color: 'rgba(250,248,245,0.7)' }}>
              Хотите такой же результат?
            </p>
            <p className="font-body text-sm mt-1" style={{ color: 'rgba(250,248,245,0.4)' }}>
              Запишитесь онлайн — подтверждение за 15 минут
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs font-medium tracking-widest uppercase px-6 py-3 transition-all duration-300"
              style={{
                border: '1px solid rgba(250,248,245,0.2)',
                color: 'rgba(250,248,245,0.6)',
              }}
            >
              <span className="flex items-center gap-2">
                <InstagramIcon />
                Все работы в Instagram
              </span>
            </a>
            <Link
              href="/booking"
              className="btn-accent"
              style={{ boxShadow: '0 4px 20px rgba(201,169,110,0.3)' }}
            >
              Записаться онлайн
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Helpers ──────────────────────────────────────────────────────────────

function getCountLabel(n: number): string {
  if (n % 10 === 1 && n % 100 !== 11) return 'работа'
  if ([2,3,4].includes(n % 10) && ![12,13,14].includes(n % 100)) return 'работы'
  return 'работ'
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}