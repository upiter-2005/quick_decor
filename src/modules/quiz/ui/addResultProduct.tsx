'use client'
import {
    DialogContent,
    DialogHeader,
    DialogTitle
  } from "@/shared/ui/dialog"
  
  import {airLines, sandLines, microcementLines, travertinLines, quickLines } from "@/shared/consts/productsLines"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { QuizProductItem } from "./quizProductItem"
  
type QuizProduct = {
    uid: string,
    id: number,
    name: string,
    price: string,
    effect: string,
    square:  number,
    image: string
}
  interface IAddResultProduct{
    className?: string
    typeProduct: string
    typeFlat: string 
    closeModal: () => void
  }
  export const AddResultProduct:React.FC<IAddResultProduct> = ({typeProduct, className, typeFlat, closeModal}) => {

    const [productList, setProductList] = useState<QuizProduct[]>([]);

    useEffect(()=>{
        if(typeProduct === 'air'){
            setProductList(airLines)
        }
        if(typeProduct === 'sand'){
            setProductList(sandLines)
        }
        if(typeProduct === 'microcement'){
            setProductList(microcementLines)
        }
        if(typeProduct === 'travertine'){
            setProductList(travertinLines)
        }
        if(typeProduct === 'quick'){
            setProductList(quickLines)
        }
    }, [])

    return (
        <DialogContent className={cn('', className)}>
            <DialogHeader>
            <DialogTitle className="">Оберіть колір</DialogTitle>
                {productList.map((el, i) => <QuizProductItem key={i} product={el} typeFlat={typeFlat} closeModal={closeModal} />)}
            </DialogHeader>
            <div className="text-sm text-center text-[#ff0000] font-semibold">Не впевнені у виборі? Не переживайте, колір можна буде замінити до відвантаження замовлення, без зміни вартості!
                <br />
                Або додайте до замовлення наш бокс взірців для 100% точного вибору
            </div>
        </DialogContent>
    )
}