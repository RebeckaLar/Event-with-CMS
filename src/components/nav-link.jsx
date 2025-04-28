"use client"

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const NavLink = ({ children, className, href }) => {

    const pathname = usePathname()
    const isActive = pathname === href || pathname.startsWith(href + '/')

  return (
    <Link href={href} 
    className={cn('text-xl font-semibold hover:underline',
        isActive ? 'text-orange-400' : 'text-slate-200', 
        className
    )}
    >{ children }</Link>
  )
}
