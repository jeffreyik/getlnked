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
        <div id={id} style={style} className="min-h-[100px] max-w-full space-y-4">
            { children }
        </div>
    </ComponentWrapper>
  )
}

export default Box