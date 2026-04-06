import type { Metadata } from "next";
import { familjenGrotesk, ibmPlexMono, inter } from "@/styles/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CAL_BOOKING_URL, SITE_URL } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Down Low Shots | Philadelphia Affordable professional Photography",
    template: "%s | Down Low Shots",
  },
  description:
    "Affordable professional photography in Philadelphia for headshots, Greek life, birthdays, and personal branding.",
  keywords: [
    "Philadelphia photographer",
    "UPenn photographer",
    "student headshots",
    "professional headshots",
    "personal branding photography",
    "sorority photography",
    "fraternity photography",
    "birthday photoshoot",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/dl-monogram.svg?v=2",
        type: "image/svg+xml",
      },
    ],
    shortcut: ["/dl-monogram.svg?v=2"],
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Down Low Shots",
    title: "Down Low Shots | Philadelphia Portrait Photography",
    description:
      "Affordable professional photography in Philadelphia for headshots, Greek life, birthdays, and personal branding.",
    images: [
      {
        url: "/portfolio-09.jpg",
        width: 7008,
        height: 4672,
        alt: "Professional portrait photography by Down Low Shots",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Down Low Shots | Philadelphia Portrait Photography",
    description:
      "Affordable professional photography in Philadelphia for headshots, Greek life, birthdays, and personal branding.",
    images: ["/portfolio-09.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "photography",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Down Low Shots",
  url: SITE_URL,
  logo: `${SITE_URL}/dl-monogram.svg`,
  image: `${SITE_URL}/portfolio-09.jpg`,
  areaServed: "Philadelphia, PA",
  sameAs: [CAL_BOOKING_URL],
  description:
    "Affordable professional photography in Philadelphia for headshots, Greek life, birthdays, and personal branding.",
  serviceType: [
    "Headshot Photography",
    "Portrait Photography",
    "Personal Branding Photography",
    "Event Photography",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${familjenGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
