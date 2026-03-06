import About from "@/components/About";
import AIAssistant from "@/components/AIAssistant";
import AnnouncementPopup from "@/components/AnnouncementPopup";
import Careers from "@/components/Careers";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Insights from "@/components/Insights";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Team from "@/components/Team";
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
      <Services />
      <Team />
      <Products />
      <Process />
      <CaseStudies />
      <Testimonials />
      <Insights />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
