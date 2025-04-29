import { Events } from '@/components/sections/events'
import { Hero } from '@/components/sections/hero'
import React from 'react'

function HomePage() {
  return (
    <div className='wrapper'>
      <Hero />
      <Events title='Upcoming Events'/>
    </div>
  )
}

export default HomePage