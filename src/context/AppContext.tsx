import { supabase } from "@/utils/supabaseClient";
import { ReactNode, createContext, useState } from "react";

interface App {
    template: [{}] | null,
    setTemplate: (template: any) => void,
    updateDatabase: () => void,
    selectedComponent: {} | null,
    setSelectedComponent: (selectedComponent: any) => void,
}

export const AppContext = createContext<App | null>(null)

export const AppProvider = ({ children }:{ children: ReactNode}) => {
    const [template, setTemplate] = useState(null)   
    const [selectedComponent, setSelectedComponent] = useState(null)

    const updateDatabase = async () => {
        const { data: user } = await supabase.auth.getUser()

        const { data, error } = await supabase
            .from('profiles')
            .update({ template: template })
            .eq("id", user?.user?.id)

        console.log(data)
    }

    return (
        <AppContext.Provider value={{template, setTemplate, updateDatabase, selectedComponent, setSelectedComponent}}>
            { children }
        </AppContext.Provider>
    )
}