import { CheckoutWidget } from "@/modules/checkout";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Ваш кошик – декоративна штукатурка та аксесуари",
  description: "Перегляньте вибрані товари у кошику. Завершуйте замовлення швидко та зручно. Якісна декоративна штукатурка вже чекає на вас!",
  openGraph: {
    title: 'Ваш кошик – декоративна штукатурка та аксесуари',
    description: "Перегляньте вибрані товари у кошику. Завершуйте замовлення швидко та зручно. Якісна декоративна штукатурка вже чекає на вас!",
    // images: [
    //   {
    //     url: response[0].images[0].src,
    //     width: 800,
    //     height: 600,
    //   },
    // ],
  },

}

export default function CheckoutPage() {
  return   <CheckoutWidget />
}
