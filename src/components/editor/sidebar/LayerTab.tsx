import { AppContext } from "@/context/AppContext";
import { useContext, useState } from "react";
import { BsLayers } from "react-icons/bs"
import { FaEdit } from "react-icons/fa";

const LayersTab = ({ handleClick }: any) => {
    const { template, selectedComponent, setSelectedComponent }: any = useContext(AppContext)

    return ( 
        <div>
            { template.map((component: any) => (
                <div key={component.id} onClick={() => setSelectedComponent(component)} className='cursor-pointer rounded-[10px] p-2 my-2 bg-[#f2f2f2]'>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <BsLayers />
                            <div>{component.component}</div>
                        </div>
                        <FaEdit onClick={handleClick} />
                    </div>
                </div>
            )) }
        </div>
     );
}
 
export default LayersTab;