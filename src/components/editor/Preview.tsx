import { useCallback, useContext, useEffect, useState } from "react";
import { renderer } from "../templateUi/Renderer";
import { supabase } from "@/utils/supabaseClient";
import { AppContext } from "@/context/AppContext";
import Header from "./blocks/Header";
import LinkBtn from "./blocks/LinkBtn";
import ProjectCard from "./blocks/ProjectCard";
import { nanoid } from "nanoid";
import {AiOutlinePlus} from "react-icons/ai"
import { FaHeading } from "react-icons/fa";

const Preview = () => {
    const { template, setTemplate, isPreviewMode }: any = useContext(AppContext)
    const [toggleDropDown, setToggleDropDown] = useState(false)

    const handleChange = (e: any) => {
        console.log(e.target.innerText)
        e.target.innerText !== '' && 
            setTemplate([...template, {
                "id": nanoid(),
                "children": e.target.innerText,
                "className": "",
                "component": "paragraph block",
                "editable": ["children"]
            }])
        e.target.innerText = ''
    }

    return ( 
        <div className="bg-white w-full">
            <div>
                { template?.map((component: any) => renderer(component)) }

                {/* { !isPreviewMode && 
                <div className="relative flex items-center gap-3">
                { toggleDropDown && <div className="drop-down font-normal shadow-md rounded-lg p-2 absolute left-0 top-8 w-[150px]">
                        <div className="flex items-center gap-4 hover:rounded-[5px] hover:bg-slate-100">
                            <div className="rounded-[5px] bg-slate-100 p-2">
                                <FaHeading />
                            </div>
                            <div>Heading</div>
                        </div>
                </div>}
                    <div onClick={() => setToggleDropDown(!toggleDropDown)} className="cursor-pointer p-2 flex items-center justify-center hover:rounded-[5px] hover:bg-slate-100">
                        <AiOutlinePlus className="" />
                    </div>
                    <div onBlur={(e: any) => handleChange(e)} className="text-black editable flex items-center cursor-text" contentEditable={true} data-placeholder="write something"></div>
                </div>
                
                } */}
            </div>
        </div>
     );
}
 
export default Preview;