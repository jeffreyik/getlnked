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
        <section style={style} id={id} className="py-4 h-fit w-full">
          <div className="max-w-[80em] w-[90%] md:max-w-[50em] md:w-[50%] m-auto py-[20px] space-y-[14px]">
            { children }
          </div>
        </section>
    </ComponentWrapper>
  )
}

export default Section