import { HeroSection } from "@/components/hero-section";
import ProjectCollaboration from "@/components/project-collabolation";
import ProjectSection from "@/components/projects-section";
import ShareBurningIdea from "@/components/share-burning-idea";
import StartBuildingSection from "@/components/start-building";
import ProductsSection from "@/components/products-section";
import StartupsSection from "@/components/startups-section";
import CollaboratorsSection from "@/components/collaborators-section";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <ProjectSection />
      <ProjectCollaboration />
      <ShareBurningIdea />
      <ProductsSection />
      <StartBuildingSection />
      <StartupsSection />
      <CollaboratorsSection />
      <Footer />
    </div>
  );
}
