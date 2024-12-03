'use client'
import { cn } from "@/shared/helpers/cn"
import Image from "next/image"

import icons from "@/shared/assets/images"

import { RedText } from "@/shared/ui/redText"

import ef1 from "@/shared/assets/images/ef1.jpg"
import ef2 from "@/shared/assets/images/ef2.jpg"
import ef3 from "@/shared/assets/images/ef3.jpg"
import prev from "@/shared/assets/images/prev.svg"

import { useState } from "react"

import {steps as data}  from "@/shared/consts/steps"
import { QuizTileAction } from "./quizTileAction"


interface IQuizSteps {
    className?: string
}

interface quizObject {
    air: number
    sand: number
    microcement: number
    travertine: number
    quickInterior: number
    quickExterior: number
}

export const QuizSteps:React.FC<IQuizSteps> = ({className}) =>{


    const [pointsStep1, setPointsStep1] = useState<quizObject>({
        air: 0,
        sand: 0,
        microcement: 0,
        travertine: 0,
        quickInterior: 0,
        quickExterior: 0
    });

    const [pointsStep2, setPointsStep2] = useState<quizObject>({
        air: 0,
        sand: 0,
        microcement: 0,
        travertine: 0,
        quickInterior: 0,
        quickExterior: 0
    });

    const [pointsStep3, setPointsStep3] = useState({
        air: 0,
        sand: 0,
        microcement: 0,
        travertine: 0,
        quickInterior: 0,
        quickExterior: 0
    });

    const [pointsStep4, setPointsStep4] = useState({
        air: 0,
        sand: 0,
        microcement: 0,
        travertine: 0,
        quickInterior: 0,
        quickExterior: 0
    });

    const [currentStep, setCurrentStep] = useState({
        type: '',
        area: '',
        create: '',
        props: '',
    });


    const [step, setStep] = useState<number>(1);
    const [params, setParams] = useState({
        type: '',
        area: '',
        create: '',
        props: '',
    });
    

    const nextStep1 = (e: string, param: string) => {
        setParams({...params, type: param})
        if (currentStep.type === e) return
       
        if (currentStep.type === "") {
            setCurrentStep({...currentStep, type: e})
            const val: quizObject = data.type[e as never]

            setPointsStep1({...pointsStep1,
                         air: pointsStep1.air + val.air,
                         sand: pointsStep1.sand + val.sand,
                         microcement: pointsStep1.microcement + val.microcement,
                         travertine: pointsStep1.travertine + val.travertine,  
                         quickInterior: pointsStep1.quickInterior + val.quickInterior  
            }) 
        }else{
            setCurrentStep({...currentStep, type: e})
            const val: quizObject = data.type[e as never]

            setPointsStep1(prevPoints1 => {
                return {...prevPoints1,
                    air:  prevPoints1.air - prevPoints1.air + val.air,
                    sand: prevPoints1.sand - prevPoints1.sand + val.sand,
                    microcement: prevPoints1.microcement - prevPoints1.microcement + val.microcement,
                    travertine: prevPoints1.travertine - prevPoints1.travertine + val.travertine,  
                    quickInterior: prevPoints1.quickInterior - prevPoints1.quickInterior + val.quickInterior  
                }
            })
            
        }
        
    }

    const nextStep2 = (e: string, param: string) => {
        setParams({...params, area: param})
        if (currentStep.area === e) return
       
        if (currentStep.area === "") {
            setCurrentStep({...currentStep, area: e})
            const val: quizObject = data.area[e as never]
            console.log(val)
            setPointsStep2({...pointsStep2,
                air:  val.air,
                sand:  val.sand,
                microcement:  val.microcement,
                travertine: val.travertine,  
                quickInterior: val.quickInterior  
            }) 
        }else{
            setCurrentStep({...currentStep, area: e})
            const val: quizObject = data.area[e as never]

            setPointsStep2(prevPoints => {
                return {...prevPoints,
                    air:  prevPoints.air - prevPoints.air + val.air,
                    sand: prevPoints.sand - prevPoints.sand + val.sand,
                    microcement: prevPoints.microcement - prevPoints.microcement + val.microcement,
                    travertine: prevPoints.travertine - prevPoints.travertine + val.travertine,  
                    quickInterior: prevPoints.quickInterior - prevPoints.quickInterior + val.quickInterior  
                }
            })
            
        }
    }

    const nextStep3 = (e: string, param: string) => {
        setParams({...params, create: param})
        if (currentStep.area === e) return
       
        if (currentStep.create === "") {
            setCurrentStep({...currentStep, create: e})
            const val: quizObject = data.create[e as never]
            console.log(val)
            setPointsStep3({...pointsStep3,
                air:  val.air,
                sand:  val.sand,
                microcement:  val.microcement,
                travertine: val.travertine,  
                quickInterior: val.quickInterior  
            }) 
        }else{
            setCurrentStep({...currentStep, create: e})
            const val: quizObject = data.create[e as never]

            setPointsStep3(prevPoints => {
                return {...prevPoints,
                    air:  prevPoints.air - prevPoints.air + val.air,
                    sand: prevPoints.sand - prevPoints.sand + val.sand,
                    microcement: prevPoints.microcement - prevPoints.microcement + val.microcement,
                    travertine: prevPoints.travertine - prevPoints.travertine + val.travertine,  
                    quickInterior: prevPoints.quickInterior - prevPoints.quickInterior + val.quickInterior  
                }
            })
            
        }
    }

    const nextStep4 = (e: string, param: string) => {
        setParams({...params, props: param})
        if (currentStep.area === e) return
       
        if (currentStep.props === "") {
            setCurrentStep({...currentStep, props: e})
            const val: quizObject = data.props[e as never]
            console.log(val)
            setPointsStep4({...pointsStep4,
                air:  val.air,
                sand:  val.sand,
                microcement:  val.microcement,
                travertine: val.travertine,  
                quickInterior: val.quickInterior  
            }) 
        }else{
            setCurrentStep({...currentStep, props: e})
            const val: quizObject = data.props[e as never]

            setPointsStep4(prevPoints => {
                return {...prevPoints,
                    air:  prevPoints.air - prevPoints.air + val.air,
                    sand: prevPoints.sand - prevPoints.sand + val.sand,
                    microcement: prevPoints.microcement - prevPoints.microcement + val.microcement,
                    travertine: prevPoints.travertine - prevPoints.travertine + val.travertine,  
                    quickInterior: prevPoints.quickInterior - prevPoints.quickInterior + val.quickInterior  
                }
            })
            
        }
    }
    
 
    return(
        <div className={cn('max-w-[1144px] w-full m-auto pt-12 px-3 md:px-0', className)} >

            <p className="w-full text-center text-xs px-4 text-[#373C45] mb-5">Тепер Вам не треба витрачати зайвий час на годинні консультації щодо потрібного покриття під ваші умови. Нижче скористайтеся помічником, який швидко, на основі Ваших параметрів прорахує оптимальне покриття та надасть рекомендації за допомогою системи балів.</p>


            <RedText text="Ефекти" />

            <div className={cn('max-w-[1230px] w-full m-auto flex flex-wrap justify-center gap-8 md:gap-[65px] pb-4 mt-5 sticky top-[92px] bg-white  z-50', className)} >
                {step === 5 && <div className="w-full text-center text-black font-medium ">Вітаємо, початок покладено! Оберіть ефект орінтуючись на зібрані бали в кожному з них</div>}
                <div>
                    <div  className='block w-[80px] md:w-[116px] h-[80px] md:h-[116px]  text-center hover:opacity-75 transition-all rounded-[50%] relative overflow-hidden '>
                        <Image src={ef1}  fill objectFit="cover"  alt="quickdecor" className="block"  />
                    </div>
                    <p className='text-main mt-1 text-xs  md:text-xl font-medium text-center'>AIR</p>
                    <div className="text-main md:text-2xl font-medium text-center">
                        {pointsStep1.air + pointsStep2.air + pointsStep3.air + pointsStep4.air}
                        </div>
                </div>
                
                <div>
                    <div  className='block w-[80px] md:w-[116px] h-[80px] md:h-[116px]  text-center hover:opacity-75 transition-all rounded-[50%] relative overflow-hidden '>
                        <Image src={ef2}  fill objectFit="cover"  alt="quickdecor" className="block"  />
                    </div>
                    <p className='text-main mt-1 text-xs  md:text-xl font-medium text-center'>SAND</p>
                    <div className="text-main md:text-2xl font-medium text-center">
                        {pointsStep1.sand + pointsStep2.sand + pointsStep3.sand + pointsStep4.sand}
                        </div>
                </div>

                <div>
                    <div  className='block w-[80px] md:w-[116px] h-[80px] md:h-[116px]  text-center hover:opacity-75 transition-all rounded-[50%] relative overflow-hidden '>
                        <Image src={ef3}  fill objectFit="cover"  alt="quickdecor" className="block"  />
                    </div>
                    <p className='text-main mt-1 text-xs  md:text-xl font-medium text-center'>MICROCEMENT</p>
                    <div className="text-main md:text-2xl font-medium text-center">
                    {pointsStep1.microcement + pointsStep2.microcement + pointsStep3.microcement + pointsStep4.microcement}</div>
                </div>

                <div>
                    <div  className='block w-[80px] md:w-[116px] h-[80px] md:h-[116px]  text-center hover:opacity-75 transition-all rounded-[50%] relative overflow-hidden '>
                        <Image src={ef1}  fill objectFit="cover"  alt="quickdecor" className="block"  />
                    </div>
                    <p className='text-main mt-1 text-xs  md:text-xl font-medium text-center'>TRAVERTINE</p>
                    <div className="text-main md:text-2xl font-medium text-center">
                    {pointsStep1.travertine + pointsStep2.travertine + pointsStep3.travertine + pointsStep4.travertine}</div>
                </div>

                <div>
                    <div  className='block w-[80px] md:w-[116px] h-[80px] md:h-[116px]  text-center hover:opacity-75 transition-all rounded-[50%] relative overflow-hidden '>
                        <Image src={ef1}  fill objectFit="cover"  alt="quickdecor" className="block"  />
                    </div>
                    <p className='text-main mt-1 text-xs  md:text-xl font-medium text-center'>QUICK</p>
                    <div className="text-main md:text-2xl font-medium text-center">
                    {pointsStep1.quickInterior + pointsStep2.quickInterior + pointsStep3.quickInterior + pointsStep4.quickInterior}
                    </div>
                </div>

            </div>
            <div className="font-semibold text-sm flex gap-6 mb-6 pt-10">
                {params.type && <div>Тип приміщення: <span className="bg-[#ff0000] text-white px-2 ml-1 rounded-xl inline-block">{params.type}</span> </div>}
                {params.area && <div>Тип поверхні:<span className="bg-[#ff0000] text-white px-2 ml-1 rounded-xl inline-block">{params.area}</span> </div>}
                {params.create && <div>Тип стін:<span className="bg-[#ff0000] text-white px-2 ml-1 rounded-xl inline-block">{params.create}</span> </div>}
                {params.props && <div>Властивості для експлуатації:<span className="bg-[#ff0000] text-white px-2 ml-1 rounded-xl inline-block">{params.props}</span> </div>}
            </div>

       
            {step === 1 && 
                <div className="flex gap-5  w-full flex-wrap justify-center">
                    <div className="w-full text-xl mb-2 text-[#373C45]">Оберіть приміщення</div>
                    <QuizTileAction current={currentStep.type} quizAction={nextStep1} slug="spalnya" text="Спальня" image={icons.badroom}  />
                    <QuizTileAction current={currentStep.type} quizAction={nextStep1} slug="gostinnaya" text="Вітальня" image={icons.hall} />
                    <QuizTileAction current={currentStep.type} quizAction={nextStep1} slug="child" text="Дитяча" image={icons.child} />
                    <QuizTileAction current={currentStep.type} quizAction={nextStep1} slug="stear" text="Холл, лестничный марш" image={icons.stear} />
                    <QuizTileAction current={currentStep.type} quizAction={nextStep1} slug="kitchen" text="Кухня" image={icons.kitchen} />
                    <QuizTileAction current={currentStep.type} quizAction={nextStep1} slug="hall" text="Коридор" image={icons.hall} />
                    <QuizTileAction current={currentStep.type} quizAction={nextStep1} slug="cabinet" text="Кабінет" image={icons.cabinet} />
                    <QuizTileAction current={currentStep.type} quizAction={nextStep1} slug="office" text="Oфіс" image={icons.hall} />
                    <QuizTileAction current={currentStep.type} quizAction={nextStep1} slug="showroom" text="Шоу-рум, виставковий зал" image={icons.showroom} />
                    <QuizTileAction current={currentStep.type} quizAction={nextStep1} slug="childClubs" text="Дитячі клуби/учбові класи" image={icons.child} />
                </div>
            }
            

            {step === 2 &&
             <div className="flex gap-5  w-full flex-wrap justify-center">
                <div className="w-full text-xl mb-2 text-[#373C45]">Оберіть тип поверхні на яку планується нанесення декору</div>
                <QuizTileAction current={currentStep.area} quizAction={nextStep2} slug="wall" text="Стіна інтер'єр" image={icons.fasad} />
                <QuizTileAction current={currentStep.area} quizAction={nextStep2} slug="ceil" text="Потолок" image={icons.ceil} />
                <QuizTileAction current={currentStep.area} quizAction={nextStep2} slug="glass" text="Кухонный фартук (под стекло)" image={icons.glass} />
                <QuizTileAction current={currentStep.area} quizAction={nextStep2} slug="fireplace" text="Камін" image={icons.fireplace} />
                <QuizTileAction current={currentStep.area} quizAction={nextStep2} slug="fasad" text="Фасад" image={icons.fasad} />
            </div>
            }

        {step === 3 &&
             <div className="flex gap-5  w-full flex-wrap justify-center">
                <div className="w-full text-xl mb-2 text-[#373C45]">Оберіть яка підготовка обраного типу стін наразі</div>
                <QuizTileAction current={currentStep.create} quizAction={nextStep3} slug="wallpaper" text="Під шпалери" image={icons.wallpaper} />
                <QuizTileAction current={currentStep.create} quizAction={nextStep3} slug="paint" text="Під покраску" image={icons.paint} />
            </div>
        }
           
        {step === 4 &&
             <div className="flex gap-5  w-full flex-wrap justify-center">
                <div className="w-full text-xl mb-2 text-[#373C45]">Оберіть важливі властивості для експлуатації</div>
                <QuizTileAction current={currentStep.props} quizAction={nextStep4} slug="stable" text="Стійкість, прочність" image={icons.stable} />
                <QuizTileAction current={currentStep.props} quizAction={nextStep4} slug="wet" text="Вологе прибирання" image={icons.wet} />
                <QuizTileAction current={currentStep.props} quizAction={nextStep4} slug="water" text="Вода" image={icons.water} />
                <QuizTileAction current={currentStep.props} quizAction={nextStep4} slug="dust" text="Не сприймає пилу" image={icons.dust} />
            </div>
        }




            <div className="flex justify-center mb-3 mt-5 gap-4">
                {step !== 1 &&   <button onClick={()=>setStep(prevStep => prevStep - 1)} 
                    className={cn( 'w-[139px] bg-[#858585] text-white text-sm font-semibold p-4 rounded-[60px] flex justify-center hover:opacity-55 transition-all', className)}
                ><Image src={prev} width={14} height={16} alt="quickdecor" /> </button>
                }
              
                <button className={cn( 'w-[250px] bg-[#ff0000] text-white text-sm font-semibold p-4 rounded-[60px] inline-block hover:opacity-55 transition-all', className)}
                onClick={()=> setStep(prevStep => prevStep + 1)}
                disabled={step === 5}
                >Наступний крок</button>
            </div>
        
    </div>
    )  
    
}