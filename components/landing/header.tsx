/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { LanguageToggle } from "@/components/language/language-toggle";
import photo from "@/assets/icons/photo.jpg";

export function Header() {
  const t = useTranslations("portfolioPage");
  const name = t("name");
  const title = t("title");

  return (
    <header className="container mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img
            src={photo.src}
            alt={name}
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
        <div>
          <h1 className="text-xl font-semibold">{name}</h1>
          <p className="text-muted-foreground text-sm">{title}</p>
        </div>
      </div>
      <nav className="flex items-center gap-4 text-sm">
        <Link href="/projects" className="hover:underline">
          {t("projectsLink")}
        </Link>
        <Link href="/education" className="hover:underline">
          {t("educationLink")}
        </Link>
        <LanguageToggle />
        <ThemeToggle />
      </nav>
    </header>
  );
}
