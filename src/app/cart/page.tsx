import { CartWrapperWrapper } from "@/modules/cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Калькулятор вартості декоративної штукатурки – розрахуйте онлайн",
  description: "Швидкий розрахунок вартості декоративної штукатурки. Вкажіть параметри поверхні та отримайте точну ціну за кілька секунд.",
  openGraph: {
    title: 'Калькулятор вартості декоративної штукатурки – розрахуйте онлайн',
    description: "Швидкий розрахунок вартості декоративної штукатурки. Вкажіть параметри поверхні та отримайте точну ціну за кілька секунд.",
    // images: [
    //   {
    //     url: response[0].images[0].src,
    //     width: 800,
    //     height: 600,
    //   },
    // ],
  },

}

export default function CartPage() {
  return (
    <>
        <CartWrapperWrapper />
    </>
  
  );
}
