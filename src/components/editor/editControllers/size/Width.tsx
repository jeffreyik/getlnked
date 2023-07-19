interface Width { 
    value: number | undefined,
    setValue: (e: any) => void
}

const Width = ({ value, setValue }: Width ) => {

  return (
    <div className="max-w-[126px] flex items-center justify-between px-[10px] py-[12px] bg-[#f1f1f1] rounded-[7px]">
        <input onChange={setValue} className="text-[#bababa] bg-transparent outline-none w-1/2" value={value} type="number" />
        <h2 className="w-1/2">Width</h2>
    </div>
  )
}

export default Width