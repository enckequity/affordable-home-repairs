import { Phone, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function CTABand() {
  return (
    <section className="bg-accent py-16 text-white lg:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">
          A Job Done Right the First Time — Every Time
        </h2>
        <p className="mt-4 text-lg text-white/90">
          Call Andy today for a free, no-obligation estimate
        </p>

        <p className="mt-6 font-heading text-4xl font-bold tracking-wide md:text-5xl">
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="hover:underline underline-offset-4"
          >
            {COMPANY.phone}
          </a>
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-accent transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
          <a
            href={COMPANY.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-white hover:text-accent"
          >
            <MapPin className="h-5 w-5" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
