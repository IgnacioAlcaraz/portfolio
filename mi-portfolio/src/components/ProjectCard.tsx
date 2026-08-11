import { ArrowUpRightIcon, GithubIcon } from "./Icons";
import { Tag } from "./Tag";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, url, repoUrl, tags } = project;

  return (
    <li className="group relative -mx-4 rounded-md p-4 transition-colors hover:bg-slate-800/40">
      <h3 className="font-medium leading-snug text-slate-200">
        <span className="inline-flex items-baseline gap-1 transition-colors group-hover:text-teal-300">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-visible:text-teal-300"
            >
              {name}
            </a>
          ) : (
            name
          )}
          {url && (
            <ArrowUpRightIcon className="h-4 w-4 shrink-0 translate-y-0.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
          )}
        </span>
      </h3>

      <p className="mt-2 text-sm leading-normal text-slate-400">{description}</p>

      {repoUrl && (
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-3 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-teal-300 focus-visible:text-teal-300"
        >
          <GithubIcon className="h-4 w-4" />
          Código
        </a>
      )}

      <ul className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </ul>
    </li>
  );
}
