import type { Metadata } from "next";
import { GalleryGrid } from "@/components/portfolio/gallery-grid";

export const metadata: Metadata = {
  title: "Portfolio | Down Low Shots",
  description:
    "Browse our collection of headshots, birthday sessions, and personal branding photography.",
};

export default function PortfolioPage() {
  return (
    <div className="px-4 pb-24 pt-28 sm:px-6 sm:pb-28 lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="overflow-hidden rounded-[2rem] border border-foreground/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.62),rgba(255,255,255,0.22))] px-6 pb-12 pt-10 shadow-[0_24px_70px_-55px_rgba(17,17,17,0.35)] sm:px-10 sm:pt-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          Portfolio
        </p>
        <h1 className="mt-4 max-w-4xl font-heading text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.94] tracking-[-0.07em]">
          Headshots, birthdays, and personal branding images shaped for real-world use.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
          A curated edit across polished professional portraits, birthday sessions,
          and personal branding photography.
        </p>
        </div>
      </div>
      <GalleryGrid />
    </div>
  );
}
