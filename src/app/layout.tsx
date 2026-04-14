
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { siteConfig } from '@/lib/config'

// ─── Metadata — Phase D SEO Upgrade ──────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default:  `${siteConfig.name} — Салон красоты в Ростове-на-Дону`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'салон красоты Ростов-на-Дону',
    'маникюр Ростов',
    'стрижки Ростов-на-Дону',
    'массаж Ростов-на-Дону',
    'эпиляция шугаринг Ростов',
    'педикюр Ростов',
    'D2 Terminal салон',
    'онлайн запись салон красоты Ростов',
    'парикмахерская Ростов-на-Дону',
    '2-я Краснодарская салон красоты',
  ],
  authors:  [{ name: siteConfig.name }],
  creator:  siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { telephone: true, email: false, address: true },

  // Open Graph — for social sharing
  openGraph: {
    type:        'website',
    locale:      'ru_RU',
    url:         'https://d2terminal.vercel.app',
    title:       `${siteConfig.name} — Салон красоты в Ростове-на-Дону`,
    description: siteConfig.description,
    siteName:    siteConfig.name,
    images: [
      {
        url:    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=630&q=80&auto=format&fit=crop',
        width:  1200,
        height: 630,
        alt:    `${siteConfig.name} — Салон красоты`,
      },
    ],
  },

  // Twitter card
  twitter: {
    card:        'summary_large_image',
    title:       `${siteConfig.name} — Салон красоты`,
    description: siteConfig.description,
    images:      ['https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=630&q=80&auto=format&fit=crop'],
  },

  robots: {
    index:          true,
    follow:         true,
    googleBot: {
      index:             true,
      follow:            true,
      'max-image-preview':  'large',
      'max-snippet':        -1,
    },
  },

  // Canonical
  alternates: {
    canonical: 'https://d2terminal.vercel.app',
  },
}

export const viewport: Viewport = {
  width:         'device-width',
  initialScale:  1,
  themeColor:    '#1a1a1a',
}

// ─── Root Layout ──────────────────────────────────────────────────────────

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning data-scroll-behavior="smooth" translate="no">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* ── LocalBusiness Structured Data (JSON-LD) ────────────────────
            Helps Google show salon info directly in search results:
            address, hours, phone, rating.
        ──────────────────────────────────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type':    'BeautySalon',
              name:       siteConfig.name,
              description: siteConfig.description,
              url:        'https://d2terminal.vercel.app',
              telephone:  siteConfig.phone,
              address: {
                '@type':           'PostalAddress',
                streetAddress:     '2-я Краснодарская ул., 135',
                addressLocality:   'Ростов-на-Дону',
                addressRegion:     'Ростовская область',
                postalCode:        '344000',
                addressCountry:    'RU',
              },
              geo: {
                '@type':    'GeoCoordinates',
                latitude:   47.2035,
                longitude:  39.6346,
              },
              openingHoursSpecification: [
                {
                  '@type':    'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday','Tuesday','Wednesday','Thursday',
                    'Friday','Saturday','Sunday',
                  ],
                  opens:  '10:00',
                  closes: '22:00',
                },
              ],
              aggregateRating: {
                '@type':       'AggregateRating',
                ratingValue:   '4.9',
                reviewCount:   '64',
                bestRating:    '5',
                worstRating:   '1',
              },
              priceRange: '₽₽',
              servesCuisine: [],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name:    'Услуги салона красоты',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Стрижки и укладки' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Маникюр и педикюр' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Массаж'            } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Эпиляция'          } },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-body bg-cream text-ink-primary antialiased">
        {children}
      </body>
    </html>
  )
}