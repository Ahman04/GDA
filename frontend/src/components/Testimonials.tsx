import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Testimonials as TestimonialsCarousel } from "@/components/ui/testimonials";

const testimonials = [
  {
    title: "Outstanding Execution",
    quote: "Go Digital Africa transformed our entire digital presence. Their infrastructure expertise and strategic approach delivered results that exceeded every projection.",
    name: "Amara Osei",
    role: "CTO, AfriPay Technologies",
    result: "340% transaction growth",
  },
  {
    title: "Strategic Partnership",
    quote: "The team's deep understanding of African markets combined with world-class technical execution makes them an invaluable strategic partner for our digital transformation.",
    name: "David Mensah",
    role: "VP Digital, TeleCom Global Africa",
    result: "150% digital subscription increase",
  },
  {
    title: "Massive Growth",
    quote: "Optirise AI revolutionized our SEO strategy. We went from page 5 to dominating page 1 across all our core keywords in just six months.",
    name: "Fatima Al-Rashid",
    role: "Head of Marketing, CrossBorder Retail Co.",
    result: "10x organic traffic growth",
  },
];

const Testimonials = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className="py-12 lg:py-16 bg-deep-blue relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-30" />

      <div ref={sectionRef} className="scroll-reveal relative container mx-auto px-4 lg:px-8">
        <div className="text-center mb-2">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-deep-blue-foreground">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>
        <TestimonialsCarousel items={testimonials} className="pt-2 pb-0" />
      </div>
    </section>
  );
};

export default Testimonials;
