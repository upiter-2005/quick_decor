import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface ICartItem {
  id: number
  name: string
  price: string
  effect?: string
  square: number
  image: string
}

interface CartState {
  cartItems: ICartItem[]
  total: number,
  // openCart: boolean
  // setOpen: (val: boolean) => void 
   addCartItem: (item: ICartItem) => void
   removeItem: (id: number, price: string, square: number) => void
   addSquare: (id: number) => void
   minusSquare: (id: number) => void
  // increaseFromCart: (id: number) => void
  // decreaseFromCart: (id: number) => void
  // clearCart: () => void
 
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => (
      {
        cartItems: [],
        total: 0,
        //openCart: false,
        //setOpen: (val) => {set({openCart: val})},
        addCartItem: (item) => {
          const existItem = get().cartItems.find((el:ICartItem) => el.id === item.id)
          if(existItem){
            existItem.square += item.square
            set({
              cartItems: [...get().cartItems],
              total: get().total + parseInt(item.price) * item.square
            })
            }else{
                set({
                  cartItems: [ ...get().cartItems, {...item} ],
                  total: get().total + (parseInt(item.price) * item.square)
            })
          }

        },

        removeItem: (id, price, square) => {
          const newItems = get().cartItems.filter((el:ICartItem) => el.id !== id)
          set({
            cartItems: newItems,
            total: get().total - (parseInt(price) * square)
          })
        },
        addSquare: (id) => {
          const exsistItem = get().cartItems.find(obj => obj.id === id)
          if(exsistItem){
            exsistItem.square++

          }
          const updateTotal = get().cartItems.reduce((acc, current) => acc + (current.square * parseInt(current.price)), 0)
          set({
            cartItems: [...get().cartItems],
            total: updateTotal

          })
        },
        minusSquare: (id) => {
          const exsistItem = get().cartItems.find(obj => obj.id === id)
          if(exsistItem){
            exsistItem.square--

          }
          const updateTotal = get().cartItems.reduce((acc, current) => acc + (current.square * parseInt(current.price)), 0)
          set({
            cartItems: [...get().cartItems],
            total: updateTotal

          })
        },
        // removeItem: (id) => {
        //   const existItem = get().cartItems.filter((el:ICartItem) => el.id === id)
        //   if(existItem){
        //     const updateItems = get().cartItems.filter(el => el.id !== id)
        //     const updateTotal = updateItems.reduce((acc, current) => acc + (current.quantity * current.price), 0)
        //     set({cartItems: updateItems, total: updateTotal})
        //   }
        // },

        // increaseFromCart: (id) => {
        //   const existItem = get().cartItems.find((el:ICartItem) => el.id === id)
        //   if(existItem) {
        //     existItem.quantity++
        //   }
        //   const updateTotal = get().cartItems.reduce((acc, current) => acc + (current.quantity * current.price), 0)
        //   set({cartItems: [...get().cartItems], total: updateTotal})
        // },

        // decreaseFromCart: (id) => {
        //   const existItem = get().cartItems.find((el:ICartItem) => el.id === id)
        //   if(existItem) {
        //     if(existItem.quantity === 1){
        //       const updatedItems = get().cartItems.filter((el:ICartItem) => el.id !== id)
        //       const updateTotal = updatedItems.reduce((acc, current) => acc + (current.quantity * current.price), 0)
        //       set({
        //         cartItems: updatedItems,
        //         total: updateTotal
        //       })
        //     }else{
        //       existItem.quantity--
        //       const updateTotal = get().cartItems.reduce((acc, current) => acc + (current.quantity * current.price), 0)
        //       set({cartItems: [...get().cartItems], total: updateTotal})
        //     }
        //   }
        // },
        // clearCart: () => {
        //   set({cartItems: [], total: 0})
        // },
     
      }
    ),
    {
      name: 'qdCart',
      version: 0.1,
      storage: createJSONStorage(()=> localStorage),
       partialize: (state) => ({cartItems: state.cartItems, total: state.total}),

    }
  )

)

