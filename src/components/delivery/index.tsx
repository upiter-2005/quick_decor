/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Select from 'react-select';
import { useFormContext } from 'react-hook-form';
import { ErrorText } from '@/shared/ui/errorText';


type NovaPoshtaTypesa = {
    apiKey: string,
    calledMethod: string,
    modelName: string,
    methodProperties: any
}

type DepartmentsType = {
    value: string,
    label: string
}

const NovaPoshta:React.FC = () => {
    
    const [citiesNP, setCitiesNP] = useState<DepartmentsType[]>([])
    const [departmentsNP, setDepartmentsNP] = useState<DepartmentsType[]>([])

    const {
        register,
        unregister,
        formState: { errors },
        setValue,
        getFieldState
      } = useFormContext()

    // const getCities = async() => {
    //     const param: NovaPoshtaTypesa = {
    //         apiKey: "ee8c3d42f9f5dfe39a3ad4c2636f747a",
    //         calledMethod: "getCities",
    //         modelName: "Address",
    //         methodProperties: {
    //             //FindByString: 'Бровари'
    //         }
    //     }
    //     try {
    //         axios.post('https://api.novaposhta.ua/v2.0/json/', param )
    //         .then(res => {
    //             //setCities(res.data.data)
    //             const options: DepartmentsType[] = []
    //             res.data.data.forEach((el:any) => {
    //                 options.push({value: el.Description, label: el.Description});
    //             })
    //             console.log(res.data.data);
    //             setCitiesNP(options)
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const getWarehouses = async(query: string) => {
    //     const param: NovaPoshtaTypesa = {
    //         apiKey: "ee8c3d42f9f5dfe39a3ad4c2636f747a",
    //         calledMethod: "getWarehouses",
    //         modelName: "Address",
    //         methodProperties: {
    //             //SettlementRef: "7150812c-9b87-11de-822f-000c2965ae0e"
             
    //            CityName: query
    //         }
    //     }
    //     try {
    //         axios.post('https://api.novaposhta.ua/v2.0/json/', param )
    //         .then(res => {
    //             const options: DepartmentsType[] = []
    //             res.data.data.forEach((el:any) => {
    //                 options.push({value: el.Description, label: el.Description});
    //             })
                
    //             setDepartmentsNP(options)
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(()=>{
       // getCities()
        register("city")
        register("department")
    }, [])

    useEffect(()=> {
        return () => {
          unregister("city")
          unregister("department")
        }
    },[unregister])
    
    const setNPDepartment = (query: any) => {
        setValue("city", query.value, { shouldValidate: true })
    }
 
    const dinamicDepartments = (value: any) => {
        setValue("department", value.value, { shouldValidate: true })
      //  getWarehouses(value.value);
    }

    let cityError: string = ''
    let departmentError: string = ''
    if(getFieldState('city') ) cityError = errors?.['city']?.message as string
    if(getFieldState('department') )departmentError = errors?.['department']?.message as string
    
     console.log(errors)


return (
    <div className="selectBox w-full relative">
        <Select 
            options={citiesNP}
            {...register('city')}
            onChange={dinamicDepartments}
            className="np-department-select w-full mb-7"
            placeholder={`Оберіть місто`} 
          
          styles={{
            option: (provided, state) => ({
                ...provided,
                color: "#1e1e1e",
                fontSize: 16,
                backgroundColor: state.isFocused ? "#eee" : "#fff",
                cursor: "pointer",
                borderColor: "#333",
                outline: "none",
                border: "none"

            })

            
          }}
            classNamePrefix="react-select" />
        <Select  
            options={departmentsNP}
            {...register('department')}
            onChange={setNPDepartment}
            className="np-department-select mb-6"
            placeholder={`Оберіть відділення Нової пошти` } 
            
        
          styles={{
            option: (provided, state) => ({
                ...provided,
                color: "#1e1e1e",
                fontSize: 16,
                backgroundColor: state.isFocused ? "#eee" : "#fff",
                cursor: "pointer",
                borderColor: "#333",
                outline: "none",
                border: "none"
            })
          }}
            classNamePrefix="react-select" />

        <div className='relative '>
            {cityError  && <ErrorText text={cityError} className="text-xs" />}
            {departmentError  && <ErrorText text={departmentError} className=" text-xs" />}
        </div>
        
    </div>
  )
}
export default NovaPoshta