import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesData } from '@/lib/services-data';
import ServiceContent from './service-content';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// Pre-generate all service pages at build time (SSG)
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

// Dynamic metadata for each service page
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: 'Serviço não encontrado',
    };
  }

  return {
    title: `${service.title} | Mandalla Arborismo`,
    description: service.description,
    openGraph: {
      title: `${service.title} - Mandalla Arborismo`,
      description: service.subtitle,
      type: 'website',
      images: [
        {
          url: service.image,
          width: 1200,
          height: 800,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return <ServiceContent slug={slug} />;
}
