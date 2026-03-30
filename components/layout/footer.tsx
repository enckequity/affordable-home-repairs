import {
  Phone,
  Mail,
  MapPin,
  Star,
  ExternalLink,
  Clock,
  ThumbsUp,
} from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICE_AREAS } from "@/lib/constants";

export default function Footer() {
  const areaColumns = [
    SERVICE_AREAS.slice(0, 7),
    SERVICE_AREAS.slice(7, 14),
    SERVICE_AREAS.slice(14),
  ];

  return (
    <footer className="bg-primary-dark text-white/90">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold text-white">
              {COMPANY.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-secondary-light">
              &ldquo;{COMPANY.tagline}&rdquo;
            </p>

            {/* BBB badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-secondary/40 px-4 py-2 text-sm font-semibold text-secondary">
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              BBB A+ Rated
            </div>

            {/* Social */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <ThumbsUp className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Yelp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <Star className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Nextdoor"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-secondary">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="inline-flex items-center gap-2 hover:text-secondary transition-colors"
                >
                  <Phone className="h-4 w-4 text-secondary" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="inline-flex items-center gap-2 hover:text-secondary transition-colors"
                >
                  <Mail className="h-4 w-4 text-secondary" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 hover:text-secondary transition-colors"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  {COMPANY.address}
                </a>
              </li>
            </ul>

            {/* Hours */}
            <h4 className="mt-8 font-heading text-sm font-bold uppercase tracking-wider text-secondary">
              Hours
            </h4>
            <ul className="mt-3 space-y-1 text-sm">
              {Object.entries(COMPANY.hours).map(([days, hours]) => (
                <li key={days} className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                  <span>
                    <span className="font-medium text-white">{days}</span>
                    <br />
                    {hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-secondary">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-secondary">
              Service Areas
            </h4>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              {areaColumns.flat().map((area) => (
                <span key={area} className="text-white/70">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          &copy; 2025 {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
