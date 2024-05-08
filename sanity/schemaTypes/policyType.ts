import { defineField, defineType } from 'sanity'

export const policyType = defineType({
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
              name: 'text',
              type: 'string',
            }),
          ],
});