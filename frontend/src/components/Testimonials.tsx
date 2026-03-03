import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Go Digital Africa transformed our entire digital presence. Their infrastructure expertise and strategic approach delivered results that exceeded every projection.",
    name: "Amara Osei",
    position: "CTO",
    company: "AfriPay Technologies",
    result: "340% transaction growth",
  },
  {
    quote: "The team's deep understanding of African markets combined with world-class technical execution makes them an invaluable strategic partner for our digital transformation.",
    name: "David Mensah",
    position: "VP Digital",
    company: "TeleCom Global Africa",
    result: "150% digital subscription increase",
  },
  {
    quote: "Optirise AI revolutionized our SEO strategy. We went from page 5 to dominating page 1 across all our core keywords in just six months.",
    name: "Fatima Al-Rashid",
    position: "Head of Marketing",
    company: "CrossBorder Retail Co.",
    result: "10x organic traffic growth",
  },
];

const Testimonials = () => {
  const sectionRef = useScrollReveal();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[active];

  return (
    <section className="py-20 lg:py-28 bg-deep-blue relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 hero-grid opacity-30" />

      <div ref={sectionRef} className="scroll-reveal relative container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-deep-blue-foreground">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Glass card */}
          <div className="bg-deep-blue-foreground/5 backdrop-blur-md border border-deep-blue-foreground/10 rounded-2xl p-8 md:p-12 text-center transition-all duration-500">
            <Quote className="w-10 h-10 text-primary/40 mx-auto mb-6" />
            <p className="text-lg md:text-xl text-deep-blue-foreground/90 leading-relaxed mb-8 min-h-[120px]">
              "{t.quote}"
            </p>
            <div className="mb-2">
              <span className="font-bold text-deep-blue-foreground">{t.name}</span>
              <span className="text-deep-blue-foreground/50 mx-2">·</span>
              <span className="text-deep-blue-foreground/60">{t.position}, {t.company}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full px-3 py-1">
              {t.result}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === active ? "bg-primary w-8" : "bg-deep-blue-foreground/30"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
