'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import {cn} from '@/shared/helpers/cn'

interface IPickEffect {
  className?: string
}
export const Sale:React.FC<IPickEffect> = ({className}) => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <>
      {pathname !== '/quiz' &&    <div className={cn('bg-[#ff0000] text-[11px]  p-3 rounded-br-3xl rounded-tl-3xl fixed top-14 md:top-[96px] right-0 z-[199] text-white font-bold' , className)} >
       Знижка дня - 12%
      </div>}
   
    </>
  
  )
}

