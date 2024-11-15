import { RedButton } from '@/shared/ui/redButton'
import { RedText } from '@/shared/ui/redText'
import React from 'react'

import step1 from "@/shared/assets/images/step1.svg"
import step2 from "@/shared/assets/images/step2.svg"
import step3 from "@/shared/assets/images/step3.svg"
import step4 from "@/shared/assets/images/step4.svg"
import { Tile } from '@/shared/ui/tile'

export const HomeBaner = () => {
  return (
    <div className='w-full min-h-[750px] h-[85vh] bg-baner bg-cover bg-center bg-no-repeat 
    flex flex-col items-start
     relative after:content-[""] after:absolute after:w-full after:h-full after:z-20 after:block 
     after:bg-gradient-to-r after:from-white after:from-[7%] after:to-transparent after:to-86% '>

        <div className='flex flex-col gap-3 max-w-[1116px] w-full m-auto relative z-30'>
            <RedText text='Команда відібрала 5 трендових, але практичних фактур, та представили їх у 21-у топовому кольорі' />
            <h1 className='text-[56px] leading-[72px] '>#QUICKDECOR</h1>
            <p className='text-[20px] text-gray leading-6 mb-0'>Простіше ніж вийти в магазин</p>
            <RedButton text='Перейти до вибору' className='w-[212px] mt-[80px]' />
        </div>
    
        <div className='flex gap-3 max-w-[1116px] w-full absolute -bottom-10 z-30 left-[50%] -translate-x-[50%]'>
            <Tile text="Ознайомтесь з можливими ефектами та кольорами" image={step1} isFirst={true} />
            <Tile text="Оберіть покриття що відповідають вашим запитам" image={step2} />
            <Tile text="Зробіть замовлення будь яким зручним засобом" image={step3} />
            <Tile text="Отримайте коробку помічницю" image={step4} isLast={true} />
        </div>
    </div>
  )
}

