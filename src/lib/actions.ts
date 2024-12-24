/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'
//import { revalidatePath } from 'next/cache'
//import axios from "axios"


import {transporter} from "@/shared/api/nodemailer"




export async function callUser(body: any){
  try{
    const info = await transporter.sendMail({
      from: 'QD <inroaroma@gmail.com>',
      to: 'pavel470245@gmail.com',
      subject: 'Заявка на зворотный дзвінок!',
      html: `Ім'я: ${body.name} <br> Телефон: ${body.tel} `
    })
    console.log(info)
    
  }catch(e){
    console.log(e)
  }
}

export async function checkoutAction(body: any){
  try{
    const info = await transporter.sendMail({
      from: 'QD <inroaroma@gmail.com>',
      to: 'pavel470245@gmail.com',
      subject: 'Оформлення замовлення!',
      html: `Ім'я: ${body.first_name} <br> Прізвище: ${body.last_name} <br> Телефон: ${body.tel} <br> Пошта: ${body.email} <br> Місто: ${body.city} <br> Адреса: ${body.department}
      <br> Додаткова інформація : ${body.aditionals} <br> ${body.productArr}`
    })
    console.log(info)
    
  }catch(e){
    console.log(e)
  }
}



