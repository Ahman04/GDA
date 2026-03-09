import About from "@/components/About";
import AIAssistant from "@/components/AIAssistant";
import AnnouncementPopup from "@/components/AnnouncementPopup";
import Careers from "@/components/Careers";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AnnouncementPopup />
      <AIAssistant />
      <Hero />
      <About />
      <Impact />
      <Services limitToFeatured />
      <Products />
      <CaseStudies />
      <Testimonials />
      <Careers />
      <Footer />
    </div>
  );
};

export default Index;
