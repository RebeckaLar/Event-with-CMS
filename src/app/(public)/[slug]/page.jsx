import { Sections } from '@/components/sections/sections'
import { getPageBySlug } from '@/sanity/lib/api'
import React from 'react'

async function SlugPage({ params }) {

    const { slug } = await params

    const pageResult = await getPageBySlug(slug)

  return (
    <div>
        <Sections sections={pageResult.sections}/>
    </div>
  )
}

export default SlugPage