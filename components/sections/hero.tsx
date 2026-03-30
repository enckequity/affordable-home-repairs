"use client";

import { motion } from "framer-motion";
import { ChevronDown, Phone, ArrowRight } from "lucide-react";
import CountUp from "@/components/ui/count-up";
import Button from "@/components/ui/button";
import { STATS, COMPANY } from "@/lib/constants";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      {/* Subtle texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-5xl px-4 text-center"
      >
        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-heading text-4xl font-bold leading-tight drop-shadow-lg md:text-5xl lg:text-6xl"
          style={{ color: "#ffffff", textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}
        >
          27 Years of Honest Home Repairs
          <br className="hidden sm:block" />
          <span className="text-white"> — Done Right the First Time</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-secondary-light/90 md:text-xl"
        >
          BBB A+ Rated &middot; Crestview, FL &middot; Handyman, Carpentry,
          Painting, Roof Repair &amp; Cabinet Refinishing
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <CountUp
                end={stat.value}
                suffix={stat.suffix}
                className="font-heading text-3xl font-bold text-white md:text-4xl"
              />
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button variant="accent" size="lg" href="#contact">
            <Phone className="h-5 w-5" />
            Get a Free Estimate
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href="#gallery"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            View Our Work
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 text-white/60" />
      </motion.a>
    </section>
  );
}
