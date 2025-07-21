import { defineType } from "sanity";

export const contactSection = defineType({
  name: "contactSection",
  type: "object",
  title: "Contact Section",
  fields: [
    { name: "kirk", title: "Kirk", type: "text" },
    { name: "heading", title: "Heading", type: "string" },
    { name: "subtext", title: "Subtext", type: "text" },
  ],
});
