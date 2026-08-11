"use client";

import {
  AboutSection,
  EducationSection,
  ExperienceSection,
  GradientBackground,
  ProjectsSection,
  Sidebar,
  SkillsSection,
} from "@/components";
import { sections } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";

const sectionIds = sections.map((section) => section.id);

export default function Home() {
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <GradientBackground />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar activeSection={activeSection} />

          <main className="pt-24 lg:w-1/2 lg:flex-1 lg:py-24">
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <SkillsSection />
            <EducationSection />
          </main>
        </div>
      </div>
    </>
  );
}
