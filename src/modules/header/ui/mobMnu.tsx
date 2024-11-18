"use client"

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from "@/shared/ui/sheet"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/shared/ui/accordion"

import Image from "next/image"
import mob_mnu_btn from '@/shared/assets/images/mobBtn.svg'

import Link from "next/link"
import { useState } from "react"
import { cn } from "@/shared/helpers/cn"
import logo from "@/shared/assets/images/logo.svg"


export const MobMenu:React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
    return (

      <Sheet open={isOpen} onOpenChange={()=>setIsOpen(!isOpen)}>
        <SheetTrigger asChild>
          <button  className={cn("bg-transparent hover:bg-[#f6edcd] md:hidden")}>
            <Image width={24} height={24} src={mob_mnu_btn} alt='quickDecor'></Image>
          </button>
        </SheetTrigger>
        <SheetContent side="left" className='w-[281px] overflow-auto px-6 py-16 bg-[#fff]'>
        <SheetTitle><Image src={logo} width={142} height={32} alt='quickdecor' className="mb-7" /></SheetTitle>
          <div className="py-2 font-medium text-sm"><Link  href={`#`} className="" onClick={()=>setIsOpen(false)}>Каталог</Link></div>
         {/* {categoriesObj.map((el, i) => <NavMenuItem key={`${el.slug}${i}`} cat={el} closeMnu={()=>setIsOpen(false)} /> )} */}

            <Accordion  type="single" collapsible >
              <AccordionItem value='mnuAcc' className="border-b-0 ">
                <AccordionTrigger className="py-3"><Link  href="#" onClick={()=>setIsOpen(false)}>Обрати за своїми параметрами</Link></AccordionTrigger>
                <AccordionContent>
                <div className="pl-3 py-1">
                  <Link  href='#' onClick={()=>setIsOpen(false)}>Оберіть за приміщенням</Link>
                </div>
                <div className="pl-3 py-1">
                  <Link  href='#' onClick={()=>setIsOpen(false)}>Оберіть  за ефектом</Link>
                </div>
                <div className="pl-3 py-1">
                  <Link  href='#' onClick={()=>setIsOpen(false)}>Оберіть за призначенням</Link>
                </div>
                <div className="pl-3 py-1">
                  <Link  href='#' onClick={()=>setIsOpen(false)}>Оберіть за якістю підготовки стін</Link>
                </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

         <div className="py-2 font-medium"><Link  href={`#`} className="text-sm" onClick={()=>setIsOpen(false)}>Цiна</Link></div>
         <div className="py-2 font-medium"><Link  href={`#`} className="text-sm" onClick={()=>setIsOpen(false)}>Блог</Link></div>
         <div className="py-2 font-medium"><Link  href={`#`} className="text-sm" onClick={()=>setIsOpen(false)}>Про нас</Link></div>
         <div className="py-2 font-medium"><Link  href={`#`} className="text-sm" onClick={()=>setIsOpen(false)}>Контакти</Link></div>
         <div className="py-2 font-medium"><a href="#">+38 044 <span className="font-bold">242 41 42</span> </a></div>

        </SheetContent>

      </Sheet>

     )
}