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
  city: z.string().min(2, {message: "Занадто коротка назва"}),
  department: z.string().min(2, {message: "Занадто коротка назва"}),
  aditionals: z.string(),
  productArr: z.string()
})

export type TDefauldFields = z.infer<typeof defaulFieldsSchema>
export type TSimpleForm = z.infer<typeof simpleForm>