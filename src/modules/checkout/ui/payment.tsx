'use client'

import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group"
import { useFormContext } from "react-hook-form"
import { cn } from "@/lib/utils"
import { useCartStore } from "@/store/cartStore"

interface IPayment {
  className?: string
}

export const Payment:React.FC<IPayment> = ({className}) => {
  const {cartItems, box} = useCartStore()
  const {
    register,
    setValue,
  } = useFormContext()

  const handlePayment = (val: string): void => {
    setValue("payment", val, { shouldValidate: true })
   
  }
  return(
    <div className={cn('p-3', className)}>

     <h3 className="font-semibold text-xl mb-5">Спосіб оплати:</h3>

     <div className={cn("flex items-center gap-2 mb-8", className)}>
        <RadioGroup className='flex flex-col gap-1' defaultValue={"Картою на сайті"} onValueChange={(val)=>handlePayment(val)}>
          <div className="flex items-center space-x-1 ">
            <RadioGroupItem value="Картою на сайті" id="pay1" {...register("payment")} />
            <label htmlFor="pay1" className="cursor-pointer">Картою на сайті</label>
          </div>
          <div className="flex items-center space-x-1">
            <RadioGroupItem value="Перевод на IBAN" id="pay2" {...register("payment")}   />
            <label htmlFor="pay2" className="cursor-pointer">Перевод на IBAN</label>
          </div>
          {cartItems.length > 0 ? 
           <div className="flex items-center space-x-1">
           <RadioGroupItem value="Оплата частинами (3 платежі)" id="pay3" {...register("payment")}   />
           <label htmlFor="pay3" className="cursor-pointer">Оплата частинами (3 платежі)</label>
         </div>
         :
        ''
       }
         
         { (box && cartItems.length === 0) &&  <div className="flex items-center space-x-1">
         <RadioGroupItem value="Накладеним платежем" id="pay4" {...register("payment")}   />
         <label htmlFor="pay4" className="cursor-pointer">Накладеним платежем</label>
       </div>}
         
        </RadioGroup>
      </div>
    </div>
  )
}