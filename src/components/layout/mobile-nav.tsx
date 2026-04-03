"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CAL_BOOKING_URL } from "@/lib/site-config";

const links = [
  { href: "/#featured", label: "Work" },
  { href: CAL_BOOKING_URL, label: "Book Session" },
];

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-[88vw] max-w-[22rem] border-l border-foreground/10 bg-background/98 p-0 text-foreground"
      >
        <SheetHeader className="border-b border-foreground/10 px-5 py-5">
          <SheetTitle className="flex items-center justify-between">
            <Image
              src="/dl-monogram.svg"
              alt="Down Low Shots monogram"
              width={74}
              height={40}
              className="h-10 w-auto"
            />
            <SheetClose
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/12 text-foreground/85 transition-colors hover:text-foreground"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </SheetClose>
          </SheetTitle>
        </SheetHeader>

        <nav className="px-5 pt-6">
          <div className="flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => onOpenChange(false)}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className={cn(
                "rounded-2xl border px-4 py-4 text-base tracking-[-0.02em] transition-colors",
                (link.href.startsWith("/#")
                  ? isHome
                  : link.href.startsWith("http")
                    ? false
                    : pathname === link.href)
                  ? "border-foreground/20 bg-foreground/6 text-foreground"
                  : "border-foreground/12 bg-background text-foreground/72 hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          </div>
        </nav>

        <div className="mt-auto px-5 pb-6 pt-8">
          <div className="rounded-2xl border border-foreground/10 bg-muted/45 p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Down Low Shots
            </p>
            <p className="mt-3 text-sm leading-6 text-foreground/80">
              UPenn students in Philly. Fast, clean headshots and portraits.
            </p>
            <Link
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => onOpenChange(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-foreground px-4 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-background"
            >
              Book Session
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
