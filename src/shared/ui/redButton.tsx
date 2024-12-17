
import { cn } from "../helpers/cn"
import Link from 'next/link'

interface IRedButton {
    className?: string
    text: string
    href?: string
    linkText?: string
    onClick?: () => void
}

export const RedButton:React.FC<IRedButton> = ({className, text, href, linkText}) => {
    return(
        <>
            {href ? 
                (<Link 
                    href={href}
                    className={cn( 'bg-[#ff0000] text-white text-sm font-semibold p-4 rounded-[60px] inline-block hover:opacity-55 transition-all text-center', className)}
                >{linkText}</Link>)
                : 
                <button className={cn( 'bg-[#ff0000] text-white text-sm font-semibold p-4 rounded-[60px] inline-block hover:opacity-55 transition-all', className)}>{text}</button>
            }
        </>
    )
}