import { useContext, useEffect, useState } from "react";
import { renderer } from "../templateUi/Renderer";
import { supabase } from "@/utils/supabaseClient";
import { AppContext } from "@/context/AppContext";

const Preview = () => {
    const { template, setTemplate }: any = useContext(AppContext)

    useEffect(() => {
        getTemplate()
    }, [])

    const getTemplate = async () => {
        const { data: user } = await supabase.auth.getUser()

        const { data, error } = await supabase
          .from("profiles")
          .select("template")
          .eq("id", user.user?.id)
          .single()

        setTemplate(data?.template)
    }

    return ( 
        <div className="bg-white w-full">
            <div className="max-w-[80em] w-[80%] m-auto">
                { template?.map((component: any) => renderer(component)) }
            </div>
        </div>
     );
}
 
export default Preview;