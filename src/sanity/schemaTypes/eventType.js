import { defineField, defineType } from 'sanity';
import {ConfettiIcon} from '@sanity/icons'


export const eventType = defineType({
    name: 'events',
    title: 'Events',
    type: 'document',
    icon: ConfettiIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        }),
        defineField({
            name: 'description',
            type: 'text',
          }),
        defineField({
            name: 'image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt text',
                    type: 'string'
                })
            ]
        }),
        defineField({
            name: 'time',
            title: 'Date and time',
            type: 'datetime',
            options: {
                dateFormat: "MMMM Do YYYY,",
                timeFormat: "HH:mm"
            }
        }),
        defineField({
            name: "location",
            type: "string"
        })
    ]
})