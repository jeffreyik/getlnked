import Link from "next/link"

interface Label {
    text: string
}

const LightSmallbtn = ({ text }: Label) => {
  return (
    <Link href="/" className="neo bg-white rounded-[10px] text-black text-[15px] py-2 px-4 shadow-black">
        { text }
    </Link>
  )
}

export default LightSmallbtn