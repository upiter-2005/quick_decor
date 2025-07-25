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
  box: boolean
  dayPersentCoef: string
  showLiqPay: boolean
  modalCart: boolean
  setShowLiqPay: (val: boolean) => void
  setBox: (val: boolean) => void
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
   setModalCart: ( fotoPermit: boolean,) => void


  // clearCart: () => void
 
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => (
      {
        cartItems: [],
        total: 0,
        showLiqPay: false,
        selfDelivery: false,
        fotoPermition: false,
        typeFlat: '',
        dayPersentCoef: '',
        resultTotal: 0,
        box: false,
        modalCart: false,
        setTypeFlat: (val: string) => {
          set({typeFlat: val})
        },
        setBox: (val) => {
          set({box: val})
        },
        setModalCart: (val) => {
          set({modalCart: val})
        },
        setShowLiqPay: (val) => {
          set({showLiqPay: val})
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

        discountTotal: async ( selfDelivery) => {
          try{
          const resp = await fetch(`https://api.quickdecor.com.ua/wp-json/wp/v2/posts?slug=persent`, 
            { next: { revalidate: 60 } }
          ).then(res => res.json())

          set({dayPersentCoef: resp[0].acf.persent})
          console.log(resp[0].acf.persent)
          const dayPersent = resp[0].acf.persent / 100
          console.log(dayPersent)

            if(selfDelivery === true) {
              set({selfDelivery: true})
              if(get().selfDelivery === true && get().fotoPermition === true){
                const priceResult = Math.floor(get().total* (0.94 - dayPersent))
                set({resultTotal: priceResult})
              }else{
                const priceResult = Math.floor(get().total* (0.97 - dayPersent))
                set({resultTotal: priceResult})
              }
            }else{
              set({selfDelivery: false})
              if(get().fotoPermition === true){
                const priceResult = Math.floor(get().total* (0.97 - dayPersent))
                set({resultTotal: priceResult})
              }else{
                set({resultTotal: Math.floor(get().total* (1 - dayPersent))})
              }
            }
          }catch(e){
            console.log(e);
          }
       
        },


        discountFotoTotal: async ( fotoPermit) => {

          try{
            const resp = await fetch(`https://api.quickdecor.com.ua/wp-json/wp/v2/posts?slug=persent`, 
              { next: { revalidate: 60 } }
            ).then(res => res.json())
  
            set({dayPersentCoef: resp[0].acf.persent})
            console.log(resp[0].acf.persent)
            const dayPersent = resp[0].acf.persent / 100
            console.log(dayPersent)

            if(fotoPermit === true) {
              set({fotoPermition: true})
              if(get().fotoPermition === true && get().selfDelivery === true){
                const priceResult = Math.floor(get().total* (0.94 - dayPersent))
                set({resultTotal: priceResult})
              }else{
                const priceResult = Math.floor(get().total* (0.97 - dayPersent))
                set({resultTotal: priceResult})
              }
            }else{
              set({fotoPermition: false})
              if(get().selfDelivery === true){
                const priceResult = Math.floor(get().total* (0.97 - dayPersent))
                set({resultTotal: priceResult})
              }else{
                set({resultTotal: Math.floor(get().total*  (1 - dayPersent))})
              }
            }

          }catch(e){console.log(e)}

          
        },


        setResultTotal: async () => {

          try{
            const resp = await fetch(`https://api.quickdecor.com.ua/wp-json/wp/v2/posts?slug=persent`, 
              { next: { revalidate: 60 } }
            ).then(res => res.json())
  
            set({dayPersentCoef: resp[0].acf.persent})
            console.log(resp[0].acf.persent)
            const dayPersent = resp[0].acf.persent / 100
            console.log(dayPersent)

            const priceResult = Math.floor(get().total *  dayPersent)
            set({resultTotal: priceResult})
            if(get().fotoPermition === true) {
              if(get().fotoPermition === true && get().selfDelivery === true){
                const priceResult = Math.floor(get().total* (0.94 - dayPersent))
                set({resultTotal: priceResult})
              }else{
                const priceResult = Math.floor(get().total* (0.97 - dayPersent))
                set({resultTotal: priceResult})
              }    
            }else{
              if(get().selfDelivery === true){
                const priceResult = Math.floor(get().total* (0.97 - dayPersent))
                set({resultTotal: priceResult})
              }else{
                set({resultTotal: Math.floor(get().total*  (1 - dayPersent))})
              }
            }
          }catch(e){console.log(e);}
          
        }
     
      }
    ),

    
    {
      name: 'qdCart',
      version: 0.7,
      storage: createJSONStorage(()=> localStorage),
       partialize: (state) => ({cartItems: state.cartItems, total: state.total, resultTotal: state.resultTotal, typeFlat: state.typeFlat, selfDelivery: state.selfDelivery, fotoPermition: state.fotoPermition, box: state.box, showLiqPay: state.showLiqPay}),

    }
  )

)

