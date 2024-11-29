'use client'
import { cn } from "@/shared/helpers/cn"
import Image from "next/image"
import { SectionTitle } from "@/shared/ui/sectionTitle"
import color from "@/shared/assets/images/color.jpg"
import Link from "next/link"
import { IProduct } from "../types/types"
import { useCartStore } from "@/store/cartStore"
import { useState } from "react"

interface IProductData {
    className?: string
    product: IProduct
    images: string[]
    variations: string[]
}

export const ProductData:React.FC<IProductData> = ({className, product, images, variations}) =>{
        const [square, setSquare] = useState<string>('15');
        
    const {addCartItem} = useCartStore()
  
     console.log(product)
  
    return(
        <div className={cn('max-w-[1304px] w-full m-auto pt-8 flex flex-col md:flex-row', className)}>
            <div className="flex justify-between flex-1 gap-5 flex-col md:flex-row">
                <div className=" w-full md:w-[568px] overflow-hidden relative">
                    {images &&  <Image src={images[0]} fill objectFit="cover" alt='quickDecor' />}
                   
                </div>
                <div className="flex flex-1 justify-center md:flex-col gap-3 md:gap-7">
                    {images && images?.map((el, i) => (<div key={i} className="md:w-[134px] w-[70px] md:h-[134px] h-[70px] overflow-hidden relative">
                        <Image src={el} fill objectFit="cover" alt='quickDecor' />
                    </div>) )}
                </div>
            </div>
            <div className="max-w-[536px] w-full px-3 md:px-0 pt-7 md:pt-0">
                <div className="flex justify-between">
                    <SectionTitle title={product.acf.front_name} redText={`Каталог > ${product.acf.front_name}`} className="pb-0 mt-0"/>
                    <SectionTitle title='-10%' redText='Знижка' className="pb-0 w-[100px] mt-0"/>
                </div>
                <div className="text-sm mb-8 capitalize">{product.acf.colors}</div>
                <div className="text-base text-gray leading-6 mb-3" dangerouslySetInnerHTML={{__html: product.acf.description}} ></div>
                <div className="text-main leading-6 text-base">Є екологічно чистим покриттям. Має європейський сертифікат стандарту якості. </div>
                <div className="flex gap-7 mb-5 mt-7">
                    {variations.map((el: string, i: number) => 
                        <Link href={`/product/${product.acf.front_name.toLocaleLowerCase()}-${el}`} key={i} className="flex flex-col items-center ">
                            <Image src={color} width={38} height={38} alt='quickdecor' />
                            <span className="capitalize ">{el}</span>
                        </Link>
                    )}
                   
             
                </div>

                <div className="flex items-end py-2 justify-center md:justify-start">
                    <p className="text-main text-[48px] relative">{product.acf.price} <span className='relative text-[34px] -top-3 -left-1'> грн</span></p>
                    {product.acf.old_price && <p className="text-[#858585] text-2xl line-through font-medium relative -top-2 ml-3">{product.acf.old_price} грн </p>}
                    
                 </div>
                 <div className="flex items-center gap-6 flex-col md:flex-row">
                    <div className="flex-1">
                        <p className="mn-0 text-[#373C45] text-sm font-medium">Кількість м2</p>
                        <input 
                            type="number" 
                            placeholder="Введіть бажані параметри" 
                            className="w-full text-[#9A9FA8] outline-none py-2 border-b-[1px] border-b-[#D9DADD] placeholder:text-[#9A9FA8] text-base" 
                            value={square} 
                            onChange={(e)=>setSquare(e.target.value)}
                            />
                    </div>
                    <button 
                        className="w-[250px] rounded-[60px] text-white p-4 bg-[#1C293F] text-sm font-semibold hover:opacity-70"
                        onClick={()=>addCartItem({
                            id: product.id,
                            name: product.acf.front_name + ' ' + product.acf.colors,
                            price: product.acf.price,
                            effect: product.acf.colors,
                            square: parseInt(square),
                            image: images[0]
                        })}
                        >Придбати</button>
                 </div>
            </div>
        </div>
    )  
    
}