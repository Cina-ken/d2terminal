import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollReveal from '@/components/ui/ScrollReveal'
import FloatingActions from '@/components/ui/FloatingActions'

// ─── Main Site Layout ─────────────────────────────────────────────────────

interface SiteLayoutProps {
  children: React.ReactNode
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
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