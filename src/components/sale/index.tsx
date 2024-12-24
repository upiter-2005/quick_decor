import React from 'react'

import {cn} from '@/shared/helpers/cn'

interface IPickEffect {
  className?: string
}
export const Sale:React.FC<IPickEffect> = ({className}) => {
  return (
    <>

      <div className={cn('bg-[#ff0000] text-xs p-3 rounded-br-3xl rounded-tr-3xl fixed top-16 left-0 z-[199] text-white font-semibold' , className)} >
        - 12%
      </div>
    </>
  
  )
}

