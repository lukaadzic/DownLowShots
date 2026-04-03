"use client";

import { Badge } from "@/components/ui/badge";
import { categories, type Category } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

interface GalleryFilterProps {
  active: Category | "all";
  onFilter: (category: Category | "all") => void;
}

export function GalleryFilter({ active, onFilter }: GalleryFilterProps) {
  return (
    <div className="border-y border-foreground/10 bg-background/92">
      <div className="mx-auto flex max-w-[1280px] gap-2 overflow-x-auto px-0 py-4">
        {categories.map((cat) => (
          <Badge
            key={cat.value}
            variant={active === cat.value ? "default" : "outline"}
            className={cn(
              "cursor-pointer whitespace-nowrap rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-all",
              active === cat.value
                ? "bg-foreground text-background hover:bg-foreground"
                : "border-foreground/12 bg-transparent text-muted-foreground hover:bg-foreground/4 hover:text-foreground"
            )}
            onClick={() => onFilter(cat.value)}
          >
            {cat.label}
          </Badge>
        ))}
      </div>
    </div>
  );
}
