import { defineType } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  type: "object",
  title: "Hero Section",
  fields: [
    { name: "kirk", title: "Kirk", type: "text" },
    { name: "heading", title: "Heading", type: "string" },
    { name: "subtext", title: "Subtext", type: "text" },
  ],
});
