import { BlockInterface } from "@/interfaces/interfaces"

const Box = ({ id, className, children, style }: BlockInterface) => {
  return (
    <div id={id} style={style} className="min-h-[100px] max-w-full space-y-4">
        { children }
    </div>
  )
}

export default Box