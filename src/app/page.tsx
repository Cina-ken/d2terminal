import type { Metadata } from 'next'
import SiteLayout from '@/components/layout/SiteLayout'
import Hero from '@/components/sections/Hero'
import ServicesPreview from '@/components/sections/ServicesPreview'
import Benefits from '@/components/sections/Benefits'
import Testimonials from '@/components/sections/Testimonials'
import CtaBanner from '@/components/sections/CtaBanner'

// ─── Page Metadata ────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'D2 Terminal — Салон красоты в Ростове-на-Дону',
  description:
    'Премиальный салон красоты D2 Terminal. Стрижки, маникюр, педикюр, массаж и эпиляция. Онлайн-запись за 1 минуту. Ежедневно 10:00–22:00.',
}

// ─── Homepage ─────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <SiteLayout>
      {/* 1. Hero — full screen, salon name, tagline, CTA */}
      <Hero />

      {/* 2. Services preview — 4 cards with price */}
      <ServicesPreview />

      {/* 3. Benefits — why choose D2 Terminal */}
      <Benefits />

      {/* 4. Testimonials — 6 client reviews */}
      <Testimonials />

      {/* 5. Final CTA banner — book now */}
      <CtaBanner />
    </SiteLayout>
  )
}