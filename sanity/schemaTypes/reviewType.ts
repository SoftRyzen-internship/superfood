import {defineField, defineType} from 'sanity'

export const reviewType = defineType({
  name: 'review',
  title: 'Review',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          type: 'string',
        }),
        defineField({
          name: 'comments',
          type: 'string', 
        }),
      ],
    },
  ],
});