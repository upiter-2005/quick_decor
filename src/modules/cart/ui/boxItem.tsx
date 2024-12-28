import { cn } from "@/lib/utils"
import Image from 'next/image'


import {useCartStore} from "@/store/cartStore"
import Link from "next/link"


interface ICartItemBox {
    className?: string
}

export const BoxItem:React.FC<ICartItemBox> = ({className}) => {

    const {cartItems} = useCartStore()

    return (
       <div className={cn('w-full flex md:justify-between items-center  pb-14 pt-4 rounded-2xl input-shadow border border-[#efefef] p-[10px] mb-6 gap-2 flex-wrap relative', className)}>
            
         <div className="flex items-center justify-center gap-4">
         <div className="rounded-[8px] overflow-hidden w-[55px] h-[55px] md:w-[80px] md:h-[80px] relative">
                <Image src={"https://api.quickdecor.com.ua/wp-content/uploads/2024/12/4.jpg"} fill objectFit="cover" alt="quickdecor" />
            </div>
            
            <div className=" max-w-[215px] w-full"> 
                <Link href="/product/quick-box" className="flex items-center text-[#1e1e1e] text-[18px] uppercase">Коробка помічниця (оренда)</Link>
            </div>
         </div>
        
            <div className="text-[#393939] font-semibold text-xl flex items-center gap-2 w-full md:w-auto justify-end">
                <div className="text-[#393939] text-sm font-medium md:ml-8 ">{cartItems.length > 0 ? '0' : '3000'} грн </div>
            </div>
         
               
       </div>  
    )
}