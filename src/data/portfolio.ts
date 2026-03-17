import { Experience, Education, Project, Publication, Skill, Certification } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Full-Stack & Mobile Developer',
    company: 'Appetite Studio',
    location: 'Remote',
    period: 'Nov 2025 - Present',
    type: 'Full-time',
    current: true,
    description: [
      'Built the QuantumX landing page and community-maintained database for tracking cryptographic systems vulnerable to quantum attacks, supporting the transition to post-quantum cryptography — built with React and Directus as the backend',
      'Supported the Ente Ward backend migration to Supabase — contributed to database schema design, row-level security policies, and real-time data flows; helped develop and maintain the mobile app for the civic engagement platform serving Kerala constituencies',
      'Built and shipped the Ente Ward admin dashboard for managing ward constituencies, user roles, and civic engagement data',
      'Designed and shipped ToyCar Showroom as a cross-platform Flutter app and web platform with user auth, virtual garage, social features, leaderboards, and peer-to-peer digital asset transfers',
      'Delivered cross-platform mobile apps and web apps in Flutter and Kotlin/Jetpack Compose, handling end-to-end delivery from UI implementation to backend API integration'
    ],
    skills: ['React', 'Node.js', 'Next.js', 'Supabase', 'Flutter', 'Dart', 'Kotlin', 'Jetpack Compose', 'Directus', 'REST APIs']
  },
  {
    id: '2',
    title: 'Team Lead & Full-Stack Developer',
    company: 'D4DX Innovations LLP',
    location: 'Kozhikode, India',
    period: 'Mar 2025 - Oct 2025',
    type: 'Full-time',
    current: false,
    description: [
      'Promoted from Junior Developer to Team Lead within 9 months based on technical delivery and architectural contributions',
      'Led a 12-member cross-functional team shipping 20+ web applications and 5+ mobile apps; orchestrated sprint planning, backlog grooming, code reviews (~10 PRs/week), and release cycles using ClickUp and Notion',
      'Architected the Tafheem ul Quran web platform end-to-end using MERN — React frontend, Express/Node.js REST API, SQL database with auth, custom audio streaming service, and admin CMS, growing to 30,000+ active users',
      'Built and shipped production MERN web applications: admin panels for Thanima Hajj & Umrah and Hira+ — each with role-based access control, CRUD operations, and analytics views',
      'Engineered an internal ERP system using the MERN stack, automating resource allocation and centralizing project tracking and employee management',
      'Provisioned and managed production infrastructure across DigitalOcean, Cloudways, and WHM/cPanel — deployments, SSL, DNS routing, database backups, and server migrations',
      'Implemented GitHub Actions CI/CD pipelines for frontend, backend, and mobile repositories, standardizing deployment workflow across the organization'
    ],
    skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Team Leadership', 'CI/CD Pipeline', 'DigitalOcean', 'Cloudways', 'GitHub Actions', 'Project Management']
  },
  {
    id: '3',
    title: 'Junior Full-Stack Developer',
    company: 'D4DX Innovations LLP',
    location: 'Kozhikode, India',
    period: 'July 2024 - Feb 2025',
    type: 'Full-time',
    current: false,
    description: [
      'Built the Tafheem ul Quran mobile app with audio streaming, prayer times, quizzes, and multi-language support, and assisted in developing the web platform — contributing to 30,000+ active users',
      'Reduced flagship mobile app size by 60% (150MB to 60MB) through asset optimization, code refactoring, and cloud migration of bundled resources, improving user acquisition',
      'Shipped Thanima Hajj & Umrah (GPS pilgrimage guide, offline-first), Zai Toon Kids (educational app with Razorpay subscriptions), Hira Plus (office management), Muhasabah (Islamic education), and Mishkath – JIH Kerala (heritage explorer for Jamaat-e-Islami Kerala)',
      'Implemented a RAG-based AI chatbot for Tafheem ul Quran using Python, enabling context-aware Q&A with vector search and LLM-powered responses over Quran content',
      'Wrote widget and unit tests for Flutter applications to ensure reliability across releases'
    ],
    skills: ['Flutter', 'Dart', 'Python', 'RAG', 'Firebase', 'REST APIs', 'Flutter Testing', 'MVVM']
  },
  {
    id: '4',
    title: 'Flutter Developer',
    company: 'IroHub Infotech Pvt. Ltd.',
    location: 'Ernakulam, Kerala, India',
    period: 'Mar 2023 - Sep 2023',
    type: 'Internship',
    description: [
      'Engineered cross-platform mobile applications using Flutter and Dart over a 6-month period, shipping production-ready UI components and integrating RESTful APIs',
      'Implemented state management patterns with Provider and built reusable component libraries adopted across multiple project teams'
    ],
    skills: ['Flutter', 'Dart', 'Provider', 'REST APIs', 'Git']
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'MSc in Computing Science',
    institution: 'Griffith College Dublin',
    location: 'Dublin, Ireland',
    period: 'Sep 2025 - Oct 2026',
    status: 'Ongoing',
    description: 'Pursuing a Master\'s in Computer Science at Griffith College Dublin, focusing on advanced software engineering, mobile development, and cloud technologies. Coursework covers distributed systems, machine learning, and advanced algorithms.'
  },
  {
    id: '2',
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'APJ Abdul Kalam Technological University',
    location: 'Kerala, India',
    period: 'Sep 2019 - Apr 2024',
    description: 'Completed Bachelor of Technology from Jawaharlal College of Engineering and Technology. Gained strong foundation in computer science fundamentals, software engineering, and mobile application development.'
  }
];

export const projects: Project[] = [
  {
    id: '2',
    title: 'Zai Toon Kids App',
    description: 'Mobile application for children featuring interactive content, animations, and engaging UI. Built with Flutter for cross-platform compatibility.',
    technologies: ['Flutter', 'Dart', 'Directus', 'Provider','REST APIs'],
    date: '2024',
    image: '/images/zai-toon-kids.png',
    category: 'mobile'
  },
  {
    id: '3',
    title: 'Vision 2026',
    description: 'Comprehensive mobile application developed as part of community initiative. Features include event management, notifications, and user engagement tools.',
    technologies: ['Flutter', 'Firebase', 'REST APIs', 'SQLite'],
    date: '2024',
    image: '/images/vision-2026.png',
    category: 'mobile'
  },
  {
    id: '5',
    title: 'Thafheem ul Quran',
    description: 'Islamic educational app providing Quranic content with translation and tafseer. Optimized for smooth performance and elegant UI.',
    technologies: ['Flutter', 'Dart', 'SQLite', 'Provider'],
    date: '2024',
    image: '/images/thafheem-ul-quran.png',
    category: 'mobile'
  },
  {
    id: '6',
    title: 'Alquran Malayalam',
    description: 'Quran reading application with Malayalam translation. Features include bookmarking, audio recitation, and search functionality.',
    technologies: ['Flutter', 'Dart', 'Audio Player', 'SQLite'],
    date: '2024',
    image: '/images/al-quran-malayalam.png',
    category: 'mobile'
  },
  {
    id: '6a',
    title: 'Lalithasaram Quran',
    description: 'Quran reading application featuring Lalithasaram translation with audio recitation, bookmarking, and search functionality.',
    technologies: ['Flutter', 'Dart', 'Audio Player', 'SQLite'],
    date: '2024',
    image: '/images/lalithasaram-quran.png',
    category: 'mobile'
  },
  {
    id: '6b',
    title: 'Janaza Guide',
    description: 'Islamic funeral rites guide app providing step-by-step guidance for Janaza procedures, prayers, and related supplications.',
    technologies: ['Flutter', 'Dart', 'SQLite', 'Provider'],
    date: '2024',
    image: '/images/janaza-guide.png',
    category: 'mobile'
  },
  {
    id: '7',
    title: 'Muhasabah',
    description: 'Islamic educational app providing Quranic content with translation and tafseer. Optimized for smooth performance and elegant UI.',
    technologies: ['Flutter', 'Dart', 'Directus', 'Provider','REST APIs'],
    date: '2025',
    image: '/images/muhasabah.png',
    category: 'mobile'
  },
  {
    id: '8',
    title: 'Enteward',
    description: 'A civic engagement platform for Kerala constituencies. The Flutter mobile app allows citizens to report local issues, access community news, and track councilor activities. Backend migrated from Appwrite to Supabase with redesigned database schema, row-level security policies, and real-time data flows.',
    technologies: ['Flutter', 'Dart', 'Supabase', 'REST APIs', 'SQLite'],
    date: '2025',
    image: '/images/enteward.png',
    category: 'mobile'
  },
  {
    id: '8a',
    title: 'Enteward Admin App',
    description: 'Councilor-facing version of Enteward that enables local representatives to manage citizen reports, publish updates, share news, and communicate directly with constituents. Includes analytics dashboard and issue management system.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Admin Panel'],
    date: '2025',
    image: '/images/enteward-admin.png',
    category: 'mobile'
  },
  {
    id: '8b',
    title: 'Mishkath – JIH Kerala',
    description: 'A comprehensive exploration app for Jamaat-e-Islami Kerala, covering the organization\'s history, departments, institutions, and cultural heritage. Features melodic offerings, institutional profiles, and an immersive journey through JIH Kerala\'s legacy and community impact.',
    technologies: ['Flutter', 'Dart', 'REST APIs', 'Provider'],
    date: '2024',
    image: '/images/mishkath.png',
    category: 'mobile'
  },
  {
    id: '8c',
    title: 'Thanima Hajj & Umra',
    description: 'A pilgrimage companion app for Hajj and Umrah travelers. Features live weather for Makkah and Madinah, GPS-based location services (camps, hospitals, accommodations), prayer times, Tasbeeh counter, Qibla finder, and quick-access emergency helplines — designed for pilgrims from Kerala and worldwide.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'GPS'],
    date: '2024',
    image: '/images/thanima-hajj-and-umra.png',
    category: 'mobile'
  },
  {
    id: '9a',
    title: 'holydwarf.com',
    description: 'Designed and developed a personal portfolio website for a client, featuring project showcases, responsive layout, and custom UI design.',
    technologies: ['React', 'JavaScript', 'CSS'],
    date: '2025',
    demo: 'https://holydwarf.com',
    category: 'web'
  },
  {
    id: '9',
    title: 'New Leaf School Website',
    description: 'A user-friendly School Management Website focusing on school\'s events, notices, and other important information.',
    technologies: ['React', 'JavaScript', 'Supabase', 'REST APIs'],
    date: '2025',
    image: '/images/new-leaf-school.png',
    category: 'web'
  },
  {
    id: '10',
    title: 'Hira Plus',
    description: 'An application for the administration and management of internal operations of Hira Center in Kozhikode.',
    technologies: ['Flutter', 'Dart', 'Directus', 'Provider','REST APIs','Firebase'],
    date: '2025',
    image: '/images/hira-plus.png',
    category: 'mobile'
  },
  {
    id: '11',
    title: 'Toy Car Showroom',
    description: 'A full-stack MERN web application and Flutter mobile app for miniature collectible cars. Web platform features user authentication, virtual garage system, social features, leaderboards, and peer-to-peer digital asset transfers. Mobile app provides a rich browsing and collection management experience.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Flutter', 'Dart', 'Firebase'],
    date: '2024',
    image: '/images/toycar-showroom.png',
    category: 'web'
  },
  {
    id: '11a',
    title: 'Toy Car Showroom (Mobile App)',
    description: 'Flutter-based mobile app for Toy Car Showroom, built for a smooth browsing and collection management experience with authentication and real-time sync.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Provider'],
    date: '2024',
    image: '/images/toycar-showroom.png',
    category: 'mobile'
  },
  {
    id: '12',
    title: 'ReadmeForger - GitHub Profile Generator',
    description: 'A powerful web application for creating professional GitHub profile READMEs with live preview. Features customizable sections, badges, statistics, tech stacks, and social links. Generates markdown code instantly with one-click copy functionality.',
    technologies: ['React', 'JavaScript', 'Markdown', 'CSS', 'GitHub API'],
    date: '2024',
    demo: 'https://readmeforger.junaidh.me/',
    image: '/images/readme-forger.png',
    category: 'web'
  },
  {
    id: '13',
    title: 'Transcribio',
    description: 'An npm package for audio transcription using Google\'s Gemini API. Features speaker detection, timestamps, support for 50+ languages, and export in SRT/VTT/JSON formats. Ships with both a CLI tool and a web UI for flexible integration into Node.js workflows.',
    technologies: ['JavaScript', 'Node.js', 'Gemini API', 'npm', 'Audio Processing'],
    date: '2025',
    github: 'https://github.com/junaidh-junu/transcribio',
    category: 'tool'
  },
  {
    id: '14',
    title: 'Spotify Discovery Plugin',
    description: 'An intelligent Spotify plugin featuring multi-language support (Hindi, Malayalam, Tamil, Telugu, Kannada, Punjabi, Urdu, English) for discovering fresh music. Includes a novelty engine that blacklists played tracks for 7 days, audio-feature matching for similar vibes, cross-language discovery for finding tracks with similar energy across different languages, auto-queue that injects fresh tracks before the current song ends, one-click playlist generation, and ensures no repetition unlike standard Spotify.',
    technologies: ['Spotify API', 'JavaScript', 'Audio Analysis', 'Machine Learning', 'React'],
    date: '2025',
    category: 'tool'
  },
  {
    id: '15',
    title: 'Tafheem ul Quran Web Platform',
    description: 'Full-stack MERN web platform for Quranic learning with 30,000+ active users. Features custom audio streaming service, multi-language tafseer, user authentication, a RAG-based AI chatbot for context-aware Q&A, and a CMS admin panel for content management.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Python'],
    date: '2025',
    image: '/images/thafheem-web.png',
    category: 'web'
  },
  {
    id: '16',
    title: 'QuantumX Admin Dashboard',
    description: 'Flagship admin dashboard for Appetite Studio built with React and Node.js. Delivers internal analytics, user management, and client-facing product information with a clean, data-rich interface.',
    technologies: ['React', 'Node.js', 'REST APIs', 'JavaScript'],
    date: '2025',
    image: '/images/quantumx.png',
    category: 'web'
  },
  {
    id: '17',
    title: 'D4media ERP System',
    description: 'Internal ERP system built on the MERN stack for D4media to automate resource allocation, centralize project tracking, and streamline employee management across a cross-functional team.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    date: '2025',
    image: '/images/d4media-erp.png',
    category: 'web'
  },
  {
    id: '18',
    title: 'Ente Ward Admin Panel',
    description: 'Web-based admin panel for the Ente Ward civic platform built with React and Supabase. Enables councilors to manage citizen reports, publish ward updates, and oversee constituency operations with real-time data and role-based access control.',
    technologies: ['React', 'Supabase', 'JavaScript', 'REST APIs'],
    date: '2025',
    image: '/images/enteward-admin-web.png',
    category: 'web'
  },
  {
    id: '19',
    title: 'Thanima Hajj Admin Panel',
    description: 'MERN-stack admin panel for managing Hajj and Umrah pilgrim data. Features role-based access control, pilgrim registration and tracking, group management, and operational dashboards for staff coordination.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    date: '2024',
    image: '/images/thanima-admin-web.png',
    category: 'web'
  },
  {
    id: '20',
    title: 'Hira+ Admin Panel',
    description: 'MERN-stack admin panel for internal operations of Hira Center. Manages staff, schedules, resources, and organizational workflows with analytics views and role-based access control.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    date: '2025',
    image: '/images/hiraplus-web.png',
    category: 'web'
  },
  {
    id: '1',
    title: 'Anti Theft Flooring Mat System Using IOT',
    description: 'Developed an IoT-based smart security mat using ESP32, pressure sensor, and camera to detect intruders, trigger alarms, and send alerts. Integrated facial recognition to avoid false alarms for authorized users.',
    technologies: ['IoT', 'ESP32', 'Python', 'Computer Vision', 'Firebase'],
    date: '2024',
    image: '/images/anti-theft-system.png',
    category: 'tool'
  }
];

export const publications: Publication[] = [
  {
    id: '1',
    title: 'Anti Theft Flooring Mat System Using IOT',
    journal: 'Journal of Electronics and Informatics',
    date: 'Jan 2024',
    doi: '10.36548/jei.2024.1.004',
    description: 'Published research paper on IoT-based smart security mat system using ESP32, pressure sensor, and camera to detect intruders and trigger alarms. Integrated facial recognition to avoid false alarms for authorized users.'
  }
];

export const skills: Skill[] = [
  // Languages
  { name: 'Dart', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'Kotlin', category: 'Languages' },
  { name: 'C++', category: 'Languages' },
  { name: 'C', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },
  { name: 'HTML5', category: 'Languages' },
  { name: 'CSS', category: 'Languages' },

  // Frameworks
  { name: 'Flutter', category: 'Frameworks' },
  { name: 'React', category: 'Frameworks' },
  { name: 'Next.js', category: 'Frameworks' },
  { name: 'Node.js', category: 'Frameworks' },
  { name: 'Express.js', category: 'Frameworks' },
  { name: 'Django', category: 'Frameworks' },
  { name: 'Flask', category: 'Frameworks' },
  { name: 'MongoDB', category: 'Frameworks' },
  { name: 'Mongoose', category: 'Frameworks' },
  { name: 'Redux', category: 'Frameworks' },
  { name: 'Jetpack Compose', category: 'Frameworks' },
  { name: 'Bloc', category: 'Frameworks' },
  { name: 'GetX', category: 'Frameworks' },
  { name: 'Riverpod', category: 'Frameworks' },

  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Firebase', category: 'Tools' },
  { name: 'REST APIs', category: 'Tools' },
  { name: 'Axios', category: 'Tools' },
  { name: 'Figma', category: 'Tools' },
  { name: 'Xcode', category: 'Tools' },
  { name: 'SQLite', category: 'Tools' },
  { name: 'PostgreSQL', category: 'Tools' },
  { name: 'MySQL', category: 'Tools' },
  { name: 'Prisma', category: 'Tools' },
  { name: 'Supabase', category: 'Tools' },
  { name: 'Appwrite', category: 'Tools' },
  { name: 'Directus', category: 'Tools' },
  { name: 'Provider', category: 'Tools' },
  { name: 'Android Studio', category: 'Tools' },
  { name: 'Play Console', category: 'Tools' },
  { name: 'App Store Connect', category: 'Tools' },
  { name: 'Postman', category: 'Tools' },
  { name: 'Redux Toolkit', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'CDN', category: 'Tools' },

  // Cloud & DevOps
  { name: 'Cloudflare', category: 'Cloud & DevOps' },
  { name: 'DigitalOcean', category: 'Cloud & DevOps' },
  { name: 'Cloudways', category: 'Cloud & DevOps' },
  { name: 'Docker', category: 'Cloud & DevOps' },
  { name: 'Google Cloud Platform', category: 'Cloud & DevOps' },
  { name: 'Vercel', category: 'Cloud & DevOps' },
  { name: 'Netlify', category: 'Cloud & DevOps' },
  { name: 'WHM/cPanel', category: 'Cloud & DevOps' },
  { name: 'Shorebird OTA', category: 'Cloud & DevOps' },
  { name: 'GitHub Actions', category: 'Cloud & DevOps' },
  { name: 'DNS Management', category: 'Cloud & DevOps' },
  { name: 'CI/CD Pipeline', category: 'Cloud & DevOps' },

  // Project Management
  { name: 'Jira', category: 'Project Management' },
  { name: 'Trello', category: 'Project Management' },
  { name: 'Notion', category: 'Project Management' },
  { name: 'ClickUp', category: 'Project Management' },
  { name: 'Slack', category: 'Project Management' },

  // AI/ML
  { name: 'RAG', category: 'AI/ML' },
  { name: 'LLM Integration', category: 'AI/ML' },
  { name: 'scikit-learn', category: 'AI/ML' },
  { name: 'Pandas', category: 'AI/ML' },
  { name: 'NumPy', category: 'AI/ML' },
  { name: 'Jupyter Notebooks', category: 'AI/ML' },
];

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Web Design and Development',
    issuer: 'ICS India, Palakkad',
    period: 'Nov 2022 – Apr 2023',
  },
  {
    id: '2',
    title: 'Flutter Development',
    issuer: 'IroHub Infotech Pvt. Ltd., Kochi',
    period: 'Mar 2023 – Sep 2023',
  },
];

export const contactInfo = {
  name: 'Junaidh Haneefa Muhammedhaneefa',
  title: 'Full-Stack & Mobile Developer',
  subtitle: 'MERN Stack · Next.js · Flutter · Kotlin · MSc Computing Science',
  email: 'junaidhhaneef.m@gmail.com',
  phone: '+353 89 253 4784',
  location: '15 St. Helens Garden, Adamstown, Lucan, Dublin K78T2P0',
  linkedin: 'https://www.linkedin.com/in/junaidhhaneefa',
  github: 'https://github.com/junaidh-junu',
  bio: 'Full-Stack and Mobile Developer with 1.5+ years of production experience building scalable web and cross-platform mobile apps. Shipped 10+ MERN web applications and 13 Flutter apps serving 30,000+ active users. Led a 12-member cross-functional team across 20+ concurrent projects. Works across React, Node.js, Next.js, Flutter, and Kotlin/Jetpack Compose — from database design and REST API development through cloud infrastructure and CI/CD automation.',
  languages: [
    { name: 'English', level: 'Fluent' },
    { name: 'Malayalam', level: 'Native' },
    { name: 'Tamil', level: 'Fluent' },
    { name: 'Hindi', level: 'Fluent' },
  ],
};
