/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICartItem } from "@/store/cartStore";


export const checkoutProductsGtag = (cartItems: ICartItem[]) => {

  const productsArr: any = []
  cartItems.forEach((obj: ICartItem) => {

    const {id, name, square, price} = obj;
         productsArr.push({item_id: id,item_name: name, quantity: square, price })
  });

  return productsArr
}