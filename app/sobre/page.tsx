import type { Metadata } from 'next';
import AboutContent from './about-content';

export const metadata: Metadata = {
  title: 'Sobre a Mandalla | Arborismo Técnico em Piracaia',
  description: 'Conheça a história, missão e valores da Mandalla Arborismo. Especialistas certificados NR-35 em manejo vegetal técnico e poda em altura em Piracaia e região.',
  openGraph: {
    title: 'Sobre a Mandalla Arborismo',
    description: 'Fundada em Piracaia, a Mandalla Arborismo une técnica rigorosa, segurança absoluta e respeito à biologia das árvores.',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
