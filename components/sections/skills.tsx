import { Badge } from "@/components/ui/badge";

const SKILLS = [
  "React",
  "Next.js",
  ".NET",
  "NestJS",
  "Typescript",
  "Node.js",
  "Python",
  "Postgres",
  "Mongo",
] as const;

export default function Skills() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </div>
  );
}
