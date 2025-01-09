'use client'
import { cn } from "@/lib/utils"
import Link from "next/link"
import { TotalTable } from "./totalTable"
import { CartItem } from "./cartItem"
import { Divider } from "@/shared/ui/divider"
import { useCartStore } from "@/store/cartStore"
//import { BoxItem } from "./boxItem"
import { useEffect } from "react"
import { BoxItem } from "./boxItem"


interface ICartWrapper {
    className?: string
}

export const CartWrapper:React.FC<ICartWrapper> = ({className}) => {
    const {cartItems,  box, setBox} = useCartStore()

    useEffect(()=> {
       // if(!box){setBox(true)}
        
    }, [box])

    return (
        <>
            <div className={cn('max-w-[1144px] w-full m-auto flex flex-col md:flex-row justify-center items-start gap-[65px] pb-14 pt-4 px-3 md:px-0', className)}>
                <div className="max-w-[608px] w-full ">
                    <h1 className="text-3xl font-semibold mb-3">Розрахунок вартості декоритвних покриттів </h1>
                    <p className="text-sm mb-5">Додавайте бажані ефекти щоб дізнатись вартість замовлення (черній обічній)</p>
                    <div className="text-[18px] font-semibold text-[#1e1e1e] pb-7 border-b border-b-[#858585] mb-6" >
                        <Link href="/catalog" className="text-[#858585]">   До каталогу </Link> | Кошик
                    </div>

                    <p className="text-[18px] text-[#1e1e1e] mb-0">Ваше Замовлення</p>
                    <div className="text-sm text-[#1e1e1e] mb-7">Кількість позицій у Вашому кошику:  {cartItems.length}</div>

                    {cartItems.map((obj, i) => <CartItem key={i} item={obj}  />) }
                    {box && <BoxItem />}
                    {!box && <div className="w-full flex md:justify-between items-center  pb-4 pt-4 rounded-2xl input-shadow border border-[#efefef] p-[10px] mb-6 gap-2 flex-wrap relative">
                        <button onClick={()=> setBox(true)} className="bg-[#ff0000] text-sm font-semibold text-white px-2 rounded-xl">Додати</button>
                        <span className="flex-1">Додайте безкоштовно до замовлення наш бокс взірців для 100% точного вибору</span>
                        </div>}
                    <p className="font-600 pb-4">+ Додати приміщення чи ефект для розрахунку</p>
                    <div className="flex justify-between gap-2 flex-wrap">
                        <div className="w-full md:w-6/12 flex-1 flex flex-col">
                            <Link href="/quiz" className="w-full uppercase flex-1 flex justify-center items-center text-center md:p-9 p-3 rounded-2xl input-shadow mb-1 border border-[#efefef] hover:opacity-60 transition-all text-white bg-black">
                            Через фільтр помічник</Link>
                            <span className="text-xs font-semibold text-center">Якщо не знаєте який ефект обрати</span>
                        </div>
                        <div className="w-full md:w-6/12 flex-1 flex flex-col">
                            <Link href="/#front-catalog" className="w-full  uppercase flex-1 flex justify-center items-center text-center md:p-9 p-3 rounded-2xl input-shadow mb-1 border border-[#efefef] hover:opacity-60 transition-all text-white bg-black">Через каталог ефектів</Link>
                            <span className="text-xs font-semibold text-center">Якщо вже знаєте свій ефект та колір</span>
                        </div>
                        
                        
                    </div>
                </div>
                <TotalTable className="md:sticky md:top-[104px]" />
            </div> 

            {/* <SeenProducts /> */}
            <Divider />
            
        </>
       
    )
}