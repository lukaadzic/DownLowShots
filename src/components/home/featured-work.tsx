"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeading } from "@/components/shared/section-heading";

const featured = [
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&auto=format&fit=crop",
    alt: "Editorial portrait",
    category: "Editorial",
  },
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop",
    alt: "Studio headshot",
    category: "Headshots",
  },
  {
    src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&q=80&auto=format&fit=crop",
    alt: "Family portrait",
    category: "Family",
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80&auto=format&fit=crop",
    alt: "Studio session",
    category: "Studio",
  },
];

export function FeaturedWork() {
  return (
    <AnimatedSection className="py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading title="Selected Work" />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {featured.map((item, i) => (
            <AnimatedSection key={item.alt} delay={i * 0.1}>
              <div className="group relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="text-xs font-light uppercase tracking-[0.2em] text-white">
                    {item.category}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm font-light tracking-[0.15em] uppercase text-muted-foreground transition-colors hover:text-foreground"
          >
            View Full Portfolio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
