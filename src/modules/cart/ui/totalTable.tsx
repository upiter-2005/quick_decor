
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"


import arr from "@/shared/assets/images/arr.svg"
import { useCartStore } from "@/store/cartStore"

interface ITotalTable {
    className?: string
}

export const TotalTable:React.FC<ITotalTable> = ({className}) => {

    const {total} = useCartStore()

    return (
       <div className={cn(' flex-1 w-full border border-[#E4E7E9] px-5 pt-5 pb-6 rounded-sm ', className)}>
           
            <h3 className="text-[18px] text-[#191C1F] leading-6 pb-5 text-left">Сума замовлення</h3>
            <div className="w-full flex justify-between mb-3">
                <span className=" text-sm leading-5 text-[#5F6C72]">Загальная сума</span>
                <span className=" text-sm leading-5 text-[#191C1F] font-medium">{total} грн</span>
            </div>
            <div className="w-full flex justify-between mb-3">
                <span className=" text-sm leading-5 text-[#5F6C72]">Доставка</span>
                <span className=" text-sm leading-5 text-[#191C1F] font-medium">800 грн</span>
            </div>
            {/* <div className="w-full flex justify-between mb-3">
                <span className=" text-sm leading-5 text-[#5F6C72]">Знижка</span>
                <span className=" text-sm leading-5 text-[#191C1F] font-medium">89 грн</span>
            </div>
            <div className="w-full flex justify-between mb-3">
                <span className=" text-sm leading-5 text-[#5F6C72]">Знижка</span>
                <span className=" text-sm leading-5 text-[#191C1F] font-medium">4 980 грн</span>
            </div>
            <div className="w-full flex justify-between mb-3">
                <span className=" text-sm leading-5 text-[#5F6C72]">Tax</span>
                <span className=" text-sm leading-5 text-[#191C1F] font-medium">217 грн</span>
            </div> */}
            <div className="w-full flex justify-between mb-6 border-t border-t-[#5F6C72] pt-4 mt-4">
                <span className=" text-base text-[#191C1F] leading-6">До сплати</span>
                <span className=" text-base text-[#191C1F] font-semibold  leading-6">{total} грн</span>
            </div>
            <Link href="/checkout" className="bg-[#1C293F] rounded-[54px] text-base font-bold uppercase w-full py-4  text-white flex items-center justify-center gap-3 hover:opacity-70 transition-all">оформити замовлення <Image src={arr} width={24} height={24} alt='quickdecor' /> </Link>
       </div>  
    )
}