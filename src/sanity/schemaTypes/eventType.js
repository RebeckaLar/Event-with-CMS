import { defineField, defineType } from 'sanity';
import {ConfettiIcon} from '@sanity/icons'


export const eventType = defineType({
    name: 'event',
    title: 'Event',
    type: 'document', //Saving "Events" as a doc in our database in Sanity
    icon: ConfettiIcon,
    fields: [ //Defines what fields an event should contain 
        defineField({
            name: 'name',
            title: 'Title', //Displays the field as "Title" to the user instead of Name
            type: 'string'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name' //Gets the slug from name
            }
        }),
        defineField({
            name: 'description',
            type: 'blockContent',
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