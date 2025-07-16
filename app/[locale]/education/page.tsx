/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

// Import your certification images
import sena from "@/assets/icons/sena.png";
import upc from "@/assets/icons/upc.png";
import mintic from "@/assets/icons/mintic.png";
import alura from "@/assets/icons/alura.png";
import microsoft from "@/assets/icons/microsoft.png";
import meta from "@/assets/icons/meta.png";
import google from "@/assets/icons/google.png";
import california from "@/assets/icons/california.png";

interface Certification {
  id: string;
  image: any;
  alt: string;
}

export default function EducationPage() {
  const t = useTranslations("educationPage");

  const certifications: Certification[] = [
    {
      id: "cert1",
      image: upc,
      alt: "Universidad Popular del cesar",
    },
    {
      id: "cert2",
      image: sena,
      alt: "Servicio Nacional de Aprendizaje SENA",
    },
    {
      id: "cert3",
      image: mintic,
      alt: "MinTIC - Universidad Tecnológica de Pereira",
    },
    {
      id: "cert4",
      image: microsoft,
      alt: "Microsoft and LinkedIn",
    },
    {
      id: "cert5",
      image: alura,
      alt: "Alura Latam",
    },
    {
      id: "cert6",
      image: google,
      alt: "Google",
    },
    {
      id: "cert7",
      image: meta,
      alt: "Meta",
    },
    {
      id: "cert8",
      image: google,
      alt: "Google AI Essentials",
    },
    {
      id: "cert9",
      image: california,
      alt: "University of California, Irvine",
    },
  ];

  return (
    <main className="mx-auto px-4 pb-4">
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-3">
          {t("certificationsSectionTitle")}
        </h2>
        <div className="grid gap-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 rounded-md hover:bg-muted/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="rounded bg-primary/10 text-primary shadow-sm">
                  <div className="relative w-10 h-10">
                    <Image
                      src={cert.image}
                      alt={cert.alt}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-base">
                    {t(`certifications.${cert.id}.institution`)}
                  </h3>
                  <p className="text-sm">
                    {t(`certifications.${cert.id}.title`)}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {t(`certifications.${cert.id}.date`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-6 text-left">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("viewProjectsLink")}
        </Link>
      </div>
    </main>
  );
}
