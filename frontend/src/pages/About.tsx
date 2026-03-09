import About from "@/components/About";
import PageLayout from "@/components/PageLayout";
import Process from "@/components/Process";
import Team from "@/components/Team";

const AboutPage = () => {
  return (
    <PageLayout>
      <About />
      <Team />
      <Process />
    </PageLayout>
  );
};

export default AboutPage;
