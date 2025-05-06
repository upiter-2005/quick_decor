import React from 'react'
import Image from 'next/image'
// import Link from 'next/link'
import air from "@/shared/assets/images/Air.png"
import sand from "@/shared/assets/images/Sand.png"
import cement from "@/shared/assets/images/Microcement.png"
import travertin from "@/shared/assets/images/Travertine.png"
import quick from "@/shared/assets/images/Quick.png"
import {cn} from '@/shared/helpers/cn'
import { ICartItem, useCartStore } from '@/store/cartStore'
import { universalProducts } from '@/shared/consts/universalLines'
//import { SectionTitle } from '@/shared/ui/sectionTitle'
//import { RedButton } from '@/shared/ui/redButton'

interface PickEffectMini {
  className?: string
}
export const PickEffectMini:React.FC<PickEffectMini> = ({className}) => {
    const {addCartItem} = useCartStore()
    const addToCartQuiz = (product: string) => {
              const obj = universalProducts[product as never] as ICartItem
              console.log();
                addCartItem({
                    uid: new Date().getTime().toString() + 21,
                    id: obj.id,
                    name: obj.name,
                    price: obj.price,
                    effect: obj.effect,
                    square: 5,
                    image: obj.image,
                    type: "Universal"
                })
                // toast.success("Товар додано в корзину!", {icon: '✅', duration: 8000})
                // closeModal()
                // setModalCart(true)
            }

  return (
    <>
  
    
      <div className={cn('max-w-[1200px] w-full m-auto flex flex-wrap justify-center gap-7 md:gap-[35px] pb-14 pt-[5px] md:pt-0', className)} id="front-catalog">
        <div className='w-full'> 
           {/* <SectionTitle  redText='5 трендових та практичних ефектів' className='!pb-2'  / > */}
           </div>
          <button onClick={() => addToCartQuiz('air')} className='block w-[76px] h-[170px] relative  text-center hover:opacity-75 transition-all'>
            <Image src={air}  objectFit="cover"  alt="quickdecor" />
            <p className='text-main mt-1 md:mt-4 text-[10px] md:text-xs font-medium '>AIR</p>
          </button>
          <button onClick={() => addToCartQuiz('sand')} className='block w-[76px] h-[170px] relative    text-center hover:opacity-75 transition-all'>
            <Image src={sand}  objectFit="cover"  alt="quickdecor"   />
            <p className='text-main mt-1 md:mt-4 text-[10px]  md:text-xs font-medium'>SAND</p>
          </button>
          <button onClick={() => addToCartQuiz('microcemente')} className='block w-[76px] h-[170px] relative   text-center hover:opacity-75 transition-all'>
            <Image src={cement}  objectFit="cover"  alt="quickdecor"   />
            <p className='text-main mt-1 md:mt-4 text-[10px]  md:text-xs font-medium'>MICROCEMENTE</p>
          </button>
          <button onClick={() => addToCartQuiz('travertine')} className='block w-[76px] h-[170px] relative    text-center hover:opacity-75 transition-all'>
            <Image src={travertin}  objectFit="cover"  alt="quickdecor"   />
            <p className='text-main mt-1 md:mt-4 text-[10px]  md:text-xs font-medium'>TRAVERTINE</p>
          </button>
          <button onClick={() => addToCartQuiz('quick')} className='block w-[76px] h-[170px] relative  text-center hover:opacity-75 transition-all'>
            <Image src={quick}  objectFit="cover"  alt="quickdecor"   />
            <p className='text-main mt-1 md:mt-4 text-[10px] md:text-xs font-medium'>QUICK</p>
          </button>
         
          
      </div>
    </>
  
  )
}

