export const seoConfig = {
  siteName: 'Junaidh Haneefa Portfolio',
  siteUrl: 'https://junaidh.me',
  defaultTitle: 'Junaidh Haneefa | Full Stack Developer & Flutter Specialist',
  defaultDescription: 'Junaidh Haneefa is an experienced Full Stack Developer specializing in Flutter, Kotlin, and cross-platform mobile development. Currently pursuing MSc in Computer Science at Griffith College Dublin and open to full-stack and mobile opportunities. View portfolio, projects, and contact information.',
  defaultKeywords: [
    'Junaidh Haneefa',
    'junaidh haneefa',
    'Junaidh Haneefa developer',
    'Junaidh Haneefa portfolio',
    'Junaidh Haneefa Flutter developer',
    'Full Stack Developer',
    'Flutter Developer',
    'Mobile App Development',
    'Kotlin Developer',
    'React Developer',
    'Next.js Developer',
    'MERN Stack Developer',
    'TypeScript Developer',
    'Web Development',
    'Cross-platform Development',
    'Dublin Developer',
    'Ireland Developer',
    'Remote Developer',
    'AI/ML',
    'Machine Learning',
    'Explainable AI',
    'RAG',
    'Computer Science',
    'Software Engineer'
  ],
  author: 'Junaidh Haneefa Muhammedhaneefa',
  socialMedia: {
    linkedin: 'https://www.linkedin.com/in/junaidhhaneefa',
    github: 'https://github.com/junaidh-junu',
    email: 'junaidhhaneef.m@gmail.com'
  },
  location: {
    city: 'Dublin',
    country: 'Ireland'
  },
  image: '/images/og-image.png',
  twitterHandle: '@junaidhhaneefa',
};

export const structuredData = {
  person: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Junaidh Haneefa Muhammedhaneefa',
    alternateName: ['Junaidh Haneefa', 'junaidh haneefa', 'Junaidh Haneefa Muhammedhaneefa'],
    givenName: 'Junaidh',
    familyName: 'Haneefa',
    additionalName: 'Muhammedhaneefa',
    jobTitle: ['Full Stack Developer', 'Flutter Developer', 'Mobile App Developer', 'Team Lead'],
    description: 'Junaidh Haneefa is an experienced Full Stack Developer specializing in Flutter, Kotlin, and cross-platform mobile development. Currently pursuing MSc in Computer Science at Griffith College Dublin and open to full-stack and mobile opportunities.',
    url: seoConfig.siteUrl,
    email: seoConfig.socialMedia.email,
    image: `${seoConfig.siteUrl}/images/profile.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: seoConfig.location.city,
      addressCountry: seoConfig.location.country
    },
    worksFor: {
      '@type': 'Organization',
      name: 'New Leaf School For Quran And English',
      jobTitle: 'IT Coordinator'
    },
    seeks: {
      '@type': 'JobPosting',
      title: 'Full Stack Developer',
      jobLocationType: 'TELECOMMUTE',
      employmentType: 'FULL_TIME'
    },
    sameAs: [
      seoConfig.socialMedia.linkedin,
      seoConfig.socialMedia.github
    ],
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Griffith College Dublin',
        location: 'Dublin, Ireland'
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'APJ Abdul Kalam Technological University',
        location: 'Kerala, India'
      }
    ],
    knowsAbout: [
      'Flutter Development',
      'Mobile App Development',
      'Full Stack Development',
      'MERN Stack',
      'Kotlin',
      'Dart',
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'TypeScript',
      'JavaScript',
      'MongoDB',
      'PostgreSQL',
      'Firebase',
      'Supabase',
      'Docker',
      'DigitalOcean',
      'GitHub Actions',
      'REST APIs',
      'Cross-platform Development',
      'DevOps',
      'Cloud Infrastructure',
      'Machine Learning',
      'Explainable AI',
      'XGBoost',
      'SHAP',
      'RAG',
      'Geospatial ML'
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Anti Theft Flooring Mat System Using IOT',
        credentialCategory: 'Research Publication',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Journal of Electronics and Informatics'
        },
        identifier: 'DOI: 10.36548/jei.2024.1.004',
        dateCreated: '2024-01-01'
      }
    ]
  },
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.defaultDescription,
    author: {
      '@type': 'Person',
      name: seoConfig.author
    }
  },
  portfolio: {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    mainEntity: {
      '@type': 'Person',
      name: seoConfig.author
    }
  }
};
