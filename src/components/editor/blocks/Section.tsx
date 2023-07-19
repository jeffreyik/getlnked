import { BlockInterface } from "@/interfaces/interfaces"

const Section = ({ id, className, children, style }: BlockInterface) => {
  return (
    <section style={style} id={id} className="py-4 h-fit w-full">
      <div className="max-w-[80em] w-[90%] md:max-w-[80em] md:w-[80%] m-auto py-[20px] space-y-[14px]">
        { children }
      </div>
    </section>
  )
}

export default Section