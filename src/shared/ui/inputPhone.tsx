import { InputMask } from '@react-input/mask';
import {  Controller, useForm, useFormContext } from "react-hook-form";
import { ErrorText } from "./errorText"
import { cn } from "@/lib/utils";
import { TSimpleForm } from "../types/form";
import { useState } from 'react';

interface InputType {
  className?: string
  
  name: string
}

export const InputPhone:React.FC<InputType> = ({name, className}) => {
    const [phone, setPhone] = useState<string>('+38(0__) ___-__-__');
    
    const { control } = useForm<TSimpleForm>()

  const {
    formState: { errors },
    setValue
  } = useFormContext()

  let errotText: string = ''
  if(name) {errotText = errors?.[name]?.message as string}

  const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
    setPhone(e.target.value)
    setValue('tel', e.target.value)
  }
  return(
    <div className={cn("relative w-full maskPhone", className)}>

     <Controller
       control={control}
       name='tel'
       
       render={({}) => (
            <InputMask 
                style={{fontSize: "16px", color: "#9a9fa8"}}
                name='tel'
                mask="+38(0__) ___-__-__" 
                showMask={true}
                replacement={{ _: /\d/ }} 
                value={phone} 
                onChange={phoneHandler} 
          
            />
        )}
      />  
      {errotText && <ErrorText text={errotText} className="absolute bottom-[12px] text-xs" />}
    </div>
  )
}