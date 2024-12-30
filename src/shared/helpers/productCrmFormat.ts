import { ICartItem } from "@/store/cartStore"

export type checkoutProductsType = {
    sku: string, 
    quantity: number, 
    price: number,
    unit_type: string,
    name: string,
    picture: string
}

export const checkoutProducts = (cartItems: ICartItem[]) => {

    const productsArr: checkoutProductsType[] = []
    cartItems.forEach((obj: ICartItem) => {
      const {uid, square, price, name, image} = obj;
           productsArr.push({
            "sku": uid, 
            "quantity": square, 
            "price": parseInt(price),
            "unit_type": "m",
            "name": name,
            "picture": image
         })
    });
  
    return productsArr
  }