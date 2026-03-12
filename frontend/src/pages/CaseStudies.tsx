import CaseStudies from "@/components/CaseStudies";
import PageLayout from "@/components/PageLayout";
import Testimonials from "@/components/Testimonials";

const CaseStudiesPage = () => {
  return (
    <PageLayout>
      {/* Reuse the homepage case study section without the redundant "view all" CTA. */}
      <CaseStudies showViewAll={false} />
      <Testimonials />
    </PageLayout>
  );
};

export default CaseStudiesPage;
