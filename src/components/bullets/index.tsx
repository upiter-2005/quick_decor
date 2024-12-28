import React from 'react'
import qr from "@/shared/assets/images/qr.png"
import { SectionTitle } from '@/shared/ui/sectionTitle'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export const Bullets:React.FC = ({}) => {
  return (
    <>
      <SectionTitle title='' redText='Про декоративні штукатурки Ferrara Paint'/>
      <p className={cn('text-[14px] md:text-[18px] leading-5 md:leading-[26px] w-full  text-center px-2 pt-3')}>Для реалізації проєктів ми використовуємо тільки продукцію <br /> Ferrara Paint та Simpletone TM від українського виробника «Феррара Групп».</p>

      <div className='max-w-[1144px] w-full m-auto flex justify-center md:justify-between gap-8 md:gap-[65px] flex-row flex-wrap px-3 md:px-0 mt-12' >

          <div className='max-w-[300px] text-center'>
            <p className='text-main md:text-[32px] text-2xl font-bold mb-5'>10 років</p>
            <div className='text-gray text-base md:text-xl leading-5 md:leading-6'>Працюємо із цією продукцією більше 10 років, та ніколи не мали проблем з якістю.</div>
          </div>

          <div className='max-w-[300px] text-center'>
            <p className='text-main md:text-[32px] text-2xl font-bold mb-5'>Екологічність</p>
            <div className='text-gray text-base md:text-xl leading-5 md:leading-6'>Засновники та розробники продукції Ferrara Paint та 
            Simpletone TM багато уваги приділяють екологічності та безпечності своєї продукції.</div>
          </div>

          <div className='max-w-[300px] text-center'>
            <p className='text-main md:text-[32px] text-2xl font-bold mb-5'>Сертифікація</p>
            <div className='text-gray text-base md:text-xl leading-5 md:leading-6'>Ferrara Paint та Simpletone TM - єдина українська продукція, що має якість, підтверджену Європейським Національним Інститутом Гігієни, та вже 2-й рік має дочірнє підприємство на території країни Європейського союзу. </div>
          </div>

          <div className='max-w-[300px] text-center'>
            <p className='text-main md:text-[32px] text-2xl font-bold mb-5'>Тренди</p>
            <div className='text-gray text-base md:text-xl leading-5 md:leading-6'>Всі види покриттів відповідають сучасним та дизайнерським трендам.</div>
          </div>

          <div className='max-w-[300px] text-center'>
            <p className='text-main md:text-[32px] text-2xl font-bold mb-5'>Професіонали</p>
            <div className='text-gray text-base md:text-xl leading-5 md:leading-6'> Всі майстри – декоратори пройшли навчання з Ferrara Paint та Simpletone TM в головному офісі компанії - виробника «Феррара Групп» під контролем Головного Технолога.</div>
          </div>

          <div className='max-w-[300px] text-center'>
            <p className='text-main md:text-[32px] text-2xl font-bold mb-5'>ferrara-paint.ua</p>
            <Link href="https://ferrara-paint.ua/?utm_source=quickdecor&utm_medium=site&utm_campaign=main-page" target='blank'>  <Image src={qr} width={144} height={144} alt='quickdecor' className='m-auto' /></Link>
          
          </div>
      </div>
    </>
  
  )
}

