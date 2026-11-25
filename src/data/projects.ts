export type Project = {
  slug: string;
  title: string;
  summary: string;
  featured: boolean;
};

// Names and summaries come from the old ZIP; featured selection follows
// the new Creation page. Technology/status/client claims are intentionally
// not published here until the conflicting source content is reviewed.
export const projects: Project[] = [
  {
    slug: "agora",
    title: "AGORA",
    summary: "A centralized inventory and point-of-sale system for retail businesses.",
    featured: true,
  },
  {
    slug: "stockkernel",
    title: "StockKernel",
    summary: "An inventory and point-of-sale system.",
    featured: true,
  },
  {
    slug: "premium",
    title: "Premium Coffee Experience",
    summary: "A coffee e-commerce platform.",
    featured: false,
  },
];
