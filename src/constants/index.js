const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "", label: "Years of Experience" },
  { value: 15, suffix: "+", label: "Satisfied Clients" },
  { value: 20, suffix: "+", label: "Completed Projects" },
  { value: 3, suffix: "+", label: "Teams Led / Collaborations" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  { name: "Flutter", imgPath: "/images/logos/three.png" },
  { name: "Dart", imgPath: "/images/logos/react.png" },
  { name: "Firebase", imgPath: "/images/logos/node.png" },
  { name: "React", imgPath: "/images/logos/react.png" },
  { name: "Django", imgPath: "/images/logos/python.svg" },
];

const techStackIcons = [
  { name: "Flutter", modelPath: "/models/three.js-transformed.glb", scale: 0.05, rotation: [0, 0, 0] },
  { name: "Dart", modelPath: "/models/react_logo-transformed.glb", scale: 1, rotation: [0, 0, 0] },
  { name: "Firebase", modelPath: "/models/node-transformed.glb", scale: 5, rotation: [0, -Math.PI / 2, 0] },
  { name: "React", modelPath: "/models/react_logo-transformed.glb", scale: 1, rotation: [0, 0, 0] },
  { name: "Django", modelPath: "/models/python-transformed.glb", scale: 0.8, rotation: [0, 0, 0] },
];

const expCards = [
  {
    review:
      "Team Lead - Flutter Developer at D4DX Innovations LLP, leading multiple mobile app projects with a focus on quality and timely delivery.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Team Lead - Flutter Developer",
    date: "Aug 2024 – Present | D4DX Innovations LLP, Kozhikode",
    responsibilities: [
      "Promoted from Junior Flutter Developer (Aug 2024) to Team Lead (Apr 2025).",
      "Led development of Zai Toon Kids, Mishkath, Vision 2026, Thafheem ul Quran, Muhasabah, and Alquran Malayalam.",
      "Managed timelines, feature delivery, and quality assurance across Android and iOS.",
      "Implemented cross-platform solutions with Flutter, Dart, Firebase, REST APIs, and Provider.",
      "Coordinated cross-functional planning and delivery as Project Manager for multiple releases.",
      "Owned CI/CD and release workflows (DevOps), improving deployment reliability and speed.",
    ],
  },
  {
    review:
      "Academic project demonstrating IoT systems integration with real-time alerting and recognition.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Anti Theft Flooring Mat System (IoT)",
    date: "2024 | Publication: 10.36548/jei.2024.1.004",
    responsibilities: [
      "Built ESP32-based smart mat with pressure sensing and camera integrations.",
      "Implemented alerting and notifications; integrated facial recognition to reduce false positives.",
    ],
  },
  {
    review:
      "Full-stack web project for school operations and communication.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "School Management Website",
    date: "2023",
    responsibilities: [
      "Developed modules for attendance, grades, and parent communication.",
      "Delivered a user-friendly UI with secure data handling.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "LinkedIn",
    mentions: "linkedin.com/in/junaidh-haneefa",
    review:
      "Connect with me on LinkedIn for updates on Flutter, cross-platform development, and project highlights.",
    imgPath: "/images/client1.png",
  },
  {
    name: "GitHub",
    mentions: "github.com/junaidh-junu",
    review:
      "Explore my code samples, personal projects, and open-source contributions.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Contact",
    mentions: "junaidhhaneef.m@gmail.com | 7558958789",
    review:
      "I’m open to roles in Flutter and cross-platform development. Let’s collaborate on impactful mobile products.",
    imgPath: "/images/client2.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
