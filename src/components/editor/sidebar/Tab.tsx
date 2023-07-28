import { AppContext } from "@/context/AppContext";
import { FiBox, FiLayers } from "react-icons/fi";
import { useContext } from 'react'
import { AppInterface } from "@/interfaces/interfaces";

const Tab = () => {
    const { currentTab, setCurrentTab } = useContext(AppContext) as AppInterface

    const BlockStyle = `${currentTab === 'blocks' ? 'bg-[#f1f1f1]' : 'bg-[#ffffff] text-[#696969]'} w-[38px] h-[38px] flex items-center justify-center rounded-[5px] cursor-pointer`
    const LayerStyle = `${currentTab === 'layer' ? 'bg-[#f1f1f1]' : 'bg-[#ffffff] text-[#696969]'} w-[38px] h-[38px] flex items-center justify-center rounded-[5px] cursor-pointer`

    return ( 
        <div className="w-[68px] gap-4 text-[20px] pt-4 flex flex-col items-center border-r-[1px] border-r-[#E9E9E9]">
            <div onClick={() => setCurrentTab('blocks')}
             className={BlockStyle}>
                <FiBox />
            </div>

            <div onClick={() => setCurrentTab('layer')}
            className={LayerStyle}>
                <FiLayers />
            </div>
        </div>
     );
}
 
export default Tab;