import { HeroSection } from "@/components/hero-section";
import ProjectCollaboration from "@/components/project-collabolation";
import ProjectSection from "@/components/projects-section";
import ShareBurningIdea from "@/components/share-burning-idea";
import StartBuildingSection from "@/components/start-building";

export default function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <ProjectSection />
      <ProjectCollaboration />
      <ShareBurningIdea />
      <StartBuildingSection />
    </div>
  );
}
