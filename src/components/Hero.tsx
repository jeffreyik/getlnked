import Image from "next/image"
import ClaimUsername from "./forms/ClaimUsername"

const Hero = () => {
  return (
    <div className="relative">
        <header className="flex items-center justify-between container mx-auto">
            <div className="w-[53%] py-20 space-y-7">
                <h1 className="text-[48px] text-neutralGray font-medium">Create a Stunning <span className="text-black">Portfolio Site with Ease 🚀</span></h1>
                <p className="text-[18px] font-normal text-gray">Create a professional portfolio or personal website with just a few clicks that showcases your work and tells your story in a way that's uniquely you.</p>
                <ClaimUsername text="Claim username" />
            </div>
            <Image className="absolute top-0 right-0 bottom-0 w-[47%] -z-[1]" src="./assets/Frame 108.svg" width={668} height={578} alt="" />
        </header>
    </div>
  )
}

export default Hero