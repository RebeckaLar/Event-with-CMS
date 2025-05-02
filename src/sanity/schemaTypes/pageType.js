import { FileCode2Icon } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";


export const pageType = defineType({
    name: "page",
    title: "Page",
    type: "document",
    icon: FileCode2Icon,
    fields: [
        defineField({
            name: "title",
            type: "string",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "slug", 
            type: "slug",
            options: {
                source: "title"
            },
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "description",
            title: "Meta - description",
            type: "string", 
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "sections",
            type: "array",
            of: [
                defineArrayMember({ type: "heroSection" }),
                // defineArrayMember({ type: "projectsSection" }),
                // defineArrayMember({ type: "featuresSection" })
            ],
            // options: {
            //     insertMenu: {
            //         views: [
            //             { name: "grid", previewImageUrl: (schemaTypeName) => `/static/preview-${schemaTypeName}.jpg` },
            //         ]
            //     }
            // }
        })
    ]
})