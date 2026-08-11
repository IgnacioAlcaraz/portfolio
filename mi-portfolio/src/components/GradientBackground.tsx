"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

export function GradientBackground() {
  const { x, y } = useMousePosition();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.07), transparent 80%)`,
      }}
    />
  );
}
