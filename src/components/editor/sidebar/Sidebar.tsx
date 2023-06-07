import { FiLayers } from "react-icons/fi"
import { FiBox } from "react-icons/fi"
import BlocksTab from "./BlocksTab";
import { useState } from "react";
import LayersTab from "./LayerTab";

const Sidebar = () => {
    const [isBlockActive, setIsBlockActive] = useState(true)

    return (
        <div className="bg-white sticky top-0 w-[403px] h-[900px] rounded-[15px] p-[11px]">
            <div className="tab flex items-center rounded-[15px] bg-[#eaeaea] px-[10px] py-[9px]">
                <div onClick={() => setIsBlockActive(false)} className={`flex items-center rounded-[10px] ${!isBlockActive && 'bg-white text-black'} gap-[10px] px-[29px] py-[10px] cursor-pointer`}>
                    <FiLayers />
                    Layers
                </div>
                <div onClick={() => setIsBlockActive(true)} className={`flex items-center rounded-[10px] gap-[10px] ${isBlockActive && 'bg-white text-black'} px-[29px] py-[10px] cursor-pointer`}>
                    <FiBox />
                    Blocks
                </div>
            </div>

            {isBlockActive ? <BlocksTab /> : <LayersTab /> }
        </div>
      );
}
 
export default Sidebar;