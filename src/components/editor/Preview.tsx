import { useEffect, useState } from "react";
import { renderer } from "../templateUi/Renderer";
import { supabase } from "@/utils/supabaseClient";

const Preview = () => {
    const [template, setTemplate] = useState<[] | null>(null)

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
            { template?.map(component => renderer(component)) }
        </div>
     );
}
 
export default Preview;