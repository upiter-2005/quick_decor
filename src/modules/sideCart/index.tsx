 'use client'
 import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
  } from "@/shared/ui/sheet"
import Image from "next/image"

//import { CartWrapper } from "../cart/ui/cartWrapper"
import { useCartStore } from "@/store/cartStore"
import { BoxItem } from "../cart/ui/boxItem"
import { CartItem } from "../cart/ui/cartItem"
import Link from "next/link"


  export const SideCart:React.FC = () => {
    const {cartItems,  box, setBox, modalCart, setModalCart} = useCartStore()
    return (
        

        <Sheet open={modalCart} onOpenChange={() => setModalCart(!modalCart)} >
            
            <SheetContent className="max-w-[362px] w-full overflow-auto px-6 py-16  z-[999999]">
                <SheetHeader>
                <SheetTitle>Кошик</SheetTitle>
                    <SheetDescription >
                        <div className="text-sm text-[#1e1e1e] mb-7">Кількість позицій у Вашому кошику: {cartItems.length}</div>
                        
                            {cartItems.map((obj, i) => <CartItem key={i} item={obj} imageClass="w-[55px] h-[55px] md:w-[55px] md:h-[55px]" />) }
                            {box && <BoxItem imageClass="w-[55px] h-[55px] md:w-[55px] md:h-[55px]"/>}
                            {!box && <div className="w-full flex md:justify-between items-center  pb-4 pt-4 rounded-2xl input-shadow border border-[#efefef] p-[10px] mb-6 gap-2 flex-wrap relative">
                                
                                <div className="rounded-[8px] overflow-hidden w-[55px] h-[55px]  relative">
                                    <Image src={"https://api.quickdecor.com.ua/wp-content/uploads/2024/12/4.jpg"} fill objectFit="cover" alt="quickdecor" />
                                </div>
                                
                                <span className="flex-1">Додайте {cartItems.length > 0 ? <span className="text-[#ff0000]">безкоштовно</span> : ''}  до замовлення наш бокс взірців для 100% точного вибору</span>
                                <button onClick={()=> setBox(true)} className="bg-[#ff0000] text-sm font-semibold text-white px-2 rounded-xl">Додати</button>
                            </div>}
                            <Link href="/checkout" className="w-full bg-[#ff0000] text-center text-white block p-3 rounded-xl" onClick={()=> setModalCart(false)}>Оформити замовлення</Link>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>


    )
  }