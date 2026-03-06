import { motion } from "framer-motion";
import { MotionSection } from "@/components/ui/motion-section";
import webImage from "@/images/web.png";
import seoSemImage from "@/images/SEO & SEM.png";
import socialMediaImage from "@/images/Social Media.png";
import contentImage from "@/images/content.png";
import mobileDevelopmentImage from "@/images/mobile.png";
import googleAdsImage from "@/images/Google.png";
import trendsettingCampaignsImage from "@/images/Trendsetting Digital Campaigns.png";
import onlineReputationImage from "@/images/Online Reputation Management.png";
import { fadeUp, hoverLift, staggerContainer } from "@/lib/motion";

const services = [
  {
    title: "Social Media Management",
    desc: "We build and manage high performance social media ecosystems that increase brand visibility, audience engagement, and measurable business growth across major platforms.",
    image: socialMediaImage,
    cardClass: "border-blue-200/90 bg-blue-50/35 hover:border-blue-300",
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Our advanced SEO strategies improve search rankings, increase organic traffic, and position your brand for long term digital dominance in competitive markets.",
    image: seoSemImage,
    cardClass: "border-indigo-200/90 bg-indigo-50/35 hover:border-indigo-300",
  },
  {
    title: "Web Design & Development",
    desc: "We design and develop modern, responsive, and performance optimized websites engineered to convert visitors into customers and scale with your business.",
    image: webImage,
    cardClass: "border-emerald-200/90 bg-emerald-50/35 hover:border-emerald-300",
  },
  {
    title: "Search Engine Marketing (SEM)",
    desc: "We execute data driven paid search campaigns that deliver qualified traffic, increase conversions, and maximize return on advertising investment.",
    image: seoSemImage,
    cardClass: "border-violet-200/90 bg-violet-50/35 hover:border-violet-300",
  },
  {
    title: "Google Ads Management",
    desc: "Our certified specialists create and manage high impact Google Ads campaigns designed to drive targeted leads, boost revenue, and accelerate growth.",
    image: googleAdsImage,
    cardClass: "border-amber-200/90 bg-amber-50/35 hover:border-amber-300",
  },
  {
    title: "Trendsetting Digital Campaigns",
    desc: "We craft innovative marketing campaigns that position your brand as an industry leader while capturing attention in competitive digital environments.",
    image: trendsettingCampaignsImage,
    cardClass: "border-rose-200/90 bg-rose-50/35 hover:border-rose-300",
  },
  {
    title: "Online Reputation Management",
    desc: "We protect and strengthen your digital reputation by addressing negative visibility, enhancing brand credibility, and building trust across search platforms.",
    image: onlineReputationImage,
    cardClass: "border-lime-200/90 bg-lime-50/35 hover:border-lime-300",
  },
  {
    title: "Graphic Design & Branding",
    desc: "We develop strong visual identities, compelling brand assets, and professional marketing materials that communicate authority and differentiate your business.",
    image: contentImage,
    cardClass: "border-pink-200/90 bg-pink-50/35 hover:border-pink-300",
  },
  {
    title: "Mobile Development",
    desc: "Scalable mobile app development for Android and iOS with reliable performance and clean UX.",
    image: mobileDevelopmentImage,
    cardClass: "border-cyan-200/90 bg-cyan-50/35 hover:border-cyan-300",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-light-gray">
      <MotionSection className="container mx-auto px-4 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Our Digital <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive digital solutions designed to transform your business and accelerate growth.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={hoverLift}
              className={`card-lift group rounded-xl p-6 text-center cursor-default border ${s.cardClass}`}
            >
              <div className="mb-5 aspect-[16/10] overflow-hidden rounded-xl border border-border/50 bg-background/70 shadow-sm">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold text-foreground mb-2 text-sm leading-snug">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </MotionSection>
    </section>
  );
};

export default Services;
