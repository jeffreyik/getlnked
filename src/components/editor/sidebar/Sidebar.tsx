import BlocksTab from "./BlocksTab";
import { useContext, useState } from "react";
import LayersTab from "./LayerTab";
import { AppContext } from "@/context/AppContext";
import Tab from "./Tab";

const Sidebar = () => {
    const { currentTab, setCurrentTab }: any = useContext(AppContext)

    return (
        <div className="bg-white sticky border-r-[1px] border-r-[#E9E9E9] top-0 left-0 bottom-0 w-[472px] h-[93vh] flex">
            <Tab />
            <div className="w-full overflow-y-auto">
                { currentTab === 'blocks' ? <BlocksTab /> : <LayersTab /> }
            </div>
        </div>
      );
}
 
export default Sidebar;