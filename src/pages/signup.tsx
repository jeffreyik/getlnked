import ClaimUsername from "@/components/forms/ClaimUsername";
import InputField from "@/components/forms/InputField";
import { AuthContext, AuthInterface } from "@/context/AuthContext";
import { supabase } from "@/utils/supabaseClient";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState, MouseEvent, useContext } from "react";

interface userInterface {
    email?: string | undefined;
    username?: string;
    avatar_url: string | null;
    id?: string | null;
    updated_at: string | undefined;
}

const Signup = () => {
    // const [username, setUsername] = useState('')
    const { username, setUsername } = useContext(AuthContext) as AuthInterface
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const saveUserToDatabase = async (user: userInterface) => {
        const { error } = await supabase
            .from('profiles')
            .update(user)
            .eq('id', user.id)
        
        console.log(error)
    }

    const signUpWithGoogle = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
                
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google'
        })
    }

    const signUpUser = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        if (password === confirmPassword) {
            const { data: { user }, error } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        username: username,
                        website: `getlnked.me/${username}`,
                    }
                }
            })
            console.log(user)
            console.log(error)

            setUsername('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setLoading(false)
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
                <div className="flex flex-col w-[384px]">
                    <h1 className="text-[32px] font-semibold pb-[14px]">Create an account</h1>
                    <button onClick={signUpWithGoogle} className="flex items-center justify-center text-[14px] text-[#7d7d7d] gap-[10px] border-[1px] border-[#d7d7d7] rounded-[10px] h-[49px] w-full mb-[38px]">
                        <Image src="/googleLogo.svg" width={24} height={24} alt="google logo" />
                        sign up with google
                    </button>
                    <form onSubmit={signUpUser}>
                        <div className="space-y-4 w-full">
                            <ClaimUsername variant="secondary" value={username} setValue={setUsername} />
                            <InputField type="email" placeholder="Email address" value={email} setValue={setEmail} />
                            <InputField type="password" placeholder="Password" value={password} setValue={setPassword} />
                            <InputField type="password" placeholder="Confirm password" value={confirmPassword} setValue={setConfirmPassword} />
                        </div>
                        <button disabled={loading} className="py-[15px] mt-[55px] neo rounded-[10px] w-full h-[49px]">{loading ? 'Loading...' : 'Sign up'}</button>
                        <p className="flex gap-1 pt-[19px] items-center justify-center text-[14px] text-[#6a6a6a]">Already got an account?<Link href="/login" className="text-black">Login</Link></p>
                    </form>
                </div>
             </div>
        </div>
     );
}
 
export default Signup;