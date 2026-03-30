import { MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/constants";

const highlights: Record<string, string> = {
  Crestview: "Our hometown — where it all started.",
  "Eglin AFB": "Proudly serving military families.",
  "Hurlburt Field": "Trusted by service members and their families.",
  Destin: "Keeping beach-area homes in top shape.",
  "Fort Walton Beach": "Reliable repairs along the Emerald Coast.",
};

export default function ServiceAreas() {
  return (
    <section className="bg-primary-dark py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Proudly Serving the Florida Panhandle
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            From Crestview to the coast, we bring honest craftsmanship to every
            community we serve.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {SERVICE_AREAS.map((area) => {
            const note = highlights[area];
            return (
              <div
                key={area}
                className={`rounded-lg px-4 py-3 text-center transition ${
                  note
                    ? "bg-white/10 ring-1 ring-secondary/30"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-center gap-1.5">
                  {note && (
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-secondary" />
                  )}
                  <span className="text-sm font-semibold">{area}</span>
                </div>
                {note && (
                  <p className="mt-1 text-xs text-white/60">{note}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
