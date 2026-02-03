import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10 pb-16">
      {/* Intro - Texto completo y claro */}
      <section className="pt-10 space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter">
          Angel Chávez
        </h1>
        <p className="max-w-150 text-muted-foreground text-sm sm:text-base leading-relaxed">
          Soy un desarrollador de software apasionado por construir soluciones
          tecnológicas modernas y orientadas al usuario. Cuento con experiencia
          en el frontend —utilizando React y Next.js— y en el backend,
          trabajando con .NET y NestJS para el desarrollo de APIs sólidas y
          escalables.
        </p>
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold border-b border-foreground/10 hover:border-foreground transition-all pb-1"
        >
          Ver proyectos desarrollados
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </section>

      {/* Experiencia - Estructura limpia y completa */}
      <section className="space-y-6">
        <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/50">
          Experiencia Profesional
        </h2>
        <div className="space-y-8">
          {[
            {
              role: "Senior Frontend Developer",
              company: "AlphaWare SaS",
              date: "Octubre 2025 — Presente",
              desc: "Liderazgo en el desarrollo de interfaces modernas. Enfoque en rendimiento, accesibilidad y arquitecturas limpias para soluciones empresariales.",
            },
            {
              role: "Web Designer and Developer",
              company: "System Center",
              date: "Junio 2025",
              desc: "Diseño y desarrollo del sitio web corporativo enfocado en la experiencia de usuario. Implementación de catálogo de programas y sistemas de preinscripción en línea.",
            },
            {
              role: "App Developer",
              company: "MV Wok",
              date: "Octubre 2023 — Marzo 2024",
              desc: "Desarrollo de un sistema POS personalizado para la gestión de pedidos, control de inventario y reportes de ventas en un entorno de cocina oculta.",
            },
          ].map((exp, i) => (
            <div key={i} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <h3 className="text-sm font-bold uppercase tracking-tight">
                  {exp.role}{" "}
                  <span className="text-muted-foreground/40 lowercase font-normal italic">
                    en
                  </span>{" "}
                  {exp.company}
                </h3>
                <span className="text-[10px] text-muted-foreground font-medium">
                  {exp.date}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack y Educación - Información legible */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4 border-t border-border/10">
        <section className="space-y-3">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/50">
            Tecnologías
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Next.js, React, .NET, NestJS, TypeScript, Python, Flutter, SQL y
            Tailwind CSS.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/50">
            Educación
          </h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold">Ingeniería de Sistemas</p>
              <p className="text-xs text-muted-foreground">
                Universidad Popular del César • 2021 — 2026
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold">
                Tecnólogo en Gestión Administrativa
              </p>
              <p className="text-xs text-muted-foreground">
                SENA • 2018 — 2021
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Reconocimientos y Certificaciones */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="space-y-2">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/50">
            Reconocimientos
          </h2>
          <p className="text-sm text-muted-foreground italic">
            Primer puesto en el Segundo Encuentro de Investigación e Innovación
            SENA Regional Cesar.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/50">
            Certificaciones
          </h2>
          <p className="text-sm text-muted-foreground">
            Google AI Essentials, AWS Cloud, Microsoft Software Foundations y
            Backend Development.
          </p>
        </div>
      </section>
    </div>
  );
}
