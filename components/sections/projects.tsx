import { ProjectCard } from "../utils/project-cart";

import upcBoard from "@/public/images/upc-board.png";
import vidface from "@/public/images/vidface.png";
import ecommerce from "@/public/images/ecommerce.png";
import poslite from "@/public/images/postlite.png";

const projects = [
  {
    title: "UPC Saber Pro",
    description: "Analysis of Saber Pro results in Colombia",
    technologies: ["Nextjs", "Power BI", "Python", "FastAPI"],
    websiteUrl: "https://upc-board.vercel.app/",
    sourceUrl: "https://upc-board.vercel.app/",
    image: upcBoard,
  },
  {
    title: "Vidface",
    description: "A video calling tool for seamless communication.",
    technologies: ["Nextjs", "TailwindCSS", "Clerk"],
    websiteUrl: "https://github.com/example/technofix",
    sourceUrl: "https://vidface.vercel.app/",
    image: vidface,
  },
  {
    title: "Ecommerce",
    description: "An online store for modern shopping.",
    technologies: ["Shadcn", "TailwindCSS", "TypeScript"],
    websiteUrl: "https://ecomodern.vercel.app/",
    sourceUrl: "https://ecomodern.vercel.app/",
    image: ecommerce,
  },
  {
    title: "Poslite",
    description: "Landing page for a POS system.",
    technologies: ["Nextjs", "Clerk", "TailwindCSS", "React"],
    websiteUrl: "https://poslite-opal.vercel.app/",
    sourceUrl: "https://poslite-opal.vercel.app/",
    image: poslite,
  },
];

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Featured Projects</h2>
      <p className="text-lg mb-8">
        I&apos;ve worked on a variety of projects, from simple websites to
        complex web applications. Here are a few of my favorites.
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
