import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { SectionTitle } from '@/shared/ui/sectionTitle'


import { RedButton } from '@/shared/ui/redButton'

interface IDataBlock {
    children: React.ReactNode
    title: string
    redTitle: string
    reverse?: boolean

    btnText?: string
    btnHref?: string
    btnLinkText?: string

    image: string | StaticImageData
}
export const DataBlock:React.FC<IDataBlock> = ({children, title, redTitle, reverse, btnText, btnHref, btnLinkText, image}) => {
  return (
    <>
    <div className='w-full bg-[#f6f6f9] py-[80px]'>
    {reverse &&  <SectionTitle title={title} redText={redTitle} className='w-full mt-0'/>}
        <div className={`max-w-[1144px] w-full m-auto flex items-start flex-wrap justify-between gap-[64px] ${reverse && 'flex-row-reverse'}`}>
            <div className='flex-1 px-3 md:px-0'>
                <div className='text-sm md:text-base font-normal leading-6'> 
                    {!reverse && <SectionTitle title={title} redText={redTitle} className='w-full mt-0' />}
                    {children} 
                    </div>
                {btnText && <RedButton text={btnText} href={btnHref} linkText={btnLinkText} />}
                
            </div>
            <div className='max-w-[270px] m-auto md:max-w-[446px] md:h-[510px] overflow-hidden w-full relative'>
                <Image src={image} fill objectFit="contain" alt='quickDecor' style={{width: "100%", height: "100%"}} />
            </div>
        </div>
    </div>
   
      
    </>
  
  )
}

