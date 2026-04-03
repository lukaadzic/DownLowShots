import { Separator } from "@/components/ui/separator";
import { AnimatedSection } from "@/components/shared/animated-section";

export function IntroSection() {
  return (
    <AnimatedSection className="py-32">
      <div className="mx-auto max-w-[720px] px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          The Studio
        </p>
        <p className="mt-8 font-heading text-2xl font-light leading-relaxed text-foreground md:text-3xl">
          We believe every face tells a story. Our studio is a space where
          authenticity meets artistry — where natural light, intentional
          composition, and genuine connection come together to create portraits
          that feel as real as they look.
        </p>
        <Separator className="mx-auto mt-12 w-16" />
      </div>
    </AnimatedSection>
  );
}
