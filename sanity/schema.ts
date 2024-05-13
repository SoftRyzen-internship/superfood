import { type SchemaTypeDefinition } from 'sanity'

import { product } from './schemas/product'
import { review } from './schemas/review'
import { policy } from './schemas/policy'
import { phone } from './schemas/phone'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, review, policy, phone],
}
