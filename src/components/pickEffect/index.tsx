import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import air from "@/shared/assets/images/p1.png"
import sand from "@/shared/assets/images/p2.png"
import cement from "@/shared/assets/images/p3.png"
import travertin from "@/shared/assets/images/p4.png"
import {cn} from '@/shared/helpers/cn'
import { SectionTitle } from '@/shared/ui/sectionTitle'

interface IPickEffect {
  className?: string
}
export const PickEffect:React.FC<IPickEffect> = ({className}) => {
  return (
    <>
      <SectionTitle title='Оберіть за ефектом' redText='5 трендових але практичних ефектів'/>
      <div className={cn('max-w-[1200px] w-full m-auto flex justify-center gap-[65px] pb-14', className)} >
          <Link href="#" className='block w-[186px]  text-center hover:opacity-75 transition-all'>
            <Image src={air}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>AIR</p>
          </Link>
          <Link href="#" className='block w-[186px]  text-center hover:opacity-75 transition-all'>
            <Image src={sand}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>SAND</p>
          </Link>
          <Link href="#" className='block w-[186px]  text-center hover:opacity-75 transition-all'>
            <Image src={cement}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>MICROCEMENT</p>
          </Link>
          <Link href="#" className='block w-[186px]  text-center hover:opacity-75 transition-all'>
            <Image src={travertin}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>TRAVERTINE</p>
          </Link>
          <Link href="#" className='block w-[186px]  text-center hover:opacity-75 transition-all'>
            <Image src={air}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>QUICK</p>
          </Link>
      </div>
    </>
  
  )
}

