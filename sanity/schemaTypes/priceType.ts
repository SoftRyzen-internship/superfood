import {defineField, defineType} from 'sanity'

export const priceType = defineType({
  name: 'price',
  title: 'Price',
    type: 'array',
   of: [
    {
      type: 'object',
      fields: [
    defineField({
      name: 'product',
      type: 'string',
    }),
      defineField({
      name: 'price',
      type: 'number',
    }),
  ],
    },
  ],
})