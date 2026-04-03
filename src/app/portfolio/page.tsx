import type { Metadata } from "next";
import { GalleryGrid } from "@/components/portfolio/gallery-grid";

export const metadata: Metadata = {
  title: "Portfolio | Down Low Shots",
  description:
    "Browse our collection of portrait, headshot, family, editorial, and studio photography.",
};

export default function PortfolioPage() {
  return (
    <div className="px-4 pb-24 pt-28 sm:px-6 sm:pb-28 lg:px-8">
      <div className="mx-auto max-w-[1280px] border-b border-foreground/10 pb-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          Portfolio
        </p>
        <h1 className="mt-4 max-w-4xl font-heading text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.94] tracking-[-0.07em]">
          Portraits, headshots, and studio work shaped for campaigns, casting, and personal brands.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
          A curated edit of our portrait language across clean studio frames,
          natural-light headshots, and more editorial sessions.
        </p>
      </div>
      <GalleryGrid />
    </div>
  );
}
