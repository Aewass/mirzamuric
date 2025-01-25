import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    link: z.string().optional(),
    github: z.string().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  projects,
};
