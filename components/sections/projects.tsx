import { ProjectCard } from "../utils/project-cart";

const projects = [
  {
    title: "Demo 1",
    description: "Pokemon app built with Sveltekit",
    technologies: ["SvelteKit", "TailwindCSS", "TypeScript"],
    websiteUrl: "https://example.com/pokepedia",
    sourceUrl: "https://github.com/example/pokepedia",
  },
  {
    title: "Demo 2",
    description: "Static page made for a tech fix company",
    technologies: ["Astro", "TailwindCSS", "React"],
    websiteUrl: "https://example.com/technofix",
    sourceUrl: "https://github.com/example/technofix",
  },
  {
    title: "Demo 3",
    description: "Pokemon app built with Sveltekit",
    technologies: ["SvelteKit", "TailwindCSS", "TypeScript"],
    websiteUrl: "https://example.com/pokepedia",
    sourceUrl: "https://github.com/example/pokepedia",
  },
  {
    title: "Demo 4",
    description: "Static page made for a tech fix company",
    technologies: ["Astro", "TailwindCSS", "React"],
    websiteUrl: "https://example.com/technofix",
    sourceUrl: "https://github.com/example/technofix",
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
