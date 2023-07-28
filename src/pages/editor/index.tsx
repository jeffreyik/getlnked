import NavBar from "@/components/editor/NavBar"
import Preview from "@/components/editor/Preview"
import EditTab from "@/components/editor/sidebar/EditTab"
import Sidebar from "@/components/editor/sidebar/Sidebar"
import { AppContext } from "@/context/AppContext"
import { supabase } from "@/utils/supabaseClient"
import { useRouter } from "next/router"
import { useEffect, useState, useContext, MouseEvent } from "react"


const Admin = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const { isPreviewMode, setIsPreviewMode, toggleEditTab }: any = useContext(AppContext)
    
    useEffect(() => {
        const protectPage = async () => {
            supabase.auth.onAuthStateChange((event, session) => {
                if (!session) {
                    router.push('/')
                }
                else {
                    setLoading(false)
                }
            })
        }
        protectPage()
    }, [])

    if(loading)
        return (
            <h1>Loading...</h1>
        )

    if (isPreviewMode) 
            return (
                <div>
                    <NavBar />
                    <Preview />
                </div>
            )
    
        return (
            <div className="bg-[#f5f5f4] min-h-screen">
                <NavBar />
                <div className="flex relative gap-4">
                    <Sidebar />
                    <Preview />
                    {toggleEditTab && <EditTab />}
                </div>
            </div>
        )
}

export default Admin