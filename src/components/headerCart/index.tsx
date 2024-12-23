'use client'
import Image from "next/image"
import cart from "@/shared/assets/images/cart.svg"
import { useCartStore } from "@/store/cartStore"
import React from 'react'
import { cn } from "@/lib/utils"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/shared/ui/hover-card"
import { EmptyCart } from "./emptyCart"
import { FullCart } from "./fullCart"

interface IHeaderCart {
    className?: ''
}
export const HeaderCart:React.FC<IHeaderCart> = ({className}) => {
    const {cartItems, total} = useCartStore()

    return (
        <HoverCard openDelay={100} >
            <HoverCardTrigger asChild >
                <div className={cn("ml-5", className)}>
                    <a href="/cart" className="flex items-center gap-3 text-[#9B9DA2] font-bold text-sm relative">
                        <Image src={cart} width={18} height={18} alt="quickdecor"/>
                        <span className="hidden md:block">{total} грн</span>
                        <span className="absolute text-white text-xs top-2 left-[5px]" >{cartItems.length}</span>
                    </a>
                </div>
            </HoverCardTrigger>
            <HoverCardContent className="cart-shadow rounded-2xl text-center p-[22px] max-w-[204px]">
                {cartItems.length > 0 ? <FullCart /> : <EmptyCart />}
            </HoverCardContent>
        </HoverCard>
       
    )
        
    
}