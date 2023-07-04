import ComponentWrapper from "./ComponentWrapper"

interface Button {
    text: string | null,
    id: string | undefined,
    style: {} | undefined
}

const BtnBlock = ({ text, id, style }: Button) => {
  return (
    <ComponentWrapper id={id}>
        <button id={id} style={style} className="rounded-md text-white min-w-[120px] text-[15px] h-[48px] px-2 py-2 cursor-pointer">{text}</button>
    </ComponentWrapper>
  )
}

export default BtnBlock