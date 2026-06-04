import CustomCursor from "@/components/common/CustomCursor";
import ScrollProgress from "@/components/common/ScrollProgress";
import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import EngineeringSection from "@/components/sections/EngineeringSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[var(--bg-primary)]">
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EngineeringSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
