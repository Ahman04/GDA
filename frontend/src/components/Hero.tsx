import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { RainbowBordersButton } from "@/components/ui/rainbow-borders-button";
import { InteractiveGlobe } from "@/components/ui/interactive-globe";
import { WorldMap } from "@/components/ui/world-map";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronRight, Shield } from "lucide-react";
import { useLocation } from "react-router-dom";
import hero1Image from "@/images/hero1.png";
import hero2Image from "@/images/HERO2.png";
import hero3Image from "@/images/hero3.png";
import hero4Image from "@/images/hero4.png";
import { fadeIn, fadeUp, motionEase, staggerContainer } from "@/lib/motion";

const WHATSAPP_URL = "https://wa.me/254720222249";
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

const Hero = () => {
  const location = useLocation();
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
              className="absolute inset-x-0 bottom-0 top-24 flex items-center justify-center"
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
              className="absolute inset-x-0 bottom-0 top-24 flex items-center justify-center"
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
              className="absolute inset-x-0 bottom-0 top-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img
                src={HERO_IMAGE_SLIDES[0]}
                alt="Hero background slide 1"
                className="h-full w-full object-cover object-center opacity-70"
              />
            </motion.div>
          )}
          {activeBgSlide === 3 && (
            <motion.div
              key="hero-bg-image-1"
              className="absolute inset-x-0 bottom-0 top-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img
                src={HERO_IMAGE_SLIDES[1]}
                alt="Hero background slide 2"
                className="h-full w-full object-cover object-center opacity-70"
              />
            </motion.div>
          )}
          {activeBgSlide === 4 && (
            <motion.div
              key="hero-bg-image-2"
              className="absolute inset-x-0 bottom-0 top-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img
                src={HERO_IMAGE_SLIDES[2]}
                alt="Hero background slide 3"
                className="h-full w-full object-cover object-center opacity-70"
              />
            </motion.div>
          )}
          {activeBgSlide === 5 && (
            <motion.div
              key="hero-bg-image-3"
              className="absolute inset-x-0 bottom-0 top-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img
                src={HERO_IMAGE_SLIDES[3]}
                alt="Hero background slide 4"
                className="h-full w-full object-cover object-center opacity-70"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(2,6,23,0.84)_32%,rgba(2,6,23,0.64)_56%,rgba(2,6,23,0.84)_100%)]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-x-[-10%] top-[8%] flex justify-center opacity-30"
          animate={{ scale: [1, 1.03, 1], opacity: [0.24, 0.34, 0.24] }}
          transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <div className="h-[72vh] w-[min(1500px,120vw)] rounded-full border border-cyan-400/10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1)_0%,rgba(34,211,238,0.04)_30%,rgba(2,6,23,0)_68%)]" />
        </motion.div>
        <motion.div
          className="absolute inset-x-[-6%] top-[18%] flex justify-center opacity-20"
          animate={{ scale: [1.02, 1, 1.02], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <div className="h-[58vh] w-[min(1320px,112vw)] rounded-full border border-cyan-300/10" />
        </motion.div>
        <div className="absolute inset-y-0 left-[18%] w-px bg-gradient-to-b from-transparent via-cyan-400/18 to-transparent" />
        <div className="absolute inset-y-0 right-[18%] w-px bg-gradient-to-b from-transparent via-cyan-400/18 to-transparent" />
        <motion.div
          className="absolute left-[-12%] top-[16%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18)_0%,rgba(34,211,238,0.08)_34%,rgba(2,6,23,0)_72%)] blur-3xl"
          animate={{ x: [0, 26, 0], y: [0, -14, 0], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-14%] top-[10%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.16)_0%,rgba(6,182,212,0.08)_36%,rgba(2,6,23,0)_74%)] blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 18, 0], opacity: [0.8, 0.98, 0.8] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-18%] left-1/2 h-[28rem] w-[58rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.14)_0%,rgba(6,182,212,0.06)_42%,rgba(2,6,23,0)_76%)] blur-3xl"
          animate={{ scale: [1, 1.06, 1], opacity: [0.72, 0.92, 0.72] }}
          transition={{ duration: 11, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>
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

      <div className="relative container mx-auto flex h-full min-h-[100svh] items-center justify-center px-4 pt-24 pb-8 lg:px-6 xl:px-4">
        <div className="flex w-full max-w-7xl flex-col items-center text-center">
          <motion.div
            className="flex max-w-6xl flex-col items-center"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeIn} className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Enterprise-Grade Digital Solutions</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="max-w-6xl text-4xl font-black leading-[1] text-[#e8fbff] [text-shadow:0_4px_16px_rgba(0,0,0,0.9)] md:text-5xl lg:text-6xl xl:text-[5.8rem]">
              Leading Digital{" "}
              <span className="gradient-text">Transformation</span>{" "}
              Across Africa
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg font-semibold leading-[1.75] text-[#d6f5ff] [text-shadow:0_2px_10px_rgba(0,0,0,0.9)] md:text-xl">
              We architect digital infrastructure, AI automation systems, and performance-driven ecosystems that power Africa&apos;s next generation of industry leaders.
            </motion.p>

            <motion.div variants={staggerContainer} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center">
              <motion.div variants={fadeUp}>
                <RainbowBordersButton href="#contact" variant="alt" className="h-12 rounded-full px-8 text-base font-semibold min-w-[290px]">
                  Start Your Digital Transformation
                  <ArrowRight className="w-4 h-4 ml-1" />
                </RainbowBordersButton>
              </motion.div>
              <motion.div variants={fadeUp}>
                <RainbowBordersButton
                  to="/technical-audit"
                  state={{ backgroundLocation: location }}
                  variant="whiteFlash"
                  className="h-12 rounded-full px-8 text-base font-semibold min-w-[240px]"
                >
                  Request Technical Audit
                </RainbowBordersButton>
              </motion.div>
            </motion.div>

          </motion.div>

          <motion.aside
            className="relative mt-10 mx-auto flex max-w-5xl justify-center"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <div className="relative text-center">
              <motion.div variants={fadeUp}>
                <div className="flex max-w-5xl flex-wrap justify-center gap-x-4 gap-y-5">
                  {marketPresence.map((location) => (
                    <div
                      key={location.country}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-semibold text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.9)] backdrop-blur-sm"
                    >
                      <span aria-hidden="true">{location.flag}</span>
                      <span>{location.country}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
