import { defineType } from 'sanity'

export const featureTypes = defineType({
  name: 'featureSection',
  type: 'object',
  title: 'Feature Section',
  fields: [
      { name: 'kirk', title: 'Kirk', type: 'text' },
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'subtext', title: 'Subtext', type: 'text' },
  ],
})