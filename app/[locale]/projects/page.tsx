"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";
import { FiGlobe, FiGithub } from "react-icons/fi";

import alphaware from "@/assets/images/alphaware-project.png";
import systemcenter from "@/assets/images/systemcenter-project.png";
import shoescol from "@/assets/images/shoescol-project.png";

interface Project {
  id: string;
  image?: string | StaticImageData;
  techStack: string[];
  websiteUrl?: string;
  repositoryUrl?: string;
}

export default function ProjectsPage() {
  const t = useTranslations("projectsPage");

  const projects: Project[] = [
    {
      id: "project1",
      techStack: ["Nextjs", "Shadcn", "Tailwind"],
      image: alphaware,
      websiteUrl: "https://www.alphaware.co/es",
    },
    {
      id: "project2",
      techStack: ["Nextjs", "Shadcn", "Tailwind"],
      image: systemcenter,
      websiteUrl: "https://www.systemcenter.edu.co",
    },
    {
      id: "project3",
      techStack: ["Nextjs", "TailwindCSS", "WhatsApp API"],
      image: shoescol,
      websiteUrl: "https://shoescol.vercel.app/",
    },
    {
      id: "project4",
      techStack: ["Shadcn", "TailwindCSS", "TypeScript"],
      websiteUrl: "https://example.com/project3",
      repositoryUrl: "https://github.com/username/project3",
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
              <div className="relative w-full h-[150px] w-a bg-muted">
                <Image
                  src={project.image ?? "/placeholder.svg"}
                  alt={t(`projects.${project.id}.title`)}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
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
                  {project.websiteUrl && (
                    <Link
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 border rounded hover:underline"
                    >
                      <FiGlobe className="h-3 w-3" />
                      {t("website")}
                    </Link>
                  )}
                  {project.repositoryUrl && (
                    <Link
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 border rounded hover:underline"
                    >
                      <FiGithub className="h-3 w-3" />
                      {t("source")}
                    </Link>
                  )}
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
