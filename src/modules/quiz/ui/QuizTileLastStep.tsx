'use client'
import { cn } from "@/lib/utils"
import Image, { StaticImageData } from "next/image"

interface IQuizTileLastStep {
    className?: string
    text: string
    image: StaticImageData
    slug: string
    active: boolean
    quizAction: (val: string, param: string) => void
}

export const QuizTileLastStep:React.FC<IQuizTileLastStep> = ({className, text, image, slug, quizAction, active}) => {

    return(
        <button className={cn(`${active ? `bg-[#ece0c7]`: `bg-white`} flex flex-col items-center justify-start gap-5  px-1 md:px-[30px] py-4 max-w-[165px] md:max-w-[206px] w-full h-[170px] md:h-[202px] custom-shadow hover:scale-105 transition-all mb-9 rounded-[10px]`, className)}
            onClick={()=>quizAction(slug, text)}
        >
            <Image src={image} style={{width: 'auto', height: '104px', objectFit: 'cover'}} alt="quickdecor" className="rounded-[10px]" />
             <p className="text-sm md:text-[16px] font-semibold leading-6 text-center">{text}</p>
        </button>
       
    )
}