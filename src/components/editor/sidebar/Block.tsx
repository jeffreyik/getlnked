import React from "react"

const Block = ({ name, children, handleClick }: any) => {
  return (
    <div onClick={handleClick} className="cursor-pointer flex flex-col gap-4 hover:bg-[#e1e1e1] bg-[#f2f2f2] text-[#2f2f2f] rounded-[5px] py-[13px] px-[17px] justify-center items-center text-center">
        <div className="text-2xl">
            { React.createElement(children) }
        </div>
        <p className="text-[15px]">{name}</p>
    </div>
  )
}

export default Block