"use client";

import { useRouter, usePathname } from "next/navigation";
import { Check, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
];

interface LanguageToggleProps {
  icon?: boolean;
}

export function LanguageToggle({ icon = false }: LanguageToggleProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split("/");
    if (segments[1] === currentLocale) {
      segments.splice(1, 1);
    }

    segments.splice(1, 0, newLocale);
    const newPath = segments.join("/");

    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={icon ? "outline" : "ghost"}
          size={icon ? "icon" : "sm"}
          aria-label="Toggle language"
          className={cn("flex items-center gap-2", icon ? "px-2" : "px-4")}
        >
          <Globe className={icon ? "h-5 w-5" : "h-4 w-4"} />
          {!icon && (
            <span className="hidden md:inline-flex">
              {languages.find((lang) => lang.code === currentLocale)?.name ||
                "Language"}
            </span>
          )}
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={cn(
              "cursor-pointer flex items-center justify-between",
              currentLocale === language.code && "text-primary font-medium" // Resalta el seleccionado con color primario y negrita
            )}
          >
            <span>
              {language.flag} {language.name}
            </span>
            {currentLocale === language.code && (
              <Check className="ml-2 h-4 w-4" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}