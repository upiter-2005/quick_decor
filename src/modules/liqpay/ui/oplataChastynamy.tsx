'use client'

import { useEffect, useState } from "react"

import crypto from 'crypto'
import { createPartPaymaent } from "@/lib/actions"

import { useDiscountProducts } from "../hooks/useDiscountProducts"
import { createProductString } from "../helpers/createProductString"
import Link from "next/link"

interface OplataChastynamy {
    orderId: string
}


export const OplataChastynamy:React.FC<OplataChastynamy> = ({ orderId }) => {

    const [link, setLink] = useState<string>('');
    
    const {products, totalPP} = useDiscountProducts()
    console.log(products, totalPP)
   // const router = useRouter()
  

    const products_string = createProductString(products)
    console.log(products_string);
    console.log(totalPP);
        const createPayment = async() => {
        const password = process.env.NEXT_PUBLIC_STORE_PASS
        //const amountData = withoutFloatingPoint(amount)
        if(password){
            const signature = password + process.env.NEXT_PUBLIC_STORE_ID + orderId + totalPP * 100 + 4 +  "PP" + "" + "" + products_string + password 
            const sha1 = crypto.createHash('sha1')
            sha1.update(signature)
            const signatureData = sha1.digest('base64')
            console.log(signatureData);

            const data = {
                orderId,
                partsCount: 4, 
                amount: totalPP,
                products,
                storeId: process.env.NEXT_PUBLIC_STORE_ID,
                recipientId: process.env.NEXT_PUBLIC_RECEPIENT_ID,
                signature: signatureData
            }
             console.log(data);
            const res = await createPartPaymaent(data)
            console.log(res)
            setLink(`https://payparts2.privatbank.ua/ipp/v2/payment?token=${res.token}`)

        } 
    }
      
    useEffect(()=> {
        createPayment()
    }, [totalPP])

 
    return (
        <Link href={link} className="block text-center w-full max-w-[500px]  bg-[#7ab72b] text-white px-2 py-3 rounded-[26px] mt-5 font-bold hover:opacity-55 transition-all">Оплата частинами</Link>
    )
}