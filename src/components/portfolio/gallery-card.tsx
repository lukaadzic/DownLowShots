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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-muted">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />
        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white">
            {image.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
