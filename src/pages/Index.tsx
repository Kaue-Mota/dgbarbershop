import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import BookingSection from "@/components/BookingSection";
import LocationSection from "@/components/LocationSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
      <BookingSection />
      <LocationSection />
      <FooterSection />
    </main>
  );
};

export default Index;
