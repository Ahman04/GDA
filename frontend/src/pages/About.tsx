import About from "@/components/About";
import PageLayout from "@/components/PageLayout";
import Process from "@/components/Process";
import Team from "@/components/Team";

const AboutPage = () => {
  return (
    <PageLayout>
      {/* Stack the company story, people, and delivery process into one long-form page. */}
      <About />
      <Team />
      <Process />
    </PageLayout>
  );
};

export default AboutPage;
