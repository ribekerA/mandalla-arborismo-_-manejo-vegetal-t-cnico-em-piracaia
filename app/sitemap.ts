import type { MetadataRoute } from 'next';

const BASE_URL = 'https://mandallaarborismo.com.br';

const services = [
  'poda-em-altura',
  'manejo-vegetal',
  'controle-de-pragas',
  'reforco-estrutural',
  'revitalizacao',
  'manutencao',
  'acesso-por-corda',
  'avaliacao-de-risco',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = services.map((slug) => ({
    url: `${BASE_URL}/servicos/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projetos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...servicePages,
  ];
}
