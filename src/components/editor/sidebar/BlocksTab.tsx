import { useContext, useState, useEffect } from 'react'
import { AppContext } from "@/context/AppContext"
import { nanoid } from "nanoid"
import { components } from "@/componentConfig"
import Block from "./Block"
import { BiDownArrow } from 'react-icons/bi'
import { FiArrowDown, FiChevronDown, FiSearch } from 'react-icons/fi'
import BlockCategory from './BlockCategory'

const BlocksTab = () => {
    const [categories, setCategories] = useState(['Basics', 'Layout'])
      
    return ( 
        <div className='p-4'>
            <div className='pb-4'>
                <h1 className='text-[16px] font-bold pb-2'>Add Blocks</h1>
                <div className='flex gap-2 bg-[#f1f1f1] text-[#bababa] rounded-[7px] px-[10px] py-[12px]'>
                    <FiSearch />
                    <input className='text-[12px] w-full text-[#000000] bg-transparent outline-none placeholder:text-[#bababa]' type="text" placeholder='Search blocks' />
                </div>
            </div>
            
            <div className='space-y-4'>
                { categories?.map(category => (
                    <BlockCategory category={category} />
                )) }
            </div>
        </div>
     );
}
 
export default BlocksTab;