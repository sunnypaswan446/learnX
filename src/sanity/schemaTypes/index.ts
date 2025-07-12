import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {  heroSection } from './Sections/heroSection'


import { homepage } from './homepage'
import { featureTypes } from './Sections/featureTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage, heroSection, featureTypes, blockContentType, categoryType, postType, authorType, ],
}
