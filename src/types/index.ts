export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Contract';
  description: string[];
  skills: string[];
  current?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
  gpa?: string;
  status?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
  date: string;
}

export interface Publication {
  id: string;
  title: string;
  journal: string;
  date: string;
  doi?: string;
  description: string;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frameworks' | 'Tools' | 'Cloud & DevOps' | 'Project Management';
  icon?: string;
}
