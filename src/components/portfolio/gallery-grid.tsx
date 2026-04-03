"use client";

import { useState, useMemo, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GalleryCard } from "./gallery-card";
import { GalleryFilter } from "./gallery-filter";
import { Lightbox } from "./lightbox";
import { portfolioImages, type Category, type PortfolioImage } from "@/lib/portfolio-data";

export function GalleryGrid() {
  const [active, setActive] = useState<Category>("headshots");
  const [lightboxImage, setLightboxImage] = useState<PortfolioImage | null>(null);

  const filtered = useMemo(
    () => portfolioImages.filter((img) => img.category === active),
    [active]
  );

  const handleNavigate = useCallback(
    (direction: "prev" | "next") => {
      if (!lightboxImage) return;
      const currentIndex = filtered.findIndex((img) => img.id === lightboxImage.id);
      const nextIndex =
        direction === "next" ? currentIndex + 1 : currentIndex - 1;
      if (nextIndex >= 0 && nextIndex < filtered.length) {
        setLightboxImage(filtered[nextIndex]);
      }
    },
    [lightboxImage, filtered]
  );

  return (
    <>
      <GalleryFilter active={active} onFilter={setActive} />

      <div className="mx-auto mt-8 max-w-[1440px] px-0 pb-12 sm:pb-16">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          >
            {filtered.map((image, i) => (
              <GalleryCard
                key={image.id}
                image={image}
                index={i}
                onClick={() => setLightboxImage(image)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <Lightbox
        image={lightboxImage}
        images={filtered}
        onClose={() => setLightboxImage(null)}
        onNavigate={handleNavigate}
      />
    </>
  );
}
