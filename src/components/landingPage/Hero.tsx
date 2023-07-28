import Image from "next/image"
import ClaimUsername from "../forms/ClaimUsername"
import { useContext, useEffect, useState } from "react"
import { AuthContext, AuthInterface } from "@/context/AuthContext"
import { supabase } from "@/utils/supabaseClient"
import LightSmallbtn from "../buttons/LightSmallbtn"
import Link from "next/link"

const Hero = () => {
  // const { username, setUsername } = useContext(AuthContext) as AuthInterface
  const [username, setUsername] = useState('')
  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const { data, error } = await supabase
      .from('users')
      .select('*')

      const user = data?.find(user => user.username === 'tolani')
  }

  return (
    <div className="relative">
        <header className="flex flex-col items-center justify-between lg:flex-row container mx-auto">
            <div className="lg:w-[53%] py-10 md:py-24 space-y-7 w-full">
                <h1 className="text-[32px] md:text-[48px] text-neutralGray font-medium">Create a Stunning <span className="text-black">Portfolio Site with Ease 🚀</span></h1>
                <p className="text-[16px] md:text-[18px] font-normal text-gray">Create a professional portfolio or personal website with just a few clicks that showcases your work and tells your story in a way that's uniquely you.</p>
                {/* <ClaimUsername text="Claim username" value={username} setValue={setUsername} /> */}
                <div className="flex items-center space-x-4">
                <Link href="/waitlist" className="neo bg-white rounded-[10px] text-black text-[15px] py-4 px-4 shadow-black">
                  Join the waitlist
                </Link>
                <Link href="/demo" className="bg-black rounded-[10px] text-white text-[15px] py-4 px-8">
                    Try demo
                </Link>
                </div>
            </div>
        </header>
        <Image className="w-full h-52 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:w-[47%] lg:h-full object-cover -z-[1]" src="/Frame 108.svg" width={668} height={578} alt="" />
    </div>
  )
}

export default Hero