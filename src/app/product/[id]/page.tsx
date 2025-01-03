import { Divider } from '@/shared/ui/divider'

import { ProductDataWidget } from '@/modules/productData'
import { notFound } from 'next/navigation'
// import { getProductImages } from '@/shared/helpers/getProductImages'
import { getVariations } from '@/shared/helpers/getVariations'
// import { getPropsImages } from '@/shared/helpers/getPropsImages'

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
// interface IImageObj {
//   image: string,
//   name: string
// }


type Params = Promise<{ id: string }>
export const dynamic = 'force-dynamic'

export default async function ProductPage(props: { params: Params }) {
  const params = await props.params
  const response =  await fetch(`https://api.quickdecor.com.ua/wp-json/wp/v2/posts?per_page=50&slug=${params.id}&_fields=acf&acf_format=standard`, 
    // {cache: 'no-store'}
    { next: { revalidate: 60 } }
  ).then(res => res.json())

  if(!response[0]){
    notFound()
  }
  
  const variations = getVariations(response[0].acf.variations)

  return <>
      <ProductDataWidget product={response[0]} variations={variations}  />  
      <Divider />
    </>
}
