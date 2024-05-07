import { type SchemaTypeDefinition } from 'sanity'

import { phoneType } from './schemaTypes/phoneType'
import { priceType } from './schemaTypes/priceType'
import { reviewType } from './schemaTypes/reviewType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [phoneType, priceType, reviewType],
}
