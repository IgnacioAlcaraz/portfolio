import { ProjectCard } from "../ProjectCard";
import { Section } from "../Section";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <Section id="projects" label="Proyectos">
      <ul className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
    </Section>
  );
}
