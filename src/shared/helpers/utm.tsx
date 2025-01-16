'use client'
import { useEffect } from "react"
import { useSearchParams } from 'next/navigation'
import { useUtmStore } from "@/store/utmStore"

export const Utm:React.FC = () => {
    const searchParams = useSearchParams()
    const utm_source = searchParams.get('utm_source')
    const utm_medium = searchParams.get('utm_medium')
    const utm_campaign = searchParams.get('utm_campaign')
    const utm_content = searchParams.get('utm_content')
    const utm_term = searchParams.get('utm_term')

    const {utmData, setUtm} =  useUtmStore()

    useEffect(()=>{
        if(searchParams.size){
            const utmObj = {
                utm_source,
                utm_medium,
                utm_campaign,
                utm_content,
                utm_term
            }
            setUtm(utmObj)
        }
           
        
    }, [utmData, searchParams])
    return (
        <></>
    )
}