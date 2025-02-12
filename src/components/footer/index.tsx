import logo from "@/shared/assets/images/footer-logo.svg"
import Image from "next/image"


import tiktok from "@/shared/assets/images/tiktok.svg"
import insta from "@/shared/assets/images/insta.svg"
import fb from "@/shared/assets/images/facebook-blac.svg"
import youtube from "@/shared/assets/images/youtube.svg"
import Link from "next/link"

import masterCard from "@/shared/assets/images/master-card-logo.svg"
import visa from "@/shared/assets/images/visa-pay-logo.svg"



export const Footer:React.FC = () => {
    return (
        <div className="bg-[#1C293F] pt-6 md:pt-12 pb-4 px-4">
            <div className="flex md:justify-center"><Image src={logo} alt='quickdecor' /></div>
            <div className="flex justify-between md:justify-center items-center gap-4 md:gap-8 md:pt-6 pt-1">
                <Link href="https://www.tiktok.com/@quickdecorua" target="blank">
                    <Image src={tiktok} width={16} height={16} alt='quickdecor' />   
                </Link>
                <Link href="https://www.instagram.com/quickdecorua" target="blank">
                    <Image src={insta} width={16} height={16} alt='quickdecor' />   
                </Link>
                <Link href="https://www.facebook.com/quickdecorua" target="blank">
                    <Image src={fb} width={16} height={16} alt='quickdecor' />   
                </Link>
                <Link href="https://www.youtube.com/quickdecorua" target="blank">
                    <Image src={youtube} width={16} height={16} alt='quickdecor' />   
                </Link>
                <div className="w-[49%] md:w-auto mb-4 md:mb-0  md:hidden">
                    <Link href="mailto:info@quickdecor.ua" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">info@quickdecor.ua</Link>
                    <Link href="tel:+380631471218" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">+38 063 147 12 18</Link>
                </div>
            </div>

            <div className="flex flex-wrap flex-row justify-between items-start max-w-[1044px] w-full pt-6 m-auto md:gap-12">

               

                <div className="w-[49%] md:w-auto mb-4 md:mb-0">
                    <Link href="/oplata" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">Оплата</Link>
                    <Link href="/oferta" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">Договір оферти</Link>
                    <Link href="/policy" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">Політика конфіденційності</Link>
                </div>

                <div className="w-[49%] md:w-auto mb-4 md:mb-0">
                    <Link href="/catalog" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">Каталог </Link>
                   
                    <Link href="/cart" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">Розрахувати вартість</Link>
                    <Link href="/quiz" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">Фільтр помічник</Link>
                </div>

                <div className="w-[49%] md:w-auto mb-4 md:mb-0 hidden  md:block">
                    <Link href="mailto:info@quickdecor.com.ua" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">info@quickdecor.com.ua</Link>
                    <Link href="tel:+380631471218" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">+38 063 147 12 18</Link>
                    <div className=" gap-3 pt-2 hidden md:flex">
                        <Image src={visa} width={45} height={40} alt="visa" />
                        <Image src={masterCard} width={45} height={40} alt="masterCard" />
                    </div>
                </div>
            </div>
            <div className="flex gap-3 pt-2  md:hidden">
                        <Image src={visa} width={45} height={40} alt="visa" />
                        <Image src={masterCard} width={45} height={40} alt="masterCard" />
                    </div>
            <div className="flex items-end md:items-start justify-between max-w-[1144px] w-full pt-8 m-auto gap-12 text-white opacity-50 text-sm">
                <span>2024 All Rights Reserved</span>
              
            </div>

        </div>
    )
}