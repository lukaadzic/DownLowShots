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

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="px-4 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1480px] pb-10 pt-4 sm:pt-6 md:pb-16 lg:pt-8">
          <div className="mx-auto flex min-h-[52vh] max-w-[980px] flex-col items-center justify-center pt-6 sm:pt-8 text-center">
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

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
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

    </div>
  );
}
