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

const WHATSAPP_URL = "https://wa.me/254720222249";

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
  { country: "Ghana", flag: "🇬🇭" },
  { country: "Rwanda", flag: "🇷🇼" },
  { country: "Senegal", flag: "🇸🇳" },
  { country: "Nigeria", flag: "🇳🇬" },
  { country: "Tanzania", flag: "🇹🇿" },
  { country: "Djibouti", flag: "🇩🇯" },
  { country: "Dubai", flag: "🇦🇪" },
  { country: "Canada", flag: "🇨🇦" },
];

const WhatsAppIcon = () => (
  <svg viewBox="3 3 26 26" className="block h-14 w-14 md:h-16 md:w-16" aria-hidden="true">
    <circle cx="16" cy="16" r="16" fill="#25D366" />
    <path
      fill="#fff"
      d="M23.4 8.5A9.4 9.4 0 0 0 7.7 19.1L6.5 25.5l6.6-1.7a9.5 9.5 0 0 0 4.5 1.1h.1a9.4 9.4 0 0 0 5.7-16.4Zm-5.7 14.8h-.1a7.8 7.8 0 0 1-4-1.1l-.3-.1-3.9 1 1-3.8-.2-.3a7.8 7.8 0 1 1 7.5 4.3Zm4.3-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.1-.2.2-.4.1a6.5 6.5 0 0 1-3.2-2.8c-.1-.2 0-.3.1-.4l.4-.4.3-.5a.5.5 0 0 0 0-.5l-.7-1.8c-.2-.4-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3c-.2.2-.9.9-.9 2.1s.9 2.5 1.1 2.7a8.8 8.8 0 0 0 3.4 3c2.1.9 2.1.6 2.5.6a2.1 2.1 0 0 0 1.5-1c.2-.5.2-.9.2-1-.1-.2-.3-.3-.5-.4Z"
    />
  </svg>
);

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
    <section className="relative h-screen min-h-[100svh] bg-deep-blue overflow-hidden">
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

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="absolute bottom-6 left-4 z-30 inline-flex items-center justify-center overflow-hidden rounded-full md:bottom-10 md:left-6"
        initial={{ opacity: 0, x: -18 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -6, 0],
          filter: [
            "drop-shadow(0 18px 30px rgba(16,185,129,0.26))",
            "drop-shadow(0 24px 38px rgba(16,185,129,0.42))",
            "drop-shadow(0 18px 30px rgba(16,185,129,0.26))",
          ],
        }}
        transition={{
          opacity: { duration: 0.45, delay: 0.7 },
          x: { duration: 0.45, delay: 0.7, ease: motionEase },
          y: { duration: 2.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          filter: { duration: 2.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        whileHover={{ scale: 1.03, x: 4 }}
        whileTap={{ scale: 0.98 }}
      >
        <WhatsAppIcon />
      </motion.a>

      <div className="relative container mx-auto flex h-full min-h-[100svh] flex-col justify-center px-4 pt-28 pb-8 lg:px-8">
        {/* Main content */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-10"
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

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#d6f5ff] font-semibold max-w-2xl mx-auto mb-8 leading-relaxed [text-shadow:0_2px_10px_rgba(0,0,0,0.9)]">
            We architect digital infrastructure, AI automation systems, and performance-driven ecosystems that power Africa's next generation of industry leaders.
          </motion.p>

          <motion.div variants={fadeUp} className="mb-8">
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
            <motion.div variants={fadeUp}>
              <RainbowBordersButton href="#contact" variant="alt" className="h-12 rounded-full px-8 text-base font-semibold min-w-[290px]">
                Start Your Digital Transformation
                <ArrowRight className="w-4 h-4 ml-1" />
              </RainbowBordersButton>
            </motion.div>
            <motion.div variants={fadeUp}>
              <RainbowBordersButton to="/technical-audit" variant="whiteFlash" className="h-12 rounded-full px-8 text-base font-semibold min-w-[240px]">
                Request Technical Audit
              </RainbowBordersButton>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="max-w-3xl mx-auto grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
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
