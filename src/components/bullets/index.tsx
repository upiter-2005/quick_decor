import React from 'react'
import qr from "@/shared/assets/images/qr.jpg"
import { SectionTitle } from '@/shared/ui/sectionTitle'
import Image from 'next/image'

export const Bullets:React.FC = ({}) => {
  return (
    <>
      <SectionTitle title='Ще треба трохи інформації для вибору?' redText='Роздивитися детальніше'/>
      <div className='max-w-[1144px] w-full m-auto flex justify-center md:justify-between gap-8 md:gap-[65px] flex-row flex-wrap px-3 md:px-0' >

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
            <Image src={qr} width={144} height={144} alt='quickdecor' className='m-auto' />
          </div>
      </div>
    </>
  
  )
}

