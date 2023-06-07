import { AppContext } from "@/context/AppContext";
import { supabase } from "@/utils/supabaseClient";
import { ReactNode, useContext, useEffect, useState } from "react";

interface heading {
    id?: string | undefined,
    className?: string | undefined,
    children?: ReactNode | string | null,
    style?: {} | undefined
}


const Heading = ({ id, className, children, style }: heading) => {
    const { template, setTemplate, updateDatabase, selectedComponent, setSelectedComponent }: any= useContext(AppContext)


    const editHeading = (e: any, id: string | undefined) => {
        // updateDatabase()
        const component = template.find((component: any) => component.id === id)
        console.log(component)
        console.log(template)
        setSelectedComponent(component)
    }

    return ( 
        <h1 style={style} onClick={(e) => editHeading(e, id)} className={className}>{children}</h1>
     );
}
 
export default Heading;