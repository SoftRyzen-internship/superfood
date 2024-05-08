import { type SchemaTypeDefinition } from 'sanity'

import { phoneType } from './schemaTypes/phoneType'
import { priceType } from './schemaTypes/priceType'
import { reviewType } from './schemaTypes/reviewType'
import { policyType } from './schemaTypes/policyType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [phoneType, priceType, reviewType, policyType],
}
