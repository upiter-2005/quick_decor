'use client'
import { cn } from "@/shared/helpers/cn"
import Image from "next/image"
import { SectionTitle } from "@/shared/ui/sectionTitle"
import color from "@/shared/assets/images/color.jpg"
import Link from "next/link"
import { IProduct } from "../types/types"
import { useCartStore } from "@/store/cartStore"
import { useEffect, useState } from "react"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss"

import {flatTypes} from "@/shared/consts/flatTypes"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/shared/ui/dialog"
import toast from "react-hot-toast"

interface IProductData {
    className?: string
    product: IProduct
    images: string[]
    variations: string[]
}
type Images = {
    original: string,
    thumbnail: string
}
export const ProductData:React.FC<IProductData> = ({className, product, images, variations}) =>{
        const [square, setSquare] = useState<string>('');
        const [isOpen, setIsOpen] = useState<boolean>(false);
        const [imgs, setImgs] = useState<Images[]>([])
        const [isError, setIsError] = useState<boolean>(false);
        
        
        
    const {addCartItem, typeFlat} = useCartStore()
  
    const addToCartHandler = () => {
        if(!typeFlat) {
            setIsOpen(true)
            return
        }
        addCartItem({
            id: product.id,
            name: product.acf.front_name + ' ' + product.acf.colors,
            price: product.acf.price,
            effect: product.acf.colors,
            square: parseInt(square),
            image: images[0],
            type: typeFlat
        })
        toast.success("Товар додано в корзину!", {icon: '✅'})
      
    }

    const  defineType = (val: string) => {
        addCartItem({
            id: product.id,
            name: product.acf.front_name + ' ' + product.acf.colors,
            price: product.acf.price,
            effect: product.acf.colors,
            square: parseInt(square),
            image: images[0],
            type: val
        })
        toast.success("Товар додано в корзину!", {icon: '✅'})
        setIsOpen(false)
    }

  
     
    useEffect(()=> {
     
            const imgObj: Images[]  = images.map((obj)=>{
                return {
                  original: obj,
                  thumbnail: obj 
                } 
            })
            setImgs(imgObj)
        
      
   }, [images])
  
    return(
        <>
         <div className={cn('max-w-[1304px] w-full m-auto pt-8 flex flex-col md:flex-row', className)}>
            <div className="flex justify-between flex-1 gap-5 flex-col md:flex-row">
            <ImageGallery 
                additionalClass="productGallery"
                showBullets={false}
                showNav={true}
                infinite={true}
                disableThumbnailScroll={false}
                disableSwipe={false}
                useBrowserFullscreen={false}
                thumbnailPosition="right" 
                showPlayButton={false}
                slideOnThumbnailOver={false}
                items={imgs} />
           
                {/* <div className=" w-full md:w-[568px] overflow-hidden relative">
                    {images &&  <Image src={images[0]} fill objectFit="cover" alt='quickDecor' />}
                   
                </div>
                <div className="flex flex-1 justify-center md:flex-col gap-3 md:gap-7">
                    {images && images?.map((el, i) => (<div key={i} className="md:w-[134px] w-[70px] md:h-[134px] h-[70px] overflow-hidden relative">
                        <Image src={el} fill objectFit="cover" alt='quickDecor' />
                    </div>) )}
                </div> */}
            </div>
            <div className="max-w-[536px] w-full px-3 md:px-0 pt-7 md:pt-0">
                <div className="flex justify-between">
                    <SectionTitle title={product.acf.front_name} redText={`Каталог > ${product.acf.front_name}`} className="pb-0 mt-0"/>
                    <SectionTitle title='-10%' redText='Знижка дня' className="pb-0 w-[100px] mt-0"/>
                </div>
                <div className="text-sm mb-8 capitalize">Color - {product.acf.colors}</div>
                <div className="text-base text-gray leading-6 mb-3" dangerouslySetInnerHTML={{__html: product.acf.description}} ></div>
                <div className="text-main leading-6 text-base">Є екологічно чистим покриттям. Має європейський сертифікат стандарту якості. </div>
                <div className="flex gap-7 mb-5 mt-7">
                    {variations.map((el: string, i: number) => 
                        <Link href={`/product/${product.acf.front_name.toLocaleLowerCase()}-${el}`} key={i} className="flex flex-col items-center ">
                            <Image src={color} width={36} height={36} alt='quickdecor' />
                            <span className="capitalize text-xs md:text-[16px] mt-1">{el}</span>
                        </Link>
                    )}
                   
             
                </div>

                <div className="flex items-center md:items-end py-2 justify-center md:justify-start flex-col md:flex-row">
                    <p className="text-main text-[48px] relative">{product.acf.price} <span className='relative text-[34px] -top-3 -left-1'> грн</span></p>
                    {product.acf.old_price && <p className="text-[#858585] text-2xl line-through font-medium relative -top-2 ml-3">{product.acf.old_price} грн </p>}
                    
                 </div>
                 <div className="flex items-center md:items-end gap-6 flex-col md:flex-row">
                    <div className="flex-1 relative w-full">
                        {isError && <p className="text-xs text-[#ff0000]">УВАГА! Ваш запит меньший за стандарт, і потребує індивідуального прорахунку. Радимо зателефонувати або написати або ми самі зв’яжемося з Вами
                            </p>}
                        
                        <p className="mn-0 text-[#373C45] text-sm font-medium">Кількість м2</p>
                        <input 
                            type="number" 
                            min={1}
                            placeholder="15m" 
                            className="w-full text-[#9A9FA8] outline-none py-3 pl-2 border border-[#D9DADD] placeholder:text-[#9A9FA8] text-base rounded-xl " 
                            value={square} 
                            onChange={(e)=>{setSquare(e.target.value); if(Number(e.target.value) < 15){setIsError(true)}else{setIsError(false)} }}
                            />
                    </div>
                    <button 
                        className="w-[250px] rounded-[60px] text-white p-4 bg-[#ff0000] text-sm font-semibold hover:opacity-70"
                        onClick={addToCartHandler}
                        >Придбати</button>
                 </div>
            </div>
      </div>
        
        <Dialog open={isOpen} onOpenChange={()=>{setIsOpen(false)}}  >
            <DialogContent className="max-w-[700px] w-full" >
                <DialogHeader>
                <DialogTitle><div className="w-full text-xl mb-2 text-[#373C45]">Оберіть приміщення</div></DialogTitle>
                </DialogHeader>

                <div className="flex gap-5  w-full flex-wrap justify-center">
                    {flatTypes.map((obj, i)=>
                        <div key={i} 
                        onClick={()=>defineType(obj.name)}
                        className="w-[90px] flex flex-col justify-start items-center cursor-pointer"
                        >
                        <Image src={obj.image} width={90} height={90} alt='quickdecor'  className='rounded-[10px]'/>
                        <span className="text-xs text-center pt-1 font-semibold">{obj.name}</span>
                        </div>
                    )}
                </div>

            </DialogContent>
        </Dialog>

</>
       
    )  
    
}