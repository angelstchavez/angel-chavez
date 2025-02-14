"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useState } from "react";
import { LiaSpinnerSolid } from "react-icons/lia";

export interface EducationProps {
  image: string;
  institution: string;
  degree: string;
  period: string;
  url: string;
}

export function EducationItem({
  image,
  institution,
  degree,
  period,
  url,
}: EducationProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col sm:flex-row items-start gap-2">
      <Avatar className="size-16 sm:size-12 border relative flex items-center justify-center">
        {loading && (
          <LiaSpinnerSolid className="absolute animate-spin text-neutral-200 text-2xl" />
        )}
        <AvatarImage
          src={image || "/placeholder.svg"}
          alt={`${institution} logo`}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
          className={`${
            loading ? "opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
        />
      </Avatar>
      <div className="flex-1 space-y-1">
        <Link href={url} passHref legacyBehavior>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <h3 className="font-semibold hover:underline">{institution}</h3>
          </a>
        </Link>
        <p className="text-sm">{degree}</p>
        <p className="text-sm text-muted-foreground sm:hidden">{period}</p>
      </div>
      <span className="hidden sm:inline-block text-sm text-muted-foreground">
        {period}
      </span>
    </div>
  );
}
