import { AppContext } from '@/context/AppContext'
import { useContext, useState, useEffect, ChangeEvent } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import EditImage from '../editTabs/EditImage';
import Edit from '../editTabs/Edit';
import Width from '../editControllers/size/Width';
import { AppInterface, BlockInterface, selectedComponentInterface } from '@/interfaces/interfaces';

const EditTab = () => {
  const { template, setTemplate, selectedComponent, setCurrentTab, setToggleEditTab } = useContext(AppContext) as AppInterface
  const [width, setWidth] = useState(10)

  useEffect(() => {
    if (selectedComponent === undefined) {
      setToggleEditTab(false)
    }
  }, [selectedComponent])

  const editInput = (e: ChangeEvent<HTMLTextAreaElement>, item: string) => {
    selectedComponent['text'] = e.target.value
    const newValue = selectedComponent['text']

    const newState = template?.map((component: any) => {
        if(component?.id === selectedComponent?.id) {
            return { ...component, [item]: newValue }
        } else {
            return component
        }
    })
    setTemplate(newState)
  }

  const deleteComponent = (objects: {}[] | null, parent: selectedComponentInterface) => {
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

  const editWidth = (e: any) => {
    setWidth(e.target.value)
  }

  return (
    <div className='w-[305px] p-4 h-screen border-l-[#E9E9E9] border-l-[1px] bg-white fixed right-0'>
      <div className='flex items-center gap-4 pb-4'>
        <BiArrowBack className='text-2xl cursor-pointer' onClick={() => setToggleEditTab(false)} />
        <h1 className='text-[16px] font-bold'>{'Edit ' + selectedComponent?.component}</h1>
    </div>
      <Edit category="Size">
        <Width value={width} setValue={(e:any) => editWidth(e)} />
      </Edit>

      <Edit category="Content">
      <div>
        {  selectedComponent?.editable?.map((item: string) => {
          if (item !== 'children' && item !== 'url') {
            const value = selectedComponent['text']
            return (
              <div key={item}>
                  <h1>{item}</h1>
                  <TextareaAutosize aria-label="empty textarea" placeholder="" value={value} name={item} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => editInput(e, item)} className='w-full' />
              </div>
            )
          } 
        })}

        {selectedComponent?.type === 'image' && <EditImage />}
       </div>
      </Edit>
      <Edit category="Padding">
        <h1>edit text</h1>
      </Edit>
      <Edit category="Style">
        <h1>edit text</h1>
      </Edit>

      <div onClick={deleteComponentFromArray} className='bg-green rounded-md flex items-center justify-center w-[100px] p-2 cursor-pointer'>Delete</div>
  </div>
  )
}

export default EditTab