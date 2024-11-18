import React from 'react'
import Image, { StaticImageData } from 'next/image'
interface IVideoImage{
    image: string | StaticImageData   
}

export const VideoImage:React.FC<IVideoImage> = ({image}) => {
  return (
    <div className='w-full max-w-[1144px] md:h-[540px] md:my-[55px] block m-auto overflow-hidden'>
      <Image src={image} layout='responsive' alt='quickDecor'/>
    </div>
  )
}

