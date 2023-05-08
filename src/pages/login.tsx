import InputField from "@/components/forms/InputField";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
    return ( 
        <div className="h-screen flex">
            <Image
             className="hidden lg:block fixed w-[35%] h-screen top-0 left-0 bottom-0 object-cover"
             src="/banner.svg" width={532} height={1024} alt="" />

             <div className="w-[90%] mx-auto lg:w-[100%] lg:ml-[35%] flex items-center justify-center">
                <form className="flex flex-col max-w-[384px]">
                    <h1 className="text-[32px] font-semibold pb-[14px]">Login</h1>
                    <button className="flex items-center justify-center text-[14px] text-[#7d7d7d] gap-[10px] border-[1px] border-[#d7d7d7] rounded-[10px] h-[49px] w-full mb-[38px]">
                        <Image src="/Google.svg" width={24} height={24} alt="google logo" />
                        Login with a google account
                    </button>
                    <div className="space-y-4 w-full">
                        <InputField type="email" placeholder="Email address" />
                        <InputField type="password" placeholder="Password" />
                    </div>
                    <button className="py-[15px] mt-[55px] neo rounded-[10px] h-[49px]">Login</button>
                    <p className="flex gap-1 pt-[19px] items-center justify-center text-[14px] text-[#6a6a6a]">Don't have an account?<Link href="/signup" className="text-black">Sign up</Link></p>
                </form>
             </div>
        </div>
     );
}

 
export default Login;