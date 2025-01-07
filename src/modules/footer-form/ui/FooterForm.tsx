'use client'
import { cn } from "@/lib/utils"
import { SectionTitle } from "@/shared/ui/sectionTitle"
import Image from "next/image"
import { useTransition } from "react"
import {  FormProvider, useForm, useFormContext } from "react-hook-form"
import { TSimpleForm, simpleForm } from "@/shared/types/form"
import { zodResolver } from "@hookform/resolvers/zod"
import toast from "react-hot-toast"
import loader from "@/shared/assets/images/loader.svg"
import { Input } from "@/shared/ui/input"
import { sendCRMForm } from "@/lib/actions"
import { InputPhone } from "@/shared/ui/inputPhone"

interface IFooterForm{
    className?: string
}

export const FooterForm:React.FC<IFooterForm> = ({className}) => {
    const [isPending, startTransition] = useTransition()

  

      const form = useForm<TSimpleForm>({
            resolver: zodResolver(simpleForm),
            defaultValues:{
                name: '',
                tel: ''
            }
          })

       



          const onSubmit = async(data: TSimpleForm) => {
            console.log(data);
            startTransition( async () => {
              await sendCRMForm(data)
              console.log(data);
                toast.success('Заявка відправлена успішно!', {icon: '✅'})
              })
            }
          
    return(
        <div className={cn('max-w-[1144px] w-full m-auto  mb-[55px] px-3 md:px-0', className)} id="footerForm">
            <SectionTitle title="" redText="Зв'яжіться з нами"/>
             <FormProvider {...form}>
                <form action="" className="flex justify-between flex-wrap" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="w-full md:w-[48%] mb-[30px] md:mb-[56px]">
                        <p>Ім’я</p>
                         <Input  type='text' placeholder="Ім’я" name="name" className="w-full text-[#9A9FA8] outline-none  border-b-[1px] border-b-[#D9DADD] placeholder:text-[#9A9FA8] text-base pt-2" />
                    </div>
                
                    <div className="w-full md:w-[48%] mb-[30px] md:mb-[56px]">
                        <p>Номер телефону</p>
                        <InputPhone name="tel" className="w-full text-[#9A9FA8] outline-none py-2 border-b-[1px] border-b-[#D9DADD] placeholder:text-[#9A9FA8] text-base pt-2 h-[46px]" />
                    </div>
                    
                    <div className="w-full text-center">
                        {/* <RedButton  text="Надіслати" className="w-[212px]"/> */}
                        <button type="submit" disabled={isPending} className=" max-w-[212px] m-auto md:w-full  flex justify-center bg-[#ff0000] text-white text-sm font-semibold  rounded-[60px]  hover:opacity-55 transition-all">{isPending ? <Image src={loader} width={52} height={45} alt="loader" /> : <span className="p-4">Надіслати</span>  }</button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}