import { cn } from "@/lib/utils"
import Image from 'next/image'
import remove from "@/shared/assets/images/remove.svg"

import {useCartStore} from "@/store/cartStore"
import Link from "next/link"


interface ICartItemBox {
    className?: string
}

export const BoxItem:React.FC<ICartItemBox> = ({className}) => {

    const {cartItems, setBox} = useCartStore()

    return (
        <>
         <div className={cn('w-full flex md:justify-between items-center  pb-14 pt-4 rounded-2xl input-shadow border border-[#efefef] p-[10px] mb-6 gap-2 flex-wrap relative', className)}>
            
            <div className="flex items-center justify-center gap-4">
               <div className="rounded-[8px] overflow-hidden w-[55px] h-[55px] md:w-[80px] md:h-[80px] relative">
                   <Image src={"https://api.quickdecor.com.ua/wp-content/uploads/2024/12/4.jpg"} fill objectFit="cover" alt="quickdecor" />
               </div>
               
               <div className="max-w-[315px] w-full flex-1"> 
                   <Link href="/product/quick-box" className="flex items-center text-[#1e1e1e] text-sm md:text-[18px] uppercase">
                    Бокс взірців  (під заставу)
                    </Link>
                    {cartItems.length === 0 && <div className="text-[#ff0000] text-sm">Зафіксуємо передплатою або повернемо у разі відмови</div>}
                   
               </div>
               
            </div>
           
           <div className="flex items-center justify-end h-full ">
                <div className="text-[#393939] font-semibold text-xl flex items-center gap-2 w-full md:w-auto justify-end ">
                    <div className="text-[#393939] text-sm font-semibold md:ml-8 ">{cartItems.length > 0 ? '0' : '3000'} грн </div>
                </div>
                
                {cartItems.length === 0  && <Link href="/catalog" className="bg-[#ff0000] text-white font-semibold text-xs absolute rounded-[12px] p-1 -bottom-3 right-2 z-30">Додайте хоча б один ефект щоб отримати безкоштовно</Link> }
                    
                <button className="absolute right-3 top-2 "
                    onClick={()=>setBox(false)}
                    >
                    <Image src={remove} width={24} height={24} alt="quickdecor" className="md:relative md:top-0"  />
                </button>
           </div>
               
          </div> 
          
        
        </>
      
    )
}