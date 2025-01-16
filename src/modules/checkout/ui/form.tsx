'use client'
import { cn } from "@/lib/utils"
import Image from "next/image"
import { checkoutFieldsSchema, TCheckoutFieldsSchema } from "@/shared/types/form";
import { Input } from "@/shared/ui/input";
import { useEffect,  useState,  useTransition } from "react"
import {useForm, FormProvider} from "react-hook-form"
import loader from "@/shared/assets/images/loader.svg"
import  {zodResolver}  from '@hookform/resolvers/zod'
import { Payment } from "./payment";
import { checkoutAction, PurchaseCRM } from "@/lib/actions";

import { useCartStore } from "@/store/cartStore";
import {checkoutProducts, checkoutProductsType} from "@/shared/helpers/productCrmFormat"
import { InputPhone } from "@/shared/ui/inputPhone";
import { Delivery } from "./delivery";
import { KeyCrm } from "@/shared/types/keyCrm";
import { LiqPay, OplataChastynamy } from "@/modules/liqpay";
import { useRouter } from 'next/navigation'
import { useUtmStore } from "@/store/utmStore";

interface IForm{
    className?: string
}

export const Form:React.FC<IForm> = ({className}) => {
  const {selfDelivery, fotoPermition, cartItems, box, resultTotal, showLiqPay, setShowLiqPay} = useCartStore()
  const [isPending, startTransition] = useTransition()
  const [crmProducts, setCrmProducts] = useState<checkoutProductsType[]>()
  const [crmOrderId, setCrmOrderId] = useState<string>('')
  const [liqPayTotal, setLiqPayTotal] = useState<number>(resultTotal)
  const [showPP, setShowPP] = useState<boolean>(false)
  const router = useRouter()
  const {utmData} = useUtmStore()
    
    const form = useForm<TCheckoutFieldsSchema>({
        mode: "onChange",
        resolver: zodResolver(checkoutFieldsSchema),
        defaultValues:{
          first_name: '',
          last_name: '',
          tel: '',
          email: '',
          payment: 'Картою на сайті',
          delivery: 'До відділення Нової Пошти',
          priceDiscount: resultTotal,
          city: '',
          department: '',
          aditionals: '',
          productArr: ''
        },
        shouldUnregister: true
      })
    
      const onSubmit = async(data: TCheckoutFieldsSchema) => {
        console.log(data)
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
            if(crmProducts){
             
              const response: KeyCrm  = await PurchaseCRM(crmProducts, data, utmData)
              setCrmOrderId(response.title)
              if(response)  console.log(response.title)
            } 
    
            if(data.payment === "Оплата частинами (3 платежі)"){
              setShowPP( true)
            }else  if(data.payment !== 'Картою на сайті') {
              router.push('/thank')
            }else{
              setShowLiqPay(true)
            }
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
  
      useEffect(()=>{
        setLiqPayTotal(resultTotal)
        form.setValue("priceDiscount", resultTotal)
      }, [resultTotal])

      useEffect(()=>{
        form.setValue("payment", "Картою на сайті")
      }, [])

    return (
        <div className={cn('max-w-[600px] w-full md:sticky top-[100px]', className)}>
            <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={cn(`w-full max-w-[500px] ${showLiqPay ? `disabledForm` : ''}`) } >
            <h1 className="text-3xl mb-8 px-3">Оформити замовлення</h1>
            <input type="hidden" name="aditionals" />
            <input type="hidden" name="productArr" />
            <input type="hidden" name="priceDiscount" />
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
                   <InputPhone name="tel" className="w-full text-[#9A9FA8] outline-none pb-2 border-b-[1px] border-b-[#D9DADD] placeholder:text-[#9A9FA8] text-base" />
                  
                </div>
                <Delivery/>
      
                <div className="w-full"> <Payment /></div>  
            </div>
            
            {!showPP &&   <button type="submit" disabled={isPending} className=" w-[280px] m-auto md:w-full flex justify-center bg-[#ff0000] text-white text-sm font-semibold  rounded-[60px]  hover:opacity-55 transition-all">{isPending ? <Image src={loader} width={52} height={45} alt="loader" /> : <span className="p-4">Оформити замовлення</span>  }</button>}
          

            </form>

            {showLiqPay && 
              <LiqPay
              amount={liqPayTotal.toString()}
              title="Quickdecor Liqpay"
              description={`Онлайн оплата замовлення Quickdecor ${crmOrderId} `}
              currency="UAH"
              orderId={crmOrderId}
              disabled={false}
              className="text-white"
            />
            }
           {showPP &&  <OplataChastynamy orderId={crmOrderId} />}
        </FormProvider>
    </div>
     
    )
}





