import { defineType } from "sanity";

export const pricing = defineType({
  name: "pricing",
  type: "object",
  title: "Pricing",
  fields: [
    { name: "kirk", title: "Kirk", type: "text" },
    { name: "heading", title: "Heading", type: "string" },
    { name: "subtext", title: "Subtext", type: "text" },
  ],
});
