import React from "react";
import { EducationItem } from "../utils/education-item";

interface Education {
  image: string;
  institution: string;
  degree: string;
  period: string;
}

const SupplementaryEducation = () => {
  const EDUCATION: Education[] = [
    {
      image: "/assets/mintic.png",
      institution: "Universidad Tecnológica de Pereira",
      degree: "MINTIC 2022: Web application development",
      period: "Dic. 2022",
    },
    {
      image: "/assets/microsoft.png",
      institution: "Microsoft and LinkedIn",
      degree: "Professional Fundamentals of Software Development",
      period: "Apr. 2023",
    },
    {
      image: "/assets/alura.png",
      institution: "Alura Latam",
      degree: "Oracle Next Education F2 T4 Back-end Program",
      period: "Jun. 2023",
    },
    {
      image: "/assets/google.png",
      institution: "Google",
      degree: "Cybersecurity Fundamentals",
      period: "Jul. 2024",
    },
    {
      image: "/assets/meta.png",
      institution: "Meta",
      degree: "Introduction to back-end development",
      period: "Sep. 2024",
    },
    {
      image: "/assets/google.png",
      institution: "Google",
      degree: "Google AI Essentials",
      period: "Sep. 2024",
    },
    {
      image: "/assets/california.png",
      institution:
        "University of California, Irvine - The Paul Merage School of Business",
      degree: "How to solve problems and make decisions effectively",
      period: "Sep. 2024",
    },
  ];

  return (
    <div className="mb-8">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Supplementary Education</h2>
      </div>
      <div className="space-y-4">
        {EDUCATION.map((item) => (
          <EducationItem key={`${item.institution}-${item.degree}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SupplementaryEducation;
