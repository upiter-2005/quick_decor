import {cn} from "@/shared/helpers/cn"
import Image from "next/image"
import search from "@/shared/assets/images/search.svg"


interface ISearch {
    className?: string
  }
  
export const Search:React.FC<ISearch> = ({className}) => { 
    return (
        
        <button className={cn('', className)}>
            <Image src={search} width={18} height={18} alt='quickdecor' />
        </button>
    )
       
    
}