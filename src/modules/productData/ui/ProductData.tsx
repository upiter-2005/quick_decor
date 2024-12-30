/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { cn } from "@/shared/helpers/cn"
import Image from "next/image"
import { SectionTitle } from "@/shared/ui/sectionTitle"

import Link from "next/link"
import { IProduct } from "../types/types"
import { useCartStore } from "@/store/cartStore"
import { useEffect, useState } from "react"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss"
import mark from "@/shared/assets/images/mark.svg"

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
import { ReadMore } from "@/components/readMore"
import { PickEffect } from "@/components/pickEffect"

interface IImageObj {
  image: string,
  name: string
}
interface IProductData {
    className?: string
    product: IProduct
    variations: string[]
}
type Images = {
    original: string,
    thumbnail: string
}

export const ProductData:React.FC<IProductData> = ({className, product, variations}) =>{
        const [square, setSquare] = useState<string>('5');
        const [isOpen, setIsOpen] = useState<boolean>(false);
        const [imgs, setImgs] = useState<Images[]>([])
        const [isError, setIsError] = useState<boolean>(false);
        const [type_flats, setType_flats] = useState<IImageObj[]>();
        const [serf_area, setSerf_area] = useState<IImageObj[]>();
        const [prepare, setPrepare] = useState<IImageObj[]>();
        const [usefull, setUsefull] = useState<IImageObj[]>();
       

        console.log(product);
      
    const {addCartItem, typeFlat, setBox} = useCartStore()
  
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
            image: imgs[0].original,
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
            image: imgs[0].original,
            type: val
        })
        toast.success("Товар додано в корзину!", {icon: '✅'})
        setIsOpen(false)
    }

  
     
    useEffect(()=> {
            const imgObj: Images[]  = product.acf.gallery_images.map((obj: any)=>{
                return {
                  original: obj.url,
                  thumbnail: obj.url 
                } 
            })
            setImgs(imgObj)
   }, [product])

   useEffect(()=>{
    const getData = async() => {
        setType_flats(product.acf.hall_types)
        setSerf_area(product.acf.serf_area)
        setPrepare(product.acf.prepare)
        setUsefull(product.acf.usefull)
    }
    getData()
   }, [product])
  

    return(
        <>
 
          <div className={cn('max-w-[1304px] w-full m-auto mt-[50px] pb-0 md:pb-[5px] px-3 md:px-0 flex ', className)}>
                <Image src={mark} width={17} height={4} alt="quickdecor" />
                <Link href="/catalog" className="text-[#ff0000] text-xs md:text-sm font-semibold leading-4 md:leading-5 mr-1 ml-1">Каталог</Link> 
                <span className="text-[#ff0000] text-xs md:text-sm font-semibold leading-4 md:leading-5"> {' >'} {product.acf.front_name}</span>           
            </div>
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
            <div className="max-w-[536px] w-full px-3 md:px-0 pt-2 md:pt-0 ">
                <div className="flex justify-between flex-col">
         
                    {product.acf.front_name !== "Коробка помічниця" &&
                    <><SectionTitle title={product.acf.front_name} redText={'Ефект'} className="pb-0 mt-0 md:pb-1 pl-0"/>
                    <div className="text-sm md:mb-8 capitalize md:pl-0 font-semibold md:hidden pl-0">Колір - {product.acf.colors}</div>
                    </>  }
                    {product.acf.front_name === "Коробка помічниця" &&
                    <><SectionTitle title={product.acf.front_name} className="pb-0 mt-0 md:pb-1 pl-0"/>
                    
                    </>  }
                   
                
                    {product.acf.front_name !== "Коробка помічниця" &&
                    
                        (<>
                         <div className="flex gap-7 mb-5 mt-7 flex-wrap">
                            {variations.map((el: string, i: number) => 
                                <Link href={`/product/${product.acf.front_name.toLocaleLowerCase()}-${el}`} key={i} className={`flex flex-col items-center  `}>
                                    <div className={`w-9 h-9 rounded-[50%] block border border-[#ccc] ${el} ${el === product.acf.colors && 'border-4  border-[#ff0000]'}`}></div>
                                    <span className={`capitalize text-xs md:text-[14px] mt-1 `}>{el}</span>
                                </Link>
                            )}
                        
                    
                        </div>
                        </>)
                    }
                   
                </div>
                {product.acf.front_name !== "Коробка помічниця" && <div className="text-sm mb-8 capitalize pl-4 md:pl-0 font-semibold hidden md:block">Колір - {product.acf.colors}</div> }
                {product.acf.front_name !== "Коробка помічниця" && <div className="text-main leading-6 text-base mb-3">Є екологічно чистим покриттям. Має європейський сертифікат стандарту якості. </div>}
                
                <ReadMore>{product.acf.description}</ReadMore>
                
                    {product.acf.front_name === "Коробка помічниця" && 
                       ( <button className="w-[250px] rounded-[60px] block m-auto md:ml-0 mt-6 text-white p-4 bg-[#ff0000] text-sm font-semibold hover:opacity-70"
                        onClick={()=>{setBox(true);  toast.success("Товар додано в корзину!", {icon: '✅'}) }}
                        >Замовити бокс</button>)
                    }
                {product.acf.front_name !== "Коробка помічниця" && 
                    (<>
                    
               

                        <div className="flex items-start md:items-start py-2 justify-center md:justify-between flex-c md:flex-row gap-4">
                            <div className="flex-col ">
                            <p className="text-main text-[30px] relative whitespace-nowrap">{product.acf.price} <span className='relative text-[20px] top-0 -left-1'> грн/m2</span></p>
                            {product.acf.old_price && <p className="text-[#858585] text-xl line-through font-medium relative -top-2 ml-3">{product.acf.old_price} грн </p>}
                            </div>
                           
                            <div>
                                <p className="font-bold pb-3 pl-4 md:pl-6 leading-4">Головне ви нічим не ризикуєте</p>
                                <SectionTitle  redText={'гроші заброньовані на 7 днів. '} className="pb-0 mt-0 md:pb-1 text-xs"/>
                                <SectionTitle  redText={'без зміни ціни за м2'} className="pb-0 mt-0 md:pb-1 text-xs"/>
                                <SectionTitle  redText={'без додаткових нарахувань'} className="pb-0 mt-0 md:pb-1 text-xs"/>
                                <SectionTitle  redText={'з можливістю повернення 100% сумми'} className="pb-0 mt-0 md:pb-1 text-xs"/>
                            </div>
                        </div>
                            <div className="flex items-center md:items-end gap-6 flex-col md:flex-row">
                            <div className="relative w-full flex-wrap">
                                {isError && <p className="text-xs text-[#ff0000] w-full">УВАГА! Ваш запит меньший за стандарт, і потребує індивідуального прорахунку. Радимо зателефонувати або написати або ми самі зв’яжемося з Вами
                                    </p>}
                                    <p className="mn-0 text-[#373C45] text-sm font-medium pl-3 md:pl-0">Кількість м2 <Link href="/instruktsiia" className="text-[#ff0000] font-semibold block md:inline">(інструкція)</Link> </p>
                                <div className="flex gap-2 w-full">
                               
                                    <input 
                                        type="number" 
                                        min={1}
                                        placeholder="5m" 
                                        className="flex-1 text-[#9A9FA8] outline-none py-3 pl-2 border border-[#D9DADD] placeholder:text-[#9A9FA8] text-base rounded-xl w-[90px] md:w-auto" 
                                        value={square} 
                                        onChange={(e)=>{setSquare(e.target.value); if(Number(e.target.value) < 5){setIsError(true)}else{setIsError(false)} }}
                                    />

                                    <button 
                                        className="w-[250px] rounded-[60px] text-white p-4 bg-[#ff0000] text-sm font-semibold hover:opacity-70"
                                        onClick={addToCartHandler}
                                        >Розрахувати вартість 
                                    </button>
                                </div>
                               
                                    
                            </div>
                            
                        </div>
                    </>)
                }
                
            </div>
      </div>
      {product.acf.front_name === "Коробка помічниця" && <div className="h-16"></div> }


{product.acf.front_name !== "Коробка помічниця" &&
    (<>
        <h2 className="max-w-[1144px] w-full m-auto text-2xl md:text-4xl mt-10 font-medium pl-1">Наші рекомендаціі</h2>

        <SectionTitle redText='Ідеально підходить для наступних приміщень' className="mt-5 md:mt-14" />
      
      <div className='max-w-[1144px] w-full m-auto flex flex-wrap justify-center gap-8 md:gap-[55px] mb-1 md:mb-[55px] px-3 md:px-0 pb-12 ' >
        {type_flats?.map((el:IImageObj, i: number) => 
         ( <Link href="/quiz" key={i}  className='block w-[80px] h-[80px] relative  md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
          <Image src={el.image}  fill alt="quickdecor" className='rounded-[10px] object-cover' />
          <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>{el.name}</p>
          </Link>)
        )}
      </div>

      
      <SectionTitle redText='Підходить для таких поверхонь' className="mt-2" />
      
      <div className='max-w-[1144px] w-full m-auto flex flex-wrap justify-center gap-8 md:gap-[55px] mb-1 md:mb-[55px] px-3 md:px-0 pb-12 ' >
      
        {serf_area?.map((el:IImageObj, i: number) => 
         ( <Link href="/quiz" key={i}  className='block w-[80px] h-[80px] relative  md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
          <Image src={el.image} fill alt="quickdecor" className='rounded-[10px] object-cover' />
          <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>{el.name}</p>
          </Link>)
        )}
        
      </div>


      <SectionTitle redText='Необхідна підготовка поверхонь' className="mt-2" />
      
      <div className='max-w-[1144px] w-full m-auto flex flex-wrap justify-center gap-8 md:gap-[55px] mb-1 md:mb-[55px] px-3 md:px-0 pb-12' >
  
      {prepare?.map((el:IImageObj, i: number) => 
         ( <Link href="/quiz" key={i}  className='block w-[80px] h-[80px] relative  md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
          <Image src={el.image} fill alt="quickdecor" className='rounded-[10px] object-cover' />
          <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>{el.name}</p>
          </Link>)
        )}  
      </div>


      <SectionTitle redText='Має такі властивості' className="mt-2" />
      
      <div className='max-w-[1144px] w-full m-auto flex flex-wrap justify-center gap-8 md:gap-[55px] mb-1 md:mb-[55px] px-3 md:px-0 pb-12' >
          
      {usefull?.map((el:IImageObj, i: number) => 
         ( <Link href="/quiz" key={i}  className='block w-[80px] h-[80px] relative  md:w-[133px] md:h-[133px] text-center hover:opacity-75 transition-all mt-6'>
          <Image src={el.image}  fill   alt="quickdecor" className='rounded-[10px] object-cover' />
          <p className='text-black mt-[84px] md:mt-[135px] text-xs md:text-xl font-medium'>{el.name}</p>
          </Link>)
        )}
          
      </div>

      <h2 className={cn('text-[28px] md:text-[46px] leading-9 md:leading-[64px] w-full  text-center')}>Не впевненні у виборі?</h2> 
      <p className={cn('text-[14px] md:text-[18px] leading-5 md:leading-[26px] w-full  text-center px-2 pt-3')}>Скористайтеся нашим фільтром помічником. <br /> В залежності від обраних вами параметрів, ми порекомендуємо найкращий ефект за допомогою системи балів.</p>
      <div className='w-full text-center mb-16 mt-14'><RedButton linkText='Обрати ефект через фільтр' text='Обрати ефект через фільтр' href='/quiz' className='px-8' /></div>
      </>)
}

      <PickEffect />
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