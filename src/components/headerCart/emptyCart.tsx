import Image from "next/image"
import cartLogo from "@/shared/assets/images/cartLogo.svg"

export const EmptyCart:React.FC = () => {
    
    return (
        <div className="flex items-center flex-col ">
            <Image src={cartLogo} width={80} height={30} alt="quickdecor" />
            <p className=" max-w-[107px] text-[10px] mt-5">Ваш кошик порожній, саме час щось додати.</p> 
        </div>
    )
}