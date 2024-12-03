import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import icons from "@/shared/assets/images"


import { SectionTitle } from '@/shared/ui/sectionTitle'

export const EffectChose:React.FC = ({}) => {
  return (
    <>
      <SectionTitle title='Оберіть потрібний ефект за своїми приміщеннями' redText='В залежності від обраного вами приміщення ми порекомендуємо найкращий ефекект за допомогою системи балів.'/>
      
      <div className='max-w-[1144px] w-full m-auto flex flex-wrap justify-start gap-8 md:gap-[95px] mb-[55px] px-3 md:px-0' >
          <Link href="/quiz" className='block w-[80px] h-[80px] relative overflow-hidden md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={icons.badroom}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]' />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Вітальня</p>
          </Link>
          <Link href="/quiz" className='block w-[80px] h-[80px] relative overflow-hidden md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={icons.child}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]' />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Спальня</p>
          </Link>
          <Link href="/quiz" className='block w-[80px] h-[80px] relative overflow-hidden md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={icons.cabinet}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]' />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Дитяча</p>
          </Link>
          <Link href="/quiz" className='block w-[80px] h-[80px] relative overflow-hidden md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={icons.hall}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]' />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Кухня</p>
          </Link>
          <Link href="/quiz" className='block w-[80px] h-[80px] relative overflow-hidden md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={icons.kitchen}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]' />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Коридор</p>
          </Link>
      </div>

      
      <SectionTitle title='Оберіть за типом поверхні' redText='В залежності від обраного вами приміщення ми порекомендуємо найкращий ефекект за допомогою системи балів.'/>
      
      <div className='max-w-[1144px] w-full m-auto flex flex-wrap justify-start gap-8 md:gap-[95px] mb-[55px] px-3 md:px-0' >
      <Link href="/quiz" className='block w-[80px] h-[80px] relative overflow-hidden md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={icons.ceil}  fill objectFit='cover'  alt="quickdecor"  className='rounded-[10px]' />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Вітальня</p>
          </Link>
          <Link href="/quiz" className='block w-[80px] h-[80px] relative overflow-hidden md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={icons.glass}  fill objectFit='cover'  alt="quickdecor"  className='rounded-[10px]' />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Спальня</p>
          </Link>
          <Link href="/quiz" className='block w-[80px] h-[80px] relative overflow-hidden md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={icons.fireplace}  fill objectFit='cover'  alt="quickdecor"  className='rounded-[10px]' />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Дитяча</p>
          </Link>
          <Link href="/quiz" className='block w-[80px] h-[80px] relative overflow-hidden md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={icons.fasad}  fill objectFit='cover'  alt="quickdecor"  className='rounded-[10px]' />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Кухня</p>
          </Link>
          
      </div>


      <SectionTitle title='Оберіть за призначенням' redText='Роздивитися детальніше.'/>
      
      <div className='max-w-[1144px] w-full m-auto flex flex-wrap justify-start gap-8 md:gap-[95px] mb-[55px] px-3 md:px-0' >
          <Link href="/quiz" className='block w-[80px] h-[80px] relative overflow-hidden md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={icons.stable}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]'  />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Вітальня</p>
          </Link>
          <Link href="/quiz" className='block w-[80px] h-[80px] relative overflow-hidden md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={icons.wet}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]'  />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Спальня</p>
          </Link>
          <Link href="/quiz" className='block w-[80px] h-[80px] relative overflow-hidden md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={icons.water}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]'  />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Дитяча</p>
          </Link>
          <Link href="/quiz" className='block w-[80px] h-[80px] relative overflow-hidden md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all'>
            <Image src={icons.dust}  fill objectFit='cover'  alt="quickdecor"  className='rounded-[10px]' />
            <p className='text-main mt-5 md:mt-8 text-sm md:text-2xl font-medium'>Кухня</p>
          </Link>
          
      </div>

    </>
  
  )
}

