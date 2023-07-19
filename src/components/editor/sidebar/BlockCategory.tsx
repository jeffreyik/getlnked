import React from 'react'
import { useContext, useState } from 'react'
import { AppContext } from "@/context/AppContext"
import { nanoid } from "nanoid"
import { components } from "@/componentConfig"
import Block from "./Block"
import { FiChevronDown } from 'react-icons/fi'

const BlockCategory = ({ category }: any) => {
    const { template, setTemplate, selectedComponent, setSelectedComponent, setToggleEditTab }: any = useContext(AppContext)
    const [toggleCategory, setToggleCategory] = useState(true)

    const addComponent = (objects: any, parent: any, object: any) => {
        return objects?.map((item: any) => {
                if (item?.id === parent.id) {
                    return { ...item, children: [...item.children, object] }
                } else if (item.children && item.children.length > 0) {
                    return { ...item, children: addComponent(item.children, parent, object) }
                }
                return item
        })
    }

    const addComponentToState = (config: any) => {
        const newConfig = { ...config, id: nanoid() }
        if (selectedComponent && selectedComponent?.type === 'container') {
            const newComponent = addComponent( template, selectedComponent, newConfig )
            setTemplate(newComponent)
        } else {
            setTemplate((prevTemplate: any) => [...prevTemplate, newConfig])
        }
        setSelectedComponent(newConfig)
        setToggleEditTab(true)
    }

  return (
    <div className="w-full">
        <div className='flex justify-between items-center pb-4'>
            <h2 className='text-[15px] font-bold'>{category}</h2>
            <FiChevronDown className={`cursor-pointer transition-all ${!toggleCategory && '-rotate-90'}`} onClick={() => setToggleCategory(prevToggleCategory => !prevToggleCategory)} />
        </div>

       <div className={`flex justify-between transition-all flex-wrap gap-2 ${toggleCategory ? 'h-fit' : 'h-0'} overflow-hidden`}>
            { components.map((component: any) => component.category === category && (
                <Block handleClick={() => addComponentToState(component?.config)} key={component.name} name={component.name} component={component?.icon} /> 
            )) } 
        </div>
    </div>
  )
}

export default BlockCategory