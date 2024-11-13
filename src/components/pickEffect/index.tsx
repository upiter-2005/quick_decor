import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import air from "@/shared/assets/images/air.png"
import sand from "@/shared/assets/images/sand.png"
import cement from "@/shared/assets/images/cement.png"
import travertin from "@/shared/assets/images/travertin.png"

import { SectionTitle } from '@/shared/ui/sectionTitle'

export const PickEffect:React.FC = ({}) => {
  return (
    <>
      <SectionTitle title='Оберіть за ефектом' redText='5 трендових але практичних ефектів'/>
      <div className='max-w-[1200px] w-full m-auto flex justify-center gap-[65px]' >
          <Link href="#" className='block w-[186px] h-[260px] text-center hover:opacity-75 transition-all'>
            <Image src={air}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>AIR</p>
          </Link>
          <Link href="#" className='block w-[186px] h-[260px] text-center hover:opacity-75 transition-all'>
            <Image src={sand}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>SAND</p>
          </Link>
          <Link href="#" className='block w-[186px] h-[260px] text-center hover:opacity-75 transition-all'>
            <Image src={cement}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>MICROCEMENT</p>
          </Link>
          <Link href="#" className='block w-[186px] h-[260px] text-center hover:opacity-75 transition-all'>
            <Image src={travertin}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>TRAVERTINE</p>
          </Link>
          <Link href="#" className='block w-[186px] h-[260px] text-center hover:opacity-75 transition-all'>
            <Image src={air}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>QUICK</p>
          </Link>
      </div>
    </>
  
  )
}

