import logo from "@/shared/assets/images/footer-logo.svg"
import Image from "next/image"


import tiktok from "@/shared/assets/images/tiktok.svg"
import insta from "@/shared/assets/images/insta.svg"
import fb from "@/shared/assets/images/facebook-blac.svg"
import youtube from "@/shared/assets/images/youtube.svg"
import Link from "next/link"


export const Footer:React.FC = () => {
    return (
        <div className="bg-[#1C293F] pt-12 pb-4 px-4">
            <div className="flex md:justify-center"><Image src={logo} alt='quickdecor' /></div>
            <div className="flex md:justify-center items-center gap-8 pt-6">
                <Link href="#" target="blank">
                    <Image src={tiktok} width={16} height={16} alt='quickdecor' />   
                </Link>
                <Link href="#" target="blank">
                    <Image src={insta} width={16} height={16} alt='quickdecor' />   
                </Link>
                <Link href="#" target="blank">
                    <Image src={fb} width={16} height={16} alt='quickdecor' />   
                </Link>
                <Link href="#" target="blank">
                    <Image src={youtube} width={16} height={16} alt='quickdecor' />   
                </Link>
                
            </div>

            <div className="flex flex-wrap flex-row justify-center items-start max-w-[1044px] w-full pt-6 m-auto md:gap-12">

                <div className="w-[49%] md:w-auto mb-4 md:mb-0">
                    <Link href="#" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">FAQs</Link>
                    <Link href="#" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">Документи</Link>
                    <Link href="#" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">Політика конфіденційності</Link>
                </div>

                <div className="w-[49%] md:w-auto mb-4 md:mb-0">
                    <Link href="#" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">Оплата</Link>
                    <Link href="#" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">Договір оферти</Link>
                    <Link href="#" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">Способи доставки</Link>
                </div>

                <div className="w-[49%] md:w-auto mb-4 md:mb-0">
                    <Link href="#" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">Каталог</Link>
                    <Link href="#" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">Послуги</Link>
                    <Link href="#" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">Прорахунок</Link>
                </div>

                <div className="w-[49%] md:w-auto mb-4 md:mb-0">
                    <Link href="#" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">Блог</Link>
                    <Link href="#" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">Про нас</Link>
                    <Link href="#" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">Контакти</Link>
                </div>
                <div className="w-[49%] md:w-auto mb-4 md:mb-0">
                    <Link href="#" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">Прорахунок</Link>
                </div>
                <div className="w-[49%] md:w-auto mb-4 md:mb-0">
                    <Link href="#mailto:info@quickdecor.ua" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">info@quickdecor.ua</Link>
                    <Link href="#tel:+380442424142" className="text-white text-sm font-semibold block leading-6 hover:opacity-70 transition-all">+38 044 242 41 42</Link>
                </div>
            </div>

            <div className="flex items-end md:items-start justify-between max-w-[1144px] w-full pt-8 m-auto gap-12 text-white opacity-50 text-sm">
                <span>2024 All Rights Reserved</span>
                <div className="flex flex-col md:flex-row">
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms of Use</Link>
                </div>
            </div>

        </div>
    )
}