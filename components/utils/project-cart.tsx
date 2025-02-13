import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Code2 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  websiteUrl?: string;
  sourceUrl?: string;
}

interface ProjectImageProps {
  title: string;
  image?: string;
}

export function ProjectImage({ title, image }: ProjectImageProps) {
  if (!image) {
    return (
      <div className="aspect-video relative bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center group-hover:from-muted/60 group-hover:to-muted/60 transition-colors">
        <Code2 className="w-12 h-12 text-muted-foreground/50" />
      </div>
    );
  }

  return (
    <div className="aspect-video relative">
      <Image
        src={image || "/placeholder.svg"}
        alt={`${title} preview`}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  websiteUrl,
  sourceUrl,
}: ProjectCardProps) {
  return (
    <div className="overflow-hidden group border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <ProjectImage title={title} image={image} />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-xl font-semibold tracking-tight">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm sm:text-base mb-2 flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs sm:text-sm"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {websiteUrl && (
            <Button size="sm" asChild className="w-full sm:w-auto">
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                <ExternalLink className="h-4 w-4" />
                Website
              </a>
            </Button>
          )}
          {sourceUrl && (
            <Button size="sm" asChild className="w-full sm:w-auto">
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                <Github className="h-4 w-4" />
                Source
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
