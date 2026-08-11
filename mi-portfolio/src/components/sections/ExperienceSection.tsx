import { ExperienceCard } from "../ExperienceCard";
import { Section } from "../Section";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <Section id="experience" label="Experiencia">
      <ol className="group/list space-y-8">
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.period}`}
            experience={experience}
          />
        ))}
      </ol>
    </Section>
  );
}
