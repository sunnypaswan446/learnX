import { defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  type: "object",
  title: "Testimonial",
  fields: [
    { name: "kirk", title: "Kirk", type: "text" },
    { name: "heading", title: "Heading", type: "string" },
    { name: "subtext", title: "Subtext", type: "text" },
  ],
});
