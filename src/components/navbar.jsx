import Link from 'next/link'
import React from 'react'
import { NavLink } from './nav-link'
import { getPages } from '@/sanity/lib/api'

export const NavBar = async () => {

  const pages = await getPages()

  return (
    <nav className='wrapper flex justify-between items-center py-4'>
        <Link href='/' className='text-3xl font-bold gradient py-1'>STHLM Orchestra</Link>
        <ul className='flex gap-4'>
          {
            pages.map(page => (
              <li key={page._id}>
                <NavLink href={`${page.slug === '/' ? '' : '/'}${page.slug}`} className='mr-20'>{ page.title }</NavLink>
              </li>
            ))
          }
        </ul>
    </nav>
  )
}
