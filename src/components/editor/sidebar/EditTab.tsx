import { AppContext } from '@/context/AppContext'
import { useContext, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'

const EditTab = ({ handleClick }: any) => {
  const { template, setTemplate, selectedComponent } : any = useContext(AppContext)

  const editInput = (e: any, item: any) => {
    selectedComponent[item] = e.target.value
    const newValue = selectedComponent[item]

    const newState = template?.map((component: any) => {
        if(component.id === selectedComponent.id) {
            return { ...component, [item]: newValue }
        } else {
            return component
        }
    })
    setTemplate(newState)
  }

  const deleteComponent = () => {
    const newState = template?.filter((component: any) => component.id !== selectedComponent.id)
    setTemplate(newState)
  }

  return (
    <div className='w-full'>
        <div className='flex items-center gap-4 py-4'>
            <BiArrowBack className='text-2xl cursor-pointer' onClick={handleClick} />
            <h1 className='text-1xl'>{'Edit ' + selectedComponent?.component}</h1>
        </div>

        <div>
            {  selectedComponent.editable.map((item: any) => (
                <div key={item}>
                    <h1>{item}</h1>
                    <input className='border-gray outline-none border-2 border-solid p-1 w-full my-4 rounded-md' placeholder='Write anything' type="text" value={selectedComponent[item]} name={item} onChange={(e: any) => editInput(e, item)} />
                    <div onClick={deleteComponent} className='bg-green rounded-md flex items-center justify-center w-[100px] p-2 cursor-pointer'>Delete</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default EditTab