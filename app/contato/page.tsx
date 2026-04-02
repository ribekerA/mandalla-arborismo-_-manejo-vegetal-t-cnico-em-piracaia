import type { Metadata } from 'next';
import ContactContent from './contact-content';

export const metadata: Metadata = {
  title: 'Contato | Mandalla Arborismo em Piracaia',
  description: 'Entre em contato com a Mandalla Arborismo. WhatsApp, Instagram e localização. Atendemos Piracaia, Atibaia, Bragança Paulista e região.',
  openGraph: {
    title: 'Contato - Mandalla Arborismo',
    description: 'Fale com um especialista em manejo vegetal. Resposta em até 60 minutos via WhatsApp.',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
