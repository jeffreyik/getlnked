import InputField from "@/components/forms/InputField";
import Image from "next/image";
import Link from "next/link";

const Waitlist = () => {
    return ( 
        <div className="flex flex-col items-center h-screen mx-auto max-w-[70em] w-[90%]">
            <Image className="absolute top-0 w-full h-[24px] object-cover" src="/cover2.png" width={1440} height={54} alt="banner" />
            <div className="max-w-[415px] mt-24 flex flex-col justify-center items-center">
                <Image className="mb-[27px]" src="/waitlistlogo.svg" width={106} height={107.57} alt="getlnked logo" />
                <h1 className="text-[24px] mb-[27px] text-neutralGray text-center font-medium lg:text-[36px]">Join the waitlist <span className="text-black">to get early access</span></h1>
                <form className="space-y-7">
                    <InputField type="text" placeholder="Name" />
                    <InputField type="email" placeholder="Email address" />
                    <button className="py-[15px] mt-[55px] neo w-full rounded-[10px] h-[49px]">Join waitlist</button>
                </form>
                <Link href="https://chat.whatsapp.com/C5t6UsN7BYuHTCgnWlCAya" target="_blank" className="text-center text-[14px] mt-7 hover:underline">Join our whatsapp community</Link>
            </div>
        </div>
     );
}
 
export default Waitlist;