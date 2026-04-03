import Link from "next/link";
import { CAL_BOOKING_URL } from "@/lib/site-config";

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden px-6 pb-16 pt-28 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute left-[-6rem] top-20 h-44 w-44 rounded-full bg-foreground/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[-5rem] h-56 w-56 rounded-full bg-foreground/10 blur-3xl" />

      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Error 404
          </p>
          <h1 className="mt-4 max-w-4xl font-heading text-[clamp(2.7rem,7vw,6.2rem)] leading-[0.9] tracking-[-0.08em] text-foreground">
            This frame didn&apos;t
            <br />
            make the final cut.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            The page you tried to open is missing, moved, or no longer in this
            edit. Let&apos;s get you back to the good shots.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-foreground px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-background"
            >
              Back Home
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-full border border-foreground/14 bg-background px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/85 transition-colors hover:border-foreground/25 hover:text-foreground"
            >
              View Portfolio
            </Link>
            <Link
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-foreground/14 bg-background px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/85 transition-colors hover:border-foreground/25 hover:text-foreground"
            >
              Book Session
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-foreground/12 bg-[linear-gradient(160deg,rgba(255,255,255,0.66),rgba(255,255,255,0.2))] p-8 shadow-[0_24px_70px_-52px_rgba(17,17,17,0.5)] sm:p-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-foreground/18" />
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Quick Recovery
          </p>
          <ul className="mt-7 space-y-4 text-sm leading-6 text-foreground/78 sm:text-base">
            <li>1. Double-check the URL for typos.</li>
            <li>2. Start from Home and navigate from the main menu.</li>
            <li>3. Use Portfolio if you were looking for recent work.</li>
            <li>4. Use Book Session to lock in a shoot right away.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
