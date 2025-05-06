'use client'
import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group"
import { useFormContext } from 'react-hook-form'
import { cn } from '@/lib/utils'
import { useCartStore } from "@/store/cartStore"
import { Adress } from "./adress"

interface IDelivery {
  className?: string,
  
}

const enum Methods {
  SELF = 'Самовивіз зі складу в м. Києві',
  DEPARTMENT = 'До відділення Нової Пошти',
  COURIER = "Доставка кур'єром Нової Пошти"
}

export const Delivery:React.FC<IDelivery> = ({className}) => {

  const [delivery, setDelivery] = useState<string>(Methods.SELF)
  const {cartItems, box} = useCartStore()

  const {
    register,
    setValue
  } = useFormContext()


  const handleDelivery = (val: string): void =>{
    setDelivery(val)
    setValue("delivery", val, { shouldValidate: true })
  }
  return(
    <div className={cn(' border-b border-b-solid border-b-[#E4E4E4]', className)}>

      <p className="font-semibold text-xl mb-5">Спосіб доставки </p>
      <div className="flex  items-center gap-2 mb-8">
        <RadioGroup
          onValueChange={(val: string)=>handleDelivery(val)}
          defaultValue={Methods.SELF}
          className='flex flex-col '
        >
            {cartItems.length > 0 && <div className="flex items-start ">
            <RadioGroupItem value={Methods.SELF} id="selfdelivery" className='relative top-1 w-auto'  {...register("delivery")} />
            <label htmlFor="selfdelivery" className={`${delivery !== Methods.SELF && 'opacity-55'} cursor-pointer transition-all pl-2`}>
                 {Methods.SELF} 
                 {/* <span className="text-sm">(безкоштовно з додатковою знижкою 3% від суми замовлення )</span> */}
            </label>
          </div>}
          
          {box && (
            <>
              <div className="flex items-start ">
              <RadioGroupItem value={Methods.DEPARTMENT} id="pickup" className='relative top-1 w-auto' {...register("delivery")}/>
              <label htmlFor="pickup" className={`${delivery !== Methods.DEPARTMENT && 'opacity-55'} cursor-pointer transition-all pl-2`}>
                  {Methods.DEPARTMENT}
                  
                  {/* <span className="text-sm">(по тарифам Нової Пошти з додатковою знижкою 3% від суми замовлення  )</span> */}
              </label>
            </div>

            <div className="flex items-start ">
              <RadioGroupItem value={Methods.COURIER} id="courier" className='relative top-1 w-auto' {...register("delivery")}/>
              <label htmlFor="courier" className={`${delivery !== Methods.COURIER && 'opacity-55 transition-all '} cursor-pointer pl-2`}>
                  {Methods.COURIER}
                  <br /><span className="text-sm">(по тарифам Нової Пошти )</span>
              </label>
            </div>
            </>
          )}
           
        </RadioGroup>

      </div>
      
      {Methods.DEPARTMENT === delivery ? <Adress /> : ''}
      {Methods.COURIER === delivery ? <Adress /> : ''}

    </div>
  )
}