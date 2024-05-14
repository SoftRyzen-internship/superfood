import {defineField, defineType} from 'sanity'


const productOptions = ['ЗЕЛЕНА ФОРМУЛА', 'ПРОРОЩЕНІ ЗЕРНА БОБОВИХ', 'СОЛОД ЖИТНІЙ ФЕРМЕНТОВАНИЙ', 'ОВОЧЕВА НОРМА', 'ПРОРОЩЕНІ ЗЕРНА ЗЛАКОВИХ'];

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
            defineField({
              name: 'product',
              type: 'string',
              options: {
        list: productOptions, 
      },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'price',
              type: 'number',
              validation: (rule) => rule.required().max(10000),
            })    
          ],
});