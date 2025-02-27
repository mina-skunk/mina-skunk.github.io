import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    preview: z.string().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    fmContentType: z.string().default("blog"),
  }),
});

const stations = defineCollection({
  loader: glob({ base: "./src/content/stations", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    name: z.string(),
    callsign: z.string(),
    frequency: z.number(),
    website: z.string().url().optional(),
    offset: z.number().optional(),
    tone: z.number().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    fmContentType: z.string().default("station"),
  }),
});

export const collections = {
  blog,
  stations,
};
