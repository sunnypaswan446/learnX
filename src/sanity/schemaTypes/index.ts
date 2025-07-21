import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {  heroSection } from './Sections/heroSection'



import { homepage } from './homepage'
import { featureTypes } from './Sections/featureTypes'
import { pricing } from './Sections/pricing'
import { testimonial } from './Sections/testimonial'
import { about } from './Sections/about'
import { contactSection } from './Sections/contactSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage, heroSection, featureTypes, testimonial, about, contactSection, pricing, blockContentType, categoryType, postType, authorType, ],
}
