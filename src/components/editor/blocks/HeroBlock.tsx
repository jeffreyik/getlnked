import { BlockInterface } from '@/interfaces/interfaces'
import React from 'react'

const HeroBlock = ({ children, id }: BlockInterface) => {
  return (
    <div id={id} className='w-full'>
        <div className="max-w-[80em] w-[90%] md:max-w-[80em] md:w-[80%] m-auto py-[20px] space-y-[14px] grid grid-cols-2 items-center">
            { children }
        </div>
    </div>
  )
}

export default HeroBlock