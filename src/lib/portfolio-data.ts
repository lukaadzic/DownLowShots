export type Category = "headshots" | "family" | "editorial" | "studio";

export interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  category: Category;
}

export const categories: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "headshots", label: "Headshots" },
  { value: "family", label: "Family" },
  { value: "editorial", label: "Editorial" },
  { value: "studio", label: "Studio" },
];

export const portfolioImages: PortfolioImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop",
    alt: "Professional headshot - male",
    category: "headshots",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80&auto=format&fit=crop",
    alt: "Professional headshot - female",
    category: "headshots",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&auto=format&fit=crop",
    alt: "Editorial portrait with dramatic lighting",
    category: "editorial",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&q=80&auto=format&fit=crop",
    alt: "Family portrait outdoors",
    category: "family",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80&auto=format&fit=crop",
    alt: "Studio portrait with clean backdrop",
    category: "studio",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80&auto=format&fit=crop",
    alt: "Male editorial portrait",
    category: "editorial",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80&auto=format&fit=crop",
    alt: "Studio fashion portrait",
    category: "studio",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80&auto=format&fit=crop",
    alt: "Family candid moment",
    category: "family",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=800&q=80&auto=format&fit=crop",
    alt: "Corporate headshot",
    category: "headshots",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&auto=format&fit=crop",
    alt: "Editorial beauty portrait",
    category: "editorial",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop",
    alt: "Natural light studio portrait",
    category: "studio",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80&auto=format&fit=crop",
    alt: "Family lifestyle portrait",
    category: "family",
  },
];
