import Link from 'next/link'
import React from 'react'
import { NavLink } from './nav-link'

export const NavBar = () => {
  return (
    <nav className='wrapper flex justify-between items-center py-4'>
        <Link href='/' className='text-3xl font-bold gradient py-1'>STHLM Orchestra</Link>
        <ul>
            <li><NavLink href='/events'>Events</NavLink></li>
        </ul>
    </nav>
  )
}
