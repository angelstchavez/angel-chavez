import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface Education {
  image: string;
  institution: string;
  degree: string;
  period: string;
}

const EDUCATION: Education[] = [
  {
    image: "/assets/sena.png",
    institution: "Servicio Nacional de Aprendizaje",
    degree: "Administrative Management Technologist",
    period: "2018 - 2021",
  },
  {
    image: "/assets/upc.png",
    institution: "Universidad Popular del Cesar",
    degree: "Systems Engineering",
    period: "2021 - Now",
  },
];

export default function Education() {
  return (
    <div className="mb-8">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
      </div>
      <div className="space-y-4">
        {EDUCATION.map((item) => (
          <EducationItem key={item.institution} {...item} />
        ))}
      </div>
    </div>
  );
}

export function EducationItem({ image, institution, degree, period }: Education) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-2">
      <Avatar className="size-16 sm:size-12 border">
        <AvatarImage
          src={image || "/placeholder.svg"}
          alt={`${institution} logo`}
        />
      </Avatar>
      <div className="flex-1 space-y-1">
        <h3 className="font-semibold">{institution}</h3>
        <p className="text-sm">{degree}</p>
        <p className="text-sm text-muted-foreground sm:hidden">{period}</p>
      </div>
      <span className="hidden sm:inline-block text-sm text-muted-foreground">
        {period}
      </span>
    </div>
  );
}
