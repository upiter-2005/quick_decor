import { useCartStore } from "@/store/cartStore";
import { useEffect, useState } from "react";

export type paymenPPType = {
    name: string,
    count: number,
    price: number
}
export const useDiscountProducts = () => {
    const [products, setProducts] = useState<paymenPPType[]>([])
    const [totalPP, setTotalPP] = useState<number>(0)
    const {selfDelivery, fotoPermition, cartItems, box} = useCartStore()

    const countDiscount = (price: number) => {
        let priceResult = 0
         if(selfDelivery === true) {
            if(selfDelivery === true && fotoPermition === true){
               priceResult = Math.floor(price* 0.82)
            }else{
               priceResult = Math.floor(price* 0.85)
            }
          }else{
            if(fotoPermition === true){
               priceResult = Math.floor(price* 0.85)
            }else{
              priceResult = Math.floor(price* 0.88)
            }
          }

        return priceResult
    }

    const countTotalPP  = (arr: paymenPPType[]) =>{
        const total = arr.reduce((acc, current) => acc + (current.count * current.price), 0)
        setTotalPP(total)
    }

    useEffect(()=> {
        const discountArr = cartItems.map(el => {
            const countedPrice = countDiscount(parseInt(el.price))
            return {
                "name": el.name,
                "count": el.square,
                "price": countedPrice
            }
        })
        setProducts(discountArr)
        countTotalPP(discountArr)
 
    }, [selfDelivery, fotoPermition, cartItems, box])
    
    return { products, totalPP }
}