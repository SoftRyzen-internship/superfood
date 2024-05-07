import {defineField, defineType} from 'sanity'

export const phoneType = defineType({
  name: 'phone',
  title: 'Phone',
  type: 'document',
  fields: [
    defineField({
      name: 'phones',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'country',
              type: 'string',
            }),
            defineField({
              name: 'phone',
              type: 'number',
            }),
          ],
        },
      ],
      validation: Rule => Rule.required().min(2).max(2),
    }),
  ],
});