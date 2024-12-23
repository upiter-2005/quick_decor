'use client'
import { cn } from "@/lib/utils"
import { Form } from "./form"
import { useCartStore } from "@/store/cartStore"
import { CartItem } from "@/modules/cart/ui/cartItem"
import { Checkbox } from "@/shared/ui/checkbox"
import { BoxItem } from "@/modules/cart/ui/boxItem"
import { useEffect } from "react"


interface ICheckout{
    className?: string
}

export const Checkout:React.FC<ICheckout> = ({className}) => {
    const {cartItems, total, resultTotal, discountTotal, discountFotoTotal, selfDelivery, fotoPermition, setResultTotal} = useCartStore()

    useEffect(()=>{
        setResultTotal()
    },[])

    return (
        <div className={cn('max-w-[1230px] w-full m-auto flex flex-wrap flex-col-reverse md:flex-row justify-between items-start gap-10 py-14', className)}>
            <Form />
            <div className="flex-1 px-3 w-full">
                {cartItems.map((obj, i) => <CartItem key={i} item={obj} active={false}  />) }
                <BoxItem key="dq_box" />

                <div className={cn(' flex-1 w-full border border-[#E4E7E9] px-5 pt-5 pb-6 rounded-sm ', className)}>
           
           <h3 className="text-[18px] text-[#191C1F] leading-6 pb-5 text-left">Сума замовлення</h3>
           <div className="w-full flex justify-between mb-3">
               <span className=" text-sm leading-5 text-[#5F6C72]">Загальная сума</span>
               <span className=" text-sm leading-5 text-[#191C1F] font-medium">{total} грн</span>
           </div>
           <div className="w-full flex justify-between mb-3">
               <span className=" text-sm leading-5 text-[#5F6C72]">Доставка</span>
               <span className=" text-sm leading-5 text-[#191C1F] font-medium">800 грн</span>
           </div>
           
           <div className="border-t border-t-[#5F6C72] pt-4 mt-4"></div>
           <div className="flex items-center space-x-2 cursor-pointer my-2 ">
               <Checkbox id="selfDelivery"  onCheckedChange={(checked) => {
                   return checked ? discountTotal(true) : discountTotal(false)
               }}
               checked={selfDelivery}
               />
               <label
                   htmlFor="selfDelivery"
                   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"  >
                   Самовивіз -3%
               </label>
           </div>
           <div className="flex items-center space-x-2 cursor-pointer my-2 ">
               <Checkbox id="fotoCh"
               onCheckedChange={(checked) => {
                return checked ? discountFotoTotal(true) : discountFotoTotal(false)
                }}
                checked={fotoPermition}
                 />
               <label
                   htmlFor="fotoCh"
                   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 after:cursor-pointer"
                   
                  >
                   Дозвіл на фото -3%
               </label>
           </div>

           <div className="flex items-center space-x-2 cursor-pointer my-2 ">
               <Checkbox id="discount" disabled checked/>
               <label
                   htmlFor="discount"
                   className="text-sm text-[#ff0000] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 after:cursor-pointer"  >
                   Скидка дня -12%
               </label>
           </div>
           <div className="w-full flex justify-between mb-6  ">
               <span className=" text-base text-[#191C1F] leading-6">До сплати</span>
               <span className=" text-base text-[#191C1F] font-semibold  leading-6">{resultTotal} грн</span>
           </div>
           
      </div>  


            </div>
           
        </div>
    )
}