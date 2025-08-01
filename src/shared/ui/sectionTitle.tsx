import { cn } from "../helpers/cn"
import { RedText } from "./redText"

interface ISectionTitle {
    className?: string
    title?: string
    redText?: string
}

export const SectionTitle:React.FC<ISectionTitle> = ({className, title, redText}) => {
    return(
        <>
            <div className={cn('max-w-[1154px] w-full m-auto mt-[50px] pb-3 md:pb-[52px] px-3 md:px-0 ', className)}>
                {redText && <RedText text={redText} className="" />}
                
                {title && <h2 className={cn('text-[28px] md:text-[46px] leading-9 md:leading-[64px] w-full text-left mt-3', className)}>{title}</h2> }
                
            </div>
        </>
    )
}