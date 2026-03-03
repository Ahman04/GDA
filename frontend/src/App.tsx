import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "@/pages/Index";
import CareersPage from "@/pages/Careers";
import NotFound from "@/pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
