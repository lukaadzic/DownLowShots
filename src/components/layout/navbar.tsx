"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { CAL_BOOKING_URL } from "@/lib/site-config";
import { MobileNav } from "./mobile-nav";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: CAL_BOOKING_URL, label: "Book Session" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-5 pt-6 sm:px-8 lg:px-12">
        <div className="relative mx-auto flex max-w-[1440px] items-start justify-between">
          <Link
            href="/"
            className="relative z-20 hidden md:flex md:items-center"
            aria-label="Down Low Shots home"
          >
            <Image
              src="/dl-monogram.svg"
              alt="Down Low Shots monogram"
              width={96}
              height={52}
              className="h-[3.15rem] w-auto"
              priority
            />
          </Link>

          <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 md:block">
            <nav className="flex items-center gap-3 rounded-[1.6rem] bg-[#f4f1ec] px-5 py-3 shadow-[0_16px_50px_-34px_rgba(17,17,17,0.4)]">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className={cn(
                    "rounded-full px-4 py-2 text-[15px] tracking-[-0.03em] transition-colors",
                    (link.href.startsWith("/#")
                      ? isHome
                      : link.href.startsWith("http")
                        ? false
                        : pathname === link.href)
                      ? "text-foreground"
                      : "text-foreground/68 hover:text-foreground"
                  )}
                >
                  {index === 0 ? "• " : ""}
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex w-full items-center justify-between rounded-full bg-background/80 px-4 py-3 shadow-[0_16px_40px_-34px_rgba(17,17,17,0.35)] backdrop-blur-lg md:hidden">
            <Link
              href="/"
              className="flex items-center"
              aria-label="Down Low Shots home"
            >
              <Image
                src="/dl-monogram.svg"
                alt="Down Low Shots monogram"
                width={76}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 text-foreground"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
    </>
  );
}
