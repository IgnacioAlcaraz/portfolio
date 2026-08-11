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
    url: "https://mail.google.com/mail/?view=cm&to=ignacioalcaraz05@gmail.com",
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
    name: "Beacon AI",
    description:
      "CRM inmobiliario que cubre el embudo de contactos, captaciones, cierres, objetivos anuales, trackeo de actividad diaria y dashboards de equipo, con tres roles (vendedor, encargado y admin). Encima corren dos agentes de IA construidos con LangGraph que responden por chat en lenguaje natural sobre esos datos: uno acotado a los datos del vendedor y otro al equipo del encargado, cada uno con su propio set de tools y respuesta en streaming.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "LangGraph"],
  },
  {
    name: "SubastasPlus",
    description:
      "Proyecto universitario: app de subastas de arte en React Native/Expo con backend Node.js/Express y base de datos PostgreSQL (Supabase). Incluye sistema de pujas en tiempo real vía WebSockets con control de concurrencia, verificación de identidad y un flujo completo de compra-venta con seguros, sobre una API REST de más de 30 endpoints.",
    tags: [
      "React Native",
      "Node.js",
      "Express",
      "PostgreSQL",
      "WebSockets",
    ],
  },
  {
    name: "LiftClub",
    description:
      "Proyecto universitario: red social para entrenadores y clientes de gimnasios que actúa como intermediario digital para pactar sesiones de entrenamiento. Incluye carga y gestión de los servicios ofrecidos por los entrenadores, un panel de estadísticas sobre su actividad, visualización de sesiones agendadas con su estado y opción de aceptarlas o rechazarlas, autenticación con Google e integración de pagos mediante la API de Mercado Pago.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Mercado Pago API"],
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
