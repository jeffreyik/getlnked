import InputField from "@/components/forms/InputField";
import Image from "next/image";
import Link from "next/link";

const Waitlist = () => {
    return ( 
        <div className="flex flex-col justify-center items-center h-screen">
            <Image className="absolute top-0 w-full" src="/cover2.png" width={1440} height={54} alt="banner" />
            <div className="max-w-[415px] flex flex-col justify-center items-center">
                <Image className="mb-[52px]" src="/waitlistlogo.svg" width={106} height={107.57} alt="getlnked logo" />
                <h1 className="text-[36px] mb-[59px] text-neutralGray text-center font-medium">Join the waitlist <span className="text-black">to get early access</span></h1>
                <form className="space-y-7">
                    <InputField type="text" placeholder="Name" />
                    <InputField type="email" placeholder="Email address" />
                    <button className="py-[15px] mt-[55px] neo w-full rounded-[10px] h-[49px]">Join waitlist</button>
                </form>
                <Link href="https://chat.whatsapp.com/C5t6UsN7BYuHTCgnWlCAya" target="_blank" className="text-center mt-10 hover:underline">Join our whatsapp community</Link>
            </div>
        </div>
     );
}
 
export default Waitlist;