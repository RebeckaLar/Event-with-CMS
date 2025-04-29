import { getEventBySlug } from '@/sanity/lib/api'
import React from 'react'

async function EventDetailsPage({ params }) {

    //De-structuring params to get the slug-property:
    const { slug } = await params 

    const event = await getEventBySlug(slug)
    console.log(slug)

    console.log(event)

  return (
    <div>EventDetailsPage</div>
  )
}

export default EventDetailsPage