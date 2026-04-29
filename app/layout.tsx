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
  metadataBase: new URL('https://mandallaarborismo.com.br'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Mandalla Arborismo | Poda em Altura e Arborismo Técnico em Piracaia',
    template: '%s | Mandalla Arborismo',
  },
  description:
    'Empresa de arborismo técnico em Piracaia e região. Poda em altura, supressão vegetal, avaliação de risco arbóreo e manejo com equipe NR-35 certificada, seguro de responsabilidade civil e EPIs de qualidade.',
  keywords: [
    'arborismo',
    'arborismo técnico',
    'poda em altura',
    'poda de árvores',
    'supressão vegetal',
    'manejo arbóreo',
    'avaliação de risco de árvores',
    'empresa de arborismo',
    'arborismo com segurança',
    'poda técnica',
    'acesso por corda',
    'arboricultura',
    'Piracaia',
    'Atibaia',
    'Bragança Paulista',
    'NR-35',
    'reforço estrutural árvores',
    'laudo técnico arborismo',
  ],
  authors: [{ name: 'Mandalla Arborismo' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Mandalla Arborismo',
    title: 'Mandalla Arborismo | Poda em Altura e Arborismo Técnico',
    description:
      'Poda em altura, supressão vegetal e avaliação de risco arbóreo com equipe NR-35 certificada em Piracaia, Atibaia e região.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Mandalla Arborismo — Poda em Altura e Manejo Vegetal Técnico',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mandalla Arborismo | Poda em Altura e Arborismo Técnico',
    description:
      'Empresa de arborismo técnico em Piracaia. Poda em altura, supressão vegetal e avaliação de risco com equipe NR-35 certificada.',
    images: ['https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=1200&h=630'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mandalla Arborismo",
    "image": "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800&h=1000",
    "description": "Empresa de arborismo técnico em Piracaia. Poda em altura, supressão vegetal, avaliação de risco arbóreo e manejo com equipe NR-35 certificada.",
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
    "url": "https://mandallaarborismo.com.br",
    "telephone": "+5511911113553",
    "areaServed": [
      {"@type": "City", "name": "Piracaia"},
      {"@type": "City", "name": "Atibaia"},
      {"@type": "City", "name": "Bragança Paulista"},
      {"@type": "City", "name": "Joanópolis"}
    ],
    "knowsAbout": ["arborismo", "poda em altura", "supressão vegetal", "manejo arbóreo", "avaliação de risco arbóreo", "acesso por corda"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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
