import { paymenPPType } from "../hooks/useDiscountProducts"

export const createProductString = (arr: paymenPPType[]): string => {
    let str = ''
    arr.forEach((el) => {
        str += el.name
        str += el.count 
        str += el.price + "00"
    })
    return str
}