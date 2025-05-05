import { ConfettiIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";


export const eventsSectionType = defineType({
    name: "eventsSectionType",
    title: "Events section",
    type: "object",
    icon: ConfettiIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
            initialValue: "Upcoming events"
        })
    ]
})