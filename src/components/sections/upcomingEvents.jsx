

import { getEvents } from '@/sanity/lib/api'
// import { client } from '@/sanity/lib/client'
// import { GET_EVENTS_QUERY } from '@/sanity/lib/queries'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const UpcomingEvents = async ({ title }) => {

    const events = await getEvents()
    //Instead of using client in this component, I gathered get-functions in api.js instead

    // console.log(events)

  return (
    <div>
        <h2 className='text-4xl mb-10 font-bold'>{title}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
    {
      events && events.map(event => (
        <Link key={event._id} href={`/events/${event.slug}`} className='border border-slate-700 rounded-xl overflow-hidden hover:border-2 hover:scale-105 transition'>
          
          <div className='w-full aspect-video'>
            <Image 
            src={event.image.url} 
            alt={event.image.alt} 
            width={300} 
            height={200}
            className='w-full h-full object-cover'
            />
          </div>
          <h3 className='text-center p-4 text-xl font-semibold'>{ event.name }</h3>
        </Link>
      ))
    }
        </div>
    </div>
  )
}
