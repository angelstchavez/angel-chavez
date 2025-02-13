import { ProjectCard } from "../utils/project-cart";

const projects = [
  {
    title: "Pokepedia",
    description: "Pokemon app built with Sveltekit",
    technologies: ["SvelteKit", "TailwindCSS", "TypeScript"],
    websiteUrl: "https://example.com/pokepedia",
    sourceUrl: "https://github.com/example/pokepedia",
  },
  {
    title: "Techno Fix",
    description: "Static page made for a tech fix company",
    technologies: ["Astro", "TailwindCSS", "React"],
    websiteUrl: "https://example.com/technofix",
    sourceUrl: "https://github.com/example/technofix",
  },
  {
    title: "Pokepedia",
    description: "Pokemon app built with Sveltekit",
    technologies: ["SvelteKit", "TailwindCSS", "TypeScript"],
    websiteUrl: "https://example.com/pokepedia",
    sourceUrl: "https://github.com/example/pokepedia",
  },
  {
    title: "Techno Fix",
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
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
