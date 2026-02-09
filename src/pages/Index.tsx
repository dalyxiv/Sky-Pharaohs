import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import FlightPlanSection from "@/components/FlightPlanSection";
import FleetSection from "@/components/FleetSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <ExperienceSection />
      <FlightPlanSection />
      <FleetSection />
      <FooterSection />
    </main>
  );
};

export default Index;
