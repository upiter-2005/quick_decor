import React from 'react'
import Image from 'next/image'

import icons from "@/shared/assets/images"


import { SectionTitle } from '@/shared/ui/sectionTitle'
import { cn } from '@/lib/utils'
import { RedButton } from '@/shared/ui/redButton'

export const EffectChose:React.FC = ({}) => {
  return (
    <>
      <h2 className={cn('text-[28px] md:text-[46px] leading-9 md:leading-[64px] w-full  text-center')}>Подобаються всі ефекти?</h2> 
      <p className={cn('text-[14px] md:text-[18px] leading-5 md:leading-[26px] w-full  text-center px-2 pt-3')}>Скористайтеся нашим фільтром помічником. <br /> В залежності від обраних вами параметрів, ми порекомендуємо найкращий ефект за допомогою системи балів.</p>
      <SectionTitle redText='Обирайте ефекти за приміщеннями'/>
      
      <div className='max-w-[1144px] w-full m-auto flex flex-wrap justify-center gap-8 md:gap-[55px] mb-[55px] px-3 md:px-0 pb-12 ' >
          <div  className='block w-[80px] h-[80px] relative  md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
            <Image src={icons.badroom}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]' />
            <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>Спальня</p>
          </div>
          <div className='block w-[80px] h-[80px] relative  md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
            <Image src={icons.gost}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]' />
            <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>Вітальня</p>
          </div>
          <div className='block w-[80px] h-[80px] relative  md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
            <Image src={icons.child}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]' />
            <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>Дитяча</p>
          </div>
          <div className='block w-[80px] h-[80px] relative md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
            <Image src={icons.kitchen}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]' />
            <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>Кухня</p>
          </div>
          <div className='block w-[80px] h-[80px] relative  md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
            <Image src={icons.cabinet}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]' />
            <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>Кабінет</p>
          </div>
          <div className='block w-[80px] h-[80px] relative  md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
            <Image src={icons.hall}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]' />
            <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>Коридор</p>
          </div>
      </div>

      
      <SectionTitle redText='Обирайте за типом поверхні'/>
      
      <div className='max-w-[1144px] w-full m-auto flex flex-wrap justify-center gap-8 md:gap-[55px] mb-[55px] px-3 md:px-0 pb-12' >
      <div className='block w-[80px] h-[80px] relative md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
            <Image src={icons.wall}  fill objectFit='cover'  alt="quickdecor"  className='rounded-[10px]' />
            <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>Стіна інтер&apos;єр</p>
          </div>
          <div className='block w-[80px] h-[80px] relative md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
            <Image src={icons.ceil}  fill objectFit='cover'  alt="quickdecor"  className='rounded-[10px]' />
            <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>Стеля</p>
          </div>
         
          <div className='block w-[80px] h-[80px] relative md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
            <Image src={icons.glass}  fill objectFit='cover'  alt="quickdecor"  className='rounded-[10px]' />
            <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>Кухоний фартук (під скло)</p>
          </div>
          <div className='block w-[80px] h-[80px] relative md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
            <Image src={icons.fireplace}  fill objectFit='cover'  alt="quickdecor"  className='rounded-[10px]' />
            <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>Камін</p>
          </div>
          <div className='block w-[80px] h-[80px] relative md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
            <Image src={icons.fasad}  fill objectFit='cover'  alt="quickdecor"  className='rounded-[10px]' />
            <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>Фасад</p>
          </div>
        
    

      </div>


      <SectionTitle redText='Обирайте за типом підготовки поверхні'/>
      
      <div className='max-w-[1144px] w-full m-auto flex flex-wrap justify-center gap-8 md:gap-[55px] mb-[55px] px-3 md:px-0 pb-12' >
          <div className='block w-[80px] h-[80px] relative md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
            <Image src={icons.wallpaper}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]'  />
            <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>Під шпалери</p>
          </div>
          <div className='block w-[80px] h-[80px] relative md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
            <Image src={icons.paint}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]'  />
            <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>Під фарбування</p>
          </div>
          
      </div>


      <SectionTitle redText='Обирайте за властивостями для експлуатації'/>
      
      <div className='max-w-[1144px] w-full m-auto flex flex-wrap justify-center gap-8 md:gap-[55px] mb-[55px] px-3 md:px-0 pb-12' >
          <div className='block w-[80px] h-[80px] relative md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
            <Image src={icons.stable}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]'  />
            <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>Стійкість, прочність</p>
          </div>
          <div className='block w-[80px] h-[80px] relative md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
            <Image src={icons.wet}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]'  />
            <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>Вологе прибирання</p>
          </div>
          <div className='block w-[80px] h-[80px] relative md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
            <Image src={icons.water}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]'  />
            <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>Контакт з водою</p>
          </div>
          <div className='block w-[80px] h-[80px] relative md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
            <Image src={icons.dust}  fill objectFit='cover'  alt="quickdecor"  className='rounded-[10px]' />
            <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>Не сприймає пилу</p>
          </div>
          
      </div>

      <div className='w-full text-center mb-16 mt-14'><RedButton linkText='Обрати ефект через фiльтр' text='Обрати ефект через фiльтр' href='/quiz' className='px-8' /></div>

    </>
  
  )
}

