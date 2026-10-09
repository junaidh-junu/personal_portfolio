export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export interface WorkItem {
  title: string;
  description: string;
  year: string;
  stack: string;
  image?: { src: string; width: number; height: number; alt: string };
  href?: string;
}

export interface AppItem {
  name: string;
  description: string;
  stack: string;
  icon: string;
}

export interface Role {
  title: string;
  org: string;
  period: string;
  location: string;
  summary: string;
  stack: string;
  current?: boolean;
}

export interface School {
  degree: string;
  institution: string;
  period: string;
  detail: string;
}

export interface ResearchItem {
  title: string;
  description: string;
  meta: string;
  href?: string;
  linkLabel?: string;
}

export const person = {
  name: 'Junaidh Haneefa',
  fullName: 'Junaidh Haneefa Muhammedhaneefa',
  role: 'Full-stack and mobile developer',
  location: 'Dublin, Ireland',
  email: 'junaidhhaneef.m@gmail.com',
  phone: '+353 89 253 4784',
  github: 'https://github.com/junaidh-junu',
  linkedin: 'https://www.linkedin.com/in/junaidhhaneefa',
  cv: '/Junaidh_CV_Dublin_ATS_v3.pdf',
  avatar: '/avatar.webp',
  availability: 'Open to full-stack and mobile roles in Dublin or remote',
};

export const intro = {
  statement:
    'I build web and mobile products that people use every day, from Flutter apps serving 30,000+ users to explainable flood-risk models for Dublin.',
  paragraphs: [
    'Most of my work has been for organisations in Kerala and Ireland that needed a real product shipped: admin dashboards, civic platforms, Quran apps with audio streaming, and the APIs and infrastructure behind them. I work across React, Node, Flutter and Kotlin, from database design through to deployment and CI.',
    'MSc in Computing from Griffith College Dublin, 2026. Previously team lead at D4DX Innovations, where I went from junior developer to leading a team of twelve in nine months.',
  ],
};

export const nav: Link[] = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const featured: WorkItem[] = [
  {
    title: 'Tafheem ul Quran',
    description:
      'Quranic learning platform with a custom audio streaming service, multi-language tafseer, a RAG chatbot built on ChromaDB and Gemini, and a CMS for editors. Architected end to end on MERN; the web and mobile apps together serve 30,000+ active users.',
    year: '2024 to 2025',
    stack: 'React, Node, Express, MongoDB, Python',
    image: { src: '/work/tafheem-web.webp', width: 1600, height: 842, alt: 'Tafheem ul Quran web platform home page with surah list and search' },
  },
  {
    title: 'QuantumX',
    description:
      'Community-maintained database of cryptographic systems vulnerable to quantum attacks, built for Appetite Studio to support the move to post-quantum cryptography. React front end on a Directus backend.',
    year: '2025',
    stack: 'React, Node, Directus',
    image: { src: '/work/quantumx.webp', width: 1600, height: 907, alt: 'QuantumX landing page: Tracking cryptographic systems vulnerable to quantum attacks' },
  },
  {
    title: 'Hira Plus',
    description:
      'Operations platform for Hira Centre in Kozhikode: meal planning, meeting coordination and administrative tooling, with separate admin and leader portals, role-based access and analytics. Web app and a companion Flutter app.',
    year: '2025',
    stack: 'React, Node, Express, MongoDB, Flutter',
    image: { src: '/work/hira-plus-web.webp', width: 1600, height: 1005, alt: 'Hira Plus web portal landing page' },
  },
  {
    title: 'New Leaf School',
    description:
      'Public site and admin panel for a school in Palakkad: events, notices and real-time updates on Supabase. I maintain it as the school\'s IT coordinator and am now replacing their legacy ERP with one built on PostgreSQL and Prisma.',
    year: '2024 to present',
    stack: 'React, Supabase, PostgreSQL',
    image: { src: '/work/new-leaf-school.webp', width: 1600, height: 843, alt: 'New Leaf School website home page' },
    href: 'https://newleafschool.org',
  },
];

export const moreWork: WorkItem[] = [
  { title: 'Ente Ward admin panel', description: 'Councillor-facing dashboard for the Ente Ward civic platform: citizen reports, ward updates and real-time data with row-level security.', year: '2025', stack: 'React, Supabase' },
  { title: 'Thanima Hajj admin panel', description: 'Pilgrim registration, group management and staff dashboards for a Hajj and Umrah operator.', year: '2024', stack: 'React, Node, MongoDB' },
  { title: 'D4media ERP', description: 'Internal ERP automating resource allocation, project tracking and employee management for a 12-person team.', year: '2025', stack: 'React, Node, MongoDB' },
  { title: 'Transcribio', description: 'npm package for audio transcription with the Gemini API: speaker detection, timestamps, 50+ languages, SRT/VTT/JSON export, CLI and web UI.', year: '2025', stack: 'Node, Gemini API', href: 'https://github.com/junaidh-junu/transcribio' },
];

export const apps: AppItem[] = [
  { name: 'Tafheem ul Quran', description: 'Audio streaming, prayer times, quizzes and multi-language tafseer. Cut app size from 150 MB to 60 MB.', stack: 'Flutter, SQLite, Provider', icon: '/apps/thafheem-ul-quran.png' },
  { name: 'Ente Ward', description: 'Civic reporting for 20 Kerala ward constituencies, migrated from Appwrite to Supabase.', stack: 'Flutter, Supabase', icon: '/apps/enteward.png' },
  { name: 'Ente Ward Admin', description: 'Councillor app for managing reports, publishing updates and reaching constituents.', stack: 'Flutter, Firebase', icon: '/apps/enteward-admin.png' },
  { name: 'Thanima Hajj & Umrah', description: 'Offline-first pilgrimage companion: GPS for camps and hospitals, prayer times, Qibla, helplines.', stack: 'Flutter, Firebase, GPS', icon: '/apps/thanima-hajj-and-umra.png' },
  { name: 'Toy Car Showroom', description: 'Collectible car community with a virtual garage, leaderboards and peer-to-peer transfers. On both stores and the web.', stack: 'Flutter, Firebase, MERN', icon: '/apps/toycar-showroom.png' },
  { name: 'Zai Toon Kids', description: 'Educational app for children with Razorpay subscriptions.', stack: 'Flutter, Directus', icon: '/apps/zai-toon-kids.png' },
  { name: 'Hira Plus', description: 'Mobile companion for the Hira Centre operations platform.', stack: 'Flutter, Directus, Firebase', icon: '/apps/hira-plus.png' },
  { name: 'Muhasabah', description: 'Islamic education app with structured lessons and reading plans.', stack: 'Flutter, Directus', icon: '/apps/muhasabah.png' },
  { name: 'Mishkath', description: 'Heritage explorer for Jamaat-e-Islami Kerala: history, departments and institutions.', stack: 'Flutter, REST', icon: '/apps/mishkath.png' },
  { name: 'Al Quran Malayalam', description: 'Quran reader with Malayalam translation, audio recitation, bookmarks and search.', stack: 'Flutter, SQLite', icon: '/apps/al-quran-malayalam.png' },
  { name: 'Lalithasaram Quran', description: 'Quran reader with the Lalithasaram translation and audio recitation.', stack: 'Flutter, SQLite', icon: '/apps/lalithasaram-quran.png' },
  { name: 'Janaza Guide', description: 'Step-by-step guide to Islamic funeral rites, prayers and supplications.', stack: 'Flutter, SQLite', icon: '/apps/janaza-guide.png' },
  { name: 'Vision 2026', description: 'Community initiative app with event management and notifications.', stack: 'Flutter, Firebase', icon: '/apps/vision-2026.png' },
];

export const research: ResearchItem[] = [
  {
    title: 'FloodScope: explainable geospatial flood-risk mapping for Dublin',
    description:
      'MSc dissertation. XGBoost over a 157,735-cell 50 m grid across the Dodder, Tolka and Liffey catchments, with SHAP explanations per cell and a FastAPI, PostGIS and React/Mapbox stack. The main finding: a random 80/20 split reports AUC 0.991, but 5 km spatial block cross-validation gives 0.834, so naive evaluation overstates accuracy badly.',
    meta: 'Griffith College Dublin, 2026 · Python, XGBoost, SHAP, PostGIS, FastAPI, React, Docker',
  },
  {
    title: 'Anti Theft Flooring Mat System Using IoT',
    description:
      'ESP32 pressure-sensing mat with a camera and facial recognition to detect intruders without false alarms for authorised people. B.Tech final-year project, graded S.',
    meta: 'Journal of Electronics and Informatics, January 2024 · DOI 10.36548/jei.2024.1.004',
    href: 'https://doi.org/10.36548/jei.2024.1.004',
    linkLabel: 'Read the paper',
  },
];

export const roles: Role[] = [
  {
    title: 'IT Coordinator',
    org: 'New Leaf School for Quran and English',
    period: 'Jul 2024 to present',
    location: 'Remote, part-time',
    current: true,
    summary:
      'Sole technical contact for the school. I maintain the public site and admin panel, train staff on the ERP, and am architecting its replacement from scratch: admissions, attendance, exams, fees and communications on PostgreSQL and Prisma.',
    stack: 'React, Supabase, PostgreSQL, Prisma',
  },
  {
    title: 'Full-stack and mobile developer',
    org: 'Appetite Studio',
    period: 'Nov 2025 to May 2026',
    location: 'Remote',
    summary:
      'Built QuantumX, led the Ente Ward Flutter app and React admin dashboard for 20 ward constituencies and 500 active users through a Supabase migration and schema redesign, and shipped Toy Car Showroom to both stores and the web.',
    stack: 'React, Next.js, Supabase, Flutter, Kotlin, Jetpack Compose, Directus',
  },
  {
    title: 'Team lead and full-stack developer',
    org: 'D4DX Innovations LLP',
    period: 'Mar 2025 to Oct 2025',
    location: 'Kozhikode, India',
    summary:
      'Promoted from junior developer in nine months. Led a 12-person team through 20+ web and 5+ mobile releases, reviewed around ten pull requests a week, architected the Tafheem ul Quran web platform, and set up GitHub Actions pipelines and DigitalOcean, Cloudways and cPanel infrastructure across the company.',
    stack: 'React, Node, Express, MongoDB, GitHub Actions, DigitalOcean',
  },
  {
    title: 'Junior full-stack developer',
    org: 'D4DX Innovations LLP',
    period: 'Jul 2024 to Feb 2025',
    location: 'Kozhikode, India',
    summary:
      'Built the Tafheem ul Quran mobile app and its RAG chatbot, cut the app from 150 MB to 60 MB and the crash rate to 2.7%, and shipped Thanima Hajj & Umrah, Zai Toon Kids, Hira Plus, Muhasabah and Mishkath.',
    stack: 'Flutter, Dart, Python, ChromaDB, Firebase',
  },
  {
    title: 'Flutter developer, intern',
    org: 'IroHub Infotech',
    period: 'Mar 2023 to Sep 2023',
    location: 'Ernakulam, India',
    summary:
      'Six-month placement building production UI components and REST integrations with Provider state management.',
    stack: 'Flutter, Dart, Provider',
  },
];

export const education: School[] = [
  {
    degree: 'MSc in Computing',
    institution: 'Griffith College Dublin',
    period: '2025 to 2026',
    detail:
      'QQI Level 9, 90 ECTS. Mobile development, cloud platforms, agile, parallel and distributed programming, networks and cybersecurity, deep learning and generative AI, data mining. Scrum master on the team project. Dissertation: FloodScope.',
  },
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'APJ Abdul Kalam Technological University',
    period: '2020 to 2024',
    detail:
      'First class, CGPA 6.86/10, at Jawaharlal College of Engineering and Technology. Final-year project published in the Journal of Electronics and Informatics.',
  },
];

export const stack = [
  { label: 'Web', items: 'React, Next.js, TypeScript, Node, Express, FastAPI' },
  { label: 'Mobile', items: 'Flutter, Dart, Kotlin, Jetpack Compose' },
  { label: 'Data', items: 'PostgreSQL, PostGIS, MongoDB, Supabase, Prisma, SQLite' },
  { label: 'ML', items: 'Python, XGBoost, SHAP, scikit-learn, RAG with ChromaDB' },
  { label: 'Infrastructure', items: 'Docker, GitHub Actions, DigitalOcean, Cloudflare, Netlify, Vercel' },
];

export const languages = 'English, Malayalam, Tamil and Hindi';
