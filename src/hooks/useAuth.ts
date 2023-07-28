import { supabase } from "@/utils/supabaseClient"
import { useEffect } from "react"
import { useRouter } from "next/router"


export const useAuth = () => {
    const router = useRouter()

    useEffect(() => {
        const { data: listener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if (!session) {
                    router.push('/login')
                }
            }
        )
    
        return () => {
            listener.subscription.unsubscribe()
        }
    }, [])
}
