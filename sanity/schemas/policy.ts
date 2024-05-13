import { defineField, defineType } from 'sanity'

export const policy = defineType({
  name: 'policy',
  title: 'Policy',
  type: 'document',
  fields: [
            defineField({
              name: 'title',
              type: 'string',
              readOnly: true,
              initialValue: 'ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ ТА ЗАХИСТУ ПЕРСОНАЛЬНИХ ДАНИХ',

            }),
            defineField({
      name: 'description',
      title: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
          ],
});