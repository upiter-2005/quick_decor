import {cn} from "@/shared/helpers/cn"
// import caret from "@/shared/assets/images/caret.svg"
// import Image from 'next/image'

interface IHeaderMnu {
    className?: string
  }
  
export const HeaderMnu:React.FC<IHeaderMnu> = ({className}) => { 
    return (
        <nav className={cn('', className)}>
            <ul className=" flex justify-between items-center gap-6 text-gray font-medium text-sm">
                <li className="py-7"><a href="#" >Каталог</a></li>
                {/* <li className="py-7 group relative">
                    <a href="#" className="flex gap-1">Обрати за своїми параметрами <Image src={caret} width={10} height={5} alt='quickdecor' className="relative top-[1px]" /> </a>
                    <ul className="absolute mt-5 left-0 w-[calc(100%+50px)] rounded-[4px] border border-black hidden bg-white z-50 group-hover:block ">
                        <li className="py-4 px-4 leading-5 hover:bg-gray hover:text-white"><a href="#">Оберіть за приміщенням</a></li>
                        <li className="py-4 px-4 leading-5 hover:bg-gray hover:text-white"><a href="#">Оберіть  за ефектом</a></li>
                        <li className="py-4 px-4 leading-5 hover:bg-gray hover:text-white"><a href="#">Оберіть за призначенням</a></li>
                        <li className="py-4 px-4 leading-5 hover:bg-gray hover:text-white"><a href="#">Оберіть за якістю підготовки стін</a></li>
                    </ul>
                </li> */}
                <li className="py-7"><a href="#" >Цiна</a></li>
                <li className="py-7"><a href="#" >Блог</a></li>
                <li className="py-7"><a href="#" >Про нас</a></li>
                <li className="py-7"><a href="#" >Контакти</a></li>
                {/* <li className="py-7"><a href="#" >+38 044 <span className="font-bold">242 41 42</span> </a></li> */}
            </ul>
        </nav>
    )
       
    
}