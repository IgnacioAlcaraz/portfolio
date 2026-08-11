import { ArrowUpRightIcon } from "./Icons";
import { Tag } from "./Tag";
import type { Experience } from "@/data/portfolio";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const { period, title, company, companyUrl, location, description, tags } =
    experience;

  return (
    <li className="group relative -mx-4 flex flex-col gap-3 rounded-md p-4 transition-colors hover:bg-slate-800/40 sm:flex-row sm:gap-6">
      <header className="min-w-[130px] pt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {period}
      </header>

      <div className="flex-1">
        <h3 className="font-medium leading-snug text-slate-200">
          <span className="inline-flex items-baseline gap-1 transition-colors group-hover:text-teal-300">
            {companyUrl ? (
              <a
                href={companyUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-visible:text-teal-300"
              >
                {title} · {company}
              </a>
            ) : (
              <>
                {title} · {company}
              </>
            )}
            <ArrowUpRightIcon className="h-4 w-4 shrink-0 translate-y-0.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
          </span>
        </h3>

        {location && (
          <p className="mt-1 text-sm text-slate-500">{location}</p>
        )}

        <p className="mt-2 text-sm leading-normal text-slate-400">
          {description}
        </p>

        <ul className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ul>
      </div>
    </li>
  );
}
