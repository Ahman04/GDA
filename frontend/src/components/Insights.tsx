import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    category: "AI & Automation",
    title: "How AI is Reshaping Enterprise Operations Across Africa",
    excerpt: "Explore the transformative impact of AI automation on operational efficiency in African enterprises.",
    date: "Feb 2026",
  },
  {
    category: "Digital Infrastructure",
    title: "Building Cloud-Native Architectures for Emerging Markets",
    excerpt: "A technical deep-dive into designing resilient cloud infrastructure for high-growth African markets.",
    date: "Jan 2026",
  },
  {
    category: "Performance Marketing",
    title: "The Data-Driven Playbook for Cross-Border Digital Growth",
    excerpt: "Strategic frameworks for scaling digital marketing campaigns across multiple African markets.",
    date: "Dec 2025",
  },
];

const Insights = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div ref={sectionRef} className="scroll-reveal container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Insights</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Latest <span className="gradient-text">Thinking</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <article
              key={p.title}
              className="card-lift group bg-card border border-border rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="img-zoom-container h-48 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  alt={p.title}
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{p.category}</span>
                  <span className="text-xs text-muted-foreground">{p.date}</span>
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.excerpt}</p>
                <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
