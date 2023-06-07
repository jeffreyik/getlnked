import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { BsLayers } from "react-icons/bs"
import { BiChevronRight } from "react-icons/bi"

const LayersTab = () => {
    const { template, selectedComponent, setSelectedComponent }: any = useContext(AppContext)

    return ( 
        <div>
            { template.map((component: any) => (
                <div key={component.id} onClick={() => setSelectedComponent(component)} className={`flex items-center justify-between cursor-pointer rounded-[10px] p-2 my-2 bg-[#f2f2f2] ${selectedComponent?.id === component.id && 'bg-green'}`}>
                    <div className="flex items-center gap-2">
                        <BsLayers />
                        <div>{component.component}</div>
                    </div>
                    <BiChevronRight className="text-2xl" />
                </div>
            )) }
        </div>
     );
}
 
export default LayersTab;