import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import badroom from "@/shared/assets/images/badroom.svg"
import demo from "@/shared/assets/images/demo.png"


import { SectionTitle } from '@/shared/ui/sectionTitle'

export const EffectChose:React.FC = ({}) => {
  return (
    <>
      <SectionTitle title='Оберіть потрібний ефект за своїми приміщеннями' redText='В залежності від обраного вами приміщення ми порекомендуємо найкращий ефекект за допомогою системи балів.'/>
      
      <div className='max-w-[1144px] w-full m-auto flex justify-between gap-[95px] mb-[55px]' >
          <Link href="#" className='block w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={badroom}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>Вітальня</p>
          </Link>
          <Link href="#" className='block w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>Спальня</p>
          </Link>
          <Link href="#" className='block w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>Дитяча</p>
          </Link>
          <Link href="#" className='block w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>Кухня</p>
          </Link>
          <Link href="#" className='block w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>Коридор</p>
          </Link>
      </div>

      
      <SectionTitle title='Оберіть за типом поверхні' redText='В залежності від обраного вами приміщення ми порекомендуємо найкращий ефекект за допомогою системи балів.'/>
      
      <div className='max-w-[1144px] w-full m-auto flex justify-between gap-[95px] mb-[55px]' >
          <Link href="#" className='block w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={badroom}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>Вітальня</p>
          </Link>
          <Link href="#" className='block w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>Спальня</p>
          </Link>
          <Link href="#" className='block w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>Дитяча</p>
          </Link>
          <Link href="#" className='block w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>Кухня</p>
          </Link>
          <Link href="#" className='block w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>Коридор</p>
          </Link>
      </div>


      <SectionTitle title='Оберіть за призначенням' redText='Роздивитися детальніше.'/>
      
      <div className='max-w-[1144px] w-full m-auto flex justify-between gap-[95px] mb-[55px]' >
          <Link href="#" className='block w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={badroom}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>Вітальня</p>
          </Link>
          <Link href="#" className='block w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>Спальня</p>
          </Link>
          <Link href="#" className='block w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>Дитяча</p>
          </Link>
          <Link href="#" className='block w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>Кухня</p>
          </Link>
          <Link href="#" className='block w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-8 text-2xl font-medium'>Коридор</p>
          </Link>
      </div>

    </>
  
  )
}

