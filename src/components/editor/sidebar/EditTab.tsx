import { AppContext } from '@/context/AppContext'
import { useContext, useState, useEffect } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import EditImage from '../editTabs/EditImage';

const EditTab = () => {
  const { template, setTemplate, selectedComponent, setCurrentTab, setToggleEditTab } : any = useContext(AppContext)
  const [categories, setCategories] = useState(['Size', 'Content', 'Padding', 'Style'])

  const mapped: any = {
    "image": <EditImage />
  }

  useEffect(() => {
    if (selectedComponent === undefined) {
      setToggleEditTab(false)
    }
  }, [selectedComponent])

  const editInput = (e: any, item: any) => {
    selectedComponent[item] = e.target.value
    const newValue = selectedComponent[item]

    const newState = template?.map((component: any) => {
        if(component?.id === selectedComponent?.id) {
            return { ...component, [item]: newValue }
        } else {
            return component
        }
    })
    setTemplate(newState)
  }

  const deleteComponent = (objects: any, parent: any) => {
    return objects?.filter((item: any) => {
      if (item?.id === parent.id) {
        return false
      }
      else if (item.children && item.children.length > 0) {
        item.children = deleteComponent(item.children, parent)
    }
    return true
    })

  }

  const deleteComponentFromArray = () => {
    const newState = deleteComponent(template, selectedComponent)
    setTemplate(newState)
    setCurrentTab('layer')
  }

  return (
    <div className='w-[305px] p-4 h-screen border-l-[#E9E9E9] border-l-[1px] bg-white fixed right-0'>
        <div className='flex items-center gap-4 pb-4'>
            <BiArrowBack className='text-2xl cursor-pointer' onClick={() => setToggleEditTab(false)} />
            <h1 className='text-[16px] font-bold'>{'Edit ' + selectedComponent?.component}</h1>
        </div>

        <div>
            {  selectedComponent?.editable?.map((item: any) => {
              if (item !== 'children' && item !== 'url') {
                return (
                  <div key={item}>
                      <h1>{item}</h1>
                      <TextareaAutosize aria-label="empty textarea" placeholder="" value={selectedComponent[item]} name={item} onChange={(e: any) => editInput(e, item)} className='w-full' />
                  </div>
                )
              }
            })}
        </div>

        { mapped[selectedComponent?.type] }
        <div onClick={deleteComponentFromArray} className='bg-green rounded-md flex items-center justify-center w-[100px] p-2 cursor-pointer'>Delete</div>
    </div>
  )
}

export default EditTab