import type { Metadata, Viewport } from 'next'
import './globals.css'
import { siteConfig } from '@/lib/config'

// ─── Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default:  `${siteConfig.name} — Салон красоты в Ростове-на-Дону`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'салон красоты Ростов-на-Дону',
    'маникюр Ростов',
    'стрижки Ростов',
    'массаж Ростов-на-Дону',
    'эпиляция шугаринг Ростов',
    'D2 Terminal',
    'онлайн запись салон красоты',
  ],
  authors:  [{ name: siteConfig.name }],
  creator:  siteConfig.name,
  openGraph: {
    type:        'website',
    locale:      'ru_RU',
    title:       `${siteConfig.name} — Салон красоты`,
    description: siteConfig.description,
    siteName:    siteConfig.name,
  },
  robots: {
    index:  true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width:         'device-width',
  initialScale:  1,
  themeColor:    '#1a1a1a',
}

// ─── Root Layout ──────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning data-scroll-behavior="smooth" translate="no">
      <head>
        {/* Google Fonts preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-cream text-ink-primary antialiased">

        {/* Page content — Navbar and Footer are added per-page layout */}
        {children}
      </body>
    </html>
  )
}