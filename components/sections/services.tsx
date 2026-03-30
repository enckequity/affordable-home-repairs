"use client";

import {
  Wrench,
  Hammer,
  Paintbrush,
  PaintBucket,
  Home,
  Square,
  DoorOpen,
  Building2,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Hammer,
  Paintbrush,
  PaintBucket,
  Home,
  Square,
  DoorOpen,
  Building2,
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
            What We Do
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-light">
            From quick fixes to full-room transformations, Andy Watts delivers
            quality craftsmanship across the Florida Panhandle.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Wrench;
            const isFeatured = service.featured;

            return (
              <ScrollReveal key={service.id} delay={0.08 * i}>
                <div
                  className={`group relative flex h-full flex-col rounded-xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    isFeatured
                      ? "border-accent ring-1 ring-accent/20"
                      : "border-gray-100"
                  }`}
                >
                  {isFeatured && (
                    <span className="absolute -top-3 right-4 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-white">
                      Specialty Service
                    </span>
                  )}

                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-light">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
