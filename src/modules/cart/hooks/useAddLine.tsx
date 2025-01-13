import { useCartStore } from "@/store/cartStore"
import toast from "react-hot-toast"


 
export const useAddLine = () => {
    const {addCartItem, typeFlat} = useCartStore()

const addAir = () => {
    addCartItem({
        uid: new Date().getTime().toString() + 1,
        id: 21,
        name: 'Air White',
        price: '1800',
        effect: 'white',
        square: 5,
        image: "https://api.quickdecor.com.ua/wp-content/uploads/2024/11/air-white-w-13.jpg",
        type: typeFlat
    })
    addCartItem({
        uid: new Date().getTime().toString() + 2,
        id: 49,
        name: 'Air cream',
        price: '1800',
        effect: 'cream',
        square: 5,
        image: "https://api.quickdecor.com.ua/wp-content/uploads/2024/11/air-cream-3600.jpg",
        type: typeFlat
    })
    addCartItem({
        uid: new Date().getTime().toString() + 3,
        id: 46,
        name: 'Air platinum',
        price: '1800',
        effect: 'platinum',
        square: 5,
        image: "https://api.quickdecor.com.ua/wp-content/uploads/2024/11/air-platinum-06-11.jpg",
        type: typeFlat
    })
    addCartItem({
        uid: new Date().getTime().toString() + 4,
        id: 52,
        name: 'Air silver',
        price: '1800',
        effect: 'silver',
        square: 5,
        image: "https://api.quickdecor.com.ua/wp-content/uploads/2024/11/air-silver-10-80.jpg"
,
        type: typeFlat
    })
    addCartItem({
        uid: new Date().getTime().toString() + 5,
        id: 42,
        name: 'Air powdery',
        price: '1800',
        effect: 'powdery',
        square: 5,
        image: "https://api.quickdecor.com.ua/wp-content/uploads/2024/11/air-powdery.jpg"

,
        type: typeFlat
    })
    toast.success("Товар додано в корзину!", {icon: '✅', duration: 8000})
}


const addSand = () => {
    addCartItem({
        uid: new Date().getTime().toString() + 11,
        id: 64,
        name: 'Sand classic',
        price: '1500',
        effect: 'classic',
        square: 5,
        image: "https://api.quickdecor.com.ua/wp-content/uploads/2024/11/sand-classic1.png",
        type: typeFlat
    })
    addCartItem({
        uid: new Date().getTime().toString() + 12,
        id: 61,
        name: 'Sand dark-gray',
        price: '1500',
        effect: 'dark-gray',
        square: 5,
        image: "https://api.quickdecor.com.ua/wp-content/uploads/2024/11/sand-dark-gray1.jpg",
        type: typeFlat
    })
    addCartItem({
        uid: new Date().getTime().toString() + 13,
        id: 58,
        name: 'Sand dune',
        price: '1500',
        effect: 'dune',
        square: 5,
        image: "https://api.quickdecor.com.ua/wp-content/uploads/2024/11/sand-dune-1.png",
        type: typeFlat
    })
  
    addCartItem({
        uid: new Date().getTime().toString() + 14,
        id: 55,
        name: 'Sand cool',
        price: '1500',
        effect: 'cool',
        square: 5,
        image: "https://api.quickdecor.com.ua/wp-content/uploads/2024/11/sand-cool-2.png",
        type: typeFlat
    })
    toast.success("Товар додано в корзину!", {icon: '✅'})
}


const addMicrocement = () => {
    addCartItem({
        uid: new Date().getTime().toString() + 21,
        id: 83,
        name: 'Microcemente grey',
        price: '1800',
        effect: 'grey',
        square: 5,
        image: "https://api.quickdecor.com.ua/wp-content/uploads/2024/11/mc-gray-11702.jpg",
        type: typeFlat
    })
    addCartItem({
        uid: new Date().getTime().toString() + 22,
        id: 83,
        name: 'Microcemente naturale',
        price: '1800',
        effect: 'naturale',
        square: 5,
        image: "https://api.quickdecor.com.ua/wp-content/uploads/2024/11/mc-gray-11702.jpg",
        type: typeFlat
    })
    addCartItem({
        uid: new Date().getTime().toString() + 23,
        id: 77,
        name: 'Microcemente cashmere',
        price: '1800',
        effect: 'cashmere',
        square: 5,
        image: "https://api.quickdecor.com.ua/wp-content/uploads/2024/11/cashmere-11101.jpg",
        type: typeFlat
    })
  
    addCartItem({
        uid: new Date().getTime().toString() + 24,
        id: 73,
        name: 'Microcemente ash',
        price: '1800',
        effect: 'ash',
        square: 5,
        image: "https://api.quickdecor.com.ua/wp-content/uploads/2024/11/mc-ash-118-01.jpg",
        type: typeFlat
    })
    toast.success("Товар додано в корзину!", {icon: '✅'})
}


const addTravertin = () => {
    addCartItem({
        uid: new Date().getTime().toString() + 51,
        id: 102,
        name: 'Travertine fog',
        price: '1800',
        effect: 'fog',
        square: 5,
        image: "https://api.quickdecor.com.ua/wp-content/uploads/2024/11/fog0.png",
        type: typeFlat
    })
    addCartItem({
        uid: new Date().getTime().toString() + 52,
        id: 99,
        name: 'Travertine smoke',
        price: '1800',
        effect: 'smoke',
        square: 5,
        image: "https://api.quickdecor.com.ua/wp-content/uploads/2024/11/smoke0.png",
        type: typeFlat
    })
    addCartItem({
        uid: new Date().getTime().toString() + 53,
        id: 96,
        name: 'Travertine beige',
        price: '1800',
        effect: 'beige',
        square: 5,
        image: "https://api.quickdecor.com.ua/wp-content/uploads/2024/11/beige-0.png",
        type: typeFlat
    })
  
    addCartItem({
        uid: new Date().getTime().toString() + 54,
        id: 91,
        name: 'Travertine sandstone',
        price: '1800',
        effect: 'sandstone',
        square: 5,
        image: "https://api.quickdecor.com.ua/wp-content/uploads/2024/11/sandstone1.webp",
        type: typeFlat
    })

    addCartItem({
        uid: new Date().getTime().toString() + 59,
        id: 86,
        name: 'Travertine naturale',
        price: '1800',
        effect: 'naturale',
        square: 5,
        image: "https://api.quickdecor.com.ua/wp-content/uploads/2024/11/naturale-0.jpg",
        type: typeFlat
    })
    toast.success("Товар додано в корзину!", {icon: '✅'})
}


const addQuick = () => {
    addCartItem({
        uid: new Date().getTime().toString() + 61,
        id: 102,
        name: 'Quick stone',
        price: '1400',
        effect: 'stone',
        square: 5,
        image: "https://api.quickdecor.com.ua/wp-content/uploads/2024/11/quick-stone-1.jpg",
        type: typeFlat
    })
    addCartItem({
        uid: new Date().getTime().toString() + 62,
        id: 105,
        name: 'Quick concrete',
        price: '1400',
        effect: 'concrete',
        square: 5,
        image: "https://api.quickdecor.com.ua/wp-content/uploads/2024/11/quick-concrete.jpg",
        type: typeFlat
    })

    toast.success("Товар додано в корзину!", {icon: '✅'})
}
    return {
        addAir,
        addSand,
        addMicrocement,
        addTravertin,
        addQuick
    }
}