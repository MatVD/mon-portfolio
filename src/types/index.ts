export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'blockchain' | 'tools' | 'database';
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}