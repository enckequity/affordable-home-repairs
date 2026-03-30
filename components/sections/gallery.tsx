"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  span?: string; // CSS grid row span class
}

const images: GalleryItem[] = [
  // Owner-uploaded project photos from Google My Business
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqJwt-tB9Wy16munWhd2DjMDnDH5RwXztFPSBtG48n5A5A6BpkmojhaVMt69sLJw767WbW08E5gsN413WNNTagEGqo-_Wo5nIwoHkd1A9sU_jIqz9DLBsFicCdQwE5Sclyz9oP6sFPswjWf=w800-h600-k-no",
    alt: "Interior painting and drywall work by Affordable Home Repairs in Crestview FL",
    category: "Painting",
    span: "row-span-2",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerdcHy7fT1N0ka56pWgDZHqQOoKCETfq5YoCzkD6uist7QA1T4Ic8z6MuHNGHrhLyBy7jilnGa074ggZVI9Xmc8xVxs8-dvQiJK9IRhkT1KmfV6VAX8K8_D04qX-VYu_L8Teioo=w800-h600-k-no",
    alt: "Home improvement project by Andy Watts in the Florida Panhandle",
    category: "Carpentry",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerHQqOOdC_PtFl233R6Pjnpy2WbvP5XtvDCHGNHVmIzp9C-horxGz9phZz_0KV5QhOqTvqa2vei7gbp2JdxjIV5WNhhDpyuCaR9q83wnoJFmRz_2YOECxWaj_jHVE4RLMxLxGex=w800-h600-k-no",
    alt: "Kitchen and cabinet renovation work in Okaloosa County",
    category: "Cabinets",
    span: "row-span-2",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqFdBQPhtcf_bwIUWf4N82-zgMTwlswCwA59ao5xLBsihWUkw2AYiYLho_vJEQYHfM8P3m61ua_x_OIPGzm1lxCFuxtSWZFNTJecXppWxoc3EIhHK67svbpWuyrJbIOIHZNl2jr=w800-h600-k-no",
    alt: "Carpentry and trim work completed by Affordable Home Repairs",
    category: "Carpentry",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepEvfup7wFb7Z7BFirV4P1iDdMJEHI6X_1A6HKBmGZ4UkKkVFuRZ6SA0SjqczD9W9Uo1ihGLuAICF5EATQHRL2rtt6yksw1sU9yWdt8x_a346njdStkBLV9JoS8ujgoPaEdRee2xw=w800-h600-k-no",
    alt: "Finishing and detail work on a Crestview home repair project",
    category: "Painting",
  },
  // Customer-submitted project photos from Google reviews
  {
    src: "https://lh3.googleusercontent.com/geougc-cs/ABOP9psUIMou_EAhmg8cC7NkIsigu2VqeSXunOwjZjgyK7IX5JFLu_EYAfOcl08lWet81lGZnlWS5fNIsn_V_mluhTGS7FeyBPPWEB20VEdNhxJHnlqglp-0kjE4r5p3czlXlsPOCmZrSwMcyyM=w800-h600-k-no",
    alt: "Customer review photo — completed home repair project near Eglin AFB",
    category: "Carpentry",
    span: "row-span-2",
  },
  {
    src: "https://lh3.googleusercontent.com/geougc-cs/ABOP9ptNYurVel2O2vMlXuKArvSe9P3D4YoME_oJu6vDQpOgpehnvaWORTye3oenDglHKXY16JgPNlqno3FGFvVaKoqs2vGv_08FKyy2Vq2PzX_pHAxlu1LPxNLSC_icGDoIwlX1Ay9SQQzBSPlb=w800-h600-k-no",
    alt: "Customer review photo — painting and finishing work in Fort Walton Beach",
    category: "Painting",
  },
  {
    src: "https://lh3.googleusercontent.com/geougc-cs/ABOP9puTmFrMQ5hf9y0ehMZQD_T94iUqbDr6uyRsGo55h51bIn9gKNeDL7t2KHJ1HtjSNRObF8fCKFXQeQ_NmbFq-R0O942Az4FN4tVWwiIYgSUaAxXbfd3eRs11oJyNmKfJITB3YmC1beGCbRs=w800-h600-k-no",
    alt: "Customer review photo — home maintenance and repair in Niceville area",
    category: "Cabinets",
  },
  {
    src: "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvP-MF9AdwvWvCqGtTZVGK-QIsMj34J9ZTU_mf_iIX58NLShxYoXJU-Na6MESFJ9ZAytjOkPvDWomFnhD1LldGcpnLpEpiertk4G1A7w1ankx9z0woD5qFU7OBlip8fR8GGd5Fad6tLXJ-J=w800-h600-k-no",
    alt: "Customer review photo — handyman work by Andy Watts in Crestview FL",
    category: "Roofing",
  },
];

const categories = ["All", "Painting", "Carpentry", "Cabinets", "Roofing"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="bg-bg-alt py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ScrollReveal className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
            Our Work Speaks for Itself
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-light">
            A selection of recent projects across the Florida Panhandle.
          </p>
        </ScrollReveal>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? "bg-accent text-white shadow-md"
                  : "bg-white text-text-light hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((img, i) => (
            <ScrollReveal
              key={img.src}
              delay={0.05 * i}
              className={`overflow-hidden rounded-lg ${img.span ?? ""}`}
            >
              <button
                type="button"
                onClick={() => setLightbox(img)}
                className="group relative block h-full w-full overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary-dark/0 transition-colors duration-300 group-hover:bg-primary-dark/30" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-text opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {img.category}
                </span>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src.replace("w=600", "w=1200")}
                alt={lightbox.alt}
                width={1200}
                height={800}
                className="h-auto max-h-[85vh] w-full object-contain"
              />
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-4 pt-8">
                <p className="text-sm font-medium text-white">{lightbox.alt}</p>
                <p className="text-xs text-white/70">{lightbox.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
