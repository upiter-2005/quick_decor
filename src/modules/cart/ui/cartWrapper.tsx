import { cn } from "@/lib/utils"
import Link from "next/link"
import { TotalTable } from "./totalTable"
import { CartItem } from "./cartItem"

interface ICartWrapper {
    className?: string
}

export const CartWrapper:React.FC<ICartWrapper> = ({className}) => {
    return (
       <div className={cn('max-w-[1144px] w-full m-auto flex justify-center items-start gap-[65px] pb-14 pt-4', className)}>
            <div className="max-w-[608px] w-full">
                <div className="text-[18px] font-semibold text-[#1e1e1e] pb-7 border-b border-b-[#858585] mb-6" >
                    <Link href="#" className="text-[#858585]">  Повернутися до покупок </Link> | Кошик
                </div>

                <p className="text-[18px] text-[#1e1e1e] mb-0">Ваше Замовлення</p>
                <div className="text-sm text-[#1e1e1e] mb-7">Ви маєте 3 позиції у Вашому кошику</div>

                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />

            </div>
            <TotalTable />
       </div>  
    )
}