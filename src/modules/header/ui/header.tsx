import {cn} from "@/shared/helpers/cn"
import Image from "next/image"
import logo from "@/shared/assets/images/logo.svg"
import { SearchWidget } from "@/modules/search"
import { HeaderMnu } from "@/components/headerMnu"
import Link from "next/link"


import tel from "@/shared/assets/images/tel.svg"
import tg from "@/shared/assets/images/Telegram.svg"
import viber from "@/shared/assets/images/viber.svg"


import { MobMenu } from "./mobMnu"
import { HeaderCart } from "@/components/headerCart"

interface IHeaderProps {
    className?: string
  }
  
export const Header:React.FC<IHeaderProps> = ({className}) => { 

  
    return (
        <header className={cn(className, "w-full max-w-[1225px] mx-auto pt-3 pb-1 flex items-center justify-between md:gap-6 px-3 md:px-0 sticky top-0 bg-white z-[999]")}>
            
            <Link href="/"><Image src={logo} width={182} height={32} alt='quickdecor' /></Link>
            
            <SearchWidget className="ml-6 mr-3" />
            <HeaderMnu className="hidden md:block" />
            <div className="flex gap-1 items-center">
                <Link href="#" className="hidden md:block"><Image src={tel} width={18} height={18} alt="quickdecor"/></Link>
                <Link href="#" className="hidden md:block"><Image src={tg} width={18} height={18} alt="quickdecor" className="mr-1"/></Link>
                <Link href="#" className="hidden md:block"><Image src={viber} width={18} height={18} alt="quickdecor"/></Link>
                <HeaderCart />
            </div>
            <MobMenu />
        </header>
    )
       
    
}