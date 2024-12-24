import { useCartStore } from "@/store/cartStore"
import Image from "next/image"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

type IQuizProduct = {
    uid: string,
    id: number,
    name: string,
    price: string,
    effect: string,
    square:  number,
    image: string
}

interface IquizProductItem{
    product : IQuizProduct
    typeFlat: string
}
export const QuizProductItem:React.FC<IquizProductItem> = ({product, typeFlat}) => {
    const [type, setType] = useState<string>('');
    
  const {addCartItem} = useCartStore()
    const addToCartQuiz = () => {
        addCartItem({
            uid: new Date().getTime().toString() + 21,
            id: product.id,
            name: product.name,
            price: product.price,
            effect: product.effect,
            square: 5,
            image: product.image,
            type: type
        })
        toast.success("Товар додано в корзину!", {icon: '✅'})
    }

    useEffect(()=> {
        setType(typeFlat)
    }, [])
    return (
        <div className="flex w-full items-center justify-between bg-[#eee] p-3 rounded-[4px]">
            <div className="flex gap-4 items-center">
                <Image src={product.image} width={50} height={50} alt='quickdecor' className="rounded-[4px]" />
                <span className="text-sm flex-1 text-left"> {product.name}</span>
                <span className="font-bold text-sm whitespace-nowrap pr-3"> {product.price} грн</span>
              
            </div>
            
            <button onClick={addToCartQuiz} className="bg-[#ff0000] rounded-xl px-2 text-white font-700 text-sm w-[85px]">В кошик</button>
        </div>
    )
}