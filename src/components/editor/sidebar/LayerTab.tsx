import { AppContext } from "@/context/AppContext";
import { useContext, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import ContainerIcon from "./layersIcon/ContainerIcon";
import HeadingIcon from "./layersIcon/HeadingIcon";
import Layer from "./Layer";

const LayersTab = ({ handleClick }: any) => {
    const { template }: any = useContext(AppContext)

    const layer = (objects: any) => {
        return objects?.map((item: any) => {
            const index = 0
            return item.children && item.children.length > 0 ?
                <Layer item={item} children={layer(item.children)} index={index} />
                :  <Layer item={item} />
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