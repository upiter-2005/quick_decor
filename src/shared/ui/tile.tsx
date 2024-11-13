import { cn } from "../helpers/cn"
import Image from "next/image"

interface ITile {
    className?: string
    text: string
    image: string
    isLast?: boolean
    isFirst?: boolean
}

export const Tile:React.FC<ITile> = ({className, text, image, isLast, isFirst}) => {
    return(
        <div className={cn(`flex flex-col items-center justify-start gap-5 bg-white px-[30px] py-5 max-w-[267px] w-full h-[202px] custom-shadow ${isFirst && ' rounded-tl-[8px] rounded-bl-[8px]'} ${isLast && 'rounded-br-[8px] rounded-tr-[8px]'}`, className)}>
            <Image src={image} style={{width: 'auto', height: '64px', objectFit: 'cover'}} alt="quickdecor" />
             <p className="text-[18px] font-semibold leading-6 text-center">{text}</p>
        </div>
       
    )
}