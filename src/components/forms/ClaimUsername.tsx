interface Label {
    text: string
}

const ClaimUsername = ({ text }: Label) => {
  return (
    <form className="flex items-center space-x-4">
        <div className="px-[15px] text-[15px] flex items-center border-black border-[1px] rounded-[10px] w-[297px] h-[55px]">
            <p className="font-medium">getlnked/</p>
            <input className="text-[15px] outline-none" type="text" placeholder="Jeffrey" />
        </div>
        <button className="neo rounded-[10px] w-[167px] h-[55px]">{ text }</button>
    </form>
  )
}

export default ClaimUsername