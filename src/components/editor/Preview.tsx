import { useContext, useEffect, useState } from "react";
import { renderer } from "../templateUi/Renderer";
import { supabase } from "@/utils/supabaseClient";
import { AppContext } from "@/context/AppContext";
import Header from "./blocks/Header";
import LinkBtn from "./blocks/LinkBtn";
import ProjectCard from "./blocks/ProjectCard";

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
            <div className="max-w-[591px] w-[60%] m-auto py-[50px] space-y-[14px]">
                { template?.map((component: any) => renderer(component)) }
                {/* <Header />
                <ProjectCard />
                <ProjectCard /> */}
            </div>
        </div>
     );
}
 
export default Preview;