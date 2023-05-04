interface Label {
    text: string
}

const DarkSmallbtn = ({ text }: Label) => {
  return (
    <button className="bg-black rounded-[10px] text-white text-[15px] py-2 px-4">
        { text }
    </button>
  )
}

export default DarkSmallbtn