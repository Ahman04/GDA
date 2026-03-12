import Contact from "@/components/Contact";
import PageLayout from "@/components/PageLayout";

const ContactPage = () => {
  return (
    <PageLayout>
      {/* Contact owns the full page, including the map and social/contact methods. */}
      <Contact />
    </PageLayout>
  );
};

export default ContactPage;
