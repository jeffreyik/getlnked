import { BlockInterface } from "@/interfaces/interfaces"

const BtnBlock = ({ text, id, style }: BlockInterface) => {
  return (
    <button id={id} style={style} className="rounded-md text-white min-w-[120px] text-[15px] h-[48px] px-2 py-2 cursor-pointer">{text}</button>
  )
}

export default BtnBlock