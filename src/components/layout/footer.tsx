import Link from "next/link";
import { CAL_BOOKING_URL } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.7fr_0.95fr] md:items-start md:gap-10">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
              Down Low Shots
            </p>
            <p className="mt-4 max-w-xl text-[clamp(1.45rem,2.8vw,2.3rem)] leading-[1.06] tracking-[-0.045em] text-foreground">
              Premium Affordable Headshot by UPenn Students.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Philadelphia, Pennsylvania
            </p>

            <Link
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full border border-foreground/15 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Book a Session
            </Link>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
              Navigate
            </p>
            <div className="mt-5 flex flex-col gap-2.5 text-sm text-foreground/75">
              <Link href="/#featured" className="transition-colors hover:text-foreground">
                Work
              </Link>
              <Link href="/portfolio" className="transition-colors hover:text-foreground">
                Portfolio
              </Link>
              <Link href="/contact" className="transition-colors hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
              Studio
            </p>
            <div className="mt-5 max-w-sm space-y-3 text-sm leading-6 text-foreground/75">
              <p>hello@downlowshots.com</p>
              <p>Philadelphia, PA</p>
              <p>Available for headshots, portraits, and personal branding sessions.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-foreground/10 pt-5 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Down Low Shots</p>
        </div>
      </div>
    </footer>
  );
}
