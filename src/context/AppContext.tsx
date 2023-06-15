import { supabase } from "@/utils/supabaseClient";
import { nanoid } from "nanoid";
import { ReactNode, createContext, useState } from "react";

interface App {
    template: {}[] | null,
    setTemplate: (template: any) => void,
    updateDatabase: () => void,
    selectedComponent: {} | null,
    setSelectedComponent: (selectedComponent: any) => void,
    isPreviewMode: boolean,
    setIsPreviewMode: (isPreviewMode: boolean) => void
}

export const AppContext = createContext<App | null>(null)

export const AppProvider = ({ children }:{ children: ReactNode}) => {
    const [template, setTemplate] = useState([])   
    const [selectedComponent, setSelectedComponent] = useState(null)
    const [isPreviewMode, setIsPreviewMode] = useState(false)


    const updateDatabase = async () => {
        const { data: user } = await supabase.auth.getUser()

        const { data, error } = await supabase
            .from('profiles')
            .update({ template: template })
            .eq("id", user?.user?.id)

        console.log(data)
    }

    return (
        <AppContext.Provider value={{template, setTemplate, updateDatabase, selectedComponent, setSelectedComponent, isPreviewMode, setIsPreviewMode}}>
            { children }
        </AppContext.Provider>
    )
}