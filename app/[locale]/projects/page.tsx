"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";

interface Project {
  id: string;
  image?: string;
  techStack: string[];
}

export default function ProjectsPage() {
  const t = useTranslations("projectsPage");

  const projects: Project[] = [
    {
      id: "project1",
      techStack: ["Nextjs", "Power BI", "Python", "FastAPI"],
    },
    {
      id: "project2",
      techStack: ["Nextjs", "TailwindCSS", "Clerk"],
    },
    {
      id: "project3",
      techStack: ["Shadcn", "TailwindCSS", "TypeScript"],
    },
    {
      id: "project4",
      techStack: ["Nextjs", "Clerk", "TailwindCSS", "React"],
    },
  ];

  return (
    <main className="mx-auto px-4 pb-4">
      <section className="mb-6">
        <h2 className="text-lg font-medium">{t("title")}</h2>
        <p className="text-sm text-muted-foreground mb-3">{t("description")}</p>

        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-md border overflow-hidden hover:shadow-sm transition-shadow bg-background"
            >
              <Image
                src={project.image ?? "/placeholder.svg"}
                alt={t(`projects.${project.id}.title`)}
                width={600}
                height={300}
                className="w-full h-[140px] object-cover"
                priority
              />
              <div className="p-3 flex flex-col gap-1.5">
                <div>
                  <h3 className="font-medium text-sm">
                    {t(`projects.${project.id}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {t(`projects.${project.id}.description`)}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 bg-muted rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-1">
                  <Link
                    href="#"
                    className="text-[11px] px-2 py-0.5 border rounded hover:underline"
                  >
                    🌐 {t("website")}
                  </Link>
                  <Link
                    href="#"
                    className="text-[11px] px-2 py-0.5 border rounded hover:underline"
                  >
                    💻 {t("source")}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-4 text-left">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("goBack")}
        </Link>
      </div>
    </main>
  );
}
