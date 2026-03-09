import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import TurboSquadSection from "@/components/TurboSquadSection";
import WhyTurboSection from "@/components/WhyTurboSection";
import IngredientStorySection from "@/components/IngredientStorySection";
import BrandTransitionDivider from "@/components/BrandTransitionDivider";
import PopsiHeroSection from "@/components/PopsiHeroSection";
import PopsiFlavorSection from "@/components/PopsiFlavorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OurStorySection from "@/components/OurStorySection";
import ExpansionSection from "@/components/ExpansionSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MarqueeTicker />
      <TurboSquadSection />
      <WhyTurboSection />
      <IngredientStorySection />
      <BrandTransitionDivider />
      <PopsiHeroSection />
      <PopsiFlavorSection />
      <TestimonialsSection />
      <OurStorySection />
      <ExpansionSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
