import { getEventBySlug } from '@/sanity/lib/api'
import { client } from '@/sanity/lib/client'
import { GET_EVENT_QUERY } from '@/sanity/lib/queries'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

export const generateMetadata = async ({ params }) => {
  const { slug } = await params

  const event = await client.fetch(GET_EVENT_QUERY, { slug })

  return {
    title: event.name
  }
}

async function EventDetailsPage({ params }) {

    //De-structuring params to get the slug-property:
    const { slug } = await params 

    const event = await getEventBySlug(slug)

    if(!event) {
      return notFound()
    }

  return (
    <div className='wrapper'>
      <div className='w-full flex justify-center'>
        <Image 
        className='max-w-2xl object-cover rounded-xl'
        src={event.image.url} 
        alt={event.image.alt} 
        height={700} 
        width={900}/>
      </div>
      <div className='flex items-center justify-between my-10'>
        <h1 className='text-3xl font-bold'>{event.name}</h1>
      </div>
      <div className='prose-sm'>
        <PortableText value={event.description}/>
      </div>
    </div>
  )
}

export default EventDetailsPage