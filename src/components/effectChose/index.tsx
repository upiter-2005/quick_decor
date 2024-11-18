import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import badroom from "@/shared/assets/images/badroom.svg"
import demo from "@/shared/assets/images/demo.svg"


import { SectionTitle } from '@/shared/ui/sectionTitle'

export const EffectChose:React.FC = ({}) => {
  return (
    <>
      <SectionTitle title='Оберіть потрібний ефект за своїми приміщеннями' redText='В залежності від обраного вами приміщення ми порекомендуємо найкращий ефекект за допомогою системи балів.'/>
      
      <div className='max-w-[1144px] w-full m-auto flex flex-wrap justify-center gap-8 md:gap-[95px] mb-[55px] px-3 md:px-0' >
          <Link href="#" className='block w-[80px] md:w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={badroom}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Вітальня</p>
          </Link>
          <Link href="#" className='block w-[80px] md:w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Спальня</p>
          </Link>
          <Link href="#" className='block w-[80px] md:w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Дитяча</p>
          </Link>
          <Link href="#" className='block w-[80px] md:w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Кухня</p>
          </Link>
          <Link href="#" className='block w-[80px] md:w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Коридор</p>
          </Link>
      </div>

      
      <SectionTitle title='Оберіть за типом поверхні' redText='В залежності від обраного вами приміщення ми порекомендуємо найкращий ефекект за допомогою системи балів.'/>
      
      <div className='max-w-[1144px] w-full m-auto flex flex-wrap justify-center gap-8 md:gap-[95px] mb-[55px] px-3 md:px-0' >
      <Link href="#" className='block w-[80px] md:w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={badroom}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Вітальня</p>
          </Link>
          <Link href="#" className='block w-[80px] md:w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Спальня</p>
          </Link>
          <Link href="#" className='block w-[80px] md:w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Дитяча</p>
          </Link>
          <Link href="#" className='block w-[80px] md:w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Кухня</p>
          </Link>
          <Link href="#" className='block w-[80px] md:w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Коридор</p>
          </Link>
      </div>


      <SectionTitle title='Оберіть за призначенням' redText='Роздивитися детальніше.'/>
      
      <div className='max-w-[1144px] w-full m-auto flex flex-wrap justify-center gap-8 md:gap-[95px] mb-[55px] px-3 md:px-0' >
          <Link href="#" className='block w-[80px] md:w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={badroom}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Вітальня</p>
          </Link>
          <Link href="#" className='block w-[80px] md:w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Спальня</p>
          </Link>
          <Link href="#" className='block w-[80px] md:w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Дитяча</p>
          </Link>
          <Link href="#" className='block w-[80px] md:w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Кухня</p>
          </Link>
          <Link href="#" className='block w-[80px] md:w-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={demo}  layout='responsive'  alt="quickdecor"   />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Коридор</p>
          </Link>
      </div>

    </>
  
  )
}

