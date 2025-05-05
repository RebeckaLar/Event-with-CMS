import React from 'react'
import { Hero } from './hero'
import { UpcomingEvents } from './upcomingEvents'

export const Sections = ({ sections }) => {
  return (
    <div className='space-y-20'>
        {
            sections && sections.map(section => {
                switch(section._type) {
                    case "heroSectionType":
                      return <Hero key={section._key} headline={section.headline} image={section.image}/> 
                    case "eventsSectionType":
                      return <UpcomingEvents key={section._key} title={section.title}/>
                    
                    default:
                      return null
                }
            })
        }
    </div>
  )
}
