import { defineField, defineType } from 'sanity'

export const phone = defineType({
  name: 'phone',
  title: 'Phone',
  type: 'document',
  fields: [
    defineField({
      name: 'phoneUA',
      type: 'object',
      fields: [
        defineField({
          name: 'country',
          type: 'string',
          readOnly: true,
          initialValue: 'UA',
        }),
        defineField({
          name: 'phone',
          type: 'string',
          validation: (rule) => rule.required().regex(/^\+380\d{9}$/),
        }),
      ],
    }),
    defineField({
      name: 'phoneLT',
      type: 'object',
      fields: [
        defineField({
          name: 'country',
          type: 'string',
          readOnly: true,
          initialValue: 'LT',
        }),
        defineField({
          name: 'phone',
          type: 'string',
          validation: (rule) => rule.required().regex(/^\+370\d{8}$/),
        }),
      ],
    }),
  ],
});