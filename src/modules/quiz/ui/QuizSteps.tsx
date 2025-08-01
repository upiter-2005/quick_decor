'use client'
import { cn } from "@/shared/helpers/cn"
import Image from "next/image"
import icons from "@/shared/assets/images"
import { RedText } from "@/shared/ui/redText"
import ef1 from "@/shared/assets/images/ef1.jpg"
import ef2 from "@/shared/assets/images/ef2.jpg"
import ef3 from "@/shared/assets/images/ef3.jpg"
import ef4 from "@/shared/assets/images/ef4.jpg"
import ef5 from "@/shared/assets/images/ef5.jpg"
import prev from "@/shared/assets/images/prev.svg"

import { useEffect, useState } from "react"
import {useSet} from 'react-use'
import {steps as data}  from "@/shared/consts/steps"
import { QuizTileAction } from "./quizTileAction"
import { ICartItem, useCartStore } from "@/store/cartStore"
import { QuizTileLastStep } from "./QuizTileLastStep"
import {universalProducts } from "@/shared/consts/universalLines"
//import { AddResultProduct } from "./addResultProduct"
import Link from "next/link"

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
    const [set, {has, toggle: toggleProps, clear }] = useSet(new Set<string>([]));
    const [ scrolled, setScrolled ] = useState<boolean>(false)
    const [ fasadProps, setFasadProps ] = useState<string>("false")
    const {addCartItem, setModalCart} = useCartStore()
    // const [open1, setOpen1] = useState<boolean>(false)
    // const [open2, setOpen2] = useState<boolean>(false)
    // const [open3, setOpen3] = useState<boolean>(false)
    // const [open4, setOpen4] = useState<boolean>(false)
    // const [open5, setOpen5] = useState<boolean>(false)
    const {
        setTypeFlat,
        //typeFlat
        } = useCartStore()

    const addToCartQuiz = (product: string) => {
        const obj = universalProducts[product as never] as ICartItem
        console.log();
        addCartItem({
            uid: new Date().getTime().toString() + 21,
            id: obj.id,
            name: obj.name,
            price: obj.price,
            effect: obj.effect,
            square: 5,
            image: obj.image,
            type: "Universal"
        })
        // toast.success("Товар додано в корзину!", {icon: '✅', duration: 8000})
        // closeModal()
        setModalCart(true)
    }
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
    
console.log(params)
    const nextStep1 = (e: string, param: string) => {
        
        setTypeFlat(param)
        setParams({...params, type: param, area: '', create: '', props: '',})
        // setPointsStep2({...pointsStep2, 
        //     air: 0,
        //     sand: 0,
        //     microcement: 0,
        //     travertine: 0,
        //     quickInterior: 0,
        //     quickExterior: 0
        // })
        // setPointsStep3({...pointsStep3, 
        //     air: 0,
        //     sand: 0,
        //     microcement: 0,
        //     travertine: 0,
        //     quickInterior: 0,
        //     quickExterior: 0
        // })
        // setPointsStep4({...pointsStep4, 
        //     air: 0,
        //     sand: 0,
        //     microcement: 0,
        //     travertine: 0,
        //     quickInterior: 0,
        //     quickExterior: 0
        // })
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
            const val: quizObject = data.area[e as never ]
            console.log(val)
            setPointsStep2({...pointsStep2,
                air:  val.air,
                sand:  val.sand,
                microcement:  val.microcement,
                travertine: val.travertine,  
                quickInterior: val.quickInterior  
            }) 
        }
        else{
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
        // window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
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
        // window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        setParams({...params, props: param})
        if (currentStep.area === e) return 
        toggleProps(e)
    }

    const fasadStep1 = (e: string, param: string) => {
        console.log(param);
        //setParams({...params, area: param})
        
        setCurrentStep({...currentStep, area: e, create: "", type: ""})
        setParams({ ...params,
            type: '',
            area: '',
            create: '',
            props: '',
        });
        clear()
        setPointsStep1(prevPoints => {
            return {...prevPoints,
                air:  0,
                sand: 0,
                microcement: 0,
                travertine: 3,  
                quickInterior: 3  
            }
        })
        setPointsStep2(prevPoints => {
            return {...prevPoints,
                air:  0,
                sand: 0,
                microcement: 0,
                travertine: 0,  
                quickInterior: 0  
            }
        })
        setPointsStep3(prevPoints => {
            return {...prevPoints,
                air:  0,
                sand: 0,
                microcement: 0,
                travertine: 0,  
                quickInterior: 0
            }
        })
        setPointsStep4(prevPoints => {
            return {...prevPoints,
                air:  0,
                sand: 0,
                microcement: 0,
                travertine: 0,  
                quickInterior: 0 
            }
        })
            
        
    }


    const fasadStep2 = (e: string, param: string) => {
     setParams({...params, type: param})
     console.log(e, param);
    //  toggleProps(e)

        // if (currentStep.area === e) return
        setPointsStep1(prevPoints => {
            
            return {...prevPoints,
                air:  0,
                sand: 0,
                microcement: 0,
                travertine: 3,  
                quickInterior: 3  
            }
        })
        if(e === 'dust'){
            setFasadProps('dust')
            setPointsStep2(prevPoints => {
                return {...prevPoints,
                    air:  0,
                    sand: 0,
                    microcement: 0,
                    travertine: 0,  
                    quickInterior: 3
                }
            })
        }else{
            setFasadProps('stable')
            setPointsStep2(prevPoints => {
                return {...prevPoints,
                    air:  0,
                    sand: 0,
                    microcement: 0,
                    travertine: 3,  
                    quickInterior: 0
                }
            })
        }
       
        setPointsStep3(prevPoints => {
            return {...prevPoints,
                air:  0,
                sand: 0,
                microcement: 0,
                travertine: 0,  
                quickInterior: 0
            }
        })
        setPointsStep4(prevPoints => {
            return {...prevPoints,
                air:  0,
                sand: 0,
                microcement: 0,
                travertine: 0,  
                quickInterior: 0 
            }
        })
    }
    const doResultSteps = () => {
        if(step === 4 || (currentStep.area === 'fasad' && step === 2)) {
       setStep(5)
        }else {
            setStep(prevStep => prevStep + 1)
            // 
        }
    }

    const goPrevStep = () => {
        if(currentStep.area === 'fasad' && step === 5){
            setStep(2)
        }else{
            setStep(prevStep => prevStep - 1)
        }
        
    }
    
    useEffect(()=>{
        window.scrollTo(0, 0); 
    }, [step])
    useEffect(()=>{
        
        const arrProps = Array.from(set)
        setCurrentStep({...currentStep, props: 'props'})
        
        setPointsStep4({
            air: 0,
            sand: 0,
            microcement: 0,
            travertine: 0,
            quickInterior: 0,
            quickExterior: 0
        })
        arrProps.forEach((e)=>{
            const val: quizObject = data.props[e as never]
            setPointsStep4(prevPoints => {
                return {...prevPoints,
                    air:  prevPoints.air + val.air,
                    sand: prevPoints.sand  + val.sand,
                    microcement: prevPoints.microcement  + val.microcement,
                    travertine: prevPoints.travertine  + val.travertine,  
                    quickInterior: prevPoints.quickInterior  + val.quickInterior  
                }
            })
        })
 
    }, [set])


    useEffect(() => {
        const handleScroll = () => { 
          if (window.scrollY > 2) {
            setScrolled(true)
          } else {
            setScrolled(false)
          }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, [])

    return(

        <>
        <div className={cn('max-w-[1144px] w-full m-auto py-12 px-3 md:px-0', className)}  >

            {step === 1 &&  <p className="w-full text-center text-sm px-2 text-[#373C45] mb-5">
                <span className="font-bold text-xl md:text-2xl  block">Фільтр помічник для вибору покриття </span> <br />Всього <span className="text-[#ff0000]">4 кроки</span>  до вашого ідеального інтер&apos;єру <br /> Оберіть приміщення, тип та підготовку поверхні, вкажіть важливі властивості для експлуатації <br /><span className="text-[#ff0000]">Фільтр сам порахує</span> оптимальне покриття за допомогою системи балів <br />  <span className="text-[#ff0000] text-center w-full text-sm md:text-xl">Чим більший бал - тим більше покриття підходить під ваші параметри</span> </p>}
           
            <RedText text="Бали" />
            {step === 5 && <div className="w-full text-center text-black font-medium pt-5">Орієнтуйтеся на покриття з найвищими балами. Система автоматично прорахувала пріоритетні покриття, враховуючи задані Вами параметри </div>}

            <div className={cn(`max-w-[1230px] w-full m-auto flex flex-wrap justify-center md:gap-[3px] pb-4 mt-5 sticky  top-[7px] pt-4 md:pt-0  md:top-[22px] bg-white transition-all  z-[50] ${scrolled && 'scaled rounded-2xl custom-shadow'}`, className)} >
               
          
            <div className="w-full px-2 font-semibold text-xs md:text-sm flex gap-2 md:gap-5 mb-6 md:pt-10 pt-2 flex-col md:flex-row">
                {params.type && <div>Тип приміщення: <span className="bg-[#222] text-white px-2 ml-1 rounded-xl inline-block">{params.type}</span> </div>}
                {params.area && <div>Тип поверхні:<span className="bg-[#222] text-white px-2 ml-1 rounded-xl inline-block">{params.area}</span> </div>}
                {params.create && <div>Тип стін:<span className="bg-[#222] text-white px-2 ml-1 rounded-xl inline-block">{params.create}</span> </div>}
                {params.props && <div>Властивості для експлуатації:<span className="bg-[#222] text-white px-2 ml-1 rounded-xl inline-block">{params.props}</span> </div>}
                
                
            </div>
            {step !== 1 &&  <span className="text-[#ff0000] text-center w-full text-[12px] md:text-xl block font-bold mb-5">Чим більший бал - тим більше покриття підходить під ваші параметри</span>}
                <div className="flex flex-col justify-center items-center w-[70px] md:w-[150px]">
                    <Link href="/product/air-white"  className='block w-[48px] md:w-[116px] h-[48px] md:h-[116px]  text-center hover:opacity-75 transition-all rounded-[50%] relative overflow-hidden '>
                        <Image src={ef1}  fill objectFit="cover"  alt="quickdecor" className="block"  />
                    </Link>
                    <p className='text-black mt-1 text-[9px]   md:text-xl font-bold text-center'>AIR</p>
                    <div className="text-main md:text-2xl font-medium text-center">
                        {pointsStep1.air + pointsStep2.air + pointsStep3.air + pointsStep4.air}
                        </div>
                        {step === 5 &&  <button  className="bg-[#ff0000] text-white px-2 py-1 ml-1 rounded-xl in line-block text-xs font-bold"
                            onClick={()=>addToCartQuiz("air")}
                        >В кошик</button>}
                       
                    {/* {step === 5 &&  <Dialog open={open1} onOpenChange={setOpen1}>
                        <DialogTrigger asChild>
                            
                            </DialogTrigger>
                            <AddResultProduct typeProduct='air' typeFlat={typeFlat} closeModal={()=>setOpen1(false)} />
                        </Dialog>}     */}
                </div>
                
                <div className="flex flex-col justify-center items-center w-[70px] md:w-[150px]">
                <Link href="/product/sand-cool" className='block w-[48px] md:w-[116px] h-[48px] md:h-[116px]  text-center hover:opacity-75 transition-all rounded-[50%] relative overflow-hidden '>
                        <Image src={ef2}  fill objectFit="cover"  alt="quickdecor" className="block"  />
                    </Link>
                    <p className='text-black mt-1 text-[9px]   md:text-xl font-bold text-center'>SAND</p>
                    <div className="text-main md:text-2xl font-medium text-center">
                        {pointsStep1.sand + pointsStep2.sand + pointsStep3.sand + pointsStep4.sand}
                        </div>
                        {step === 5 &&  <button  className="bg-[#ff0000] text-white px-2 py-1 ml-1 rounded-xl in line-block text-xs font-bold"
                            onClick={()=>addToCartQuiz("sand")}
                        >В кошик</button>}
                    {/* {step === 5 &&  <Dialog open={open2} onOpenChange={setOpen2}>
                            <DialogTrigger asChild>
                                <button  className="bg-[#ff0000] text-white px-2 py-1 ml-1 rounded-xl inline-block text-xs font-bold">В кошик</button>
                            </DialogTrigger>
                            <AddResultProduct typeProduct='sand' typeFlat={typeFlat} closeModal={()=>setOpen2(false)} />
                        </Dialog>}   */}
                        
                </div>

                <div className="flex flex-col justify-center items-center w-[70px] md:w-[150px]">
                <Link href="/product/microcemente-ash" className=' w-[48px] md:w-[116px] h-[48px] md:h-[116px]  text-center hover:opacity-75 transition-all rounded-[50%] relative overflow-hidden '>
                        <Image src={ef3}  fill objectFit="cover"  alt="quickdecor" className="block"  />
                    </Link>
                    <p className='text-black mt-1 text-[9px]   md:text-xl font-bold text-center'>MICROCEMENT</p>
                    <div className="text-main md:text-2xl font-medium text-center">
                    {pointsStep1.microcement + pointsStep2.microcement + pointsStep3.microcement + pointsStep4.microcement}</div>
                    {step === 5 &&  <button  className="bg-[#ff0000] text-white px-2 py-1 ml-1 rounded-xl in line-block text-xs font-bold"
                            onClick={()=>addToCartQuiz("microcemente")}
                        >В кошик</button>}
                    {/* {step === 5 &&  <Dialog open={open3} onOpenChange={setOpen3}>
                            <DialogTrigger asChild>
                                <button className="bg-[#ff0000] text-white px-2 py-1 ml-1 rounded-xl inline-block text-xs font-bold">В кошик</button>
                            </DialogTrigger>
                            <AddResultProduct typeProduct='microcement' typeFlat={typeFlat} closeModal={()=>setOpen3(false)} />
                        </Dialog>} */}
                    
                </div>

                <div className="flex flex-col justify-center items-center w-[70px] md:w-[150px]">
                <Link href="/product/travertine-naturale" className='block w-[48px] md:w-[116px] h-[48px] md:h-[116px]  text-center hover:opacity-75 transition-all rounded-[50%] relative overflow-hidden '>
                        <Image src={ef4}  fill objectFit="cover"  alt="quickdecor" className="block"  />
                    </Link>
                    <p className='text-black mt-1 text-[9px]   md:text-xl font-bold text-center'>TRAVERTINE</p>
                    <div className="text-main md:text-2xl font-medium text-center">
                    {pointsStep1.travertine + pointsStep2.travertine + pointsStep3.travertine + pointsStep4.travertine}</div>
                    {step === 5 &&  <button  className="bg-[#ff0000] text-white px-2 py-1 ml-1 rounded-xl in line-block text-xs font-bold"
                            onClick={()=>addToCartQuiz("travertine")}
                        >В кошик</button>}
                    {/* {step === 5 &&
                    <Dialog open={open4} onOpenChange={setOpen4}>
                            <DialogTrigger asChild>
                            <button  className="bg-[#ff0000] text-white px-2 py-1 ml-1 rounded-xl inline-block text-xs font-bold">В кошик</button>
                            </DialogTrigger>
                            <AddResultProduct typeProduct='travertine' typeFlat={typeFlat} closeModal={()=>setOpen4(false)} />
                        </Dialog>
                    } */}
                </div>

                <div className="flex flex-col justify-center items-center w-[70px] md:w-[150px]">
                <Link href="/product/quick-concrete"  className='block w-[48px] md:w-[116px] h-[48px] md:h-[116px]  text-center hover:opacity-75 transition-all rounded-[50%] relative overflow-hidden '>
                        <Image src={ef5}  fill objectFit="cover"  alt="quickdecor" className="block"  />
                    </Link>
                    <p className='text-black mt-1 text-[9px]   md:text-xl font-bold text-center'>QUICK</p>
                    <div className="text-main md:text-2xl font-medium text-center">
                    {pointsStep1.quickInterior + pointsStep2.quickInterior + pointsStep3.quickInterior + pointsStep4.quickInterior}
                    </div>
                    {step === 5 &&  <button  className="bg-[#ff0000] text-white px-2 py-1 ml-1 rounded-xl in line-block text-xs font-bold"
                            onClick={()=>addToCartQuiz("quick")}
                        >В кошик</button>}
                    {/* {step === 5 && 
                        <Dialog open={open5} onOpenChange={setOpen5}>
                            <DialogTrigger asChild>
                            <button  className="bg-[#ff0000] text-white px-2 py-1 ml-1 rounded-xl inline-block text-xs font-bold">В кошик</button>
                            </DialogTrigger>
                            <AddResultProduct typeProduct='quick' typeFlat={typeFlat} closeModal={()=>setOpen5(false)} />
                        </Dialog>
                    } */}
                </div>
                
                <div className=" px-4 min-w-full">
                    <div className="flex justify-center mb-0 mt-10 md:mt-2 gap-4">
                    {step !== 1 && <button onClick={goPrevStep} 
                        className={cn( `w-[69px] bg-[#858585] text-white text-xs font-semibold !p-3 rounded-[60px] flex justify-center items-center hover:opacity-55 transition-all `, className)}
                    ><Image src={prev} width={14} height={16} alt="quickdecor" /> </button>
                    }
                
                {step !== 5 &&    <button className={cn( 'w-[250px] bg-[#ff0000] text-white text-xs font-semibold p-3 rounded-[60px]  inline-block hover:opacity-55 transition-all', className)}
                   // onClick={()=> setStep(prevStep => prevStep + 1)}
                    onClick={doResultSteps}
                    disabled={step === 5}
                    >{(step === 4 || (currentStep.area === 'fasad' && step === 2) ) ? 'Отримати результати' : 'Наступний крок'}</button>}
                

                    {step === 5 &&    <button className={cn( 'w-[250px] bg-[#222] text-white text-sm font-semibold p-3 rounded-[60px] inline-block hover:opacity-55 transition-all', className)}
                        onClick={()=> window.location.reload()} >Почати спочатку</button>}
                    </div>
                </div>   
               

            </div>


            

       
            {step === 1 &&
             <div className="flex gap-5  w-full flex-wrap justify-center">
                <div className="w-full text-xl mb-2 text-[#373C45] mt-6"><RedText text="Крок 1" />Оберіть тип поверхні на яку планується нанесення декору </div>
                <QuizTileAction current={currentStep.area} quizAction={nextStep2} slug="wall" text="Стіна інтер'єр" image={icons.wall} />
                <QuizTileAction current={currentStep.area} quizAction={nextStep2} slug="ceil" text="Стеля" image={icons.ceil} />
                {params.type === 'Кухня' && <QuizTileAction current={currentStep.area} quizAction={nextStep2} slug="glass" text="Кухоний фартук (під скло)" image={icons.glass} />}
                
                <QuizTileAction current={currentStep.area} quizAction={nextStep2} slug="fireplace" text="Камін" image={icons.fireplace} />
                <QuizTileAction current={currentStep.area} quizAction={fasadStep1} slug="fasad" text="Фасад" image={icons.fasad} />
            </div>
            }
            
            {step === 2 &&
                <div className="flex gap-5  w-full flex-wrap justify-center">
                    <div className="w-full text-xl mb-2 text-[#373C45] mt-6"><RedText text="Крок 2" />Оберіть важливі властивості для експлуатації (можна обрати декілька)</div>
                    {currentStep.area !== 'fasad' && (<>
                        <QuizTileLastStep active={has('wet')} quizAction={nextStep4} slug="wet" text="Вологе прибирання" image={icons.wet} />
                        <QuizTileLastStep active={has('water')} quizAction={nextStep4} slug="water" text="Прямий контакт з водою" image={icons.water} />
                        <QuizTileLastStep active={has('stable')} quizAction={nextStep4} slug="stable" text="Стійкість, міцність" image={icons.stable} />
                        <QuizTileLastStep active={has('dust')} quizAction={nextStep4} slug="dust" text="Не сприймає пилу" image={icons.dust} />
                    </>) }
                    {currentStep.area === 'fasad' && (<>
                        <QuizTileLastStep active={fasadProps === 'stable'} quizAction={fasadStep2} slug="stable" text="Стійкість, міцність" image={icons.stable} />
                        <QuizTileLastStep active={fasadProps === 'dust'} quizAction={fasadStep2} slug="dust" text="Не сприймає пилу" image={icons.dust} />
                    </>) }
                </div>
            }

           

        {step === 3 &&
             <div className="flex gap-5  w-full flex-wrap justify-center">
                <div className="w-full text-xl mb-2 text-[#373C45] mt-6"><RedText text="Крок 3" />Оберіть яка підготовка обраного типу стін наразі </div>
                <QuizTileAction current={currentStep.create} quizAction={nextStep3} slug="wallpaper" text="Під шпалери" image={icons.wallpaper} />
                <QuizTileAction current={currentStep.create} quizAction={nextStep3} slug="paint" text="Під фарбування" image={icons.paint} />
                
            </div>
        }
           
           {step === 4 && 
                <div className="flex gap-5  w-full flex-wrap justify-center mt-6">
                    <div className="w-full md:text-xl text-basic mb-2 text-[#373C45]"><RedText text="Крок 4" />Оберіть приміщення в якому планується нанесення декору</div>
                    <QuizTileAction current={currentStep.type} quizAction={nextStep1} slug="spalnya" text="Спальня" image={icons.badroom}  className="h-auto md:px-[20px]"/>
                    <QuizTileAction current={currentStep.type} quizAction={nextStep1} slug="gostinnaya" text="Вітальня" image={icons.gost} className="h-auto md:px-[20px]"/>
                    <QuizTileAction current={currentStep.type} quizAction={nextStep1} slug="child" text="Дитяча" image={icons.child} className="h-auto md:px-[20px]"/>
                    <QuizTileAction current={currentStep.type} quizAction={nextStep1} slug="stear" text="Хол, сходи" image={icons.stear} className="h-auto md:px-[20px]"/>
                    <QuizTileAction current={currentStep.type} quizAction={nextStep1} slug="kitchen" text="Кухня" image={icons.kitchen} className="h-auto md:px-[20px]"/>
                    <QuizTileAction current={currentStep.type} quizAction={nextStep1} slug="hall" text="Коридор" image={icons.hall} className="h-auto md:px-[20px]"/>
                    <QuizTileAction current={currentStep.type} quizAction={nextStep1} slug="cabinet" text="Кабінет" image={icons.cabinet} className="h-auto md:px-[20px]"/>
                    <QuizTileAction current={currentStep.type} quizAction={nextStep1} slug="office" text="Oфіс" image={icons.hall} className="h-auto "/>
                    <QuizTileAction current={currentStep.type} quizAction={nextStep1} slug="showroom" text="Шоу-рум, виставковий зал" image={icons.showroom} className="h-auto md:px-[20px]"/>
                    <QuizTileAction current={currentStep.type} quizAction={nextStep1} slug="childClubs" text="Дитячі клуби/учбові класи" image={icons.child} className="h-auto md:px-[20px]" />
                </div>
            }

           
        
    </div>
    </>
    )  
    
}

