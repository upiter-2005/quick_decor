'use client'
import { cn } from "@/lib/utils"
import { Form } from "./form"
import { useCartStore } from "@/store/cartStore"
import { CartItem } from "@/modules/cart/ui/cartItem"

interface ICheckout{
    className?: string
}

export const Checkout:React.FC<ICheckout> = ({className}) => {
    const {cartItems} = useCartStore()
    return (
        <div className={cn('max-w-[1230px] w-full m-auto flex flex-wrap justify-between gap-10 py-14', className)}>
            <Form />
            <div className="flex-1">
                {cartItems.map((obj, i) => <CartItem key={i} item={obj}  />) }
            </div>
           
        </div>
    )
}