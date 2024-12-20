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
import { RedButton } from "@/shared/ui/redButton"
import { ContactBaner } from "@/components/contactBaner"
import { FooterFormWidget } from "@/modules/footer-form"

interface IImageObj {
  image: string,
  name: string
}
interface IProductData {
    className?: string
    product: IProduct
    images: string[]
    variations: string[]
    type_flats: IImageObj[]
    serf_area: IImageObj[]
    prepare: IImageObj[]
    usefull: IImageObj[]
}
type Images = {
    original: string,
    thumbnail: string
}

export const ProductData:React.FC<IProductData> = ({className, product, images, variations, type_flats, serf_area, prepare, usefull}) =>{
        const [square, setSquare] = useState<string>('5');
        const [isOpen, setIsOpen] = useState<boolean>(false);
        const [imgs, setImgs] = useState<Images[]>([])
        const [isError, setIsError] = useState<boolean>(false);
        

        console.log(product);
      
    const {addCartItem, typeFlat} = useCartStore()
  
    const addToCartHandler = () => {
        if(!typeFlat) {
            setIsOpen(true)
            return
        }
        addCartItem({
            uid: new Date().getTime().toString(),
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
            uid: new Date().getTime().toString(),
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
        <SectionTitle redText={`Каталог > ${product.acf.front_name}`} className=" mt-0 max-w-[1304px] w-full m-auto pt-6 pb-0 md:pb-0"/>
         <div className={cn('max-w-[1304px] w-full m-auto pt-8 flex flex-col md:flex-row gap-5 ', className)}>
            <div className="flex justify-between flex-1 gap-5 flex-col md:flex-row pl-[6px]">
              
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
            <div className="max-w-[536px] w-full px-3 md:px-0 pt-7 md:pt-0 ">
                <div className="flex justify-between flex-col">
                    <SectionTitle title={product.acf.front_name} redText={'Ефект'} className="pb-0 mt-0 md:pb-1"/>
                    {/* <SectionTitle title='-10%' redText='Знижка дня' className="pb-0 w-[100px] mt-0"/> */}
                    <div className="flex gap-7 mb-5 mt-7">
                    {variations.map((el: string, i: number) => 
                        <Link href={`/product/${product.acf.front_name.toLocaleLowerCase()}-${el}`} key={i} className="flex flex-col items-center ">
                            <Image src={color} width={36} height={36} alt='quickdecor' />
                            <span className="capitalize text-xs md:text-[16px] mt-1">{el}</span>
                        </Link>
                    )}
                   
             
                </div>
                </div>
                <div className="text-sm mb-8 capitalize pl-4 md:pl-0">Колір - {product.acf.colors}</div>
                <div className="text-base text-gray leading-6 mb-3" dangerouslySetInnerHTML={{__html: product.acf.description}} ></div>
                <div className="text-main leading-6 text-base">Є екологічно чистим покриттям. Має європейський сертифікат стандарту якості. </div>
               

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
                            onChange={(e)=>{setSquare(e.target.value); if(Number(e.target.value) < 5){setIsError(true)}else{setIsError(false)} }}
                            />
                    </div>
                    <button 
                        className="w-[250px] rounded-[60px] text-white p-4 bg-[#ff0000] text-sm font-semibold hover:opacity-70"
                        onClick={addToCartHandler}
                        >До кошика</button>
                 </div>
            </div>
      </div>


      <SectionTitle redText='Ідеально підходить для наступних приміщень'/>
      
      <div className='max-w-[1144px] w-full m-auto flex flex-wrap justify-center gap-8 md:gap-[55px] mb-[55px] px-3 md:px-0 pb-12 ' >
        {type_flats.map((el:IImageObj, i: number) => 
         ( <div key={i}  className='block w-[80px] h-[80px] relative  md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
          <Image src={el.image}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]' />
          <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>{el.name}</p>
          </div>)
        )}
      </div>

      
      <SectionTitle redText='Підходить для таких поверхонь'/>
      
      <div className='max-w-[1144px] w-full m-auto flex flex-wrap justify-center gap-8 md:gap-[55px] mb-[55px] px-3 md:px-0 pb-12' >
      
        {serf_area.map((el:IImageObj, i: number) => 
         ( <div key={i}  className='block w-[80px] h-[80px] relative  md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
          <Image src={el.image}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]' />
          <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>{el.name}</p>
          </div>)
        )}
        
      </div>


      <SectionTitle redText='Необхідна підготовка поверхонь'/>
      
      <div className='max-w-[1144px] w-full m-auto flex flex-wrap justify-center gap-8 md:gap-[55px] mb-[55px] px-3 md:px-0 pb-12' >
  


      {prepare.map((el:IImageObj, i: number) => 
         ( <div key={i}  className='block w-[80px] h-[80px] relative  md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
          <Image src={el.image}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]' />
          <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>{el.name}</p>
          </div>)
        )}
         
          
      </div>


      <SectionTitle redText='Має такі властивості'/>
      
      <div className='max-w-[1144px] w-full m-auto flex flex-wrap justify-center gap-8 md:gap-[55px] mb-[55px] px-3 md:px-0 pb-12' >
          
      {usefull.map((el:IImageObj, i: number) => 
         ( <div key={i}  className='block w-[80px] h-[80px] relative  md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
          <Image src={el.image}  fill objectFit='cover'  alt="quickdecor" className='rounded-[10px]' />
          <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>{el.name}</p>
          </div>)
        )}
          
      </div>

      <h2 className={cn('text-[28px] md:text-[46px] leading-9 md:leading-[64px] w-full  text-center')}>Не впевненні у виборі?</h2> 
      <p className={cn('text-[14px] md:text-[18px] leading-5 md:leading-[26px] w-full  text-center px-2 pt-3')}>Скористайтеся нашим фільтром помічником. <br /> В залежності від обраних вами параметрів, ми порекомендуємо найкращий ефект за допомогою системи балів.</p>
      <div className='w-full text-center mb-16 mt-14'><RedButton linkText='Скористатися фільтром' text='Скористатися фільтром' href='/quiz' className='px-8' /></div>
        

      <ContactBaner />
      <FooterFormWidget />

      
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