import { defineType, defineArrayMember } from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        defineArrayMember({ type: 'heroSection' }),
        defineArrayMember({ type: 'featureSection' }),
        defineArrayMember({ type: 'about' }),
        defineArrayMember({ type: 'pricing' }),
        defineArrayMember({ type: 'testimonial' }),
        defineArrayMember({ type: 'contactSection' }),
      ],
    },
  ],
})
