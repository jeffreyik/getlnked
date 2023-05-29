import InputField from "@/components/forms/InputField";
import { supabase } from "@/utils/supabaseClient";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const loginUser = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          })
          if (data.user) {
            router.push('/admin')
          }
          setEmail('')
          setPassword('')
          setLoading(false)
    }

    return ( 
        <div className="h-screen flex">
            <Image
             className="hidden lg:block fixed w-[35%] h-screen top-0 left-0 bottom-0 object-cover"
             src="/banner.svg" width={532} height={1024} alt="" />

             <div className="w-[90%] mx-auto lg:w-[100%] lg:ml-[35%] flex items-center justify-center">
                <div className="flex flex-col max-w-[384px]">
                    <h1 className="text-[32px] font-semibold pb-[14px]">Login</h1>
                    <button className="flex items-center justify-center text-[14px] text-[#7d7d7d] gap-[10px] border-[1px] border-[#d7d7d7] rounded-[10px] h-[49px] w-full mb-[38px]">
                        <Image src="/googleLogo.svg" width={24} height={24} alt="google logo" />
                        Login with google
                    </button>
                    <form onSubmit={loginUser}>
                        <div className="space-y-4 w-full">
                            <InputField type="email" placeholder="Email address" value={email} setValue={setEmail} />
                            <InputField type="password" placeholder="Password" value={password} setValue={setPassword} />
                        </div>
                        <button disabled={loading} className="py-[15px] mt-[55px] neo rounded-[10px] w-full h-[49px]">{loading ? 'Loading...' : 'Login'}</button>
                        <p className="flex gap-1 pt-[19px] items-center justify-center text-[14px] text-[#6a6a6a]">Don't have an account?<Link href="/signup" className="text-black">Sign up</Link></p>
                    </form>
                </div>
             </div>
        </div>
     );
}

 
export default Login;