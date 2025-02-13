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
      <div className="aspect-[3/1.5] relative bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center group-hover:from-muted/60 group-hover:to-muted/60 transition-colors">
        <Code2 className="w-8 h-8 text-muted-foreground/50" />
      </div>
    );
  }

  return (
    <div className="relative">
      <Image
        src={image || "/placeholder.svg"}
        alt={`${title} preview`}
        fill
        className="aspect-3/2 object-cover transition-transform duration-300 group-hover:scale-105"
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
      <div className="relative overflow-hidden">
        <ProjectImage title={title} image={image} />
      </div>
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="text-muted-foreground text-sm mb-2 flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-1 mb-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-1 mt-auto">
          {websiteUrl && (
            <Button size="sm" asChild className="w-full sm:w-auto">
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                <ExternalLink className="h-3 w-3 mr-1" />
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
                <Github className="h-3 w-3 mr-1" />
                Source
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
