import React from 'react'
import Image, { StaticImageData } from 'next/image'
interface IVideoImage{
    image: string | StaticImageData   
}

export const VideoImage:React.FC<IVideoImage> = ({image}) => {
  return (
    <div className="bg-[#f6f6f9] w-full md:py-[55px] md:h-[680px]" >
      <div className=' w-full max-w-[1144px]   block m-auto overflow-hidden'>
        <Image src={image} layout='responsive' alt='quickDecor'/>
      </div>
    </div>
    
  )
}

