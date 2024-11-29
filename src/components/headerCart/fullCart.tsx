import Image from "next/image"
import cartLogo from "@/shared/assets/images/cartLogo.svg"
import { useCartStore } from "@/store/cartStore"

export const FullCart:React.FC = () => {
    const {cartItems, total} = useCartStore()
    return (
        <div className="flex items-center flex-col ">
            <Image src={cartLogo} width={80} height={30} alt="quickdecor" className="mb-5" />
            {cartItems.map((item, i) => 
            <div key={i} className="max-w-[177px] w-full text-[10px]  flex justify-between ">
                <div className="flex-1 text-left flex">
                    <span>{i+1}.</span>
                    <div>
                    {item.name} <span  className="text-[#FC0000] font-semibold">{item.square}m&sup2;</span>
                    </div>
                     </div>
                <div className="font-semibold w-9 text-right">x {item.price}</div>
            </div> 
        )}

        <div className="text-[10px] font-bold w-full border-t border-t-[#858585]] pt-2 mt-2 text-right">{total}грн</div>
        </div>
    )
}