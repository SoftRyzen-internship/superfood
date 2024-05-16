import {defineField, defineType} from 'sanity'


const productOptions = [
  { name: 'ЗЕЛЕНА ФОРМУЛА', slug: 'green_formula' },
  { name: 'ПРОРОЩЕНІ ЗЕРНА БОБОВИХ', slug: 'beans' },
  { name: 'СОЛОД ЖИТНІЙ ФЕРМЕНТОВАНИЙ', slug: 'solod' },
  { name: 'ОВОЧЕВА НОРМА', slug: 'vegetable' },
  { name: 'ПРОРОЩЕНІ ЗЕРНА ЗЛАКОВИХ', slug: 'grains' }
];
export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
            defineField({
              name: 'product',
              type: 'string',
              options: {
        list: productOptions.map(option => option.name), 
      },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'price',
              type: 'number',
              validation: (rule) => rule.required().max(5000),
            }),
            
    defineField({
      name: 'slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'product',
        maxLength: 200,
        slugify: (input) => {
          const option = productOptions.find(option => option.name === input);
          return option ? option.slug : '';
        },
      },
    }),
          ],
});