import type { Metadata } from 'next';
import ProjectsContent from './projects-content';

export const metadata: Metadata = {
  title: 'Projetos | Mandalla Arborismo em Piracaia',
  description: 'Veja nosso portfólio de execução: poda em altura, manejo vegetal, reforço estrutural e acesso por corda em Piracaia, Atibaia e região.',
  openGraph: {
    title: 'Portfólio de Execução - Mandalla Arborismo',
    description: 'Conheça nossos trabalhos mais desafiadores onde técnica e segurança se encontram para entregar resultados impecáveis.',
    type: 'website',
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
