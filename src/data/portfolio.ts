import { Experience, Education, Project, Publication, Skill } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Flutter Developer',
    company: 'Appetite Studio',
    location: 'Remote',
    period: 'Nov 2025 - Present',
    type: 'Full-time',
    current: true,
    description: [
      'Developed mobile applications using Flutter, emphasizing clean UI and smooth performance',
      'Worked on applications like Enteward, including both counselor and user applications with comprehensive functionality',
      'Integrated REST APIs and Firebase services, enhancing app functionality and user experience',
      'Collaborated with design team to implement pixel-perfect UI components'
    ],
    skills: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'UI/UX Design']
  },
  {
    id: '2',
    title: 'Team Lead - Flutter Developer',
    company: 'D4DX Innovations LLP',
    location: 'Kozhikode, Kerala, India',
    period: 'July 2024 - Sept 2025',
    type: 'Full-time',
    current: false,
    description: [
      'Promoted to Team Lead position in April 2025 after starting as Junior Flutter Developer',
      'Led development of multiple mobile applications including Zai Toon Kids App, Mishkath, Vision 2026, Thafheem ul Quran, Muhasabah, and Alquran Malayalam',
      'Served as main developer on projects while overseeing development work with team members',
      'Managed project timelines, feature implementation, and quality assurance processes',
      'Implemented cross-platform solutions using Flutter and Dart for both Android and iOS'
    ],
    skills: ['Flutter', 'Team Leadership', 'Project Management', 'Cross-platform Development', 'Quality Assurance','CI/CD Pipeline','Server Management']
  },
  {
    id: '3',
    title: 'Internship Trainee',
    company: 'iROHUB Infotech',
    location: 'Ernakulam, Kerala, India',
    period: 'Mar 2023 - Sep 2023',
    type: 'Internship',
    description: [
      'Completed internship in Flutter, Git and other technologies',
      'Gained hands-on experience in mobile app development',
      'Learned industry best practices and development workflows'
    ],
    skills: ['Flutter', 'Git', 'Mobile Development', 'User Experience (UX)']
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: "Master's degree, Computer Science",
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
    gpa: '65%',
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
    description: 'A simple app to report issues,get local news and see what your councilors are doing in your area.',
    technologies: ['Flutter', 'Dart', 'Audio Player', 'SQLite'],
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
  { name: 'Node.js', category: 'Frameworks' },
  { name: 'Express', category: 'Frameworks' },
  { name: 'Django', category: 'Frameworks' },
  { name: 'MongoDB', category: 'Frameworks' },

  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Firebase', category: 'Tools' },
  { name: 'REST APIs', category: 'Tools' },
  { name: 'Figma', category: 'Tools' },
  { name: 'Xcode', category: 'Tools' },
  { name: 'SQLite', category: 'Tools' },
  { name: 'Provider', category: 'Tools' },
  { name: 'CDN', category: 'Tools' },

  // Cloud & DevOps
  { name: 'Cloudflare', category: 'Cloud & DevOps' },
  { name: 'Digital Ocean', category: 'Cloud & DevOps' },
  { name: 'Cloudways', category: 'Cloud & DevOps' },
  { name: 'DNS Management', category: 'Cloud & DevOps' },
  { name: 'CI/CD Pipeline', category: 'Cloud & DevOps' },

  // Project Management
  { name: 'Jira', category: 'Project Management' },
  { name: 'Trello', category: 'Project Management' },
  { name: 'Notion', category: 'Project Management' },
  { name: 'Slack', category: 'Project Management' },
];

export const contactInfo = {
  name: 'Junaidh Haneefa Muhammedhaneefa',
  title: 'Full Stack Developer | Flutter & Kotlin Developer',
  subtitle: 'Web Developer | Domain & DNS Specialist | CI/CD Pipeline Monitor | MSc Computing Science',
  email: 'junaidhhaneef.m@gmail.com',
  phone: '+353 892534784',
  location: 'Dublin, Ireland',
  linkedin: 'https://www.linkedin.com/in/junaidhhaneefa',
  github: 'https://github.com/junaidh-junu',
  bio: 'Aspiring and passionate Flutter developer with a Bachelor\'s degree in Computer Science and hands-on experience in building cross-platform mobile applications since graduation. Eager to contribute to innovative and scalable mobile solutions using Flutter, Dart, and modern development practices. Seeking a challenging role where I can apply my technical skills, grow as a developer, and collaborate on impactful projects that enhance user experiences.'
};
