import CaseStudies from "@/components/CaseStudies";
import PageLayout from "@/components/PageLayout";
import Testimonials from "@/components/Testimonials";

const CaseStudiesPage = () => {
  return (
    <PageLayout>
      <CaseStudies showViewAll={false} />
      <Testimonials />
    </PageLayout>
  );
};

export default CaseStudiesPage;
