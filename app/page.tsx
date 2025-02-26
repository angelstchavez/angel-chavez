import { ContactMe } from "@/components/sections/contact-me";
import Education from "@/components/sections/education";
import Github from "@/components/sections/github";
import Header from "@/components/sections/header";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import SupplementaryEducation from "@/components/sections/supplementary-education";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Header />
      <Skills />
      <Education />
      <SupplementaryEducation />
      <Projects />
      <Github />
      <ContactMe />
    </div>
  );
}
