'use client'
/* eslint-disable @next/next/no-img-element */
import crypto from 'crypto'
import { utf8_to_b64 } from '../helpers/decodes'

interface ILiqPay {
  amount: string
  currency: string
  description: string
  orderId: number | string
  title: string
  className?: string
  disabled: boolean
  extra?: React.ReactNode
}

export const LiqPay:React.FC<ILiqPay> = ({
  amount,
  currency,
  description = 'test',
  orderId = Math.floor(1 + Math.random() * 900000000),
  disabled,
  extra
}) => {

  const jsonString = {
    public_key: process.env.NEXT_PUBLIC_LIQPAY_PUBLIC_TEST,
    version: '3',
    action: 'pay',
    amount: amount,
    currency: currency,
    description: description,
    order_id: orderId,
    result_url: process.env.NEXT_PUBLIC_THANK_PAGE || '/thank'
  }

  const private_key = process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_TEST
  const data = utf8_to_b64(JSON.stringify(jsonString))
  const signString = private_key + data + private_key
  const sha1 = crypto.createHash('sha1')
  sha1.update(signString)
  const signature = sha1.digest('base64')


  return (
    <form  method='POST' action='https://www.liqpay.ua/api/3/checkout' acceptCharset='utf-8' className='px-2 md:px-0'>
      <input type='hidden' name='data' value={data} />
      <input type='hidden' name='signature' value={signature} />
      {extra || (
        <button className="w-full max-w-[500px] m-auto bg-[#7ab72b] text-white px-2 py-3 rounded-[26px] mt-5 font-bold hover:opacity-55 transition-all" disabled={disabled}>

          <span>Сплатити онлайн {amount} {currency}</span>
        </button>
      )}
    </form>
  )

}



