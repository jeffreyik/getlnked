import DarkSmallbtn from "./buttons/DarkSmallbtn";
import LightSmallbtn from "./buttons/LightSmallbtn";
import Link from "next/link";

const Navbar = () => {
    return ( 
        <div className="fixed top-0 left-0 w-full z-50 bg-white">
            <Link href="/waitlist" className='bg-black text-white w-full flex items-center justify-center p-2'>Join the waitlist now to get early access 🚀</Link>
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