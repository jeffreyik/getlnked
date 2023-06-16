import { ReactNode } from "react"
import ComponentWrapper from "./ComponentWrapper"

interface section {
    id?: string | undefined,
    className?: string | undefined,
    children?: ReactNode | string | null,
    style?: {} | undefined
}

const Section = ({ id, className, children, style }: section) => {
  return (
    <ComponentWrapper id={id}>
        <section style={style} className="py-4 hover:border-[1px] hover:border-black h-fit w-full">
          <div className="max-w-[591px] w-[60%] m-auto py-[50px] space-y-[14px]">
            { children }
          </div>
        </section>
    </ComponentWrapper>
  )
}

export default Section