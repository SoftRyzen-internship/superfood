import {defineField, defineType} from 'sanity'


export const review = defineType({
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
                defineField({
                    name: 'reviewer',
                    type: 'string',
                    validation: (rule) => rule.required().max(30),   
                }),
                defineField({
                    name: 'comment',
                    type: 'string',
                    validation: (rule) => rule.required(),
                }),
            ]
})