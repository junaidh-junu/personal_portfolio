import { education, languages, person, research } from '../data/site';

/**
 * Search and sharing metadata. The site is served from the www host (the bare
 * domain redirects to it), so every absolute URL here uses www.
 * The static tags in index.html must match `title` and `description`.
 */
export const seo = {
  siteUrl: 'https://www.junaidh.me',
  siteName: 'Junaidh Haneefa',
  title: 'Junaidh Haneefa | Full-stack and mobile developer',
  description:
    'Junaidh Haneefa is a full-stack and mobile developer in Dublin. React, Node, Flutter and Kotlin, with production apps serving 30,000+ users. MSc Computing, Griffith College Dublin, 2026.',
  image: '/images/og-image.png',
};

const id = (name: string) => `${seo.siteUrl}/#${name}`;

/** One linked JSON-LD graph: the site, this profile page, the person and the published paper. */
export function jsonLd(dateModified: string) {
  const paper = research.find((r) => r.href);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': id('website'),
        url: `${seo.siteUrl}/`,
        name: seo.siteName,
        description: seo.description,
        inLanguage: 'en-IE',
        publisher: { '@id': id('person') },
      },
      {
        '@type': 'ProfilePage',
        '@id': id('profile'),
        url: `${seo.siteUrl}/`,
        name: seo.title,
        description: seo.description,
        inLanguage: 'en-IE',
        dateModified,
        isPartOf: { '@id': id('website') },
        mainEntity: { '@id': id('person') },
        primaryImageOfPage: `${seo.siteUrl}${seo.image}`,
      },
      {
        '@type': 'Person',
        '@id': id('person'),
        name: person.name,
        alternateName: [person.fullName, 'Junaidh'],
        givenName: 'Junaidh',
        familyName: 'Haneefa',
        jobTitle: person.role,
        description: seo.description,
        url: `${seo.siteUrl}/`,
        image: `${seo.siteUrl}/images/profile.png`,
        email: `mailto:${person.email}`,
        address: { '@type': 'PostalAddress', addressLocality: 'Dublin', addressCountry: 'IE' },
        sameAs: [person.linkedin, person.github],
        knowsLanguage: languages.replace(' and ', ', ').split(', '),
        worksFor: { '@type': 'Organization', name: 'New Leaf School for Quran and English' },
        alumniOf: education.map((school) => ({ '@type': 'CollegeOrUniversity', name: school.institution })),
        knowsAbout: [
          'Full-stack web development', 'Mobile app development', 'React', 'Next.js', 'TypeScript', 'Node.js',
          'Flutter', 'Dart', 'Kotlin', 'Jetpack Compose', 'PostgreSQL', 'Supabase', 'MongoDB', 'Docker',
          'GitHub Actions', 'Machine learning', 'Explainable AI', 'Retrieval-augmented generation', 'Geospatial analysis',
        ],
      },
      ...(paper
        ? [{
            '@type': 'ScholarlyArticle',
            '@id': id('paper'),
            headline: paper.title,
            author: { '@id': id('person') },
            datePublished: '2024-01',
            isPartOf: { '@type': 'Periodical', name: 'Journal of Electronics and Informatics' },
            sameAs: paper.href,
          }]
        : []),
    ],
  };
}
