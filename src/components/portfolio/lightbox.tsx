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

  return (
    <Dialog open={!!image} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="max-w-[95vw] max-h-[95vh] border-none bg-black/95 p-0 ring-0 sm:max-w-[90vw]"
      >
        <DialogTitle className="sr-only">{image.alt}</DialogTitle>
        <div className="relative flex h-[85vh] items-center justify-center">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full p-2 text-white/70 transition-colors hover:text-white"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous */}
          {currentIndex > 0 && (
            <button
              onClick={() => onNavigate("prev")}
              className="absolute left-4 z-10 rounded-full p-2 text-white/70 transition-colors hover:text-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
          )}

          {/* Image */}
          <div className="relative h-full w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Next */}
          {currentIndex < images.length - 1 && (
            <button
              onClick={() => onNavigate("next")}
              className="absolute right-4 z-10 rounded-full p-2 text-white/70 transition-colors hover:text-white"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
