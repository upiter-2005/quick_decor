import {cn} from "@/shared/helpers/cn"


interface IHeaderSocs {
    className?: string
  }
  
export const HeaderSocs:React.FC<IHeaderSocs> = ({className}) => { 
    return (
        <div className={cn('', className)}>
           Socs
        </div>
    )
       
    
}