export default function sitemap() {
  const baseUrl = 'https://www.tasglobals.com';
  
  const routes = [
      '',
      '/about',
      '/contact',
      '/faq',
      '/partner-airlines',
      '/services',
      '/team',
      '/useful-tools',
      '/why-choose-us'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
