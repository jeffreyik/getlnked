import DarkSmallbtn from "./buttons/DarkSmallbtn";
import LightSmallbtn from "./buttons/LightSmallbtn";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <div className="sticky top-0 left-0 w-full z-50 bg-white">
            <Link href="/waitlist" className='bg-black text-white w-full flex items-center justify-center p-2 text-[15px] gap-2 transition-all hover:gap-4'>Join the waitlist to get early access 🚀 <Image src="/arrow-right.svg" width={24} height={24} alt="" /></Link>
            <nav className="container mx-auto py-[21px] flex justify-between items-center bg-white">
                <h1 className="logo text-[20px]">getlnked</h1>

                <div className="flex space-x-4">
                    <DarkSmallbtn text="Log in" />
                    <LightSmallbtn text="Sign up" />
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;