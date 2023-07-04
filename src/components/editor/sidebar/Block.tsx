import React from "react"

const Block = ({ name, children, handleClick }: any) => {
  return (
    <div onClick={handleClick} className="cursor-pointer flex flex-col gap-2 text-[#2f2f2f] justify-center items-center text-center">
        <div className="text-2xl">
            { React.createElement(children) }
        </div>
        <p className="text-[11px]">{name}</p>
    </div>
  )
}

export default Block