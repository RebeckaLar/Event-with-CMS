import { defineQuery, groq } from "next-sanity";

export const GET_EVENTS_QUERY = defineQuery(`*[_type == 'event'] {
  _id,
  name,
  "slug": slug.current,
  "image": {
    "url": image.asset->url,
    "alt": image.alt
  }
}`)

export const GET_EVENT_QUERY = defineQuery(`*[_type == 'event' && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  "image": {
    "url": image.asset->url,
    "alt": image.alt
  },
  description
}`)
// { slug: 'red-bull-symphonic-viktor-leksell' }