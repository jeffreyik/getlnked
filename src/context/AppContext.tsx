import { AppInterface } from "@/interfaces/interfaces";
import { supabase } from "@/utils/supabaseClient";
import { ReactNode, createContext, useState } from "react";

export const AppContext = createContext<AppInterface | null>(null)

export const AppProvider = ({ children }:{ children: ReactNode}) => {
    const [template, setTemplate] = useState([])   
    const [selectedComponent, setSelectedComponent] = useState(null)
    const [isPreviewMode, setIsPreviewMode] = useState(false)
    const [currentTab, setCurrentTab] = useState('blocks')
    const [toggleEditTab, setToggleEditTab] = useState(false)

    const updateDatabase = async () => {
        const { data: user } = await supabase.auth.getUser()

        const { data, error } = await supabase
            .from('profiles')
            .update({ template: template })
            .eq("id", user?.user?.id)

        console.log(data)
    }

    return (
        <AppContext.Provider value={{template, setTemplate, updateDatabase, 
        selectedComponent, setSelectedComponent, isPreviewMode, setIsPreviewMode, 
        currentTab, setCurrentTab, toggleEditTab, setToggleEditTab}}>
            { children }
        </AppContext.Provider>
    )
}