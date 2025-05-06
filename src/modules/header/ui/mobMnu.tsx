"use client"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from "@/shared/ui/sheet"

// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
//   } from "@/shared/ui/accordion"

import Image from "next/image"
import mob_mnu_btn from '@/shared/assets/images/mobBtn.svg'

import Link from "next/link"
import { useState } from "react"
import { cn } from "@/shared/helpers/cn"


export const MobMenu:React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
    return (

      <Sheet open={isOpen} onOpenChange={()=>setIsOpen(!isOpen)}>
        <SheetTrigger asChild>
          <button  className={cn("bg-transparent hover:bg-[#f6edcd] md:hidden")}>
            <Image width={24} height={24} src={mob_mnu_btn} alt='quickDecor'></Image>
          </button>
        </SheetTrigger>
        <SheetContent side="left" className='w-[281px] overflow-auto px-6 py-16 pt-[100px] bg-[#fff]'>
        <SheetTitle></SheetTitle>
         
         <SheetClose asChild className="py-2 font-medium block">
            <Link href="/catalog" className="py-2 font-medium ">Каталог </Link>
         </SheetClose>
         <SheetClose asChild className="py-2 font-medium block">
            <Link href="/cart" className="py-2 font-medium ">Розрахувати вартість</Link>
         </SheetClose>
         <SheetClose asChild className="py-2 font-medium block">
            <Link href="/quiz" className="py-2 font-medium ">Фільтр помічник</Link>
         </SheetClose>
         <SheetClose asChild className="py-2 font-medium block">
            <Link  href={`#`} className="py-2 font-medium" onClick={()=>setIsOpen(false)}>Контакти</Link>
         </SheetClose>
        
         <div className="py-2 font-medium text-[#ff0000]">
   
            <a href="tel:+380631471218" onClick={()=>setIsOpen(false)}>+38 063 <span className="font-bold">147 12 18</span> </a>
          </div>
          <div className="py-2 font-medium text-[#ff0000]">
   
            <a href="mailto:info@quickdecor.com.ua" onClick={()=>setIsOpen(false)}>info@quickdecor.com.ua</a>
          </div>
        </SheetContent>

      </Sheet>

     )
}