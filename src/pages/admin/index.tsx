import { supabase } from "@/utils/supabaseClient"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Admin = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const logOutUser = async () => {
        const { error } = await supabase.auth.signOut()
        console.log(error)
    }

    useEffect(() => {
        const protectPage = async () => {
            supabase.auth.onAuthStateChange((event, session) => {
                if (!session) {
                    router.push('/login')
                }
                else {
                    setLoading(false)
                    console.log(session)
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
            <div>
                <div>
                    <h1>Admin page</h1>
                    <button onClick={logOutUser}>log out</button>
                </div> 
            </div>
        )
}


export default Admin