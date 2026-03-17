import { Experience, Education, Project, Publication, Skill } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Full-Stack Developer',
    company: 'Appetite Studio',
    location: 'Remote',
    period: 'Nov 2025 - Present',
    type: 'Full-time',
    current: true,
    description: [
      'Engineered the QuantumX admin dashboard and public landing page with React and Node.js, delivering internal analytics and client-facing product information',
      'Architected the Ente Ward backend on Supabase and led full migration from Appwrite — redesigned database schema, row-level security policies, and real-time data flows for a civic engagement platform serving Kerala constituencies',
      'Developed a Next.js web application for a Quran reading platform with server-side rendering, dynamic content loading, and SEO-optimized routing',
      'Designed and shipped ToyCar Showroom as a full-stack MERN application with user authentication, virtual garage system, social features, leaderboards, and peer-to-peer digital asset transfers',
      'Delivering cross-platform mobile applications in Flutter for the above products, handling end-to-end delivery from UI implementation to backend API integration'
    ],
    skills: ['React', 'Node.js', 'Next.js', 'Supabase', 'Flutter', 'Dart', 'MERN Stack', 'REST APIs']
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
      'Spearheaded 5 production MERN web applications: admin panels and dashboards for Thanima Hajj & Umrah, Hira+, ToyCar Showroom, and Ente Ward — each with role-based access control, CRUD operations, and analytics views',
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
      'Developed the Tafheem ul Quran Flutter mobile app with audio streaming, prayer times, quizzes, and multi-language support, contributing to a user base of 30,000+',
      'Reduced flagship mobile app size by 60% (150MB to 60MB) through asset optimization, code refactoring, and cloud migration of bundled resources, improving user acquisition',
      'Shipped Thanima Hajj & Umrah (GPS-based pilgrimage guide with offline-first architecture), Zaitoon Kids (educational app with Razorpay subscription integration), and Hira Plus (office management system)',
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
    id: '1',
    title: 'Anti Theft Flooring Mat System Using IOT',
    description: 'Developed an IoT-based smart security mat using ESP32, pressure sensor, and camera to detect intruders, trigger alarms, and send alerts. Integrated facial recognition to avoid false alarms for authorized users.',
    technologies: ['IoT', 'ESP32', 'Python', 'Computer Vision', 'Firebase'],
    date: '2024'
  },
  {
    id: '2',
    title: 'Zai Toon Kids App',
    description: 'Mobile application for children featuring interactive content, animations, and engaging UI. Built with Flutter for cross-platform compatibility.',
    technologies: ['Flutter', 'Dart', 'Directus', 'Provider','REST APIs'],
    date: '2024'
  },
  {
    id: '3',
    title: 'Vision 2026',
    description: 'Comprehensive mobile application developed as part of community initiative. Features include event management, notifications, and user engagement tools.',
    technologies: ['Flutter', 'Firebase', 'REST APIs', 'SQLite'],
    date: '2024'
  },
  {
    id: '4',
    title: 'School Management Website',
    description: 'Developed a user-friendly School Management Website for efficient attendance tracking, grade management, and parent communication. Streamlined administrative processes.',
    technologies: ['JavaScript', 'Node.js', 'MongoDB', 'Express', 'React'],
    date: '2023'
  },
  {
    id: '5',
    title: 'Thafheem ul Quran',
    description: 'Islamic educational app providing Quranic content with translation and tafseer. Optimized for smooth performance and elegant UI.',
    technologies: ['Flutter', 'Dart', 'SQLite', 'Provider'],
    date: '2024'
  },
  {
    id: '6',
    title: 'Alquran Malayalam',
    description: 'Quran reading application with Malayalam translation. Features include bookmarking, audio recitation, and search functionality.',
    technologies: ['Flutter', 'Dart', 'Audio Player', 'SQLite'],
    date: '2024'
  },
  {
    id: '7',
    title: 'Muhasabah',
    description: 'Islamic educational app providing Quranic content with translation and tafseer. Optimized for smooth performance and elegant UI.',
    technologies: ['Flutter', 'Dart', 'Directus', 'Provider','REST APIs'],
    date: '2025'
  },
  {
    id: '8',
    title: 'Enteward',
    description: 'A civic engagement platform for Kerala constituencies. The Flutter mobile app allows citizens to report local issues, access community news, and track councilor activities. Backend migrated from Appwrite to Supabase with redesigned database schema, row-level security policies, and real-time data flows.',
    technologies: ['Flutter', 'Dart', 'Supabase', 'REST APIs', 'SQLite'],
    date: '2025'
  },
  {
    id: '8a',
    title: 'Enteward Admin App',
    description: 'Councilor-facing version of Enteward that enables local representatives to manage citizen reports, publish updates, share news, and communicate directly with constituents. Includes analytics dashboard and issue management system.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Admin Panel'],
    date: '2025'
  },
  {
    id: '9',
    title: 'New Leaf School Website',
    description: 'A user-friendly School Management Website focusing on school\'s events, notices, and other important information.',
    technologies: ['JavaScript', 'Node.js', 'MongoDB', 'Express', 'React'],
    date: '2025'
  },
  {
    id: '10',
    title: 'Hira Plus',
    description: 'An application for the administration and management of internal operations of Hira Center in Kozhikode.',
    technologies: ['Flutter', 'Dart', 'Directus', 'Provider','REST APIs','Firebase'],
    date: '2025'
  },
  {
    id: '11',
    title: 'Toy Car Showroom',
    description: 'A full-stack MERN web application and Flutter mobile app for miniature collectible cars. Web platform features user authentication, virtual garage system, social features, leaderboards, and peer-to-peer digital asset transfers. Mobile app provides a rich browsing and collection management experience.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Flutter', 'Dart', 'Firebase'],
    date: '2024'
  },
  {
    id: '12',
    title: 'ReadmeForger - GitHub Profile Generator',
    description: 'A powerful web application for creating professional GitHub profile READMEs with live preview. Features customizable sections, badges, statistics, tech stacks, and social links. Generates markdown code instantly with one-click copy functionality.',
    technologies: ['React', 'JavaScript', 'Markdown', 'CSS', 'GitHub API'],
    date: '2024',
    demo: 'https://readmeforger.junaidh.me/'
  },
  {
    id: '13',
    title: 'Transcribio',
    description: 'An npm package for audio transcription using Google\'s Gemini API. Features speaker detection, timestamps, support for 50+ languages, and export in SRT/VTT/JSON formats. Ships with both a CLI tool and a web UI for flexible integration into Node.js workflows.',
    technologies: ['JavaScript', 'Node.js', 'Gemini API', 'npm', 'Audio Processing'],
    date: '2025',
    github: 'https://github.com/junaidh-junu/transcribio'
  },
  {
    id: '15',
    title: 'Quran Web Application',
    description: 'A full-featured Quran reading platform built with Next.js and Supabase. Implements server-side rendering, dynamic content routing, and SEO-optimized pages for Quranic content with translation and audio recitation.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'SSR', 'SEO'],
    date: '2025'
  },
  {
    id: '14',
    title: 'Spotify Discovery Plugin',
    description: 'An intelligent Spotify plugin featuring multi-language support (Hindi, Malayalam, Tamil, Telugu, Kannada, Punjabi, Urdu, English) for discovering fresh music. Includes a novelty engine that blacklists played tracks for 7 days, audio-feature matching for similar vibes, cross-language discovery for finding tracks with similar energy across different languages, auto-queue that injects fresh tracks before the current song ends, one-click playlist generation, and ensures no repetition unlike standard Spotify.',
    technologies: ['Spotify API', 'JavaScript', 'Audio Analysis', 'Machine Learning', 'React'],
    date: '2025'
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
  { name: 'MongoDB', category: 'Frameworks' },
  { name: 'Jetpack Compose', category: 'Frameworks' },

  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Firebase', category: 'Tools' },
  { name: 'REST APIs', category: 'Tools' },
  { name: 'Figma', category: 'Tools' },
  { name: 'Xcode', category: 'Tools' },
  { name: 'SQLite', category: 'Tools' },
  { name: 'PostgreSQL', category: 'Tools' },
  { name: 'MySQL', category: 'Tools' },
  { name: 'Supabase', category: 'Tools' },
  { name: 'Appwrite', category: 'Tools' },
  { name: 'Provider', category: 'Tools' },
  { name: 'Android Studio', category: 'Tools' },
  { name: 'Postman', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'ClickUp', category: 'Tools' },
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
  { name: 'Slack', category: 'Project Management' },

  // AI/ML
  { name: 'RAG', category: 'AI/ML' },
  { name: 'LLM Integration', category: 'AI/ML' },
  { name: 'scikit-learn', category: 'AI/ML' },
  { name: 'Pandas', category: 'AI/ML' },
  { name: 'NumPy', category: 'AI/ML' },
];

export const contactInfo = {
  name: 'Junaidh Haneefa Muhammedhaneefa',
  title: 'Full-Stack Developer',
  subtitle: 'MERN Stack · Next.js · Flutter · Kotlin · MSc Computing Science',
  email: 'junaidhhaneef.m@gmail.com',
  phone: '+353 89 253 4784',
  location: '15 St. Helens Garden, Adamstown, Lucan, Dublin K78T2P0',
  linkedin: 'https://www.linkedin.com/in/junaidhhaneefa',
  github: 'https://github.com/junaidh-junu',
  bio: 'Results-driven Full-Stack Developer with 1.5+ years of production experience shipping scalable web and cross-platform mobile applications. Delivered 6+ MERN-stack web applications and 9 Flutter apps serving 30,000+ users while leading a 12-member cross-functional team across 20+ concurrent projects. Skilled in end-to-end product delivery from architecture design through cloud infrastructure management and CI/CD automation.'
};
