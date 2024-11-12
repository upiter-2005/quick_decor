import {cn} from "@/shared/helpers/cn"


interface IHeaderMnu {
    className?: string
  }
  
export const HeaderMnu:React.FC<IHeaderMnu> = ({className}) => { 
    return (
        <nav className={cn('', className)}>
            <ul className=" flex justify-between items-center gap-6 text-gray font-medium text-sm">
                <li className="py-1"><a href="#">Каталог</a></li>
                <li className="py-1 group relative">
                    <a href="#">Обрати за своїми параметрами</a>
                    <ul className="absolute top-[90%] left-0 w-[calc(100%+50px)] rounded-[4px] border border-black bg-white z-50 opacity-0 group-hover:opacity-100">
                        <li className="py-4 px-4 leading-5 hover:bg-gray hover:text-white"><a href="#">Оберіть за приміщенням</a></li>
                        <li className="py-4 px-4 leading-5 hover:bg-gray hover:text-white"><a href="#">Оберіть  за ефектом</a></li>
                        <li className="py-4 px-4 leading-5 hover:bg-gray hover:text-white"><a href="#">Оберіть за призначенням</a></li>
                        <li className="py-4 px-4 leading-5 hover:bg-gray hover:text-white"><a href="#">Оберіть за якістю підготовки стін</a></li>
                    </ul>
                </li>
                <li className="py-1"><a href="#">Цiна</a></li>
                <li className="py-1"><a href="#">Блог</a></li>
                <li className="py-1"><a href="#">Про нас</a></li>
                <li className="py-1"><a href="#">Контакти</a></li>
                <li className="py-1"><a href="#">+38 044 <span className="font-bold">242 41 42</span> </a></li>
            </ul>
        </nav>
    )
       
    
}