import { UpcomingEvents } from '@/components/sections/upcomingEvents'
import { Hero } from '@/components/sections/hero'
import React from 'react'
import { getPageBySlug } from '@/sanity/lib/api'
import { Sections } from '@/components/sections/sections'

async function HomePage() {

  const pageResult = await getPageBySlug('/')

  return (
    <div className='wrapper'>
        <Sections sections={pageResult.sections}/>
    </div>
  )
}

export default HomePage