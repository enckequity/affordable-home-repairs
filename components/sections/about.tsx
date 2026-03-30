"use client";

import { Shield, Clock, User, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import CountUp from "@/components/ui/count-up";

const badges = [
  { icon: Shield, label: "BBB A+ Rated" },
  { icon: Clock, label: "27+ Years" },
  { icon: User, label: "Owner-Operated" },
  { icon: MapPin, label: "Locally Owned" },
];

export default function About() {
  return (
    <section id="about" className="bg-bg-alt py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left: text */}
        <ScrollReveal direction="left">
          <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
            Why Crestview Homeowners Trust Andy Watts
          </h2>

          <div className="mt-6 space-y-4 text-text-light leading-relaxed">
            <p>
              Andy Watts started working alongside his father as a kid, learning
              the fundamentals of carpentry, painting, and honest craftsmanship
              long before most people pick up their first tool. After graduating,
              he went full-time and never looked back.
            </p>
            <p>
              Over <strong className="text-text">27 years later</strong>, Andy
              has built Affordable Home Repairs LLC on a simple promise: do the
              job right the first time, charge a fair price, and treat every
              home like it&rsquo;s his own. He personally oversees every
              project — no hand-offs, no subcontractors, no surprises.
            </p>
            <p>
              Living and working in Crestview, Andy is proud to serve the
              military families stationed at{" "}
              <strong className="text-text">Eglin AFB</strong> and{" "}
              <strong className="text-text">Hurlburt Field</strong>, along with
              homeowners across the entire Florida Panhandle.
            </p>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap gap-4">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-lg border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-primary"
              >
                <Icon className="h-4 w-4 text-accent" />
                {label}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Right: decorative block with stats */}
        <ScrollReveal direction="right">
          <div className="relative flex flex-col items-center justify-center rounded-2xl bg-primary p-10 text-white lg:min-h-[420px]">
            {/* Pattern overlay */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-5"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
              }}
            />

            <div className="relative grid grid-cols-2 gap-8 text-center">
              <div>
                <CountUp
                  end={27}
                  suffix="+"
                  className="font-heading text-4xl font-bold"
                />
                <p className="mt-1 text-sm text-white/70">Years Experience</p>
              </div>
              <div>
                <CountUp
                  end={500}
                  suffix="+"
                  className="font-heading text-4xl font-bold"
                />
                <p className="mt-1 text-sm text-white/70">
                  Projects Completed
                </p>
              </div>
              <div>
                <CountUp
                  end={20}
                  suffix="+"
                  className="font-heading text-4xl font-bold"
                />
                <p className="mt-1 text-sm text-white/70">Cities Served</p>
              </div>
              <div>
                <CountUp
                  end={100}
                  suffix="%"
                  className="font-heading text-4xl font-bold"
                />
                <p className="mt-1 text-sm text-white/70">Satisfaction</p>
              </div>
            </div>

            {/* Decorative accent corner */}
            <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-2xl bg-secondary/30" />
            <div className="absolute -top-3 -left-3 h-16 w-16 rounded-xl bg-accent/30" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
