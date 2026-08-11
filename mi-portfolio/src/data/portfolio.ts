export interface Section {
  id: string;
  label: string;
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  description: string;
  tags: string[];
}

export interface Project {
  name: string;
  description: string;
  url?: string;
  repoUrl?: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  university: string;
  period: string;
  status: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "mail";
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
}

export const profile: Profile = {
  name: "Ignacio Alcaraz",
  role: "Software Developer",
  tagline:
    "Construyo soluciones escalables con clean code, automatización inteligente e IA.",
};

export const sections: Section[] = [
  { id: "about", label: "SOBRE MÍ" },
  { id: "projects", label: "PROYECTOS" },
  { id: "experience", label: "EXPERIENCIA" },
  { id: "skills", label: "HABILIDADES" },
  { id: "education", label: "EDUCACIÓN" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/ignacioalcaraz",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ignacioalcaraz05",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:ignacioalcaraz05@gmail.com",
    icon: "mail",
  },
];

/** Los fragmentos entre **dobles asteriscos** se renderizan destacados. */
export const about: string[] = [
  "Soy un desarrollador de software de 21 años basado en Buenos Aires, estudiante avanzado de **Licenciatura en Sistemas** en UADE con 5 materias restantes. Me especializo en diseño de arquitecturas de software, desarrollo backend y automatización inteligente con IA.",
  "Mi experiencia abarca desde la construcción de **aplicaciones web full-stack** y APIs RESTful hasta el desarrollo de **agentes conversacionales** y sistemas event-driven. Tengo un enfoque marcado en soluciones escalables, clean code y buenas prácticas de ingeniería.",
  "Actualmente trabajo como freelance diseñando arquitecturas backend para sistemas de IA conversacionales desplegados en WhatsApp, construyendo pipelines de datos automatizados y desarrollando herramientas internas con React y Node.js.",
];

export const projects: Project[] = [
  {
    name: "Agente conversacional para WhatsApp",
    description:
      "Arquitectura backend event-driven para un agente de IA sobre WhatsApp Cloud API, con memoria conversacional, recuperación de contexto vía RAG y derivación a operador humano.",
    tags: ["Python", "LangChain", "LangGraph", "MongoDB", "Docker"],
  },
  {
    name: "Pipeline de datos automatizado",
    description:
      "Servicio de ingesta y normalización de datos desde múltiples fuentes, con procesamiento por lotes, reintentos y reportes programados hacia base de datos analítica.",
    tags: ["Python", "PostgreSQL", "REST APIs", "Docker"],
  },
  {
    name: "Dashboard interno de gestión",
    description:
      "Herramienta interna full-stack para visualizar métricas operativas en tiempo real, con API REST propia, autenticación por roles y actualizaciones vía WebSockets.",
    tags: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS"],
  },
];

export const experiences: Experience[] = [
  {
    period: "Sep 2025 — Presente",
    title: "Software Developer & AI Automation Engineer",
    company: "Freelance",
    description:
      "Diseño de arquitecturas backend para agentes de IA conversacionales en WhatsApp. Desarrollo full-stack con React, Node.js y Python. Construcción de pipelines de datos automatizados y flujos event-driven con webhooks.",
    tags: ["Python", "React", "Node.js", "LangChain", "Docker", "MongoDB"],
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Lenguajes",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Express", "Flask", "REST APIs", "WebSockets"],
  },
  {
    category: "Frontend",
    items: ["React", "HTML / CSS", "Tailwind CSS"],
  },
  {
    category: "Arquitectura",
    items: [
      "Microservicios",
      "MVC",
      "Clean Architecture",
      "Design Patterns",
    ],
  },
  {
    category: "Bases de Datos",
    items: ["MS SQL Server", "MongoDB", "PostgreSQL"],
  },
  {
    category: "IA & Agentes",
    items: ["LangChain", "LangGraph"],
  },
  {
    category: "Herramientas",
    items: ["Git", "Docker", "Postman"],
  },
];

export const education: Education = {
  degree: "Licenciatura en Sistemas",
  university: "UADE — Universidad Argentina de la Empresa",
  period: "Mar 2023 — Dic 2026",
  status: "En curso, 5 materias restantes",
};

export const certifications: Certification[] = [
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    date: "Abr 2026",
  },
  {
    name: "Introduction to Agent Skills",
    issuer: "Anthropic",
    date: "Abr 2026",
  },
  {
    name: "Introduction to Subagents",
    issuer: "Anthropic",
    date: "Mar 2026",
  },
  {
    name: "Python sin Fronteras: HTML, CSS, Flask y MySQL",
    issuer: "Udemy",
    date: "Abr 2025",
  },
  {
    name: "Formación Profesional de Consultores de SAP IBP",
    issuer: "Exed Academy",
    date: "Abr 2024",
  },
];
