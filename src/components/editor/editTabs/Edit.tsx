import { FiChevronDown } from "react-icons/fi"
import { useState } from 'react'

const Edit = ({ category, children }: any) => {
    const [toggleCategory, setToggleCategory] = useState(true)

  return (
    <div className="w-full pb-4">
        <div className='flex justify-between items-center'>
            <h2 className='text-[15px] font-bold'>{category}</h2>
            <FiChevronDown className={`cursor-pointer transition-all ${!toggleCategory && '-rotate-90'}`} onClick={() => setToggleCategory(prevToggleCategory => !prevToggleCategory)} />
        </div>

        <div className={`flex justify-between transition-all flex-wrap gap-2 ${toggleCategory ? 'h-fit' : 'h-0'} overflow-hidden`}>
            { children }
        </div>
    </div>
  )
}

export default Edit