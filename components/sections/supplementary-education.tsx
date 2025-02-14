import React from "react";
import { EducationItem, EducationProps } from "../utils/education-item";

const SupplementaryEducation = () => {
  const EDUCATION: EducationProps[] = [
    {
      image: "/assets/mintic.png",
      institution: "Universidad Tecnológica de Pereira",
      degree: "MINTIC 2022: Web application development",
      period: "Dic. 2022",
      url: "https://drive.google.com/file/d/1-SdVcCdlDH03ZyxrSadstqqWMmEOW-ez/view",
    },
    {
      image: "/assets/microsoft.png",
      institution: "Microsoft and LinkedIn",
      degree: "Professional Fundamentals of Software Development",
      period: "Apr. 2023",
      url: "https://www.linkedin.com/learning/certificates/4b06e608c3a98ec5394fc6a333cec539dc7d8ab5a9425153f9ca0b0135946490",
    },
    {
      image: "/assets/alura.png",
      institution: "Alura Latam",
      degree: "Oracle Next Education F2 T4 Back-end Program",
      period: "Jun. 2023",
      url: "https://app.aluracursos.com/program/certificate/fe14adff-73e7-41fb-bc40-01a90758c256",
    },
    {
      image: "/assets/google.png",
      institution: "Google",
      degree: "Cybersecurity Fundamentals",
      period: "Jul. 2024",
      url: "https://www.coursera.org/account/accomplishments/verify/97FUKZS4A666",
    },
    {
      image: "/assets/meta.png",
      institution: "Meta",
      degree: "Introduction to back-end development",
      period: "Sep. 2024",
      url: "https://www.coursera.org/account/accomplishments/verify/BRF3WQJT02OM",
    },
    {
      image: "/assets/google.png",
      institution: "Google",
      degree: "Google AI Essentials",
      period: "Sep. 2024",
      url: "https://www.coursera.org/account/accomplishments/records/AXUZACZFVTXB",
    },
    {
      image: "/assets/california.png",
      institution:
        "University of California, Irvine - The Paul Merage School of Business",
      degree: "How to solve problems and make decisions effectively",
      period: "Sep. 2024",
      url: "https://www.coursera.org/account/accomplishments/verify/WF2L2SX9N8X5",
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
