import { Input } from "@/shared/ui/input"

export const Adress:React.FC = () => {
    return (
        <div className="flex flex-wrap gap-5 px-3 md:px-0">
            <div className="w-full md:w-[48%]"> 
                <Input type='text' placeholder="Місто/Поселення" name="city"/>
            </div>
            <div className="w-full md:w-[48%]">
                <Input type='text' placeholder="№ від. НП або адреса" name="department"/>
            </div>
        </div>
    )
}