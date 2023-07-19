import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import Layer from "./Layer";
import { AppInterface, selectedComponentInterface } from "@/interfaces/interfaces";

const LayersTab = () => {
    const { template } = useContext(AppContext) as AppInterface

    const layer = (objects: [] | null) => {
        return objects?.map((item: selectedComponentInterface) => {
            const index = 0
            return item.children && item.children.length > 0 ?
                <Layer item={item} children={layer(item.children as [])} index={index} />
                :  <Layer item={item} index={index} />
        })
    }

    return ( 
        <div className="p-4">
            <h1 className='text-[16px] font-bold pb-2'>Layers</h1>
            <div className="text-[14px]">
                {layer(template)}
            </div>
        </div>
     );
}
 
export default LayersTab;