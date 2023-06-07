import EditTab from "@/components/editor/EditTab"
import NavBar from "@/components/editor/NavBar"
import Preview from "@/components/editor/Preview"
import Sidebar from "@/components/editor/sidebar/Sidebar"
import { supabase } from "@/utils/supabaseClient"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


const Admin = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const protectPage = async () => {
            supabase.auth.onAuthStateChange((event, session) => {
                if (!session) {
                    router.push('/login')
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
    
        return (
            <div className="bg-[#f5f5f4] min-h-screen">
                <NavBar />
                <div className="flex max-w-[100em] w-[95%] m-auto pt-4 relative gap-4">
                    <Sidebar />
                    <Preview />
                    {/* <EditTab /> */}
                </div>
            </div>
        )
}

export default Admin