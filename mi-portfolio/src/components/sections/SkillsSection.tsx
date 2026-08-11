import { Section } from "../Section";
import { Tag } from "../Tag";
import { skills } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <Section id="skills" label="Habilidades">
      <div className="space-y-6">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              {group.category}
            </h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
