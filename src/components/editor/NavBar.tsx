import { AppContext } from "@/context/AppContext";
import { useContext } from 'react'
import { supabase } from "@/utils/supabaseClient";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import { FiActivity } from "react-icons/fi";
import { FiShare } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";

const NavBar = () => {
    const [isDropDown, setIsDropDown] = useState(false)
    const { isPreviewMode, setIsPreviewMode }: any = useContext(AppContext)

    const logOutUser = async () => {
        const { error } = await supabase.auth.signOut()
    }

    const toggleDropDown = () => {
        setIsDropDown(!isDropDown)
    }

    if (isPreviewMode) {
        return (
            <nav className="bg-white py-4 sticky top-0 left-0 w-full shadow-md">
                <div className="max-w-[100em] w-[95%] m-auto flex justify-between items-center">
                    <BiArrowBack onClick={() => setIsPreviewMode(false)} className="cursor-pointer text-2xl" />
                    <h1 className="text-[20px]">Preview Mode</h1>
                    <div></div>
                </div>
            </nav>
        )
    }

    return ( 
        <nav className="bg-white py-4 border-b-[1px] border-b-[#E9E9E9]">
                    <div className="max-w-[100em] w-[95%] m-auto flex justify-between items-center">
                        <Image src="/getlnkedLogo.svg" width={115.51} height={19.51} alt="getlnked logo" />
                        <div className="nav-links flex items-center gap-10">
                            <Link href="/editor" className="flex items-center gap-2 text-[15px] font-medium">
                                <FiEdit />
                                Editor
                            </Link>
                            <Link href="/editor" className="flex items-center gap-2 text-[15px] font-medium text-[#686868]">
                                <FiGrid />
                                Templates
                            </Link>
                            <Link href="/editor" className=" flex items-center gap-2 text-[15px] font-medium text-[#686868]">
                                <FiActivity />
                                Analytics
                            </Link>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="rounded-[10px] bg-[#f1f1f1] w-[107px] h-[41px] flex justify-center items-center gap-[10px] text-[15px]">
                                <FiShare />
                                Share
                            </button>
                            <button onClick={() => setIsPreviewMode(true)} className="rounded-[10px] bg-black text-white w-[107px] h-[41px] flex justify-center items-center gap-[10px] text-[15px]">
                                <FiEye />
                                Preview
                            </button>
                            <div className="relative">
                                <Image onClick={toggleDropDown} className="rounded-[50%] cursor-pointer" src="data:image/jpeg;base64,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" width={41} height={41} alt="avatar image" />
                               {isDropDown && <div onClick={logOutUser} className="absolute top-14 shadow-md right-0 bg-white z-50 rounded-lg p-4 w-[130px] flex items-center gap-2 cursor-pointer">
                                    <FiLogOut />
                                    Log out
                                </div>}
                            </div>
                        </div>
                    </div>
                </nav>
     );
}
 
export default NavBar;