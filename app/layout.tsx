import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: {
    default: 'Mandalla Arborismo | Manejo Vegetal Técnico em Piracaia',
    template: '%s | Mandalla Arborismo',
  },
  description: 'Especialistas em manejo vegetal técnico, poda em altura e arborismo moderno em Piracaia, Atibaia e região. Certificação NR-35 e segurança absoluta.',
  keywords: ['arborismo', 'poda em altura', 'manejo vegetal', 'Piracaia', 'Atibaia', 'NR-35', 'poda de árvores', 'acesso por corda', 'arboricultura'],
  authors: [{ name: 'Mandalla Arborismo' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Mandalla Arborismo',
    title: 'Mandalla Arborismo | Manejo Vegetal Técnico',
    description: 'Ciência aplicada à preservação. Especialistas em arboricultura de grande porte e acesso por corda.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mandalla Manejo Vegetal e Arborismo",
    "image": "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800&h=1000",
    "description": "Especialistas em manejo vegetal técnico e poda em altura em Piracaia.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Piracaia",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.0544,
      "longitude": -46.3586
    },
    "url": "https://arbo.mandalla",
    "telephone": "+5511911113553",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased">{children}</body>
    </html>
  );
}
