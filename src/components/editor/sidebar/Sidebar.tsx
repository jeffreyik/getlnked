import { FiLayers } from "react-icons/fi"
import { FiBox } from "react-icons/fi"
import BlocksTab from "./BlocksTab";
import { useState } from "react";
import LayersTab from "./LayerTab";
import EditTab from "./EditTab";

const Sidebar = () => {
    // const [isBlockActive, setIsBlockActive] = useState(true)
    // const [isEditTab, setIsEditTab] = useState(true)
    const [currentTab, setCurrentTab] = useState('blocks')

    return (
        <div className="bg-white sticky top-0 w-[403px] min-h-[900px] rounded-[15px] p-[11px]">
            {currentTab !== 'edit' && <div className="tab flex items-center rounded-[15px] bg-[#eaeaea] px-[10px] py-[9px]">
                <div onClick={() => setCurrentTab('layer')} className={`flex items-center rounded-[10px] ${currentTab === 'layer' && 'bg-white text-black'} gap-[10px] px-[29px] py-[10px] cursor-pointer`}>
                    <FiLayers />
                    Layers
                </div>
                <div onClick={() => setCurrentTab('blocks')} className={`flex items-center rounded-[10px] gap-[10px] ${currentTab === 'blocks' && 'bg-white text-black'} px-[29px] py-[10px] cursor-pointer`}>
                    <FiBox />
                    Blocks
                </div>
            </div>}

           { currentTab === 'blocks' ? <BlocksTab /> : currentTab === 'layer' ? <LayersTab handleClick={() => setCurrentTab('edit')} /> : <EditTab handleClick={() => setCurrentTab('layer')} /> }
        </div>
      );
}
 
export default Sidebar;