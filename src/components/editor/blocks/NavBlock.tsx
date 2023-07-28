import { BlockInterface } from '@/interfaces/interfaces'
import React from 'react'

const NavBlock = ({ id, logo, navLinks }: BlockInterface) => {
  return (
    <nav id={id}>
        <div className='max-w-[80em] w-[90%] md:max-w-[80em] md:w-[80%] m-auto py-[20px] space-y-[12px] flex justify-between items-center'>
            <div className="logo text-[24px]">{ logo }</div>
            <div className="links items-center flex gap-12">
                { navLinks?.map(link => (
                    <a href="#" className='text-gray hover:text-black text-[15px]'>{ link }</a>
                )) }
            </div>
        </div>
    </nav>
  )
}

export default NavBlock