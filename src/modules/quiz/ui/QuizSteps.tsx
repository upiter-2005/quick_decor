import { cn } from "@/shared/helpers/cn"
import Image from "next/image"


import badroom from "@/shared/assets/images/badroom.svg"
import demo from "@/shared/assets/images/demo.svg"
import hall from "@/shared/assets/images/hall.svg"
import { RedText } from "@/shared/ui/redText"

import ef1 from "@/shared/assets/images/ef1.jpg"
import ef2 from "@/shared/assets/images/ef2.jpg"
import ef3 from "@/shared/assets/images/ef3.jpg"
import { QuizTile } from "./quizTile"
import { RedButton } from "@/shared/ui/redButton"
interface IQuizSteps {
    className?: string
}

export const QuizSteps:React.FC<IQuizSteps> = ({className}) =>{
    return(
        <div className={cn('max-w-[1144px] w-full m-auto pt-12 px-3 md:px-0', className)} >

            <p className="w-full text-center text-xs px-4 text-[#373C45] mb-5">Тепер Вам не треба витрачати зайвий час на годинні консультації щодо потрібного покриття під ваші умови. Нижче скористайтеся помічником, який швидко, на основі Ваших параметрів прорахує оптимальне покриття та надасть рекомендації за допомогою системи балів.</p>


            <RedText text="Ефекти" />
            <div className={cn('max-w-[1030px] w-full m-auto flex flex-wrap justify-center gap-8 md:gap-[65px] pb-14 mt-5 ', className)} >
                <div  className='block w-[80px] md:w-[146px] h-[80px] md:h-[146px]  text-center hover:opacity-75 transition-all rounded-[50%] relative overflow-hidden '>
                    <Image src={ef1}  fill objectFit="cover"  alt="quickdecor"   />
                    <p className='text-main mt-1 text-xs  md:text-xl font-medium'>AIR</p>
                    <div className="text-main md:text-2xl font-medium">0</div>
                </div>
                <div  className='block w-[80px] md:w-[146px] h-[80px] md:h-[146px]  text-center hover:opacity-75 transition-all rounded-[50%] relative overflow-hidden '>
                    <Image src={ef2}  fill objectFit="cover"  alt="quickdecor"   />
                    <p className='text-main mt-1 text-xs  md:text-xl font-medium'>SAND</p>
                    <div className="text-main md:text-2xl font-medium">0</div>
                </div>
                <div className='block w-[80px] md:w-[146px] h-[80px] md:h-[146px]  text-center hover:opacity-75 transition-all rounded-[50%] relative overflow-hidden '>
                    <Image src={ef3}  fill objectFit="cover"  alt="quickdecor"   />
                    <p className='text-main mt-1 text-xs md:text-xl font-medium'>MICROCEMENT</p>
                    <div className="text-main md:text-2xl font-medium">0</div>
                </div>
                <div  className='block w-[80px] md:w-[146px] h-[80px] md:h-[146px]  text-center hover:opacity-75 transition-all rounded-[50%] relative overflow-hidden '>
                    <Image src={ef1}  fill objectFit="cover"  alt="quickdecor"   />
                    <p className='text-main mt-1 text-xs  md:text-xl font-medium'>TRAVERTINE</p>
                    <div className="text-main md:text-2xl font-medium">0</div>
                </div>
                <div  className='block w-[80px] md:w-[146px] h-[80px] md:h-[146px]  text-center hover:opacity-75 transition-all rounded-[50%] relative overflow-hidden '>
                    <Image src={ef1}  fill objectFit="cover"  alt="quickdecor"   />
                    <p className='text-main mt-1 text-xs  md:text-xl font-medium'>QUICK</p>
                    <div className="text-main md:text-2xl font-medium">0</div>
                </div>
            </div>


            <div className="flex gap-5  w-full flex-wrap justify-center">
                <QuizTile text="Спальня" image={badroom} isFirst={true} />
                <QuizTile text="Гостинная" image={demo} />
                <QuizTile text="Детская" image={demo} />
                <QuizTile text="Холл, лестничный марш" image={hall} isLast={true} />
                <QuizTile text="Кухня" image={badroom} isFirst={true} />
                <QuizTile text="Коридор" image={demo} />
                <QuizTile text="Кабинет" image={demo} />
                <QuizTile text="Oфис" image={hall} isLast={true} />
                <QuizTile text="шоу-рум, выставочный зал" image={badroom} isFirst={true} />
                <QuizTile text="детские клубы/учебные классы" image={demo} isLast={true} />
            </div>

            <div className="flex justify-center mb-3 mt-5">
                <RedButton text="Наступний крок" className="w-[250px]" />
            </div>
        
    </div>
    )  
    
}