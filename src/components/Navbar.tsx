import DarkSmallbtn from "./buttons/DarkSmallbtn";
import LightSmallbtn from "./buttons/LightSmallbtn";

const Navbar = () => {
    return ( 
        <nav className="container mx-auto py-[21px] flex justify-between items-center bg-white">
            <h1 className="logo text-[20px]">getlnked</h1>

            <div className="flex space-x-4">
                <DarkSmallbtn text="Log in" />
                <LightSmallbtn text="Sign up" />
            </div>
        </nav>
     );
}
 
export default Navbar;