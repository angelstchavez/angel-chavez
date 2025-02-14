"use client";

import { EducationItem, EducationProps } from "../utils/education-item";

const EDUCATION: EducationProps[] = [
  {
    image: "/assets/sena.png",
    institution: "Servicio Nacional de Aprendizaje",
    degree: "Administrative Management Technologist",
    period: "2018 - 2021",
    url: "https://www.sena.edu.co",
  },
  {
    image: "/assets/upc.png",
    institution: "Universidad Popular del Cesar",
    degree: "Systems Engineering",
    period: "2021 - Now",
    url: "https://www.unicesar.edu.co",
  },
];

export default function Education() {
  return (
    <div className="mb-8">
      <div>
        <h2 className="text-2xl font-semibold mb-2 relative inline-block">
          Education
        </h2>
      </div>
      <div className="space-y-4">
        {EDUCATION.map((item) => (
          <EducationItem key={item.institution} {...item} />
        ))}
      </div>
    </div>
  );
}
