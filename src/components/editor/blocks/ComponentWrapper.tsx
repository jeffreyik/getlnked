import { AppContext } from '@/context/AppContext'
import { BlockInterface } from '@/interfaces/interfaces'
import React, { useContext } from 'react'
import { FiEdit2 } from 'react-icons/fi'

const ComponentWrapper = ({ children, id }: BlockInterface) => {
  const { selectedComponent, isPreviewMode, setToggleEditTab }: any = useContext(AppContext)

  return (
    <div className='relative' id={id} onClick={(e) => !isPreviewMode}>
      { !isPreviewMode && selectedComponent?.id === id && 
        <div className='bg-[#4654eb] pl-2 text-white w-fit h-[25px] text-[10px] absolute flex items-center gap-2 -top-6 left-0 z-90'>
          {selectedComponent?.component}
          <div onClick={() => setToggleEditTab(true)} className='cursor-pointer h-[25px] px-2 flex items-center justify-center text-[12px] hover:bg-[#455a73]'>
            <FiEdit2 />
          </div>
        </div>
      }
      <div id={id} className={`${!isPreviewMode && selectedComponent?.id === id && 'border-[1px] border-[#4654eb]'} w-full`}>
        { children }
      </div>
    </div>
  )
}

export default ComponentWrapper