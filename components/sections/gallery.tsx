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
  {
    src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80",
    alt: "Interior painting project",
    category: "Painting",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    alt: "Custom carpentry work",
    category: "Carpentry",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    alt: "Kitchen cabinet refinishing",
    category: "Cabinets",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&q=80",
    alt: "Roof repair work",
    category: "Roofing",
  },
  {
    src: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&q=80",
    alt: "Wall painting in progress",
    category: "Painting",
  },
  {
    src: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=600&q=80",
    alt: "Home interior renovation",
    category: "Carpentry",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600&q=80",
    alt: "Home exterior repair",
    category: "Roofing",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    alt: "Workshop and tools",
    category: "Carpentry",
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
