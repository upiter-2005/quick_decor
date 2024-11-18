import { RedText } from "@/shared/ui/redText"
import Image from "next/image"
import example from "@/shared/assets/images/ex.jpg"
import ex2 from "@/shared/assets/images/ex2.jpg"
import ex3 from "@/shared/assets/images/ex3.jpg"

export const SeenProducts:React.FC = () => {
    return (
        <div className="bg-[#F6F6F9] pt-8">
            <div className="max-w-[1144px] w-full m-auto pb-[80px] pt-[] ">
                <RedText text="Історія переглянутих товарів" />
                <div className="pt-6 flex justify-between overflow-x-auto" >
                    <div className="w-[178px] h-[178px] overflow-hidden relative rounded-[8px] ">
                        <Image src={example} fill objectFit="cover" alt='quickdecor'  />
                    </div>
                    <div className="w-[178px] h-[178px] overflow-hidden relative rounded-[8px] ">
                        <Image src={ex2} fill objectFit="cover" alt='quickdecor'  />
                    </div>
                    <div className="w-[178px] h-[178px] overflow-hidden relative rounded-[8px] ">
                        <Image src={example} fill objectFit="cover" alt='quickdecor'  />
                    </div>
                    <div className="w-[178px] h-[178px] overflow-hidden relative rounded-[8px] ">
                        <Image src={ex2} fill objectFit="cover" alt='quickdecor'  />
                    </div>
                    <div className="w-[178px] h-[178px] overflow-hidden relative rounded-[8px] ">
                        <Image src={ex3} fill objectFit="cover" alt='quickdecor'  />
                    </div>
                </div>
            </div>
        </div>
        
    )
}