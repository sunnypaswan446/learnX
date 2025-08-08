import { defineType } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  type: "object",
  title: "Hero Section",
  fields: [
    {
      name: "eyebrow",
      title: "Eyebrow / Tagline",
      type: "string",
      description: "Short label shown above the heading (e.g. 🚀 Introducing the Future)",
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
      description: "Main headline text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "highlight",
      title: "Highlight",
      type: "string",
      description: "Optional highlighted word/phrase shown on a new line",
    },
    {
      name: "subtext",
      title: "Subtext",
      type: "text",
      rows: 3,
      description: "Supporting paragraph under the heading",
    },
    {
      name: "primaryCtaText",
      title: "Primary CTA Text",
      type: "string",
    },
    {
      name: "primaryCtaUrl",
      title: "Primary CTA URL",
      type: "url",
    },
    {
      name: "secondaryCtaText",
      title: "Secondary CTA Text",
      type: "string",
    },
    {
      name: "secondaryCtaUrl",
      title: "Secondary CTA URL",
      type: "url",
    },
    {
      name: "showChevron",
      title: "Show Chevron",
      type: "boolean",
      description: "Show bouncing chevron below the CTAs",
      initialValue: true,
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
});
