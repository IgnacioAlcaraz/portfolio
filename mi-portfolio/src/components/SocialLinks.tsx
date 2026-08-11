import { GithubIcon, LinkedInIcon, MailIcon } from "./Icons";
import { socialLinks, type SocialLink } from "@/data/portfolio";

const icons = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
} as const;

interface SocialLinksProps {
  links?: SocialLink[];
}

export function SocialLinks({ links = socialLinks }: SocialLinksProps) {
  return (
    <ul className="flex items-center gap-5">
      {links.map((link) => {
        const Icon = icons[link.icon];
        const isExternal = link.url.startsWith("http");

        return (
          <li key={link.name}>
            <a
              href={link.url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer noopener" : undefined}
              aria-label={link.name}
              title={link.name}
              className="block text-slate-500 transition-colors hover:text-slate-200 focus-visible:text-slate-200"
            >
              <Icon className="h-6 w-6" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
