import React from 'react'
import { Hero } from './hero'

export const Sections = ({ sections }) => {
  return (
    <div className='space-y-20'>
        {
            sections && sections.map(section => {
                switch(section._type) {
                    case "heroSection":
                        return <Hero key={section._key} headline={section.headline} image={section.image}/>
                }
            })
        }
    </div>
  )
}
