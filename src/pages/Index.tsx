import HeroSection from "@/components/HeroSection";
import RecentEntries from "@/components/RecentEntries";
import PicturesSection from "@/components/PicturesSection";
import AboutSection from "@/components/AboutSection";
import MoodBoard from "@/components/MoodBoard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <RecentEntries />
      <PicturesSection />
      <AboutSection />
      <MoodBoard />
      <Footer />
    </div>
  );
};

export default Index;