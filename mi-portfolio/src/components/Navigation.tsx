"use client";

import { sections, type Section } from "@/data/portfolio";

interface NavigationProps {
  activeSection: string;
  items?: Section[];
}

export function Navigation({ activeSection, items = sections }: NavigationProps) {
  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav hidden lg:block" aria-label="Navegación principal">
      <ul className="mt-16 w-max">
        {items.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleClick(item.id)}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center py-3"
              >
                <span
                  className={`mr-4 h-px transition-all duration-200 ease-out motion-reduce:transition-none ${
                    isActive
                      ? "w-16 bg-slate-200"
                      : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"
                  }`}
                />
                <span
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                    isActive
                      ? "text-slate-200"
                      : "text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
