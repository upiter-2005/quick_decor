import { cn } from "../helpers/cn"
import { RedText } from "./redText"

interface ISectionTitle {
    className?: string
    title: string
    redText: string
}

export const SectionTitle:React.FC<ISectionTitle> = ({className, title, redText}) => {
    return(
        <>
            <div className={cn('max-w-[1154px] w-full m-auto mt-[110px] pb-[52px]', className)}>
                <RedText text={redText} />
                <h2 className={cn('text-[46px] leading-[64px] w-full text-left')}>{title}</h2>
            </div>
        </>
    )
}