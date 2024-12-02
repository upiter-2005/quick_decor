import { cn } from "@/lib/utils"
// import Link from "next/link"
import Image from 'next/image'



import remove from "@/shared/assets/images/remove.svg"
import up from "@/shared/assets/images/up.svg"
import down from "@/shared/assets/images/down.svg"
import {ICartItem, useCartStore} from "@/store/cartStore"
import { useEffect, useState } from "react"


interface ICartItemBox {
    className?: string
    item: ICartItem
}

export const CartItem:React.FC<ICartItemBox> = ({className, item}) => {
    const [square, setSquare] = useState(item.square);
    
    const {cartItems, removeItem, addSquare, minusSquare} = useCartStore()

    useEffect(()=>{
        setSquare(item.square)
    }, [cartItems, item.square])
    return (
       <div className={cn('w-full flex md:justify-between items-center  pb-14 pt-4 rounded-2xl input-shadow border border-[#efefef] p-[10px] mb-6 gap-2 flex-wrap relative', className)}>
            <div className="rounded-[8px] overflow-hidden w-[55px] h-[55px] md:w-[80px] md:h-[80px] relative">
                <Image src={item.image} fill objectFit="cover" alt="quickdecor" />
            </div>
            
            <div className=" max-w-[215px] w-full">
                <div className="flex items-center text-[#1e1e1e] text-[18px] uppercase">
                    {item.name} 
                    {/* <Image src={badroom} width={20} height={20} alt="quickdecor" className="ml-2 mr-2" /><span className="text-main text-[10px] capitalize">Вітальня</span>  */}
                </div>
                <div className=" text-[#1e1e1e] text-sm">Ефект дизайнерського бетону </div>
            </div>
         
        
            <div className="text-[#393939] font-semibold text-xl flex items-center gap-2 w-full md:w-auto justify-end">
                <span>{square}  м</span>
                <div className="flex flex-col items-center justify-center gap-[2px]">
                    <button onClick={()=> addSquare(item.id)}><Image src={up} width={20} height={8} alt="quickdecor" /></button>
                    <button onClick={()=> {
                        if(item.square === 1) return;
                        minusSquare(item.id)
                    }}><Image src={down} width={20} height={8} alt="quickdecor" /></button>
                </div>
                <div className="text-[#393939] text-sm font-medium md:ml-8 ">x {item.price} грн </div>
            </div>
            <button
                onClick={()=>removeItem(item.id, item.price, item.square)}
            ><Image src={remove} width={25} height={25} alt="quickdecor" className="absolute right-3 top-5 md:relative md:top-0"  /></button>
               
       </div>  
    )
}