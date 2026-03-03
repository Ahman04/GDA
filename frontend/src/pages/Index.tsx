import About from "@/components/About";
import Careers from "@/components/Careers";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
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
