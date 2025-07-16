"use client";

import type React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ExternalLink from "@/components/ui/external-link";

import systemcenter from "@/assets/icons/systemcenter.jpg";

import sena from "@/assets/icons/sena.png";
import upc from "@/assets/icons/upc.png";
import mintic from "@/assets/icons/mintic.png";

interface Project {
  icon: React.ReactNode;
  id: string;
  href: string;
}

interface Education {
  icon: React.ReactNode;
  id: string;
  href: string;
}

export default function PortfolioPage() {
  const t = useTranslations("portfolioPage");
  const projects: Project[] = [
    {
      icon: (
        <div className="rounded text-primary shadow-sm">
          <div className="relative w-12 h-12">
            <Image
              src={systemcenter}
              alt="University icon"
              fill
              className="object-cover rounded"
            />
          </div>
        </div>
      ),
      id: "project1",
      href: "https://www.systemcenter.edu.co",
    },
  ];
  const education: Education[] = [
    {
      icon: (
        <div className="rounded text-primary shadow-sm">
          <div className="relative w-12 h-12">
            <Image
              src={upc}
              alt="University icon"
              fill
              className="object-cover rounded"
            />
          </div>
        </div>
      ),
      id: "education1",
      href: "#",
    },
    {
      icon: (
        <div className="rounded text-primary shadow-sm">
          <div className="relative w-12 h-12">
            <Image
              src={sena}
              alt="University icon"
              fill
              className="object-cover rounded"
            />
          </div>
        </div>
      ),
      id: "education2",
      href: "#",
    },
    {
      icon: (
        <div className="rounded text-primary shadow-sm">
          <div className="relative w-12 h-12">
            <Image
              src={mintic}
              alt="University icon"
              fill
              className="object-cover rounded"
            />
          </div>
        </div>
      ),
      id: "education3",
      href: "#",
    },
  ];

  const aboutMe = t("aboutMe");
  return (
    <main className="mx-auto px-4">
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-3">{t("aboutMeSectionTitle")}</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {aboutMe}
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-3">
          {t("featuredProjectsSectionTitle")}
        </h2>
        <div className="grid gap-4">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.href}
              className="flex items-center justify-between p-2 rounded-md hover:bg-muted/40 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="rounded bg-primary/10 text-primary">
                  {project.icon}
                </div>
                <div>
                  <h3 className="font-medium text-base">
                    {t(`projects.${project.id}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(`projects.${project.id}.description`)}
                  </p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
        <div className="mt-4 text-right">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm hover:underline"
          >
            {t("viewAllProjects")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-3">
          {t("latestEducationSectionTitle")}
        </h2>
        <div className="grid gap-3">
          {education.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center justify-between p-2 rounded-md hover:bg-muted/40 transition-colors group"
            >
              <div className="flex items-center gap-3">
                {" "}
                <div className="rounded bg-primary/10 text-primary">
                  {" "}
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium text-base">
                    {t(`education.${item.id}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(`education.${item.id}.date`)}
                  </p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
        <div className="mt-4 text-right">
          <Link
            href="/education"
            className="inline-flex items-center gap-2 text-sm hover:underline"
          >
            {t("viewAllEducation")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
