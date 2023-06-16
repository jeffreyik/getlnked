import { AppContext } from "@/context/AppContext";
import { useContext, useState } from "react";
import { BsLayers } from "react-icons/bs"
import { FaEdit } from "react-icons/fa";

const LayersTab = ({ handleClick }: any) => {
    const { template, selectedComponent, setSelectedComponent }: any = useContext(AppContext)
    console.log(selectedComponent)
    return ( 
        <div>
            { template.map((component: any) => (
                <div key={component.id}>
                    <div onClick={() => setSelectedComponent(component)} className={`cursor-pointer rounded-[10px] p-2 my-2 ${selectedComponent?.id === component.id ? 'bg-green': 'bg-[#f2f2f2]'}`}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <BsLayers />
                                <div>{component.component}</div>
                            </div>
                            <FaEdit onClick={handleClick} />
                        </div>
                    </div>
                    
                    { 
                        (typeof component.children !== "string" && 
                            component?.children?.map((item: any) => (
                                <div key={item.id} onClick={() => setSelectedComponent(item)} className={`ml-4 cursor-pointer rounded-[10px] p-2 my-2 ${selectedComponent?.id === item.id ? 'bg-green': 'bg-[#f2f2f2]'}`}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <BsLayers />
                                            <div>{item.component}</div>
                                        </div>
                                        <FaEdit onClick={handleClick} />
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            )) }
        </div>
     );
}
 
export default LayersTab;