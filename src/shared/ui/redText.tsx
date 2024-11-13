import { cn } from "../helpers/cn"
import Image from "next/image"
import mark from "@/shared/assets/images/mark.svg"

interface IRedText {
    className?: string
    text: string
}

export const RedText:React.FC<IRedText> = ({className, text}) => {
    return(
        <div className="flex gap-2">
            <Image src={mark} width={17} height={4} alt="quickdecor" />
             <p className={cn('text-[#ff0000] text-sm font-semibold leading-5', className)}>{text}</p>
        </div>
       
    )
}