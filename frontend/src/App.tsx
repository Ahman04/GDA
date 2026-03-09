import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation, type Location } from "react-router-dom";
import AboutPage from "@/pages/About";
import CaseStudiesPage from "@/pages/CaseStudies";
import Index from "@/pages/Index";
import ContactPage from "@/pages/Contact";
import CareersPage from "@/pages/Careers";
import ProductsPage from "@/pages/Products";
import ServicesPage from "@/pages/Services";
import TechnicalAuditModal from "@/components/TechnicalAuditModal";
import NotFound from "@/pages/NotFound";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/technical-audit") return;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location } | undefined;
  const isTechnicalAuditModal = location.pathname === "/technical-audit";
  const routedLocation = (state?.backgroundLocation ||
    (isTechnicalAuditModal ? { ...location, pathname: "/" } : location)) as Location;

  return (
    <>
    <AnimatePresence mode="wait">
      <motion.div
        key={routedLocation.pathname}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={routedLocation}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
    <AnimatePresence>
      {isTechnicalAuditModal ? (
        <Routes>
          <Route path="/technical-audit" element={<TechnicalAuditModal />} />
        </Routes>
      ) : null}
    </AnimatePresence>
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <AnimatedRoutes />
  </BrowserRouter>
);

export default App;
