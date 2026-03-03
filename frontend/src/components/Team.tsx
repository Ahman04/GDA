import { useScrollReveal } from "@/hooks/useScrollReveal";

const teamMembers = [
  {
    name: "Amina Njoroge",
    role: "Digital Strategy Lead",
    whatTheyDo: "Defines transformation roadmaps aligned with business outcomes and market growth goals.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    cardClass: "border-blue-200/90 bg-blue-50/35 hover:border-blue-300",
    roleClass: "text-blue-700 bg-blue-100",
  },
  {
    name: "David Mwangi",
    role: "Web & Software Engineer",
    whatTheyDo: "Builds secure, scalable web platforms and custom software systems for enterprise operations.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    cardClass: "border-emerald-200/90 bg-emerald-50/35 hover:border-emerald-300",
    roleClass: "text-emerald-700 bg-emerald-100",
  },
  {
    name: "Fatima Abdi",
    role: "SEO & Growth Specialist",
    whatTheyDo: "Leads SEO and performance campaigns that increase visibility, leads, and qualified traffic.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    cardClass: "border-violet-200/90 bg-violet-50/35 hover:border-violet-300",
    roleClass: "text-violet-700 bg-violet-100",
  },
  {
    name: "Joseph Otieno",
    role: "Social Media Manager",
    whatTheyDo: "Designs social media campaigns that connect with audiences and drive conversion-focused engagement.",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
    cardClass: "border-amber-200/90 bg-amber-50/35 hover:border-amber-300",
    roleClass: "text-amber-700 bg-amber-100",
  },
  {
    name: "Leila Hassan",
    role: "Content & Creative Lead",
    whatTheyDo: "Owns content strategy, creative direction, and storytelling that supports sustained digital growth.",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    cardClass: "border-rose-200/90 bg-rose-50/35 hover:border-rose-300",
    roleClass: "text-rose-700 bg-rose-100",
  },
];

const Team = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="team" className="py-20 lg:py-28 bg-light-gray relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="h-full w-full bg-[radial-gradient(circle_at_2px_2px,hsl(190_80%_70%/.3)_1px,transparent_0)] [background-size:26px_26px]" />
      </div>
      <div ref={sectionRef} className="scroll-reveal relative container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Team</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            The People Behind the Results
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the specialists driving strategy, technology, and growth across every project.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className={`card-lift rounded-2xl border p-5 shadow-sm ${member.cardClass}`}
            >
              <div className="h-52 rounded-xl overflow-hidden border border-border/50 bg-white/70 mb-4">
                <img
                  src={member.image}
                  alt={`${member.name} portrait`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-extrabold text-foreground text-lg leading-tight">{member.name}</h3>
              <p className={`inline-block mt-2 rounded-full px-3 py-1 text-xs font-bold ${member.roleClass}`}>
                {member.role}
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{member.whatTheyDo}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
