import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="font-heading text-6xl font-light tracking-wide md:text-8xl">
        404
      </h1>
      <p className="mt-6 text-base font-light text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex h-8 items-center justify-center rounded-lg border border-border bg-background px-4 text-sm font-medium tracking-wider transition-colors hover:bg-muted"
      >
        Go Home
      </Link>
    </div>
  );
}
