import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


export type Utm = {
    utm_source: string | null,
    utm_medium: string | null,
    utm_campaign: string | null,
    utm_content: string | null,
    utm_term: string | null
}

export interface IUtm {
    utmData: Utm 
    setUtm: (utmObj: Utm) => void
    isSetUtm: boolean
    resetIsSetUtm: () => void
}


export const useUtmStore = create<IUtm>()(
  persist(
    (set, get) => (
      {
        utmData: {
            utm_source: '',
            utm_medium: '',
            utm_campaign: '',
            utm_term: '',
            utm_content: '',
        },
        isSetUtm: false,
        setUtm: (utmObj) => {
            if(get().isSetUtm){return false}else{
                set({
                    utmData:  utmObj,
                    isSetUtm: true
                })
            }
           
      },
      resetIsSetUtm: () => {
        set({isSetUtm: true})
        }
    }
    ),



    {
      name: 'qdUtm',
      version: 1.1,
      storage: createJSONStorage(()=> localStorage),
       partialize: (state) => ({utmData: state.utmData, isSetUtm: state.isSetUtm}),

    }
  )

)

