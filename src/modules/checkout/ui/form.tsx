'use client'
import { cn } from "@/lib/utils"
import Image from "next/image"
import { defaulFieldsSchema, TDefauldFields } from "@/shared/types/form";
import { Input } from "@/shared/ui/input";
import { useTransition } from "react"
import {useForm, FormProvider} from "react-hook-form"
import toast from 'react-hot-toast';
import loader from "@/shared/assets/images/loader.svg"
import  {zodResolver}  from '@hookform/resolvers/zod'
import { Payment } from "./payment";
import { checkoutAction } from "@/lib/actions";
import NovaPoshta from "@/components/delivery";

interface IForm{
    className?: string
}

export const Form:React.FC<IForm> = ({className}) => {
    const [isPending, startTransition] = useTransition()

    const form = useForm<TDefauldFields>({
        resolver: zodResolver(defaulFieldsSchema),
        defaultValues:{
          first_name: '',
          last_name: '',
          tel: '',
          email: '',
          payment: '',
          city: '',
          department: ''
        }
      })
    
      const onSubmit = async(data: TDefauldFields) => {
        startTransition( async () => {
          await checkoutAction(data)
          if(data) {
            console.log(data)
          }else{
            toast.success('Заявка відправлена успішно!', {icon: '✅'})
           
          }
        })
      }

    return (
        <div className={cn('max-w-[600px] w-full sticky top-[100px]', className)}>
            <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={`w-full max-w-[500px]` } >
            <h1 className="text-3xl mb-8">Оформити замовлення</h1>

            <div className="flex flex-wrap gap-5">
                <div className="w-[48%]"> 
                    <Input type='text' placeholder="Ім'я" name="first_name"/>
                    </div>
                <div className="w-[48%]">
                    <Input type='text' placeholder="Прізвище" name="last_name"/>
                </div>
                <div className="w-[48%]">
                    <Input type='text' placeholder="Email" name="email" />
                </div>
                <div className="w-[48%]">
                    <Input type='text' placeholder="Телефон" name="tel" />
                </div>

                <NovaPoshta />
                {/* <div className="w-[48%]">
                    <Input type='text' placeholder="Місто" name="city" />
                </div>
                <div className="w-[48%]">
                    <Input type='text' placeholder="Адреса" name="adress" />
                </div> */}
                <div className="w-full"> <Payment /></div>  
            </div>
            
            <button type="submit" disabled={isPending} className="w-full flex justify-center bg-[#ff0000] text-white text-sm font-semibold  rounded-[60px]  hover:opacity-55 transition-all">{isPending ? <Image src={loader} width={52} height={45} alt="loader" /> : <span className="p-4">Оформити замовлення</span>  }</button>

            </form>

            
        </FormProvider>
    </div>
     
    )
}





