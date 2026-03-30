"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Home } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Home
            className={`h-7 w-7 transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-white"
            }`}
          />
          <span
            className={`font-heading text-lg font-bold leading-tight transition-colors duration-300 md:text-xl ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            Affordable
            <br className="sm:hidden" /> Home Repairs
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                scrolled
                  ? "text-text hover:text-accent"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded bg-accent transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{COMPANY.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>

          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X
                className={`h-7 w-7 ${scrolled ? "text-text" : "text-white"}`}
              />
            ) : (
              <Menu
                className={`h-7 w-7 ${scrolled ? "text-text" : "text-white"}`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 z-40 flex flex-col bg-primary-dark/95 backdrop-blur-md lg:hidden"
          >
            {/* Close button */}
            <div className="flex justify-end px-4 py-4">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-8 w-8 text-white" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-center justify-center gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="font-heading text-2xl font-semibold text-white hover:text-secondary"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href={`tel:${COMPANY.phoneRaw}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * NAV_LINKS.length }}
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-lg font-semibold text-white"
              >
                <Phone className="h-5 w-5" />
                {COMPANY.phone}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
