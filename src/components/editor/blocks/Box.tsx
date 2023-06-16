import { ReactNode } from "react"
import ComponentWrapper from "./ComponentWrapper"

interface box {
    id?: string | undefined,
    className?: string | undefined,
    children?: ReactNode | string | null,
    style?: {} | undefined
}

const Box = ({ id, className, children, style }: box) => {
  return (
    <ComponentWrapper id={id}>
        <div style={style} className="hover:border-[1px] hover:border-black h-fit w-full">
            { children }
        </div>
    </ComponentWrapper>
  )
}

export default Box