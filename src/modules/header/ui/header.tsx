import {cn} from "@/shared/helpers/cn"
import Image from "next/image"
import logo from "@/shared/assets/images/logo.svg"
import { SearchWidget } from "@/modules/search"
import { HeaderMnu } from "@/components/headerMnu"


interface IHeaderProps {
    className?: string
  }
  
export const Header:React.FC<IHeaderProps> = ({className}) => { 
    return (
        <header className={cn(className, "w-full max-w-[1225px] mx-auto pt-9 pb-6 flex items-center gap-6")}>
            
            <Image src={logo} width={182} height={32} alt='quickdecor' />
            <SearchWidget className="ml-6 mr-3" />
            <HeaderMnu />

        </header>
    )
       
    
}