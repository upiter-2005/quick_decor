import { RedButton } from '@/shared/ui/redButton'
import React from 'react'


export const ContactBaner:React.FC = () => {
  return (
    <div className='w-full max-w-[1144px] h-[540px] rounded-[8px] bg-contactBg bg-cover bg-center bg-no-repeat 
    flex items-end pb-[56px] m-auto'>
       <div className='flex px-[96px] w-full justify-between items-center'>
            <p className='max-w-[483px] text-[32px] text-white font-semibold leading-10 m-0'>Ще треба трохи інформації для вибору?</p>
            <RedButton text='Contact Us' className='w-[212px] ' />
       </div>
    </div>
  )
}

