import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "@/pages/About";
import CaseStudiesPage from "@/pages/CaseStudies";
import Index from "@/pages/Index";
import ContactPage from "@/pages/Contact";
import CareersPage from "@/pages/Careers";
import ProductsPage from "@/pages/Products";
import ServicesPage from "@/pages/Services";
import TechnicalAuditPage from "@/pages/TechnicalAudit";
import NotFound from "@/pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/technical-audit" element={<TechnicalAuditPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
