import { defineType } from "sanity";

export const about = defineType({
  name: "about",
  type: "object",
  title: "About",
  fields: [
    { name: "kirk", title: "Kirk", type: "text" },
    { name: "heading", title: "Heading", type: "string" },
    { name: "subtext", title: "Subtext", type: "text" },
  ],
});
