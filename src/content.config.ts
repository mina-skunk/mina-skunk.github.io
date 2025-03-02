import { glob, file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    // Transform string to Date object
    date: z.coerce.date(),
    preview: z.string().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
  }),
});

const businesses = defineCollection({
  loader: glob({ base: "./src/content/businesses", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    name: z.string(),
    website: z.string().url().optional(),
    preview: z.string().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
  }),
});

const stations = defineCollection({
  loader: glob({ base: "./src/content/stations", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    name: z.string(),
    callsign: z.string(),
    frequency: z.coerce.number(),
    website: z.string().url().optional(),
    offset: z.coerce.number().optional(),
    tone: z.coerce.number().optional(),
    echolink: z.coerce.string().optional(),
    allstarlink: z.coerce.string().optional(),
    grid: z.string().optional(),
    preview: z.string().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
  }),
});

const links = defineCollection({
  loader: file("./src/content/links.json"),
  // Type-check frontmatter using a schema
  schema: z.object({
    name: z.string(),
    url: z.string().url()
  }),
});

export const collections = {
  blog,
  businesses,
  stations,
};
