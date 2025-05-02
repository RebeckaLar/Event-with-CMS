import { cn } from '@/lib/utils'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'

export const Hero = ({ headline, image }) => {

  const opacityValue = image?.darken ? image.darken / 100 : 0

  return (
    <header className='h-96 flex flex-col justify-center items-center text-center relative'>
        <h1 
        className={cn('text-6xl font-bold bg-clip-text text-transparent py-4 relative z-20',
          image && 'text-white'
        )}>{ headline }</h1>
        {
          image && (
            <>
              <Image 
              className='absolute h-full w-full object-cover z-0'
              src={urlFor(image.asset).url()} 
              alt={image.alt} 
              width={320} 
              height={680}/>
              <div className='bg-black absolute z-10 inset-0' style={{ opacity: opacityValue }}/>
            </>
          )
        }
    </header>
  )
}