import React from 'react'
import Image, { StaticImageData } from 'next/image'
interface IVideoImage{
    image: string | StaticImageData   
}

export const VideoImage:React.FC<IVideoImage> = ({image}) => {
  return (
    <div className="bg-[#f6f6f9] w-full md:py-[55px] h-[160px] md:h-[600px]" >
      <div className=' w-full h-full max-w-[1144px]   block m-auto overflow-hidden relative'>
        <Image src={image} fill style={{width: "100%", height: "100%", borderRadius: '12px'}} alt='quickDecor'/>
      </div>
    </div>
    
  )
}

