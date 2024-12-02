'use client'
import { cn } from "@/lib/utils"
import Image, { StaticImageData } from "next/image"

interface IQuizTile {
    className?: string
    text: string
    image: StaticImageData
    isLast?: boolean
    isFirst?: boolean
}

export const QuizTile:React.FC<IQuizTile> = ({className, text, image, isLast, isFirst}) => {
    return(
        <button className={cn(`flex flex-col items-center justify-start gap-5 bg-white px-4 md:px-[30px] py-5 max-w-[165px] md:max-w-[267px] w-full h-[170px] md:h-[202px] custom-shadow ${isFirst && ' rounded-tl-[8px] rounded-bl-[8px]'} ${isLast && 'rounded-br-[8px] rounded-tr-[8px]'} hover:scale-105 transition-all mb-9`, className)}
            onClick={()=>console.log('qiuz')}
        >
            <Image src={image} style={{width: 'auto', height: '104px', objectFit: 'cover'}} alt="quickdecor" className="rounded-[10px]" />
             <p className="text-sm md:text-[18px] font-semibold leading-6 text-center">{text}</p>
        </button>
       
    )
}