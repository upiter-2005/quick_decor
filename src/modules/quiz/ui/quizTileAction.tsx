'use client'
import { cn } from "@/lib/utils"
import Image, { StaticImageData } from "next/image"

interface IQuizTileAction {
    className?: string
    text: string
    image: StaticImageData
    slug: string
    current: string
    quizAction: (val: string, param: string) => void
}

export const QuizTileAction:React.FC<IQuizTileAction> = ({className, text, image, slug, quizAction, current}) => {

    return(
        <button className={cn(`${current === slug ? `bg-[#ece0c7]`: `bg-white`} flex flex-col items-center justify-start gap-3  px-1 md:px-[20px] py-4 max-w-[155px] md:max-w-[160px] w-full h-[170px] md:h-[178px] custom-shadow hover:scale-105 transition-all mb-9 rounded-[10px]`, className)}
            onClick={()=>quizAction(slug, text)}
        >
            <Image src={image} style={{width: 'auto', height: '104px', objectFit: 'cover'}} alt="quickdecor" className="rounded-[10px]" />
             <p className="text-sm md:text-[12px] font-semibold leading-4 text-center">{text}</p>
        </button>
       
    )
}