
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FloatingActions from '@/components/ui/FloatingActions'
import PromoBanner from '@/components/ui/PromoBanner'

// ─── Main Site Layout ─────────────────────────────────────────────────────
// Phase D: PromoBanner added above Navbar.

interface SiteLayoutProps {
  children: React.ReactNode
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      {/* Promo announcement strip — dismissible */}
      <PromoBanner />
      <Navbar />
      {/* pb-20 md:pb-0 — room for mobile sticky bar */}
      <main className="min-h-screen pb-20 md:pb-0">
        {children}
      </main>
      <Footer />
      <ScrollReveal />
      <FloatingActions />
    </>
  )
}