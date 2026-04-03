import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CAL_BOOKING_URL } from "@/lib/site-config";

const floatingPortraits = [
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80&auto=format&fit=crop",
    alt: "Editorial portrait with natural light",
  },
  {
    src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=80&auto=format&fit=crop",
    alt: "Cinematic portrait in a studio",
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=80&auto=format&fit=crop",
    alt: "Headshot with direct eye contact",
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=80&auto=format&fit=crop",
    alt: "Professional portrait for branding",
  },
  {
    src: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=1200&q=80&auto=format&fit=crop",
    alt: "Clean corporate headshot",
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80&auto=format&fit=crop",
    alt: "Soft portrait with a pale backdrop",
  },
];

const featuredSessions = [
  {
    title: "Founder Portraits",
    kicker: "Headshots / Studio",
    year: "2026",
    description:
      "Structured light, natural posture, and clean framing for personal brands that need more presence than polish.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1600&q=80&auto=format&fit=crop",
  },
  {
    title: "Team Editorials",
    kicker: "Portraits / On Location",
    year: "2026",
    description:
      "Portrait series for teams, campaigns, and launch moments that need cohesion without flattening personality.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80&auto=format&fit=crop",
  },
  {
    title: "Actor Headshots",
    kicker: "Headshots / Natural Light",
    year: "2026",
    description:
      "Sharp, open portraits that sit right between casting polish and something that still feels recognizably human.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1600&q=80&auto=format&fit=crop",
  },
  {
    title: "Personal Branding",
    kicker: "Portraits / Lifestyle",
    year: "2026",
    description:
      "A more expansive portrait language for founders, creators, and consultants who want a full visual world around the headshot.",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=1600&q=80&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="px-4 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1480px] pb-20 pt-8 sm:pt-12 md:pb-24 lg:pt-16">
          <div className="mx-auto flex min-h-[66vh] max-w-[980px] flex-col items-center justify-center text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              Upenn Students • Philadelphia, PA
            </p>
            <div className="mt-6 max-w-4xl space-y-5">
              <p className="text-balance text-[clamp(2rem,4.3vw,4rem)] leading-[1.08] tracking-[-0.06em] text-foreground">
                Quick, clean headshots and portraits.
              </p>
              <p className="mx-auto max-w-3xl text-balance text-[clamp(1.05rem,1.9vw,1.45rem)] leading-[1.45] tracking-[-0.03em] text-muted-foreground">
                Over 5 years of experience. Sharp photos for internships, LinkedIn, birthdays, teams,
                and personal brands.
              </p>
            </div>
            <p className="mt-9 text-[clamp(1.4rem,2.8vw,2.2rem)] leading-[1.15] tracking-[-0.045em] text-foreground">
              Headshots are $50 per person.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-foreground px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-background"
              >
                Book a Shoot
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full border border-foreground/12 px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-foreground"
              >
                See Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="portrait-carousel relative mx-auto max-w-[1380px] overflow-hidden rounded-[2.25rem] py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background via-background/75 to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background via-background/75 to-transparent sm:w-24" />

          <div className="portrait-marquee flex w-max">
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                className="flex shrink-0 gap-4 pr-4 sm:gap-6 sm:pr-6"
              >
                {floatingPortraits.map((portrait, index) => (
                  <div
                    key={`${groupIndex}-${portrait.alt}`}
                    className={cn(
                      "relative w-[11rem] shrink-0 overflow-hidden rounded-[1.75rem] bg-muted shadow-[0_24px_45px_-34px_rgba(17,17,17,0.45)] sm:w-[14rem] lg:w-[16rem]",
                      index % 3 === 0
                        ? "mt-8 aspect-[4/5]"
                        : index % 3 === 1
                          ? "aspect-[5/6]"
                          : "mt-4 aspect-[3/4]"
                    )}
                  >
                    <Image
                      src={portrait.src}
                      alt={portrait.alt}
                      fill
                      priority={groupIndex === 0 && index < 3}
                      sizes="(max-width: 640px) 11rem, (max-width: 1024px) 14rem, 16rem"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="featured" className="px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-[1320px] space-y-20">
          {featuredSessions.map((session, index) => (
            <article
              key={session.title}
              className="border-t border-foreground/12 pt-5 sm:pt-6"
            >
              <div className="mb-6 flex flex-col gap-4 sm:mb-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
                    {session.kicker}
                  </p>
                  <h2 className="mt-2 font-heading text-[clamp(2rem,4vw,3.6rem)] leading-[0.96] tracking-[-0.06em]">
                    {session.title}
                  </h2>
                </div>
                <div className="max-w-md text-sm leading-6 text-muted-foreground md:text-right">
                  <p>{session.description}</p>
                  <p className="mt-2 font-mono uppercase tracking-[0.22em]">
                    {session.year}
                  </p>
                </div>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-muted">
                <Image
                  src={session.image}
                  alt={session.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={cn(
                    "object-cover",
                    index % 2 === 0 ? "object-center" : "object-[center_28%]"
                  )}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-foreground/10 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
                Who We Are
              </p>
              <p className="mt-4 max-w-3xl text-balance text-[clamp(1.75rem,3.8vw,3.1rem)] leading-[1.02] tracking-[-0.055em] text-foreground">
                We are UPenn students in Philly making headshots and portraits feel simple, sharp, and actually usable.
              </p>
            </div>

            <div className="space-y-6 md:justify-self-end md:text-right">
              <p className="max-w-md text-sm leading-7 text-muted-foreground sm:text-base md:ml-auto">
                Clean direction, fast turnaround, and edits that work across LinkedIn, resumes, casting, team pages, and personal sites.
              </p>
              <Link
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-foreground/12 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
