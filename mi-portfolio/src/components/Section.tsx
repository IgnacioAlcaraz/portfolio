interface SectionProps {
  id: string;
  label: string;
  children: React.ReactNode;
}

/**
 * Wrapper común de las secciones: en mobile muestra un label sticky con
 * backdrop-blur, en desktop el label queda oculto (lo reemplaza la Navigation).
 */
export function Section({ id, label, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          {label}
        </h2>
      </div>

      <div>{children}</div>
    </section>
  );
}
