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
    const {cartItems, total, resultTotal, discountTotal, discountFotoTotal, selfDelivery, fotoPermition, setResultTotal, box, setBox, showLiqPay, dayPersentCoef } = useCartStore()

    useEffect(()=>{
        setResultTotal()
    },[])

    return (
        <div className={cn('max-w-[1230px] w-full m-auto flex flex-wrap flex-col-reverse md:flex-row justify-between items-start gap-10 py-14', className)}>
            <Form />
            <div className={cn(`flex-1 px-3 w-full ${showLiqPay ? `disabledForm` : ''}`)}>
                {cartItems.map((obj, i) => <CartItem key={i} item={obj} active={false}  />) }
                {box && <BoxItem />}
                {!box && <div className="w-full flex md:justify-between items-center  pb-4 pt-4 rounded-2xl input-shadow border border-[#efefef] p-[10px] mb-6 gap-2 flex-wrap relative">
                        <button onClick={()=> setBox(true)} className="bg-[#ff0000] text-sm font-semibold text-white px-2 rounded-xl">Додати</button>
                        <span className="flex-1">Додайте безкоштовно до замовлення наш бокс взірців для 100% точного вибору</span>
                        </div>}
                <div className={cn(' flex-1 w-full border border-[#E4E7E9] px-5 pt-5 pb-6 rounded-sm ', className)}>
           
          
           {cartItems.length > 0 && (
            <>
             <h3 className="text-[18px] text-[#191C1F] leading-6 pb-5 text-left">Сума замовлення</h3>
           <div className="w-full flex justify-between mb-3">
               <span className=" text-sm leading-5 text-[#5F6C72]">Загальная сума</span>
               <span className=" text-sm leading-5 text-[#191C1F] font-medium">{total} грн</span>
           </div>
         
           
           <div className="border-t border-t-[#5F6C72] pt-4 mt-4"></div>
           <p className="font-semibold pb-2 ">Додаткові вигоди</p>
           <p className="text-sm">Вартість доставки матеріалів на об&apos;єкт розраховується окремо</p>
            <div className="flex items-center space-x-2 cursor-pointer my-3 ">
               <Checkbox id="selfDelivery"  onCheckedChange={(checked) => {
                   return checked ? discountTotal(true) : discountTotal(false)
               }}
               checked={selfDelivery}
               />
               <label
                   htmlFor="selfDelivery"
                   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"  >
                   Самовивіз зі складу в м. Києві або з відділення НП у вашому місті <span className="text-[#ff0000] font-bold">-3%</span> 
               </label>
           </div>
           <div className="flex items-center space-x-2 cursor-pointer my-3 ">
               <Checkbox id="fotoCh"
               onCheckedChange={(checked) => {
                return checked ? discountFotoTotal(true) : discountFotoTotal(false)
                }}
                checked={fotoPermition}
                 />
               <label
                   htmlFor="fotoCh"
                   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                   Дозвіл на використання фото покриттів та відео контенту <span className="text-[#ff0000] font-bold">-3%</span> 
               </label>
           </div>

           <div className="flex items-center space-x-2 cursor-pointer my-2 ">
               <Checkbox id="discount" disabled checked/>
               <label
                   htmlFor="discount"
                   className="text-sm text-[#ff0000] font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-80 cursor-pointer"  >
                   Знижка дня: -{dayPersentCoef}%
               </label>
           </div>
            </>
           )}
           
           <div className="border-t border-t-[#5F6C72] pt-4 mt-4"></div>

           <div className="w-full flex justify-between mb-6 mt-2  ">
               <span className=" text-base text-[#191C1F] leading-6">До сплати</span>
               <span className=" text-base text-[#191C1F] font-semibold  leading-6">{cartItems.length > 0 ? resultTotal : '3000'} грн</span>
           </div>
           
           <div className="w-full flex justify-between mb-6 mt-2  ">
               <span className=" text-base text-[#191C1F] leading-6">Ваша знижка</span>
               <span className=" text-base text-[#191C1F] font-semibold  leading-6">{total - resultTotal} грн</span>
           </div>
      </div>  


            </div>
           
        </div>
    )
}