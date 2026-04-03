"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import type { PortfolioImage } from "@/lib/portfolio-data";

interface LightboxProps {
  image: PortfolioImage | null;
  images: PortfolioImage[];
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
}

export function Lightbox({ image, images, onClose, onNavigate }: LightboxProps) {
  if (!image) return null;

  const currentIndex = images.findIndex((img) => img.id === image.id);
  const categoryLabel =
    image.category === "personal-branding"
      ? "Personal Branding"
      : image.category.charAt(0).toUpperCase() + image.category.slice(1);

  return (
    <Dialog open={!!image} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="max-h-[96vh] max-w-[96vw] border-none bg-transparent p-0 ring-0 sm:max-w-[92vw]"
      >
        <DialogTitle className="sr-only">{image.alt}</DialogTitle>
        <div className="relative flex h-[88vh] items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/12 bg-[radial-gradient(120%_120%_at_50%_10%,rgba(255,255,255,0.09),rgba(0,0,0,0.92))] shadow-[0_34px_90px_-46px_rgba(0,0,0,0.9)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 bg-gradient-to-b from-black/42 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-36 bg-gradient-to-t from-black/52 to-transparent" />

          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/80 backdrop-blur-md transition-colors hover:text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {currentIndex > 0 && (
            <button
              onClick={() => onNavigate("prev")}
              className="absolute left-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white/80 backdrop-blur-md transition-colors hover:text-white sm:left-5"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          <div className="relative h-full w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              unoptimized
              quality={100}
              sizes="96vw"
              className="object-contain"
              priority
            />
          </div>

          {currentIndex < images.length - 1 && (
            <button
              onClick={() => onNavigate("next")}
              className="absolute right-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white/80 backdrop-blur-md transition-colors hover:text-white sm:right-5"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-4 p-4 sm:p-5">
            <div className="rounded-2xl border border-white/18 bg-black/35 px-3 py-2 backdrop-blur-md sm:px-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/75">
                {categoryLabel}
              </p>
            </div>
            <div className="rounded-full border border-white/18 bg-black/35 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white/75 backdrop-blur-md sm:px-4">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
