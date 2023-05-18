import InputField from "@/components/forms/InputField";
import { supabase } from "@/supabase";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState, MouseEvent } from "react";

interface userInterface {
    email: string;
    username: string;
}

const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const saveUserToDatabase = async (user: userInterface) => {
        const { error } = await supabase
            .from('users')
            .insert(user)
        
        console.log(error)
    }

    const signUpWithGoogle = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
                
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google'
        })

        console.log(data)
        console.log(error)
  
    }

    const signUpUser = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        if (password === confirmPassword) {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password
            })
            saveUserToDatabase({ email: email, username: username })

            setUsername('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setLoading(false)
            console.log(data)
            console.log(error)
        } else {
            setLoading(false)
        }
    }

    return ( 
        <div className="h-screen flex">
            <Image
             className="hidden lg:block fixed w-[35%] h-screen top-0 left-0 bottom-0 object-cover"
             src="/banner.svg" width={532} height={1024} alt="" />

             <div className="w-[90%] mx-auto lg:w-[100%] lg:ml-[35%] flex items-center justify-center">
                <form className="flex flex-col max-w-[384px]" onSubmit={signUpUser}>
                    <h1 className="text-[32px] font-semibold pb-[14px]">Create a free account</h1>
                    <button onClick={signUpWithGoogle} className="flex items-center justify-center text-[14px] text-[#7d7d7d] gap-[10px] border-[1px] border-[#d7d7d7] rounded-[10px] h-[49px] w-full mb-[38px]">
                        <Image src="/googleLogo.svg" width={24} height={24} alt="google logo" />
                        sign up with a google account
                    </button>
                    <div className="space-y-4 w-full">
                        <InputField type="text" placeholder="Username" value={username} setValue={setUsername} />
                        <InputField type="email" placeholder="Email address" value={email} setValue={setEmail} />
                        <InputField type="password" placeholder="Password" value={password} setValue={setPassword} />
                        <InputField type="password" placeholder="Confirm password" value={confirmPassword} setValue={setConfirmPassword} />
                    </div>
                    <button disabled={loading} className="py-[15px] mt-[55px] neo rounded-[10px] h-[49px]">{loading ? 'Loading...' : 'Sign up'}</button>
                    <p className="flex gap-1 pt-[19px] items-center justify-center text-[14px] text-[#6a6a6a]">Already got an account?<Link href="/login" className="text-black">Login</Link></p>
                </form>
             </div>
        </div>
     );
}
 
export default Signup;