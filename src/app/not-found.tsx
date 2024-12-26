import Image from 'next/image'
import img404 from '@/shared/assets/images/404.jpg' 
import { RedButton } from '@/shared/ui/redButton'
export default async function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center py-14'>
      <h1 className='text-3xl font-bold'>Вибачте, такої сторінки не знайдено</h1>
      
      <div className='relative w-full max-w-[450px] h-[450px] mx-auto my-6'>
        <Image src={img404} fill alt='qd'  style={{objectFit:"cover"}} />  
      </div>
      <RedButton href='/' linkText="На головну" text="На головну" className='w-[250px] text-white mx-auto mb-13' />  
    </div>
  )
}