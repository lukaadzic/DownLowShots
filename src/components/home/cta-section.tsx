import Link from "next/link";
import { AnimatedSection } from "@/components/shared/animated-section";
import { CAL_BOOKING_URL } from "@/lib/site-config";

export function CTASection() {
  return (
    <AnimatedSection>
      <section className="bg-muted py-32">
        <div className="mx-auto max-w-[720px] px-6 text-center">
          <h2 className="font-heading text-4xl font-light tracking-wide md:text-5xl">
            Let&apos;s Create Something Beautiful
          </h2>
          <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground">
            Every portrait session begins with a conversation. Tell us your
            vision, and we&apos;ll bring it to life.
          </p>
          <Link
            href={CAL_BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium tracking-wider text-primary-foreground transition-colors hover:bg-primary/80"
          >
            Book a Session
          </Link>
        </div>
      </section>
    </AnimatedSection>
  );
}
