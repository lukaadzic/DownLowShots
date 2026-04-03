import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="font-heading text-4xl font-light tracking-wide md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
