import {cn} from "@/shared/helpers/cn"
import Image from "next/image"
import logo from "@/shared/assets/images/logo.svg"
import { HeaderMnu } from "@/components/headerMnu"
import Link from "next/link"


import tel from "@/shared/assets/images/tel.svg"


import { MobMenu } from "./mobMnu"
import { HeaderCart } from "@/components/headerCart"

interface IHeaderProps {
    className?: string
  }
  
export const Header:React.FC<IHeaderProps> = ({className}) => { 

  
    return (
        <header className={cn(className, "w-full sticky top-0 bg-white z-[99]")}>
            <div className={cn(className, "w-full max-w-[1225px] mx-auto pt-3 pb-1 flex items-center justify-between md:gap-6 px-3 md:px-0  bg-white z-[99]")}> 
                <Link href="/"><Image src={logo} width={182} height={32} alt='quickdecor' /></Link>
                <HeaderMnu className="hidden md:block" />
                <div className="flex gap-1 items-center last-of-type:">
                    {/* <SearchWidget className="ml-6 mr-6 hidden md:block" /> */}
                    <div className=" mr-0 hidden md:block"><a href="tel:+380631471218" >+38 063 <span className="font-bold">147 12 18</span> </a></div>
                    <a href="tel:+380631471218" className=" md:block px-1 md:px-0 md:mr-8"><Image src={tel} width={18} height={18} alt="quickdecor"/></a>
                    {/* <Link href="#" className=" md:block px-1 md:px-1"><Image src={tg} width={18} height={18} alt="quickdecor" className="mr-1"/></Link>
                    <Link href="#" className=" md:block px-1 md:px-1"><Image src={viber} width={18} height={18} alt="quickdecor"/></Link> */}
                    <HeaderCart />
                </div>
                <MobMenu />
            </div>
            
        </header>
    )
       
    
}