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
   clear: () => void
   removeItem: (id: number, price: string, square: number, uid: string) => void
   addSquare: (uid: string) => void
   minusSquare: (uid: string) => void
   setupSquare: (id: string, val: number) => void
   setTypeFlat:(val: string) => void
   setResultTotal: () => void
   discountTotal: ( selfDelivery: boolean,) => void
   discountFotoTotal: ( fotoPermit: boolean,) => void


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
          const updateTotal = newItems.reduce((acc, current) => acc + (current.square * parseInt(current.price)), 0)
          set({
            cartItems: newItems,
            total: updateTotal,
            resultTotal: updateTotal
          })
        },
        clear: () => {
          set({
            cartItems: [],
            total: 0,
            resultTotal: 0,
            selfDelivery: false,
            fotoPermition: false
          })
        },
        addSquare: (uid ) => {
          const exsistItem = get().cartItems.find(obj => obj.uid === uid)
          if(exsistItem){
           exsistItem.square++
          }
          const updateTotal = get().cartItems.reduce((acc, current) => acc + (current.square * parseInt(current.price)), 0)
          set({
            cartItems: [...get().cartItems],
            total: updateTotal,
            resultTotal: updateTotal

          })
        },
        setupSquare: (uid, val) => {
          const exsistItem = get().cartItems.find(obj => obj.uid === uid)

          if(exsistItem){
            exsistItem.square = val
          }
          const updateTotal = get().cartItems.reduce((acc, current) => acc + (current.square * parseInt(current.price)), 0)
          set({
            cartItems: [...get().cartItems],
            total: updateTotal,
            resultTotal: updateTotal

          })
        },
        
        minusSquare: (uid, ) => {
          const exsistItem = get().cartItems.find(obj => obj.uid === uid)
          if(exsistItem){
            exsistItem.square--

          }
          const updateTotal = get().cartItems.reduce((acc, current) => acc + (current.square * parseInt(current.price)), 0)
          set({
            cartItems: [...get().cartItems],
            total: updateTotal,
            resultTotal: updateTotal

          })
        },

        discountTotal: ( selfDelivery) => {
          if(selfDelivery === true) {
            set({selfDelivery: true})
            if(get().selfDelivery === true && get().fotoPermition === true){
              const priceResult = Math.floor(get().total* 0.82)
              set({resultTotal: priceResult})
            }else{
              const priceResult = Math.floor(get().total* 0.85)
              set({resultTotal: priceResult})
            }
          }else{
            set({selfDelivery: false})
            if(get().fotoPermition === true){
              const priceResult = Math.floor(get().total* 0.85)
              set({resultTotal: priceResult})
            }else{
              set({resultTotal: Math.floor(get().total* 0.88)})
            }
          }
          console.log(selfDelivery)
        },


        discountFotoTotal: ( fotoPermit) => {
          if(fotoPermit === true) {
            set({fotoPermition: true})
            if(get().fotoPermition === true && get().selfDelivery === true){
              const priceResult = Math.floor(get().total* 0.82)
              set({resultTotal: priceResult})
            }else{
              const priceResult = Math.floor(get().total* 0.85)
              set({resultTotal: priceResult})
            }
          }else{
            set({fotoPermition: false})
            if(get().selfDelivery === true){
              const priceResult = Math.floor(get().total* 0.85)
              set({resultTotal: priceResult})
            }else{
              set({resultTotal: Math.floor(get().total* 0.88)})
            }
          }

          console.log(fotoPermit)
        },
        setResultTotal: () => {
          const priceResult = Math.floor(get().total* 0.88)
          set({resultTotal: priceResult})
        }
     
      }
    ),
    {
      name: 'qdCart',
      version: 0.1,
      storage: createJSONStorage(()=> localStorage),
       partialize: (state) => ({cartItems: state.cartItems, total: state.total, resultTotal: state.resultTotal, typeFlat: state.typeFlat, selfDelivery: state.selfDelivery, fotoPermition: state.fotoPermition}),

    }
  )

)

