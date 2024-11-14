import React from 'react'
import Image, { StaticImageData } from 'next/image'
interface IVideoImage{
    image: string | StaticImageData   
}

export const VideoImage:React.FC<IVideoImage> = ({image}) => {
  return (
    <div className='w-[1144px] h-[540px] my-[55px] block m-auto overflow-hidden'>
      <Image src={image} layout='responsive' alt='quickDecor'/>
    </div>
  )
}

