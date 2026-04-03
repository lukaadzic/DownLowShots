"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { PortfolioImage } from "@/lib/portfolio-data";

interface GalleryCardProps {
  image: PortfolioImage;
  index: number;
  onClick: () => void;
}

export function GalleryCard({ image, index, onClick }: GalleryCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18, scale: 0.985 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-foreground/8 bg-muted shadow-[0_18px_48px_-34px_rgba(17,17,17,0.45)] transition-all duration-500 ease-out group-hover:-translate-y-0.5 group-hover:shadow-[0_24px_62px_-34px_rgba(17,17,17,0.55)]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/8 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 translate-y-1 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white">
            {image.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
