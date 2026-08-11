"use client";

import { Navigation } from "./Navigation";
import { SocialLinks } from "./SocialLinks";
import { profile } from "@/data/portfolio";

interface SidebarProps {
  activeSection: string;
}

export function Sidebar({ activeSection }: SidebarProps) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[420px] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-[46px]">
          {profile.name}
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {profile.role}
        </h2>
        <p className="mt-4 max-w-xs text-sm leading-normal text-slate-400">
          {profile.tagline}
        </p>

        <Navigation activeSection={activeSection} />
      </div>

      <div className="mt-8 lg:mt-0">
        <SocialLinks />
      </div>
    </header>
  );
}
