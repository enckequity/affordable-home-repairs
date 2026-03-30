"use client";

import { Quote, Star } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
            What Our Neighbors Say
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-light">
            Real feedback from real homeowners across the Florida Panhandle.
          </p>
          <div className="mt-3 flex items-center justify-center gap-1">
            <Star className="h-4 w-4 fill-secondary text-secondary" />
            <span className="text-sm font-semibold text-text-light">
              BBB A+ Rated Business
            </span>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.name} delay={0.1 * i}>
              <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <Quote className="mb-3 h-8 w-8 text-secondary/50" />
                <p className="flex-1 italic leading-relaxed text-text-light">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.location}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
