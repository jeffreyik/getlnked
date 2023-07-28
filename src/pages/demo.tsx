import NavBar from "@/components/editor/NavBar"
import Preview from "@/components/editor/Preview"
import EditTab from "@/components/editor/sidebar/EditTab"
import Sidebar from "@/components/editor/sidebar/Sidebar"
import { AppContext } from "@/context/AppContext"
import { useRouter } from "next/router"
import { useState, useContext } from "react"


const Demo = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const { isPreviewMode, setIsPreviewMode, toggleEditTab }: any = useContext(AppContext)

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

export default Demo