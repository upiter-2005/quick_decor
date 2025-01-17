import { Divider } from '@/shared/ui/divider'

import { ProductDataWidget } from '@/modules/productData'
import { notFound } from 'next/navigation'
// import { getProductImages } from '@/shared/helpers/getProductImages'
import { getVariations } from '@/shared/helpers/getVariations'
import type { Metadata } from 'next'
import { IProduct } from '@/modules/productData/types/types'


type Params = Promise<{ id: string }>
export const dynamic = 'force-dynamic'


// type Props = {
//   params: { id: string }
// }
type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata( 
  { params, 

  }: Props
  ): Promise<Metadata> {
    const id = (await params).id
  const response: IProduct[] = await fetch(`https://api.quickdecor.com.ua/wp-json/wp/v2/posts?per_page=50&slug=${id}`, 
    { next: { revalidate: 60 } }
  ).then(res => res.json())
  
  console.log(response);
  return {
    title: `${response[0].acf.title_seo}`,
    description: ` ${response[0].acf.descript_seo}`,
    openGraph: {
      title: response[0].acf.title_seo,
      description: response[0].acf.descript_seo,
      // images: [
      //   {
      //     url: response[0].images[0].src,
      //     width: 800,
      //     height: 600,
      //   },
      // ],
    },
  }
}




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
