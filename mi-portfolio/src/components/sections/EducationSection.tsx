import { Section } from "../Section";
import { certifications, education } from "@/data/portfolio";

export function EducationSection() {
  return (
    <Section id="education" label="Educación">
      <div className="-mx-4 rounded-md p-4 transition-colors hover:bg-slate-800/40">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {education.period}
        </p>
        <h3 className="mt-1 font-medium text-slate-200">{education.degree}</h3>
        <p className="mt-1 text-sm text-slate-400">{education.university}</p>
        <p className="mt-1 text-sm text-slate-500">{education.status}</p>
      </div>

      <h3 className="mt-10 text-sm font-semibold uppercase tracking-wide text-slate-500">
        Certificaciones
      </h3>
      <ul className="mt-3 space-y-1">
        {certifications.map((certification) => (
          <li
            key={certification.name}
            className="group -mx-4 flex flex-col gap-1 rounded-md p-4 transition-colors hover:bg-slate-800/40 sm:flex-row sm:gap-6"
          >
            <span className="min-w-[130px] pt-0.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
              {certification.date}
            </span>
            <div className="flex-1">
              <p className="font-medium leading-snug text-slate-200 transition-colors group-hover:text-teal-300">
                {certification.name}
              </p>
              <p className="mt-1 text-sm text-slate-400">
                {certification.issuer}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
