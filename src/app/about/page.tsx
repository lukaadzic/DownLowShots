import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CAL_BOOKING_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About | Down Low Shots",
  description:
    "Learn about our approach to portrait and studio photography.",
};

export default function AboutPage() {
  return (
    <div className="px-4 pb-24 pt-28 sm:px-6 sm:pb-28 lg:px-8">
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-[0.95fr_1.05fr] md:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted">
          <Image
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1200&q=80&auto=format&fit=crop"
            alt="The photographer"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="border-t border-foreground/10 pt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            About
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-[clamp(2.4rem,5vw,4.9rem)] leading-[0.95] tracking-[-0.07em]">
            Portrait direction that feels calm on set and sharp in the frame.
          </h1>
          <div className="mt-8 space-y-5 max-w-2xl text-base leading-7 text-muted-foreground">
            <p>
              Down Low Shots was built around a simple idea: the strongest
              portrait is usually the one that feels least overworked. We
              balance clean structure with enough space for personality to stay
              visible.
            </p>
            <p>
              Our sessions are designed for people who need images that carry
              authority without looking overproduced. Founders, creatives,
              actors, and teams all come in with different needs, but the goal
              is the same: photographs that feel direct, confident, and alive.
            </p>
            <p>
              Every booking includes collaborative prep, live direction during
              the shoot, and final edits made for real use across websites,
              decks, campaigns, press kits, and casting platforms.
            </p>
          </div>
          <Link
            href={CAL_BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex rounded-full bg-foreground px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-background"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
