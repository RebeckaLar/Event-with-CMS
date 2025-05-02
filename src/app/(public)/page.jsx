import { UpcomingEvents } from '@/components/sections/upcomingEvents'
import { Hero } from '@/components/sections/hero'
import React from 'react'

function HomePage() {
  return (
    <div className='wrapper'>
      <Hero />
      <UpcomingEvents title='Upcoming concerts'/>
    </div>
  )
}

export default HomePage