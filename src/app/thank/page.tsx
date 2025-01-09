'use client'
import Image from 'next/image'
import thank from '@/shared/assets/images/thank.jpg' 
import { RedButton } from '@/shared/ui/redButton'
import { useEffect } from 'react'
import { useCartStore } from '@/store/cartStore'

export default  function Thank() {
    const {clear, setBox, setShowLiqPay} = useCartStore()

    useEffect(()=>{
        clear()
        setBox(false)
        setShowLiqPay(false)
    }, [])
  return (
    <div className='flex flex-col items-center justify-center py-14 px-2'>
      <h1 className='text-2xl font-bold'>Дякуємо за замовлення</h1>
      
      <div className='relative w-full max-w-[750px] h-[190px] md:h-[450px] mx-auto my-6'>
        <Image src={thank} fill alt='qd'  style={{objectFit:"contain"}} />  
      </div>
      <RedButton href='/' linkText="На головну" text="На головну" className='w-[250px] text-white mx-auto mb-13' />  
    </div>
  )
}