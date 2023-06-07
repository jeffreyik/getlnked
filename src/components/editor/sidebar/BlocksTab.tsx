import { FiLink } from "react-icons/fi"
import { FiYoutube } from "react-icons/fi"
import { FiMousePointer } from "react-icons/fi"
import { FiCreditCard } from "react-icons/fi"
import { FiTwitter} from "react-icons/fi"
import { FiImage } from "react-icons/fi"
import { FaHeading } from "react-icons/fa"
import { MdOutlineTextFields } from "react-icons/md"
import { nanoid } from "nanoid"
import { useContext } from 'react'
import { AppContext } from "@/context/AppContext"

const BlocksTab = () => {
    const { template, setTemplate }: any = useContext(AppContext)
    const config =
        {
          "id": nanoid(),
          "children": "Heading",
          "className": "text-3xl",
          "component": "heading block"
        }

    const linkConfig = {
        "id": nanoid(),
        "link": null,
        "text": "link",
        "component": "link block",
    }

    const imgConfig = {
        "id": nanoid(),
        "url": "https://joadre.com/wp-content/uploads/2019/02/no-image.jpg",
        "component": "image block",
    }

    const addHeading = () => {
        setTemplate([...template, config])
    }

    const addLinkBtn = () => {
        setTemplate([...template, linkConfig])
    }

    const addImg = () => {
        setTemplate([...template, imgConfig])
    }


    return ( 
        <div className="grid grid-cols-3 gap-2 pt-4">
                <div onClick={addHeading} className="cursor-pointer flex flex-col gap-4 bg-[#f2f2f2] text-[#2f2f2f] rounded-[5px] py-[13px] px-[17px] justify-center items-center text-center">
                    <FaHeading className="text-2xl" />
                    <p className="text-[15px]">Heading</p>
                </div>
                <div className="flex flex-col gap-4 bg-[#f2f2f2] text-[#2f2f2f] rounded-[5px] py-[13px] px-[17px] justify-center items-center text-center">
                    <MdOutlineTextFields className="text-2xl" />
                    <p className="text-[15px]">Text</p>
                </div>
                <div onClick={addImg} className="flex flex-col gap-4 bg-[#f2f2f2] text-[#2f2f2f] rounded-[5px] py-[13px] px-[17px] justify-center items-center text-center">
                    <FiImage className="text-2xl" />
                    <p className="text-[15px]">Image</p>
                </div>
                <div onClick={addLinkBtn} className="flex flex-col gap-4 bg-[#f2f2f2] text-[#2f2f2f] rounded-[5px] py-[13px] px-[17px] justify-center items-center text-center">
                    <FiLink className="text-2xl" />
                    <p className="text-[15px]">Link</p>
                </div>
                <div className="flex flex-col gap-4 bg-[#f2f2f2] text-[#2f2f2f] rounded-[5px] py-[13px] px-[17px] justify-center items-center text-center">
                    <FiMousePointer className="text-2xl" />
                    <p className="text-[15px]">Button</p>
                </div>
                <div className="flex flex-col gap-4 bg-[#f2f2f2] text-[#2f2f2f] rounded-[5px] py-[13px] px-[17px] justify-center items-center text-center">
                    <FiYoutube className="text-2xl" />
                    <p className="text-[15px]">Youtube</p>
                </div>
                <div className="flex flex-col gap-4 bg-[#f2f2f2] text-[#2f2f2f] rounded-[5px] py-[13px] px-[17px] justify-center items-center text-center">
                    <FiCreditCard className="text-2xl" />
                    <p className="text-[15px]">Card</p>
                </div>
                <div className="flex flex-col gap-4 bg-[#f2f2f2] text-[#2f2f2f] rounded-[5px] py-[13px] px-[17px] justify-center items-center text-center">
                    <FiTwitter className="text-2xl" />
                    <p className="text-[15px]">Social links</p>
                </div>
            </div>
     );
}
 
export default BlocksTab;