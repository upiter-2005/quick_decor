/* eslint-disable @typescript-eslint/no-explicit-any */

'use server'
//import { revalidatePath } from 'next/cache'

import {transporter} from "@/shared/api/nodemailer"
import { checkoutProductsType } from "@/shared/helpers/productCrmFormat"
import { TDefauldFields, TSimpleForm } from "@/shared/types/form"





export async function callUser(body: any){
  try{
    const info = await transporter.sendMail({
      from: 'QD <inroaroma@gmail.com>',
      to: 'quickdecorua@gmail.com',
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
      to: 'quickdecorua@gmail.com, pavel470245@gmail.com',
      subject: 'Оформлення замовлення!',
      html: `Ім'я: ${body.first_name} <br> Прізвище: ${body.last_name} <br> Телефон: ${body.tel} <br> Пошта: ${body.email} <br> Місто: ${body.city} <br> Адреса: ${body.department}
      <br> Додаткова інформація : ${body.aditionals} <br> ${body.productArr}`
    })
    console.log(info)

    
  }catch(e){
    console.log(e)
  }
}


export const PurchaseCRM = async(body: checkoutProductsType[], data: TDefauldFields, utmData: any) => {
  const products = body
  const { utm_source, utm_medium, utm_campaign, utm_term, utm_content} = utmData

    try{
      const raw = JSON.stringify({
        "source_id": 7,
        "manager_comment": `${data.aditionals}`,
        "contact": {
          "full_name": `${data.first_name} ${data.last_name}`,
          "email": `${data.email}`,
          "phone": `${data.tel} `
        },
        "utm_source": utm_source,
        "utm_medium": utm_medium,
        "utm_campaign": utm_campaign,
        "utm_term": utm_term,
        "utm_content": utm_content,
        products: products,
        "custom_fields": [
          {
            "uuid": "LD_1001",
            "value": data.city
          },
          {
            "uuid": "LD_1005",
            "value": data.department
          },
          {
            "uuid": "LD_1008",
            "value": data.priceDiscount
          },
          {
            "uuid": "LD_1009",
            "value": data.payment
          }
        ]
      });

      

      const response = fetch("https://openapi.keycrm.app/v1/pipelines/cards", {
        method: "POST",
        headers: {
            authorization:  `Bearer ${process.env.NEXT_KEY_CRM}`,
            'Content-Type': 'application/json'
        },
        body: raw,
        redirect: "follow"
      })
        .then((response) => response.json())
        .then((result) => result)
       
      return response
  }catch(e){
    console.log(e);
  }
}

export const sendCRMForm = async( data: TSimpleForm) => {

    try{
      const raw = JSON.stringify({
        "source_id": 8,
        "manager_comment": "Заявка з футер форми",
        "contact": {
          "full_name": `${data.name}`,
          "phone": `${data.tel} `
        }
      });

      
      fetch("https://openapi.keycrm.app/v1/pipelines/cards", {
        method: "POST",
        headers: {
            authorization:  `Bearer ${process.env.NEXT_KEY_CRM}`,
            'Content-Type': 'application/json'
        },
        body: raw,
        redirect: "follow"
      })
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

  }catch(e){
    console.log(e);
  }
}

export const createPartPaymaent = async(data: any) => {

  const raw = JSON.stringify({
    "storeId": data.storeId,
    "orderId": data.orderId,
    "amount": data.amount,
    "partsCount": data.partsCount,
    "merchantType": "PP",
    "products": data.products,
    "recipientId": data.recipientId,
    "responseUrl": "",
    "redirectUrl": "",
    "signature": data.signature
  })

  try{
    const response = fetch("https://payparts2.privatbank.ua/ipp/v2/payment/create", 
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Accept-Encoding': 'UTF-8;',
          'Content-Type': 'application/json; charset=UTF-8;'
        },
        body: raw,
        redirect: "follow"
      }
    )
      .then((response) => response.json())
      .then((result) => result)

      return response 
  }catch(e){
    console.log(e);
  }

  
}


