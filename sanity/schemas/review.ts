import {defineField, defineType} from 'sanity'


export const review = defineType({
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
                defineField({
                    name: 'name',
                    type: 'string',
                    validation: (rule) => rule.required().max(50),   
                }),
                defineField({
                    name: 'comment',
                    type: 'string',
                    validation: (rule) => rule.required(),
                }),
            ]
})