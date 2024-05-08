import {defineField, defineType} from 'sanity'

export const phoneType = defineType({
  name: 'phone',
  title: 'Phone',
  type: 'document',
  fields: [
            defineField({
              name: 'country',
              type: 'string',
              options: {
        list: [
          { value: 'UA', title: 'Ukraine' },
          { value: 'LT', title: 'Lithuania' },
        ],
      },
            }),
            defineField({
              name: 'phone',
              type: 'number',
            }),
  ],
});