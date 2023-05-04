interface Label {
    text: string
}

const LightSmallbtn = ({ text }: Label) => {
  return (
    <button className="neo bg-white rounded-[10px] text-black text-[15px] py-2 px-4 shadow-black">
        { text }
    </button>
  )
}

export default LightSmallbtn