import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface ICartItem {
  uid: string
  id: number
  name: string
  price: string
  effect?: string
  square: number
  image: string
  type: string
}

interface CartState {
  cartItems: ICartItem[]
  total: number
  resultTotal: number
  typeFlat: string
  selfDelivery: boolean
  fotoPermition: boolean
  // openCart: boolean
  // setOpen: (val: boolean) => void 
   addCartItem: (item: ICartItem) => void
   removeItem: (id: number, price: string, square: number, uid: string) => void
   addSquare: (id: number,type: string) => void
   minusSquare: (id: number, type: string) => void
   setupSquare: (id: number, val: number, type: string) => void
   setTypeFlat:(val: string) => void
   discountTotal: ( selfDelivery: boolean,) => void


  // clearCart: () => void
 
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => (
      {
        cartItems: [],
        total: 0,
        selfDelivery: false,
        fotoPermition: false,
        typeFlat: '',
        resultTotal: 0,
        setTypeFlat: (val: string) => {
          set({typeFlat: val})
        },
        addCartItem: (item) => {
          // const existItem = get().cartItems.find((el:ICartItem) => el.id === item.id)
          // if(existItem){
          //   existItem.square += item.square
          //   set({
          //     cartItems: [...get().cartItems],
          //     total: get().total + parseInt(item.price) * item.square,
          //     typeFlat: ''
          //   })
          //   }else{
                set({
                  cartItems: [ ...get().cartItems, {...item} ],
                  total: get().total + (parseInt(item.price) * item.square),
                  typeFlat: ''
            })
          //}

        },

        removeItem: (id, price, square, uid) => {
          const newItems = get().cartItems.filter((el:ICartItem) => el.uid !== uid)
          set({
            cartItems: newItems,
            total: get().total - (parseInt(price) * square)
          })
        },
        addSquare: (id ,type) => {
          const exsistItem = get().cartItems.find(obj => obj.id === id)
          if(exsistItem){
            const filtered = get().cartItems.find(obj => obj.type === type)
            if(filtered) filtered.square++
            

          }
          const updateTotal = get().cartItems.reduce((acc, current) => acc + (current.square * parseInt(current.price)), 0)
          set({
            cartItems: [...get().cartItems],
            total: updateTotal

          })
        },
        setupSquare: (id, val, type) => {
          const exsistItem = get().cartItems.find(obj => obj.id === id)

          if(exsistItem){
            const filtered = get().cartItems.find(obj => obj.type === type)
            if(filtered) filtered.square = val

          }
          const updateTotal = get().cartItems.reduce((acc, current) => acc + (current.square * parseInt(current.price)), 0)
          set({
            cartItems: [...get().cartItems],
            total: updateTotal

          })
        },
        minusSquare: (id, type) => {
          const exsistItem = get().cartItems.find(obj => obj.id === id)
          if(exsistItem){
            const filtered = get().cartItems.find(obj => obj.type === type)
            if(filtered) filtered.square--

          }
          const updateTotal = get().cartItems.reduce((acc, current) => acc + (current.square * parseInt(current.price)), 0)
          set({
            cartItems: [...get().cartItems],
            total: updateTotal

          })
        },
        discountTotal: ( selfDelivery) => {
         
          const discountSum = get().total - Math.ceil(get().total* 0.97)
          console.log(discountSum)
          if(selfDelivery){
            const priceResult = get().total - discountSum
            set({total: priceResult})
          }else{
            const priceResult = get().total + discountSum
            set({total: priceResult})
          }
          

          console.log(selfDelivery)
        },
        // discountFotoTotal: ( fotoPermition) => {
        //   const coef = (100 - 3) / 100
        //   const priceResult = get().total -  (get().total * coef)
        //   set({resultTotal: priceResult})

        //   console.log(selfDelivery)
        // },
     
      }
    ),
    {
      name: 'qdCart',
      version: 0.1,
      storage: createJSONStorage(()=> localStorage),
       partialize: (state) => ({cartItems: state.cartItems, total: state.total, resultTotal: state.resultTotal, typeFlat: state.typeFlat}),

    }
  )

)

