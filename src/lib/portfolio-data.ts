export type Category = "headshots" | "birthdays" | "personal-branding";

export interface PortfolioImage {
  id: string;
  src: string;
  alt: string;
  category: Category;
}

export const categories: { value: Category; label: string }[] = [
  { value: "headshots", label: "Headshots" },
  { value: "birthdays", label: "Birthdays" },
  { value: "personal-branding", label: "Personal Branding" },
];

export const portfolioImages: PortfolioImage[] = [
  {
    id: "1",
    src: "/portfolio-01.jpeg",
    alt: "Outdoor portrait seated near stone architecture",
    category: "birthdays",
  },
  {
    id: "2",
    src: "/portfolio-02.jpeg",
    alt: "Spring portrait under blooming trees",
    category: "birthdays",
  },
  {
    id: "3",
    src: "/portfolio-03.jpeg",
    alt: "Clean indoor headshot against neutral wall",
    category: "headshots",
  },
  {
    id: "4",
    src: "/portfolio-04.jpeg",
    alt: "Warm-toned portrait seated by window light",
    category: "headshots",
  },
  {
    id: "5",
    src: "/portfolio-05.jpeg",
    alt: "Headshot with patterned dark backdrop",
    category: "birthdays",
  },
  {
    id: "6",
    src: "/portfolio-06.jpeg",
    alt: "Portrait seated on lounge bench",
    category: "personal-branding",
  },
  {
    id: "7",
    src: "/portfolio-07.jpeg",
    alt: "Professional portrait seated in navy suit",
    category: "personal-branding",
  },
  {
    id: "8",
    src: "/portfolio-08.jpg",
    alt: "Professional portrait leaning on blue railing",
    category: "headshots",
  },
  {
    id: "9",
    src: "/portfolio-09.jpg",
    alt: "Confident portrait with crossed arms in conference room",
    category: "personal-branding",
  },
  {
    id: "10",
    src: "/portfolio-10.jpg",
    alt: "Corporate headshot in blue-toned corridor",
    category: "headshots",
  },
  {
    id: "11",
    src: "/portfolio-11.jpg",
    alt: "Natural light portrait with soft smile",
    category: "birthdays",
  },
  {
    id: "12",
    src: "/portfolio-12.jpeg",
    alt: "Portrait in black outfit with clean framing",
    category: "birthdays",
  },
];
