
import type { Metadata } from 'next'
import SiteLayout from '@/components/layout/SiteLayout'
import Hero from '@/components/sections/Hero'
import ServicesPreview from '@/components/sections/ServicesPreview'
import Benefits from '@/components/sections/Benefits'
import WorksGallery from '@/components/sections/WorksGallery'
import Masters from '@/components/sections/Masters'
import WhyOnline from '@/components/sections/WhyOnline'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'D2 Terminal — Салон красоты в Ростове-на-Дону | Запись онлайн',
  description:
    'Салон красоты D2 Terminal в Ростове-на-Дону. Стрижки от 700₽, маникюр от 800₽, массаж, эпиляция. Онлайн-запись за 1 минуту. Ежедневно 10:00–22:00.',
  alternates: { canonical: 'https://d2terminal.vercel.app' },
}

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <ServicesPreview />
      <Benefits />
      <WorksGallery />
      <Masters />
      <WhyOnline />
      <Testimonials />
      <FAQ />
      <CtaBanner />
    </SiteLayout>
  )
}