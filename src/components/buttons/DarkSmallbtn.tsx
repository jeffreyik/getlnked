import Link from "next/link"

interface Label {
    text: string
}

const DarkSmallbtn = ({ text }: Label) => {
  return (
    <Link href="/" className="bg-black rounded-[10px] text-white text-[15px] py-2 px-4">
        { text }
    </Link>
  )
}

export default DarkSmallbtn