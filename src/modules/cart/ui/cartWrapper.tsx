'use client'
import { cn } from "@/lib/utils"
import Link from "next/link"
import { TotalTable } from "./totalTable"
import { CartItem } from "./cartItem"
import { SeenProducts } from "@/components/seenProducts"
import { Divider } from "@/shared/ui/divider"
import { useCartStore } from "@/store/cartStore"


interface ICartWrapper {
    className?: string
}

export const CartWrapper:React.FC<ICartWrapper> = ({className}) => {
    const {cartItems} = useCartStore()
    return (
        <>
            <div className={cn('max-w-[1144px] w-full m-auto flex flex-col md:flex-row justify-center items-start gap-[65px] pb-14 pt-4 px-3 md:px-0', className)}>
                <div className="max-w-[608px] w-full ">
                    <div className="text-[18px] font-semibold text-[#1e1e1e] pb-7 border-b border-b-[#858585] mb-6" >
                        <Link href="/catalog" className="text-[#858585]">   До каталогу </Link> | Кошик
                    </div>

                    <p className="text-[18px] text-[#1e1e1e] mb-0">Ваше Замовлення</p>
                    <div className="text-sm text-[#1e1e1e] mb-7">Кількість позицій у Вашому кошику:  {cartItems.length}</div>

                    {cartItems.map((obj, i) => <CartItem key={i} item={obj}  />) }
            

                    <Link href="/quiz" className="w-full uppercase flex justify-center items-center  p-9 rounded-2xl input-shadow mb-6 border border-[#efefef] hover:opacity-60 transition-all">+ додати ще примiщення</Link>

                </div>
                <TotalTable />
            </div> 

            <SeenProducts />
            <Divider />
            
        </>
       
    )
}