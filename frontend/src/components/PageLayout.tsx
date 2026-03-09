import type { ReactNode } from "react";

import AIAssistant from "@/components/AIAssistant";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AIAssistant />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
