import {defineField, defineType, defineArrayMember} from 'sanity'


export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
            defineField({
              name: 'product',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'price',
              type: 'number',
              validation: (rule) => rule.required().max(10000),
            }),
            defineField({
              name: 'weight',
              type: 'number',
              validation: (rule) => rule.required().max(1000),
            }),
             defineField({name: 'purposes', type: 'array', of: [
        defineArrayMember({ type: "string" })  
             ]
             }),
              defineField({name: 'actions', type: 'array', of: [
        defineArrayMember({ type: "string" })  
              ]
              }),
               defineField({
              name: 'description',
              type: 'string',
               }),
               defineField({name: 'advantages', type: 'array', of: [
        defineArrayMember({ type: "string" })  
              ]
              }),
               defineField({name: 'action_tags', type: 'array', of: [
        defineArrayMember({ type: "string" })  
              ]
               }),
               defineField({
  name: 'composition',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'object',
      fields: [
        defineField({
          name: 'components',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'nutritionalValue',
          type: 'object',
          fields: [
            defineField({
              name: 'proteins',
              type: 'number',
            }),
            defineField({
              name: 'fats',
              type: 'number',
            }),
            defineField({
              name: 'carbohydrates',
              type: 'number',
            }),
          ],
        }),
        defineField({
          name: 'energyValue',
          type: 'object',
          fields: [
            defineField({
              name: 'calories',
              type: 'number',
            }),
            defineField({
              name: 'kilojoules',
              type: 'number',
            }),
          ],
        }),
      ],
    }),
  ],
               }),
               defineField({
  name: 'usageMethod',
  type: 'object',
  fields: [
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'forAdults',
      type: 'string',
    }),
    defineField({
      name: 'forChildrenFromSixYears',
      type: 'string',
    }),
    defineField({
      name: 'courseDuration_months',
      type: 'number',
    }),
  ],
               }),
defineField({
      name: 'contraindication',
      type:'string'    
    }),
defineField({
    name: 'activeComponentsAction',
    type: 'string',
    }),
defineField({
  name: 'activeComponents',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'string',
    }),
  ],
}),       
          ],
});