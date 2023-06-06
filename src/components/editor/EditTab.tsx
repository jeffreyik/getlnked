import { AppContext } from "@/context/AppContext";
import { useContext, useEffect, useState } from "react";

const EditTab = () => {
    const { template, setTemplate, selectedComponent, setSelectedComponent }: any = useContext(AppContext)
    const [text, setText] = useState('')

    useEffect(() => {
        setText(selectedComponent?.children)
    }, [selectedComponent])

    const editHeading = (e: any, id: string | undefined) => {
        const newState = template.map((component: any) => {
            if (component.id === id) {
                return { ...component, children: text }
            } else {
                return component
            }
        })

        console.log(e.target)
        console.log(newState)
        setTemplate(newState)
    }

    const deleteHeading = (e: any, id: string | undefined) => {
        const newState = template.filter((component: any) => {
            if (component.id !== id) {
                return component
            } else {
                return 
            }
        })

        setTemplate(newState)

        console.log(newState)
    }

    
    if (selectedComponent?.component === "heading") 
        return (
            <div className="bg-white w-[400px] h-[600px] rounded-[15px] p-[11px]">
                <h1 className="">Edit heading</h1>
                <input type="text" value={text} onChange={(e: any) => setText(e.target.value)} className="border-[1px] rounded-md mt-4" placeholder="enter text" />
                <button className="bg-black text-white text-center w-full rounded-lg py-2 mt-10" onClick={(e: any) => editHeading(e, selectedComponent.id)}>Save</button>
                <button className="bg-black text-white text-center w-full rounded-lg py-2 mt-2" onClick={(e: any) => deleteHeading(e, selectedComponent.id)}>Delete</button>
            </div>
        )

        return ( 
            <div className="bg-white w-[400px] h-[600px] rounded-[15px] p-[11px]">
                Edit tab
            </div>
        );
    
}
 
export default EditTab;