import React from 'react'
import Image, { StaticImageData } from 'next/image'
interface IVideoImage{
    image: string | StaticImageData   
}

export const VideoImage:React.FC<IVideoImage> = ({image}) => {
  return (
    <div className="bg-[#f6f6f9] w-full md:py-[55px] h-[210px] md:h-[690px]" >
      <div className=' w-full h-full max-w-[1144px]   block m-auto overflow-hidden relative pt-4 md:pt-0'>
        <Image src={image} style={{width: "100%", height: "auto", borderRadius: '12px', objectFit: 'cover'}} alt='quickDecor'/>
      </div>
    </div>
    
  )
}

