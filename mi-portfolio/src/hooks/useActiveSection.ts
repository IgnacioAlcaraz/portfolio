"use client";

import { useEffect, useState } from "react";

/**
 * Observa las secciones por id y devuelve la que está actualmente en viewport.
 * El rootMargin recorta el viewport a una banda central para que el link activo
 * cambie cuando la sección realmente ocupa el centro de la pantalla.
 */
export function useActiveSection(sectionIds: string[], initialId = sectionIds[0]) {
  const [activeSection, setActiveSection] = useState(initialId);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
