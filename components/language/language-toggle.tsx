"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import "flag-icons/css/flag-icons.min.css";

const languages = [
  { code: "en", name: "English", flag: "us" },
  { code: "es", name: "Español", flag: "es" },
];

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentLocale = pathname.split("/")[1] || "es";

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split("/");
    if (segments[1] === currentLocale) {
      segments.splice(1, 1);
    }
    segments.splice(1, 0, newLocale);
    const newPath = segments.join("/");
    router.push(newPath);
  };

  const currentFlag =
    languages.find((lang) => lang.code === currentLocale)?.flag || "es";

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span
          aria-label="Toggle language"
          className={`fi fi-${currentFlag} cursor-pointer text-xl`}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
          >
            <span className={`fi fi-${language.flag}`} />
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
