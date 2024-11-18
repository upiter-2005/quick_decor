

import { PickEffect } from '@/components/pickEffect'
import { EffectChose } from '@/components/effectChose'
import { Divider } from '@/shared/ui/divider'
import { DataBlock } from '@/components/dataBlock'
import f1 from "@/shared/assets/images/f1.jpg"
import { VideoImage } from '@/components/videoImage'
import a1 from "@/shared/assets/images/a1.jpg" 
import { ProductDataWidget } from '@/modules/productData'

// type Props = {
//   params: { id: string }
// }

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
  
// //   const response: IProduct[] =  await fetch(`${process.env.NEXT_API_HOST}/wp-json/wc/v3/products?slug=${params.id}&consumer_key=${process.env.NEXT_WC_CUSTOMER_KEY}&consumer_secret=${process.env.NEXT_WC_SECRET}`, 
// //     // {cache: 'no-store'}
// //     { next: { revalidate: 60 } }
// //   ).then(res => res.json())
  
//   return {
//     title: `Quick decor`,
//     description: `Quick decor`,
//     openGraph: {
//       title: 'Quick decor',
//       description: 'Quick decor',
//     //   images: [
//     //     {
//     //       url: response[0].images[0].src,
//     //       width: 800,
//     //       height: 600,
//     //     },
//     //   ],
//     },
//   }
// }



export default async function productPage() {
  //   console.log(params)
  // const response =  await fetch(`${process.env.NEXT_API_HOST}/wp-json/wc/v3/products?slug=${params.id}&consumer_key=${process.env.NEXT_WC_CUSTOMER_KEY}&consumer_secret=${process.env.NEXT_WC_SECRET}`, 
  //   // {cache: 'no-store'}
  //   { next: { revalidate: 60 } }
  // ).then(res => res.json())

  // console.log(response)
//   if(!response[0]){
//     notFound()
//   }

  return <>
      <ProductDataWidget />  
      <EffectChose />
      <PickEffect className='' />
      <VideoImage image={a1} />
      
      <Divider />
      <DataBlock title="Ще треба трохи інформації для вибору?" redTitle="Ferrara Paint TM" reverse={false} image={f1}>
        <p>Зовнішній вигляд: покриття має дуже делікатну текстуру, приглушений, заспокійливий перловий ефект. Підходить майже до всіх дизайнерських стилів в інтер’єрі. Особливо вдало виглядає у поєднанні із деревиною, металом, склом. Якщо Ви обрали саме це покриття – Ви 100% зробили кращий вибір. Будьте впевнені, воно Вам сподобається та доречно поєднається з іншими предметами інтер’єру.</p>
        <p><strong>1. </strong>Працюємо із цією продукцією більше 10 років, та ніколи не мали проблем з якістю. (Більше 10 років на ринку)</p>
        <p><strong>2. </strong>Засновники та розробники продукції Ferrara Paint та Simpletone TM багато уваги приділяють екологічності та безпечності своєї продукції. Відмітимо, що покриття не виділяють в повітря шкідливі речовини та є  безпечними для людей та тварин протягом всього терміну використання покриття.(Не виділяють в повітря шкідливі речовини протягом всього терміну використання покриття.)</p>
        <p><strong>3.</strong> Ferrara Paint та Simpletone TM - єдина українська продукція, що має якість, підтверджену Європейським Національним Інстітутом Гігієни, та вже 2-й рік має дочірнє підприємство на території країни Європейського союзу. Поменять местами с 3(Якість підтверджено сертифікацію Європейським Національним Інститутом Гігієни)</p>
        <p><strong>4. </strong>Всі покриття допомагають досягти трендових візуальних ефектів без компромісів, щодо практичності та довговічності.(Трендові візуальні ефекти без компромісів, щодо практичності та довговічності. )</p>
        <p><strong>5.</strong> Всі майстри – декоратори команди QuickDecor пройшли навчання з роботи продукцією Ferrara Paint та Simpletone TM в головному офісі компанії - виробника «Феррара Групп» під контролем Головного Технолога.</p>
      </DataBlock>
    </>
}
