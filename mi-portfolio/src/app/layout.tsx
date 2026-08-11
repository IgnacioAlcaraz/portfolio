import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ignacio Alcaraz — Software Developer",
  description:
    "Desarrollador de software especializado en arquitecturas backend, automatización con IA y desarrollo full-stack.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-900 leading-relaxed text-slate-400 selection:bg-blue-800/30 selection:text-slate-200">
        {children}
      </body>
    </html>
  );
}
