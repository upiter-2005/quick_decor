import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import air from "@/shared/assets/images/Air.png"
import sand from "@/shared/assets/images/Sand.png"
import cement from "@/shared/assets/images/Microcement.png"
import travertin from "@/shared/assets/images/Travertine.png"
import quick from "@/shared/assets/images/Quick.png"
import {cn} from '@/shared/helpers/cn'
import { SectionTitle } from '@/shared/ui/sectionTitle'
import { RedButton } from '@/shared/ui/redButton'

interface IPickEffect {
  className?: string
  showLink?: boolean
}
export const PickEffect:React.FC<IPickEffect> = ({className, showLink = true}) => {
  return (
    <>
  
    
      <div className={cn('max-w-[1200px] w-full m-auto flex flex-wrap justify-center gap-9 md:gap-[65px] pb-14 pt-[5px] md:pt-[76px]', className)} id="front-catalog">
        <div className='w-full'> 
           <SectionTitle  redText='5 трендових та практичних ефектів' className='!pb-2'  / >
           </div>
          <Link href="/product/air-white" className='block w-[120px] h-[190px] md:w-[186px] relative md:h-[270px] text-center hover:opacity-75 transition-all'>
            <Image src={air}  objectFit="cover"  alt="quickdecor" />
            <p className='text-main mt-1 md:mt-4  md:text-2xl font-medium '>AIR</p>
          </Link>
          <Link href="/product/sand-cool" className='block w-[120px] h-[190px] md:w-[186px] relative md:h-[270px]   text-center hover:opacity-75 transition-all'>
            <Image src={sand}  objectFit="cover"  alt="quickdecor"   />
            <p className='text-main mt-1 md:mt-4   md:text-2xl font-medium'>SAND</p>
          </Link>
          <Link href="/product/microcemente-ash" className='block w-[120px] h-[190px] md:w-[186px] relative md:h-[270px]   text-center hover:opacity-75 transition-all'>
            <Image src={cement}  objectFit="cover"  alt="quickdecor"   />
            <p className='text-main mt-1 md:mt-4   md:text-2xl font-medium'>MICROCEMENTE</p>
          </Link>
          <Link href="/product/travertine-naturale" className='block w-[120px] h-[190px] md:w-[186px] relative md:h-[270px]   text-center hover:opacity-75 transition-all'>
            <Image src={travertin}  objectFit="cover"  alt="quickdecor"   />
            <p className='text-main mt-1 md:mt-4   md:text-2xl font-medium'>TRAVERTINE</p>
          </Link>
          <Link href="/product/quick-concrete" className='block w-[120px] h-[190px] md:w-[186px] relative md:h-[270px]   text-center hover:opacity-75 transition-all'>
            <Image src={quick}  objectFit="cover"  alt="quickdecor"   />
            <p className='text-main mt-1 md:mt-4  md:text-2xl font-medium'>QUICK</p>
          </Link>
          {showLink && (<div className='w-full text-center'><RedButton linkText='Залишити заявку' text='Перейти в каталог' href='#footerForm' className='px-8 mt-8' /></div>)}
          
      </div>
    </>
  
  )
}

