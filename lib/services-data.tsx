import { Zap, TreePine, Bug, Construction, Clock, CheckCircle2, Ruler, AlertTriangle, LucideIcon } from 'lucide-react';

export interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  technicalDetails: string;
  icon: LucideIcon;
  image: string;
}

export const servicesData: Record<string, ServiceData> = {
  'poda-em-altura': {
    title: "Poda em Altura",
    subtitle: "Precisão e Segurança em Grandes Alturas",
    description: "A poda em altura é uma intervenção técnica essencial para garantir a segurança de pessoas e estruturas. Na Mandalla, utilizamos técnicas avançadas de acesso por corda para alcançar os pontos mais críticos com o mínimo de impacto.",
    fullDescription: "Nossa abordagem para poda em altura vai além do simples corte. Realizamos uma análise biomecânica completa para identificar galhos com risco de ruptura, interferências em fiações elétricas ou telhados, e necessidade de clareamento para melhor entrada de luz. Todo o trabalho é executado seguindo rigorosamente a norma NR-35.",
    benefits: [
      "Prevenção de quedas acidentais de galhos",
      "Melhoria da saúde e estética da árvore",
      "Segurança para fiações e telhados",
      "Execução rápida e limpa em locais confinados"
    ],
    technicalDetails: "Utilizamos equipamentos de corte de alta performance e técnicas de rigging (sistema de polias e cordas) para descer galhos pesados de forma controlada, evitando danos ao solo ou estruturas abaixo.",
    icon: Zap,
    image: "https://images.pexels.com/photos/30387769/pexels-photo-30387769.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
  },
  'manejo-vegetal': {
    title: "Manejo Vegetal",
    subtitle: "Conformidade Ambiental e Técnica",
    description: "O manejo vegetal técnico envolve a supressão (corte) ou transplante de espécimes arbóreos, sempre pautado pela legislação ambiental vigente e laudos técnicos precisos.",
    fullDescription: "Seja para a viabilização de projetos arquitetônicos ou por necessidade de segurança, o manejo vegetal deve ser executado por especialistas. Realizamos o inventário arbóreo, auxiliamos na obtenção de autorizações junto à prefeitura/CETESB e executamos o serviço com destreza técnica.",
    benefits: [
      "Assessoria completa em licenciamento ambiental",
      "Execução de supressão com segurança máxima",
      "Transplante de árvores com alta taxa de sobrevivência",
      "Destinação correta de resíduos vegetais"
    ],
    technicalDetails: "Trabalhamos com motosserras de última geração e técnicas de corte segmentado, onde a árvore é removida em partes de cima para baixo, garantindo controle total da operação.",
    icon: TreePine,
    image: "https://images.pexels.com/photos/7812847/pexels-photo-7812847.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
  },
  'controle-de-pragas': {
    title: "Controle de Pragas",
    subtitle: "Saúde e Longevidade Fitossanitária",
    description: "Tratamentos especializados para combater cupins, fungos, brocas e outras pragas que comprometem a integridade estrutural e a vida da árvore.",
    fullDescription: "Muitas vezes o perigo está escondido. O controle fitossanitário da Mandalla utiliza diagnósticos precisos para identificar patógenos antes que causem danos irreversíveis. Aplicamos métodos de tratamento que respeitam a biologia da árvore e o meio ambiente.",
    benefits: [
      "Eliminação de focos de cupins e brocas",
      "Tratamento de doenças fúngicas",
      "Fortalecimento do sistema imunológico da planta",
      "Aumento da vida útil do patrimônio arbóreo"
    ],
    technicalDetails: "Utilizamos injeções sistêmicas e tratamentos de solo que garantem a absorção dos nutrientes e defensivos de forma eficiente, sem dispersão desnecessária no ambiente.",
    icon: Bug,
    image: "https://images.pexels.com/photos/8821016/pexels-photo-8821016.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
  },
  'reforco-estrutural': {
    title: "Reforço Estrutural",
    subtitle: "Engenharia Aplicada à Preservação",
    description: "Cablagem (bracing) e escoramento técnico para árvores com bifurcações frágeis ou inclinações perigosas, evitando a necessidade de corte.",
    fullDescription: "Árvores históricas ou de grande valor afetivo muitas vezes apresentam falhas estruturais. Em vez de remover, a Mandalla aplica soluções de engenharia como a instalação de cabos de aço flexíveis ou escoras dinâmicas que permitem o movimento natural da árvore enquanto garantem sua estabilidade.",
    benefits: [
      "Preservação de árvores condenadas por terceiros",
      "Redução drástica do risco de queda",
      "Manutenção da estética natural da copa",
      "Solução de longo prazo para inclinações críticas"
    ],
    technicalDetails: "Seguimos padrões internacionais de arboricultura para instalação de sistemas de sustentação, garantindo que os materiais utilizados não firam o câmbio da árvore.",
    icon: Construction,
    image: "https://images.pexels.com/photos/35606516/pexels-photo-35606516.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
  },
  'revitalizacao': {
    title: "Revitalização",
    subtitle: "Recuperação Biológica e Nutricional",
    description: "Programas de nutrição profunda e descompactação de solo para árvores em declínio ou estresse urbano.",
    fullDescription: "Árvores em ambientes urbanos ou jardins compactados sofrem com a falta de nutrientes e oxigênio nas raízes. Nosso serviço de revitalização foca na base: o solo. Através de adubação orgânica técnica e técnicas de aeração, devolvemos o vigor à planta.",
    benefits: [
      "Recuperação de folhagem e floração",
      "Melhoria da absorção de água e nutrientes",
      "Combate ao estresse hídrico e nutricional",
      "Aumento da resistência natural a pragas"
    ],
    technicalDetails: "Utilizamos ferramentas de ar comprimido para descompactar o solo sem ferir as raízes finas, permitindo a introdução de microrganismos benéficos e matéria orgânica.",
    icon: Clock,
    image: "https://images.pexels.com/photos/15163244/pexels-photo-15163244.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
  },
  'manutencao': {
    title: "Manutenção",
    subtitle: "Gestão Preventiva de Patrimônio Verde",
    description: "Acompanhamento periódico e vistorias regulares para garantir que sua propriedade esteja sempre segura e suas árvores saudáveis.",
    fullDescription: "A melhor forma de evitar acidentes é a prevenção. Nosso plano de manutenção inclui visitas programadas para podas leves de limpeza, monitoramento fitossanitário e ajustes em sistemas de reforço, garantindo tranquilidade total para o proprietário.",
    benefits: [
      "Redução de custos com intervenções emergenciais",
      "Segurança constante para áreas de circulação",
      "Beleza estética mantida durante todo o ano",
      "Relatórios técnicos de evolução da saúde vegetal"
    ],
    technicalDetails: "Estabelecemos um cronograma personalizado baseado na espécie e localização das árvores, antecipando problemas antes que se tornem riscos reais.",
    icon: CheckCircle2,
    image: "https://images.pexels.com/photos/18355077/pexels-photo-18355077.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
  },
  'acesso-por-corda': {
    title: "Acesso por Corda",
    subtitle: "Técnica de Elite para Locais Impossíveis",
    description: "Utilização de técnicas de alpinismo industrial e arboricultura moderna para alcançar copas onde máquinas não chegam.",
    fullDescription: "Muitas árvores estão localizadas em encostas, fundos de vale ou próximas a piscinas e fiações onde o uso de cestos aéreos é impossível. A Mandalla é especialista em acesso por corda, permitindo uma movimentação tridimensional na copa com total segurança e agilidade.",
    benefits: [
      "Acesso a qualquer local sem uso de máquinas pesadas",
      "Mínimo impacto no jardim ou estruturas ao redor",
      "Maior precisão nos cortes por proximidade do técnico",
      "Agilidade superior em terrenos acidentados"
    ],
    technicalDetails: "Nossa equipe possui certificação NR-35 e utiliza sistemas de cordas duplas (DRT/SRT) que garantem redundância de segurança em todas as etapas da subida e descida.",
    icon: Ruler,
    image: "https://images.pexels.com/photos/2905995/pexels-photo-2905995.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
  },
  'avaliacao-de-risco': {
    title: "Avaliação de Risco Arbóreo",
    subtitle: "Diagnóstico Técnico Antes que o Problema Aconteça",
    description: "Vistoria técnica especializada que identifica falhas estruturais, inclinações críticas, apodrecimento interno e risco real de queda. Laudo com recomendação clara de intervenção.",
    fullDescription: "A avaliação de risco arbóreo é a base de qualquer decisão técnica responsável. Antes de indicar poda, supressão ou reforço estrutural, nossos especialistas realizam inspeção visual detalhada, análise biomecânica e documentação fotográfica. O laudo técnico gerado fundamenta a tomada de decisão e pode ser usado junto a prefeituras e seguradoras.",
    benefits: [
      "Identificação precoce de risco de queda",
      "Laudo técnico para uso junto a órgãos ambientais",
      "Base para decisão de poda, supressão ou preservação",
      "Documentação para fins de seguro e responsabilidade civil"
    ],
    technicalDetails: "A avaliação segue metodologia TRAQ (Tree Risk Assessment Qualification) adaptada, com análise de zona de destino, carga de vento, histórico de falhas e condição do sistema radicular.",
    icon: AlertTriangle,
    image: "https://images.pexels.com/photos/6218318/pexels-photo-6218318.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
  }
};

