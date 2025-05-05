import { ClapperboardIcon } from "lucide-react";
import { defineField, defineType } from "sanity";


export const eventsSectionType = defineType({
    name: "eventsSectionType",
    title: "Events section",
    type: "object",
    icon: ClapperboardIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
            initialValue: "Upcoming events"
        })
    ]
})