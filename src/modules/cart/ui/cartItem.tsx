import { cn } from "@/lib/utils"
// import Link from "next/link"
import Image from 'next/image'

import catrItem1 from "@/shared/assets/images/catrItem1.jpg"
import badroom from "@/shared/assets/images/badroom.svg"

import remove from "@/shared/assets/images/remove.svg"
import up from "@/shared/assets/images/up.svg"
import down from "@/shared/assets/images/down.svg"

interface ICartItem {
    className?: string
}

export const CartItem:React.FC<ICartItem> = ({className}) => {
    return (
       <div className={cn('w-full flex justify-between items-center  pb-14 pt-4 rounded-2xl custom-shadow p-[10px] mb-6', className)}>
            <div className="rounded-[8px] overflow-hidden w-[80px] h-[80px] relative">
                <Image src={catrItem1} layout="cover" alt="quickdecor"   />
            </div>
            
            <div className=" max-w-[215px] w-full">
                <div className="flex items-center text-[#1e1e1e] text-[18px] uppercase">Microcement <Image src={badroom} width={20} height={20} alt="quickdecor" className="ml-2 mr-2" /><span className="text-main text-[10px] capitalize">Вітальня</span> </div>
                <div className=" text-[#1e1e1e] text-sm">Ефект дизайнерського бетону </div>
            </div>
         
            <div className="text-[#393939] font-semibold text-xl flex gap-2">
                <span>15 м</span>
                <div className="flex flex-col items-center justify-center gap-[2px]">
                    <button><Image src={up} width={20} height={8} alt="quickdecor"  /></button>
                    <button><Image src={down} width={20} height={8} alt="quickdecor"  /></button>
                </div>
            </div>
            <div className="text-[#393939] text-sm font-medium">15 000 грн </div>
            <button><Image src={remove} width={25} height={25} alt="quickdecor"  /></button>
       </div>  
    )
}