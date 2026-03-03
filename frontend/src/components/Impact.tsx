import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BadgeCheck, CalendarDays, Globe2, BriefcaseBusiness } from "lucide-react";

const impactStats = [
  {
    icon: BriefcaseBusiness,
    value: "250+",
    title: "Projects Completed",
    description: "Successfully delivered solutions",
    cardClass: "border-blue-200 bg-blue-50/70",
    iconWrapClass: "bg-blue-100",
    iconClass: "text-blue-700",
    valueClass: "text-blue-700",
  },
  {
    icon: CalendarDays,
    value: "12+",
    title: "Years Experience",
    description: "Of excellence in digital transformation",
    cardClass: "border-emerald-200 bg-emerald-50/70",
    iconWrapClass: "bg-emerald-100",
    iconClass: "text-emerald-700",
    valueClass: "text-emerald-700",
  },
  {
    icon: Globe2,
    value: "15+",
    title: "Markets Served",
    description: "Across Africa and global markets",
    cardClass: "border-violet-200 bg-violet-50/70",
    iconWrapClass: "bg-violet-100",
    iconClass: "text-violet-700",
    valueClass: "text-violet-700",
  },
  {
    icon: BadgeCheck,
    value: "95%",
    title: "Client Satisfaction",
    description: "Measured through long-term outcomes",
    cardClass: "border-amber-200 bg-amber-50/70",
    iconWrapClass: "bg-amber-100",
    iconClass: "text-amber-700",
    valueClass: "text-amber-700",
  },
];

const Impact = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="h-full w-full bg-[radial-gradient(circle_at_2px_2px,hsl(250_70%_80%/.35)_1px,transparent_0)] [background-size:30px_30px]" />
      </div>
      <div ref={sectionRef} className="scroll-reveal relative container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-blue-700 via-emerald-600 to-violet-600 bg-clip-text text-transparent">
              Impact Highlights
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 font-medium">
            Colorful metrics that showcase growth, consistency, and client success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((item) => (
            <article
              key={item.title}
              className={`rounded-2xl border p-7 text-center shadow-sm card-lift ${item.cardClass}`}
            >
              <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full ${item.iconWrapClass}`}>
                <item.icon className={`h-8 w-8 ${item.iconClass}`} />
              </div>
              <p className={`text-5xl font-black leading-none mb-3 ${item.valueClass}`}>{item.value}</p>
              <h3 className="text-2xl font-extrabold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
