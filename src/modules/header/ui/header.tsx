import {cn} from "@/shared/helpers/cn"
import Image from "next/image"
import logo from "@/shared/assets/images/logo.svg"
import { SearchWidget } from "@/modules/search"
import { HeaderMnu } from "@/components/headerMnu"
import Link from "next/link"


import tel from "@/shared/assets/images/tel.svg"
import tg from "@/shared/assets/images/Telegram.svg"
import viber from "@/shared/assets/images/viber.svg"

import cart from "@/shared/assets/images/cart.svg"

interface IHeaderProps {
    className?: string
  }
  
export const Header:React.FC<IHeaderProps> = ({className}) => { 
    return (
        <header className={cn(className, "w-full max-w-[1225px] mx-auto pt-3 pb-1 flex items-center gap-6")}>
            
            <Image src={logo} width={182} height={32} alt='quickdecor' />
            <SearchWidget className="ml-6 mr-3" />
            <HeaderMnu />
            <div className="flex gap-1 items-center">
                <Link href="#"><Image src={tel} width={18} height={18} alt="quickdecor"/></Link>
                <Link href="#"><Image src={tg} width={18} height={18} alt="quickdecor" className="mr-1"/></Link>
                <Link href="#"><Image src={viber} width={18} height={18} alt="quickdecor"/></Link>
                <div className="ml-5">
                    <button className="flex items-center gap-3 text-[#9B9DA2] font-bold text-sm">
                        <Image src={cart} width={18} height={18} alt="quickdecor"/>
                        <span>0 грн</span>
                    </button>
                </div>
            </div>
        </header>
    )
       
    
}