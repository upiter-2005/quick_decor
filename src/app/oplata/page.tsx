/* eslint-disable @typescript-eslint/no-explicit-any */

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Умови оплати та доставки замовлення ",
    description: "Сплачуйте ваше замовлення онлайн на сайті. Оплата по рахунку чи оплатою частинами на 3 платежі віж ПриватБанку. Доставка Новою Поштою по всій Україні",
    openGraph: {
      title: 'Умови оплати та доставки замовлення ',
      description: "Сплачуйте ваше замовлення онлайн на сайті. Оплата по рахунку чи оплатою частинами на 3 платежі віж ПриватБанку. Доставка Новою Поштою по всій Україні",
      // images: [
      //   {
      //     url: response[0].images[0].src,
      //     width: 800,
      //     height: 600,
      //   },
      // ],
    },
  
  }
  
export default async function Oplata () {
    const response: any =  await fetch(`https://api.quickdecor.com.ua/wp-json/wp/v2/pages/531`,
        { next: { revalidate: 60 } }
      ).then(res => res.json())
    return(
        <>
            <h1 className="text-3xl text-center font-semibold mt-12">{response.title.rendered}</h1>
            <div className="text-sm max-w-[1100px] w-full m-auto py-10 servBlock px-2" dangerouslySetInnerHTML={{__html: response.content.rendered}}></div>
        </>
        
    )
}