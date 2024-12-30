'use client'
import { cn } from "@/lib/utils"
import Image from "next/image"
import { defaulFieldsSchema, TDefauldFields } from "@/shared/types/form";
import { Input } from "@/shared/ui/input";
import { useEffect,  useState,  useTransition } from "react"
import {useForm, FormProvider} from "react-hook-form"
import toast from 'react-hot-toast';
import loader from "@/shared/assets/images/loader.svg"
import  {zodResolver}  from '@hookform/resolvers/zod'
import { Payment } from "./payment";
import { checkoutAction, PurchaseCRM } from "@/lib/actions";
import NovaPoshta from "@/components/delivery";
import { useCartStore } from "@/store/cartStore";
import {checkoutProducts, checkoutProductsType} from "@/shared/helpers/productCrmFormat"
interface IForm{
    className?: string
}

export const Form:React.FC<IForm> = ({className}) => {
    const [isPending, startTransition] = useTransition()
    const [crmProducts, setCrmProducts] = useState<checkoutProductsType[]>();
    
    const {selfDelivery, fotoPermition, cartItems, clear, setBox, box} = useCartStore()

    const form = useForm<TDefauldFields>({
        resolver: zodResolver(defaulFieldsSchema),
        defaultValues:{
          first_name: '',
          last_name: '',
          tel: '',
          email: '',
          payment: '',
          city: '',
          department: '',
          aditionals: '',
          productArr: ''
        }
      })
    
      const onSubmit = async(data: TDefauldFields) => {
        startTransition( async () => {
          await checkoutAction(data)
          if(data) {
            if (box) crmProducts?.push({
              "sku": "box_1", 
              "quantity": 1, 
              "price": cartItems.length > 0 ? 0 : 3000,
              "unit_type": 'm',
              "name": "Коробка помічниця",
              "picture": "https://api.quickdecor.com.ua/wp-content/uploads/2024/12/3.jpg"
           })
            if(crmProducts) await PurchaseCRM(crmProducts, data)
        
            toast.success('Заявка відправлена успішно!', {icon: '✅'})
            clear()
            setBox(false)
          }else{
           
          }
        })
      }

      useEffect(()=>{
        if(selfDelivery && fotoPermition){
          form.setValue("aditionals", 'Самовивіз, Дозвіл на фото')
        }else if(selfDelivery && !fotoPermition){
          form.setValue("aditionals", 'Самовивіз')
        }else if(!selfDelivery && fotoPermition){
          form.setValue("aditionals", 'Дозвіл на фото')
        }else{
          form.setValue("aditionals", '')
        }  
      },[selfDelivery, fotoPermition])

      useEffect(()=>{

        const crmProducts = checkoutProducts(cartItems)
        setCrmProducts(crmProducts)
        let prodStr = ''
        if(cartItems.length > 0) {
          cartItems.forEach(el => {
            prodStr += `<b>${el.name}<b> - ${el.price} uah - (${el.square} m) - ${el.type} <br/> `
          })
          prodStr += '<b>Коробка помічниця<b> - 0 uah'
          form.setValue("productArr", prodStr)
        }else{
            prodStr = ` <b>Коробка помічниця<b> - 3000 uah`
           form.setValue("productArr", prodStr)
        }
        
      },[cartItems])
      
    return (
        <div className={cn('max-w-[600px] w-full md:sticky top-[100px]', className)}>
            <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={`w-full max-w-[500px]` } >
            <h1 className="text-3xl mb-8 px-3">Оформити замовлення</h1>
            <input type="hidden" name="aditionals" />
            <input type="hidden" name="productArr" />
            <div className="flex flex-wrap gap-5 px-3 md:px-0">
                <div className="w-full md:w-[48%]"> 
                    <Input type='text' placeholder="Ім'я" name="first_name"/>
                </div>
                <div className="w-full md:w-[48%]">
                    <Input type='text' placeholder="Прізвище" name="last_name"/>
                </div>
                <div className="w-full md:w-[48%]">
                    <Input type='text' placeholder="Email" name="email" />
                </div>
                <div className="w-full md:w-[48%]">
                    <Input type='text' placeholder="Телефон" name="tel" />
                </div>

                <NovaPoshta />
                <div className="w-full"> <Payment /></div>  
            </div>
            
            <button type="submit" disabled={isPending} className=" w-[280px] m-auto md:w-full flex justify-center bg-[#ff0000] text-white text-sm font-semibold  rounded-[60px]  hover:opacity-55 transition-all">{isPending ? <Image src={loader} width={52} height={45} alt="loader" /> : <span className="p-4">Оформити замовлення</span>  }</button>

            </form>

            
        </FormProvider>
    </div>
     
    )
}





