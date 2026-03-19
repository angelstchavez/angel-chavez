import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import alphaware from "@/components/images/alphaware.png";
import systemcenter from "@/components/images/systemcenter.png";
import shoescol from "@/components/images/shoescol.png";
import upcboard from "@/components/images/upcboard.png";

const projects = [
  {
    title: "Alphaware SaS",
    description:
      "Diseño y desarrollo del sitio web corporativo. Enfocado en presentar servicios de desarrollo de software con una interfaz limpia y profesional.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: alphaware,
    url: "https://www.alphaware.co/es",
  },
  {
    title: "System Center",
    description:
      "Plataforma web para institución educativa. Optimización de la arquitectura de información para facilitar el acceso a programas académicos.",
    tags: ["Next.js", "Tailwind CSS", "UI Design"],
    image: systemcenter,
    url: "https://systemcenter.edu.co/",
  },
  {
    title: "UPC Resultados Saber Pro",
    description:
      "Desarrollo de una aplicación web para mostrar resultados de pruebas académicas. Implementación de un diseño centrado en el usuario para mejorar la experiencia de navegación y acceso a información.",
    tags: ["Next.js", "Python", "IA"],
    image: upcboard,
    url: "https://upc-board.vercel.app",
  },
  {
    title: "Shoescol",
    description:
      "Ecommerce de calzado. Implementación de un diseño centrado en el usuario para mejorar la experiencia de compra en línea.",
    tags: ["Next.js", "Tailwind CSS", "UI Design"],
    image: shoescol,
    url: "https://shoescol.vercel.app/",
  },
];

const ProjectsPage = () => {
  return (
    <section className="space-y-12 py-10">
      <header className="space-y-3">
        <Link
          href="/"
          className="group inline-flex items-center gap-1 text-[11px] uppercase font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft
            size={12}
            className="transition-transform group-hover:-translate-x-1"
          />
          Volver al inicio
        </Link>
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tighter italic">
            Proyectos
          </h1>
          <p className="text-muted-foreground text-sm max-w-112.5 leading-relaxed">
            Una selección de trabajos donde he aplicado principios de
            arquitectura limpia y diseño centrado en el usuario.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-16">
        {projects.map((project, index) => (
          <div key={index} className="group flex flex-col space-y-4">
            <Link
              href={project.url}
              target="_blank"
              className="relative aspect-16/8 w-full overflow-hidden bg-secondary border border-foreground/5 rounded-sm group-hover:border-foreground/10 transition-colors"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                priority={index === 0}
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-[1.02]"
              />
            </Link>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold uppercase tracking-tight">
                  {project.title}
                </h3>
                <Link
                  href={project.url}
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </Link>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                {project.description}
              </p>

              <div className="flex gap-4 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-muted-foreground/50 font-mono uppercase tracking-[0.2em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="pt-8 border-t border-border/50 text-center">
        <p className="text-[10px] text-muted-foreground/40 uppercase tracking-[0.3em]">
          Estos son solo algunos de mis proyectos. ¡Hay más por venir!
        </p>
      </footer>
    </section>
  );
};

export default ProjectsPage;
