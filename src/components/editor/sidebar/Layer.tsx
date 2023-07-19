import { AppContext } from "@/context/AppContext";
import { useContext, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import ContainerIcon from "./layersIcon/ContainerIcon";
import HeadingIcon from "./layersIcon/HeadingIcon";
import TextIcon from "./layersIcon/TextIcon";
import ImgIcon from "./layersIcon/ImgIcon";
import { AppInterface, selectedComponentInterface } from "@/interfaces/interfaces";

interface LayerInterface  {
    item: selectedComponentInterface,
    children?: React.ReactNode | string,
    index: number
}

const Layer = ({ item, children, index }: LayerInterface) => {
    const { selectedComponent, setSelectedComponent } = useContext(AppContext) as AppInterface
    const [toggleLayer, setToggleLayer] = useState(true)

    const color = selectedComponent?.id === item.id ? '#FFFFFF' : '#000000'

    const mapping: {} = {
        "container": <ContainerIcon color={color} />,
        "heading": <HeadingIcon color={color} />,
        "paragraph": <TextIcon color={color} />,
        "image": <ImgIcon color={color} />,
    }

  return (
    <div className={`bg-[#fafafa] rounded-lg`}>
        <div key={item.id} onClick={() => setSelectedComponent(item)} className={`cursor-pointer rounded-[10px] p-2 my-2 ${selectedComponent?.id === item.id && 'bg-black text-white'}`}>
        <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {item.type === 'container' && <FiChevronDown className={`transition-all ${!toggleLayer && '-rotate-90'}`} onClick={() => setToggleLayer(prevToggleLayer => !prevToggleLayer)} />}
                    <div className="flex items-center gap-2">
                        { mapping[item.type as keyof typeof mapping] }
                        {item.component}
                    </div>
                </div>
            </div>
        </div>

        {toggleLayer && <div style={{paddingLeft: `${index + 20}px`}}>
            { children }
        </div>}
    </div>
  )
}

export default Layer