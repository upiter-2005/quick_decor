import { RedButton } from '@/shared/ui/redButton'
import React from 'react'


export const ContactBaner:React.FC = () => {
  return (
    <div className='w-full max-w-[1144px] h-[280px] md:h-[540px] rounded-[8px] bg-contactBg bg-cover bg-center bg-no-repeat 
    flex items-end pb-[56px] m-auto'>
       <div className='flex flex-col md:flex-row md:px-[96px] w-full justify-between items-center'>
            <p className='max-w-[483px] text-2xl md:text-[32px] text-white text-center md:text-left font-semibold md:leading-10 mb-5 md:m-0'>Ще треба трохи інформації для вибору?</p>
            <RedButton text='Contact Us' className='w-[212px] ' />
       </div>
    </div>
  )
}

