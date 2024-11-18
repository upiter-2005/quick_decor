import { cn } from "@/lib/utils"
import { SectionTitle } from "@/shared/ui/sectionTitle"
import {RedButton} from '@/shared/ui/redButton'

interface IFooterForm{
    className?: string
}

export const FooterForm:React.FC<IFooterForm> = ({className}) => {
    return(
        <div className={cn('max-w-[1144px] w-full m-auto  mb-[55px] px-3 md:px-0', className)}>
            <SectionTitle title="Зв'яжіться з намі" redText='Контактна форма'/>
            <form action="" className="flex justify-between flex-wrap">
                <div className="w-full md:w-[48%] mb-[30px] md:mb-[56px]">
                    <p>Ім’я</p>
                    <input type="text" placeholder="First name" className="w-full text-[#9A9FA8] outline-none py-2 border-b-[1px] border-b-[#D9DADD] placeholder:text-[#9A9FA8] text-base"  />
                </div>
                <div className="w-full md:w-[48%] mb-[30px] md:mb-[56px]">
                    <p>Призвище</p>
                    <input type="text" placeholder="Last name " className="w-full text-[#9A9FA8] outline-none py-2 border-b-[1px] border-b-[#D9DADD] placeholder:text-[#9A9FA8] text-base"  />
                </div>
                <div className="w-full md:w-[48%] mb-[30px] md:mb-[56px]">
                    <p>Email</p>
                    <input type="email" placeholder="Email" className="w-full text-[#9A9FA8] outline-none py-2 border-b-[1px] border-b-[#D9DADD] placeholder:text-[#9A9FA8] text-base"  />
                </div>
                <div className="w-full md:w-[48%] mb-[30px] md:mb-[56px]">
                    <p>Номер телефону</p>
                    <input type="tel" placeholder="Phone number" className="w-full text-[#9A9FA8] outline-none py-2 border-b-[1px] border-b-[#D9DADD] placeholder:text-[#9A9FA8] text-base"  />
                </div>
                <div className="w-full mb-[56px]">
                    <p>Ваше повідомлення</p>
                    <input type="text" placeholder="Comment" className="w-full text-[#9A9FA8] outline-none py-2 border-b-[1px] border-b-[#D9DADD] placeholder:text-[#9A9FA8] text-base"  />
                </div>
                <div className="w-full">
                    <RedButton  text="Зв'язатися з нами" className="w-[212px]"/>
                </div>
            </form>
        </div>
    )
}