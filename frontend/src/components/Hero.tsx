import { useEffect, useState } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { Button } from "@/components/ui/button";
import { RainbowBordersButton } from "@/components/ui/rainbow-borders-button";
import { InteractiveGlobe } from "@/components/ui/interactive-globe";
import { WorldMap } from "@/components/ui/world-map";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronRight, Shield } from "lucide-react";
import hero1Image from "@/images/hero1.png";
import hero2Image from "@/images/HERO2.png";
import hero3Image from "@/images/hero3.png";
import hero4Image from "@/images/hero4.png";
import { fadeIn, fadeUp, hoverLift, motionEase, staggerContainer } from "@/lib/motion";

const stats = [
  { value: 12, suffix: "+", label: "Years of Innovation" },
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Markets Served" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
];

const HERO_IMAGE_SLIDES = [hero1Image, hero2Image, hero3Image, hero4Image];
const TOTAL_BG_SLIDES = 2 + HERO_IMAGE_SLIDES.length;

const HERO_NETWORK_DOTS = [
  {
    start: { lat: -1.2921, lng: 36.8219, label: "Nairobi" },
    end: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
  },
  {
    start: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
    end: { lat: 43.6532, lng: -79.3832, label: "Toronto" },
  },
  {
    start: { lat: -1.2921, lng: 36.8219, label: "Nairobi" },
    end: { lat: 9.032, lng: 38.7469, label: "Addis Ababa" },
  },
  {
    start: { lat: 9.032, lng: 38.7469, label: "Addis Ababa" },
    end: { lat: 5.1521, lng: 46.1996, label: "Somalia" },
  },
  {
    start: { lat: 43.6532, lng: -79.3832, label: "Toronto" },
    end: { lat: 5.1521, lng: 46.1996, label: "Somalia" },
  },
];

const marketPresence = [
  { country: "Kenya", flag: "🇰🇪" },
  { country: "Ethiopia", flag: "🇪🇹" },
  { country: "Somalia", flag: "🇸🇴" },
  { country: "Dubai", flag: "🇦🇪" },
  { country: "Canada", flag: "🇨🇦" },
];

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <motion.div ref={ref} variants={fadeUp} whileHover={hoverLift} className="text-center">
      <div className="text-3xl md:text-4xl font-black text-primary [text-shadow:0_2px_10px_rgba(0,0,0,0.85)]">
        {count}{suffix}
      </div>
      <div className="mt-1 text-sm font-bold text-[#d6f5ff] [text-shadow:0_2px_8px_rgba(0,0,0,0.9)]">
        {label}
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const [activeBgSlide, setActiveBgSlide] = useState(0);
  const nextBackgroundSlide = () => setActiveBgSlide((prev) => (prev + 1) % TOTAL_BG_SLIDES);

  useEffect(() => {
    const interval = setInterval(() => {
      nextBackgroundSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-deep-blue overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-35" />
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence mode="wait">
          {activeBgSlide === 0 && (
            <motion.div
              key="hero-bg-globe"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <InteractiveGlobe
                size={1100}
                className="opacity-85"
                dotColor="rgba(0, 212, 255, ALPHA)"
                arcColor="rgba(0, 212, 255, 0.35)"
                markerColor="rgba(0, 212, 255, 1)"
                autoRotateSpeed={0.0016}
              />
            </motion.div>
          )}
          {activeBgSlide === 1 && (
            <motion.div
              key="hero-bg-map"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <WorldMap
                dots={HERO_NETWORK_DOTS}
                lineColor="#00d4ff"
                showLabels={false}
                className="h-[72vh] w-[min(92vw,1200px)] opacity-80"
              />
            </motion.div>
          )}
          {activeBgSlide === 2 && (
            <motion.div
              key="hero-bg-image-0"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img
                src={HERO_IMAGE_SLIDES[0]}
                alt="Hero background slide 1"
                className="h-full w-full object-cover opacity-70"
              />
            </motion.div>
          )}
          {activeBgSlide === 3 && (
            <motion.div
              key="hero-bg-image-1"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img
                src={HERO_IMAGE_SLIDES[1]}
                alt="Hero background slide 2"
                className="h-full w-full object-cover opacity-70"
              />
            </motion.div>
          )}
          {activeBgSlide === 4 && (
            <motion.div
              key="hero-bg-image-2"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img
                src={HERO_IMAGE_SLIDES[2]}
                alt="Hero background slide 3"
                className="h-full w-full object-cover opacity-70"
              />
            </motion.div>
          )}
          {activeBgSlide === 5 && (
            <motion.div
              key="hero-bg-image-3"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img
                src={HERO_IMAGE_SLIDES[3]}
                alt="Hero background slide 4"
                className="h-full w-full object-cover opacity-70"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/88 via-deep-blue/62 to-deep-blue/92" />
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.45, ease: motionEase }}
      >
      <Button
        type="button"
        size="icon"
        onClick={nextBackgroundSlide}
        aria-label="Next hero slide"
        className="absolute right-3 top-1/2 z-30 h-11 w-11 -translate-y-1/2 rounded-full bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary md:right-6 md:h-12 md:w-12"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
      </motion.div>

      <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-16">
        {/* Main content */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Enterprise-Grade Digital Solutions</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#e8fbff] leading-tight mb-6 [text-shadow:0_4px_16px_rgba(0,0,0,0.9)]">
            Leading Digital{" "}
            <span className="gradient-text">Transformation</span>{" "}
            Across Africa
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#d6f5ff] font-semibold max-w-2xl mx-auto mb-10 leading-relaxed [text-shadow:0_2px_10px_rgba(0,0,0,0.9)]">
            We architect digital infrastructure, AI automation systems, and performance-driven ecosystems that power Africa's next generation of industry leaders.
          </motion.p>

          <motion.div variants={fadeUp} className="mb-10">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#9aefff]">
              Also Based In
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {marketPresence.map((location, index) => (
                <motion.div
                  key={location.country}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: [0, -4, 0] }}
                  transition={{
                    opacity: { duration: 0.45, delay: 0.15 + index * 0.08 },
                    y: {
                      duration: 2.8,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "mirror",
                      delay: index * 0.18,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <span className="text-lg leading-none" aria-hidden="true">{location.flag}</span>
                  <span className="text-sm font-semibold text-white">{location.country}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} variants={fadeUp}>
            <RainbowBordersButton href="#contact" variant="alt" className="h-12 rounded-full px-8 text-base font-semibold min-w-[290px]">
              Start Your Digital Transformation
              <ArrowRight className="w-4 h-4 ml-1" />
            </RainbowBordersButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} variants={fadeUp}>
            <RainbowBordersButton to="/technical-audit" variant="whiteFlash" className="h-12 rounded-full px-8 text-base font-semibold min-w-[240px]">
              Request Technical Audit
            </RainbowBordersButton>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
