import React from "react"

interface BlockType {
  name: string | null,
  component: React.ComponentType,
  handleClick: () => void
}

const Block = ({ name, component, handleClick }: BlockType) => {
  const Component = component
  return (
    <div onClick={handleClick} className="cursor-pointer flex flex-col gap-2 text-[#2f2f2f] justify-center items-center text-center">
        <div className="text-2xl">
          <Component />
        </div>
        <p className="text-[11px]">{name}</p>
    </div>
  )
}

export default Block