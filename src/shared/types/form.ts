import {z} from 'zod'

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const simpleForm = z.object({
  name: z.string().min(3,  {message: "Занадто коротке ім'я"}),
  tel: z.string().regex(phoneRegex, 'Перевірте коректність телефону').min(7, {message: "Занадто коротий номер"}),
})

export const defaulFieldsSchema = z.object({
  first_name: z.string().min(3, {message: "Занадто коротке ім'я"}),
  last_name: z.string().min(3, {message: "Занадто коротке прізвище"}),
  tel: z.string().regex(phoneRegex, 'Перевірте коректність телефону'),
  email: z.string().email({ message: 'Введіть коректну пошту' }),
  payment: z.string(),

  priceDiscount: z.number().optional(),
  delivery: z.string(),
  city: z.string().min(3, {message: "Введіть місто"}).optional(),
  department: z.string().min(1, {message: "Введіть відділення або адресу"}).optional(),

  aditionals: z.string(),
  productArr: z.string()
})

export const checkoutFieldsSchema = defaulFieldsSchema
  .merge(
    z.object({
      adress1: z.string().min(3, {message: "Занадто коротко"}).optional(),
      adress2: z.string().min(3, {message: "Занадто коротко"}).optional(),
    })
  )


export type TDefauldFields = z.infer<typeof defaulFieldsSchema>
export type TSimpleForm = z.infer<typeof simpleForm>
export type TCheckoutFieldsSchema = z.infer<typeof checkoutFieldsSchema>