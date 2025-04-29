import { defineQuery, groq } from "next-sanity";

export const GET_EVENTS_QUERY = defineQuery(`*[_type == 'events'] {
  _id,
  title,
  "slug": slug.current,
  "image": {
    "url": image.asset->url,
    "alt": image.alt
  }
}`)

export const GET_EVENT_QUERY = defineQuery(`*[_type == 'events' && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  "image": {
    "url": image.asset->url,
    "alt": image.alt
  },
  url,
  description
}`)