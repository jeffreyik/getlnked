import { MouseEvent, useContext, useRef, useState } from "react";
import { renderer } from "../Renderer";
import { AppContext } from "@/context/AppContext";

interface preview {
    handleClick?: (e: MouseEvent<HTMLDivElement>) => void
}

const Preview = ({ handleClick }: preview) => {
    const { template, setSelectedComponent, setCurrentTab, isPreviewMode, setToggleEditTab }: any = useContext(AppContext)
    const [toggleDropDown, setToggleDropDown] = useState(false)
    const parentRef = useRef(null)

    const selectComponent = (parent: any, id: string | undefined) => {
        parent.find((component: any) => {
            if (component.id === id) {
                setSelectedComponent(component)
            } else if (component.children && component.children.length > 0) {
                selectComponent(component.children, id)
            }
        }) 
      }


    return ( 
        <div className="pt-10 w-full overflow-y-scroll h-[89vh]">
            <div className={`bg-white ${isPreviewMode ? 'w-full' : 'max-w-[97%]'} min-h-screen h-fit`}>
                <div ref={parentRef} onClick={(e: any) => selectComponent(template, e.target.id)}>
                    { template?.map((component: any) => renderer(component)) }
                </div>
            </div>
        </div>
     );
}
 
export default Preview;