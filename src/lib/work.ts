import { getFeaturedOurWorkItems } from "@/lib/ourwork";

export type WorkProject = {
  id: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  href: string;
};

/** Featured Our Work cards — sourced from our work projects */
export const workProjects: WorkProject[] = getFeaturedOurWorkItems().map(
  (item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    image: item.image,
    imageAlt: item.imageAlt,
    href: `/our-work?project=${item.id}`,
  }),
);
