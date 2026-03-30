"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import Button from "@/components/ui/button";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Website Inquiry from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
  };

  const inputClasses =
    "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition";

  return (
    <section id="contact" className="bg-bg-alt py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-light">
            Ready for your free estimate? Call, email, or fill out the form
            below.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {/* Left: info + map */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              {/* Contact cards */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">Phone</p>
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="text-sm text-text-light hover:text-accent transition-colors"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">Email</p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-sm text-text-light hover:text-accent transition-colors"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">Address</p>
                  <a
                    href={COMPANY.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-light hover:text-accent transition-colors"
                  >
                    {COMPANY.address}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">Hours</p>
                  {Object.entries(COMPANY.hours).map(([days, hours]) => (
                    <p key={days} className="text-sm text-text-light">
                      <span className="font-medium">{days}:</span> {hours}
                    </p>
                  ))}
                </div>
              </div>

              {/* Service areas */}
              <div className="pt-4">
                <p className="text-sm font-semibold text-text">
                  Service Areas
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {SERVICE_AREAS.slice(0, 12).map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {area}
                    </span>
                  ))}
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    + {SERVICE_AREAS.length - 12} more
                  </span>
                </div>
              </div>

              {/* Map */}
              <div className="mt-6 overflow-hidden rounded-xl">
                <iframe
                  title="Affordable Home Repairs location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3419.9!2d-86.55!3d30.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQ1JzM2LjAiTiA4NsKwMzMnMDAuMCJX!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right: form */}
          <ScrollReveal direction="right">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100"
            >
              <h3 className="font-heading text-xl font-bold text-primary">
                Request a Free Estimate
              </h3>
              <p className="mt-1 text-sm text-text-muted">
                We&rsquo;ll get back to you within one business day.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-text"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-medium text-text"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(850) 555-0123"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-text"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-text"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Describe your project or repair needs..."
                    value={formData.message}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <Button type="submit" variant="accent" size="lg" className="w-full">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
