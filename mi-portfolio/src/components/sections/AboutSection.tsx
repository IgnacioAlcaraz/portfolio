import { Fragment } from "react";
import { Section } from "../Section";
import { about } from "@/data/portfolio";

/** Convierte los fragmentos **entre asteriscos** en texto destacado. */
function renderHighlights(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((chunk, index) =>
    index % 2 === 1 ? (
      <span key={index} className="font-medium text-slate-200">
        {chunk}
      </span>
    ) : (
      <Fragment key={index}>{chunk}</Fragment>
    )
  );
}

export function AboutSection() {
  return (
    <Section id="about" label="Sobre mí">
      <div className="space-y-4 text-slate-400">
        {about.map((paragraph, index) => (
          <p key={index}>{renderHighlights(paragraph)}</p>
        ))}
      </div>
    </Section>
  );
}
